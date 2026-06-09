#!/usr/bin/env python3
from __future__ import annotations

import fnmatch
import json
import os
import re
import subprocess
import sys
from dataclasses import dataclass
from pathlib import Path
from typing import Any, Iterable


ROOT_CACHE: Path | None = None
RULES_CACHE: dict[str, Any] | None = None


@dataclass
class Finding:
    severity: str
    rule_id: str
    message: str
    path: str = ""
    line: int | None = None
    excerpt: str = ""

    def render(self) -> str:
        where = self.path
        if self.line is not None:
            where = f"{where}:{self.line}" if where else f"line {self.line}"
        if where:
            return f"[{self.severity}] {where} {self.rule_id}: {self.message} {self.excerpt}".strip()
        return f"[{self.severity}] {self.rule_id}: {self.message} {self.excerpt}".strip()


def repo_root() -> Path:
    global ROOT_CACHE
    if ROOT_CACHE is not None:
        return ROOT_CACHE
    env_root = os.environ.get("CODEX_REPO_ROOT")
    if env_root:
        ROOT_CACHE = Path(env_root).resolve()
        return ROOT_CACHE
    try:
        result = subprocess.run(
            ["git", "rev-parse", "--show-toplevel"],
            cwd=Path.cwd(),
            text=True,
            stdout=subprocess.PIPE,
            stderr=subprocess.DEVNULL,
            check=True,
        )
        ROOT_CACHE = Path(result.stdout.strip()).resolve()
        return ROOT_CACHE
    except Exception:
        current = Path.cwd().resolve()
        for parent in [current, *current.parents]:
            if (parent / ".codex" / "project_rules.json").is_file():
                ROOT_CACHE = parent
                return ROOT_CACHE
        ROOT_CACHE = current
        return ROOT_CACHE


def load_rules() -> dict[str, Any]:
    global RULES_CACHE
    if RULES_CACHE is not None:
        return RULES_CACHE
    path = repo_root() / ".codex" / "project_rules.json"
    with path.open("r", encoding="utf-8") as f:
        RULES_CACHE = json.load(f)
    return RULES_CACHE


def read_stdin_json() -> dict[str, Any]:
    raw = sys.stdin.read()
    if not raw.strip():
        return {}
    try:
        value = json.loads(raw)
    except json.JSONDecodeError:
        return {"_raw": raw}
    return value if isinstance(value, dict) else {"_value": value}


def emit(obj: dict[str, Any]) -> int:
    sys.stdout.write(json.dumps(obj, ensure_ascii=False, separators=(",", ":")))
    sys.stdout.write("\n")
    return 0


def allow_output(
    event_name: str | None = None,
    additional_context: str | None = None,
    system_message: str | None = None,
) -> dict[str, Any]:
    out: dict[str, Any] = {"continue": True}
    if system_message:
        out["systemMessage"] = system_message
    if event_name in {"SessionStart", "UserPromptSubmit", "PostToolUse"} and additional_context:
        out["hookSpecificOutput"] = {
            "hookEventName": event_name,
            "additionalContext": additional_context,
        }
    return out


def block_user_prompt(reason: str) -> dict[str, Any]:
    return {"continue": True, "decision": "block", "reason": reason}


def deny_pre_tool(reason: str) -> dict[str, Any]:
    return {
        "continue": True,
        "hookSpecificOutput": {
            "hookEventName": "PreToolUse",
            "permissionDecision": "deny",
            "permissionDecisionReason": reason,
        },
    }


def deny_permission(reason: str) -> dict[str, Any]:
    return {
        "continue": True,
        "hookSpecificOutput": {
            "hookEventName": "PermissionRequest",
            "decision": {"behavior": "deny", "message": reason},
        },
    }


def block_stop(reason: str) -> dict[str, Any]:
    return {"continue": True, "decision": "block", "reason": reason}


def compact_findings(findings: Iterable[Finding], limit: int = 8) -> str:
    items = list(findings)
    rendered = [item.render() for item in items[:limit]]
    if len(items) > limit:
        rendered.append(f"...ほか {len(items) - limit} 件")
    return "\n".join(rendered)


def fullwidth_to_ascii(value: str) -> str:
    table = str.maketrans("０１２３４５６７８９，", "0123456789,")
    return value.translate(table)


def safe_excerpt(text: str, max_len: int = 160) -> str:
    one_line = re.sub(r"\s+", " ", text).strip()
    if len(one_line) > max_len:
        return one_line[: max_len - 1] + "..."
    return one_line


def is_audit_or_negative_context(text: str, rules: dict[str, Any] | None = None) -> bool:
    rules = rules or load_rules()
    words = rules["copy_patterns"]["negative_or_audit_context_words"]
    return any(word in text for word in words)


def compile_regex(pattern: str, flags: int = re.IGNORECASE) -> re.Pattern[str]:
    return re.compile(pattern, flags)


def path_matches(path: str, patterns: Iterable[str]) -> bool:
    normalized = path.replace("\\", "/").lstrip("./")
    for pattern in patterns:
        normalized_pattern = pattern.replace("\\", "/").lstrip("./")
        if fnmatch.fnmatch(normalized, normalized_pattern):
            return True
        if normalized_pattern.endswith("/**") and normalized.startswith(normalized_pattern[:-3]):
            return True
    return False


def should_ignore_path(path: str, rules: dict[str, Any] | None = None) -> bool:
    rules = rules or load_rules()
    return path_matches(path, rules["protected_paths"]["ignore_for_policy_scan"])


def is_secret_path(path: str, rules: dict[str, Any] | None = None) -> bool:
    rules = rules or load_rules()
    return path_matches(path, rules["protected_paths"]["secret_or_auth_paths_block"])


def is_marketing_copy_path(path: str, rules: dict[str, Any] | None = None) -> bool:
    rules = rules or load_rules()
    return path_matches(path, rules["protected_paths"]["marketing_copy_paths"])


def is_critical_copy_path(path: str, rules: dict[str, Any] | None = None) -> bool:
    rules = rules or load_rules()
    return path_matches(path, rules["protected_paths"]["critical_copy_paths"])


def scan_secrets(text: str, path: str = "") -> list[Finding]:
    rules = load_rules()
    findings: list[Finding] = []
    for index, line in enumerate(text.splitlines(), start=1):
        if not line.strip():
            continue
        for item in rules["secret_patterns"]:
            if compile_regex(item["pattern"]).search(line):
                findings.append(
                    Finding(
                        "block",
                        item["id"],
                        item["message"] + " 値を出力・保存せず、該当箇所を伏せてください。",
                        path,
                        index,
                        safe_excerpt(mask_possible_secret(line)),
                    )
                )
    return dedupe_findings(findings)


def mask_possible_secret(line: str) -> str:
    masked = re.sub(r"([A-Za-z0-9_./+=-]{6})[A-Za-z0-9_./+=-]{8,}([A-Za-z0-9_./+=-]{4})", r"\1…\2", line)
    return masked


def scan_command_text(command: str, context: str = "command") -> list[Finding]:
    rules = load_rules()
    findings: list[Finding] = []
    for item in rules["dangerous_commands"]["block"]:
        if compile_regex(item["pattern"]).search(command):
            if context == "prompt" and is_audit_or_negative_context(command, rules):
                continue
            findings.append(Finding("block", item["id"], item["message"], context, None, safe_excerpt(command)))
    for item in rules["dangerous_commands"].get("warn", []):
        if compile_regex(item["pattern"]).search(command):
            if context == "prompt" and is_audit_or_negative_context(command, rules):
                continue
            findings.append(Finding("warn", item["id"], item["message"], context, None, safe_excerpt(command)))
    return dedupe_findings(findings)


def scan_marketing_text(text: str, path: str = "") -> list[Finding]:
    rules = load_rules()
    findings: list[Finding] = []
    findings.extend(scan_secrets(text, path))
    allowed_price = int(rules["copy_patterns"]["allowed_price_yen"])
    price_context = tuple(rules["copy_patterns"]["price_context_words"])

    lines = text.splitlines()
    for index, line in enumerate(lines, start=1):
        stripped = line.strip()
        if not stripped:
            continue
        context = "\n".join(lines[max(0, index - 30) : min(len(lines), index + 2)])
        negative = is_audit_or_negative_context(context, rules)

        for item in rules["copy_patterns"]["block_phrases"]:
            for phrase in item["patterns"]:
                if phrase in stripped and not negative:
                    findings.append(
                        Finding("block", item["id"], item["message"], path, index, safe_excerpt(stripped))
                    )

        for pattern in rules["copy_patterns"]["billing_block_patterns"]:
            if re.search(pattern, stripped, flags=re.IGNORECASE) and not negative:
                findings.append(
                    Finding(
                        "block",
                        "additional_or_usage_billing",
                        "通知ごとの追加請求・従量課金に見える表現です。月額300円・追加請求なしの決定と照合してください。",
                        path,
                        index,
                        safe_excerpt(stripped),
                    )
                )

        if any(word in stripped for word in price_context):
            for amount in yen_amounts(stripped):
                if amount != allowed_price and not negative:
                    findings.append(
                        Finding(
                            "block",
                            "price_mismatch",
                            f"月額料金が{allowed_price}円以外に見えます。最新資料では月額{allowed_price}円です。",
                            path,
                            index,
                            safe_excerpt(stripped),
                        )
                    )

        for pattern in rules["copy_patterns"]["free_or_campaign_warning_patterns"]:
            if pattern in stripped:
                if "追加料金なし" in stripped or "追加請求なし" in stripped or negative:
                    continue
                findings.append(
                    Finding(
                        "warn",
                        "free_or_campaign_claim",
                        "無料・割引・キャンペーン系の表現は根拠資料が必要です。",
                        path,
                        index,
                        safe_excerpt(stripped),
                    )
                )
    return dedupe_findings(findings)


def yen_amounts(text: str) -> list[int]:
    amounts: list[int] = []
    normalized = fullwidth_to_ascii(text)
    patterns = [
        r"(?:月額|毎月|料金|価格|サブスクリプション|税込|円/月)[^0-9]{0,12}([0-9][0-9,]*)\s*円",
        r"([0-9][0-9,]*)\s*円\s*(?:/月|月額|毎月)",
        r"[¥￥]\s*([0-9][0-9,]*)\s*(?:/月|月額|毎月)?",
    ]
    for pattern in patterns:
        for match in re.finditer(pattern, normalized):
            try:
                amounts.append(int(match.group(1).replace(",", "")))
            except ValueError:
                continue
    return amounts


def prompt_generation_findings(prompt: str) -> list[Finding]:
    rules = load_rules()
    allowed_markers = rules["prompt_guard"]["allowed_when_prompt_mentions"]
    if any(marker in prompt for marker in allowed_markers):
        return []
    findings: list[Finding] = []
    for pattern in rules["prompt_guard"]["block_generation_patterns"]:
        if re.search(pattern, prompt, flags=re.IGNORECASE | re.DOTALL):
            findings.append(
                Finding(
                    "block",
                    "codex_must_not_generate_critical_copy",
                    "LPコピー、料金、FAQ、SEO/OGP、利用規約、免責、法務文言は、確定文言を受け取って反映するだけにしてください。",
                    "prompt",
                    None,
                    safe_excerpt(prompt),
                )
            )
    return findings


def extract_tool_input(payload: dict[str, Any]) -> dict[str, Any]:
    value = (
        payload.get("tool_input")
        or payload.get("toolInput")
        or payload.get("tool_args")
        or payload.get("toolArgs")
        or {}
    )
    return value if isinstance(value, dict) else {"value": value}


def extract_tool_name(payload: dict[str, Any]) -> str:
    value = payload.get("tool_name") or payload.get("toolName") or payload.get("name") or ""
    return str(value)


def extract_command_from_tool(payload: dict[str, Any]) -> str:
    tool_input = extract_tool_input(payload)
    for key in ("command", "cmd", "script"):
        value = tool_input.get(key)
        if isinstance(value, str):
            return value
    if "args" in tool_input and isinstance(tool_input["args"], list):
        return " ".join(str(item) for item in tool_input["args"])
    return ""


def extract_paths_from_tool(payload: dict[str, Any]) -> list[str]:
    tool_input = extract_tool_input(payload)
    paths: list[str] = []
    for key in ("file_path", "filePath", "path", "filename"):
        value = tool_input.get(key)
        if isinstance(value, str):
            paths.append(value)
    for key in ("files", "paths"):
        value = tool_input.get(key)
        if isinstance(value, list):
            paths.extend(str(item) for item in value)
    patch_text = extract_patch_text(payload)
    if patch_text:
        paths.extend(extract_paths_from_patch(patch_text))
    return sorted(set(normalize_repo_path(path) for path in paths if path))


def extract_patch_text(payload: dict[str, Any]) -> str:
    tool_input = extract_tool_input(payload)
    for key in ("patch", "input", "content", "diff", "value"):
        value = tool_input.get(key)
        if isinstance(value, str) and ("*** Begin Patch" in value or "\ndiff --git " in value):
            return value
    raw = json.dumps(tool_input, ensure_ascii=False)
    if "*** Begin Patch" in raw or "\ndiff --git " in raw:
        return raw
    return ""


def normalize_repo_path(path: str) -> str:
    path = path.replace("\\", "/")
    root = repo_root().as_posix()
    if path.startswith(root):
        path = path[len(root) :].lstrip("/")
    return path.lstrip("./")


def extract_paths_from_patch(patch_text: str) -> list[str]:
    paths: list[str] = []
    for line in patch_text.splitlines():
        for prefix in ("*** Add File: ", "*** Update File: ", "*** Delete File: ", "*** Move to: "):
            if line.startswith(prefix):
                paths.append(line[len(prefix) :].strip())
        if line.startswith("diff --git "):
            parts = line.split()
            if len(parts) >= 4:
                paths.append(parts[3].removeprefix("b/"))
    return paths


def added_lines_from_patch(patch_text: str) -> str:
    lines: list[str] = []
    for line in patch_text.splitlines():
        if line.startswith("+++") or line.startswith("***"):
            continue
        if line.startswith("+"):
            lines.append(line[1:])
    return "\n".join(lines)


def scan_tool_payload(payload: dict[str, Any]) -> list[Finding]:
    rules = load_rules()
    findings: list[Finding] = []
    tool_name = extract_tool_name(payload)
    tool_input = extract_tool_input(payload)
    command = extract_command_from_tool(payload)
    if command:
        findings.extend(scan_command_text(command, "command"))

    paths = extract_paths_from_tool(payload)
    for path in paths:
        if is_secret_path(path, rules):
            findings.append(
                Finding(
                    "block",
                    "secret_path_write_or_read",
                    ".env、秘密鍵、Vercelメタデータなどの読み書きはしません。",
                    path,
                )
            )

    patch_text = extract_patch_text(payload)
    scan_target = added_lines_from_patch(patch_text) if patch_text else json.dumps(tool_input, ensure_ascii=False)
    if scan_target:
        skip_copy_scan = bool(paths) and all(should_ignore_path(path, rules) for path in paths)
        if skip_copy_scan:
            findings.extend(scan_secrets(scan_target, "tool_input"))
        else:
            findings.extend(scan_marketing_text(scan_target, "tool_input"))

    if patch_text and paths:
        added = added_lines_from_patch(patch_text)
        if added:
            for path in paths:
                if should_ignore_path(path, rules):
                    continue
                if is_critical_copy_path(path, rules) and critical_copy_keywords_present(added, rules):
                    risky = [
                        item
                        for item in scan_marketing_text(added, path)
                        if item.severity == "block"
                    ]
                    findings.extend(risky)
                    if not risky:
                        findings.append(
                            Finding(
                                "warn",
                                "critical_copy_changed",
                                "LP/料金/FAQ/meta/法務/免責に関わる文言変更です。確定文言または根拠資料との照合が必要です。",
                                path,
                                None,
                                safe_excerpt(added),
                            )
                        )
    return dedupe_findings(findings)


def critical_copy_keywords_present(text: str, rules: dict[str, Any] | None = None) -> bool:
    rules = rules or load_rules()
    return any(word in text for word in rules["copy_patterns"]["critical_copy_keywords"])


def dedupe_findings(findings: Iterable[Finding]) -> list[Finding]:
    seen: set[tuple[str, str, str, str, int | None]] = set()
    result: list[Finding] = []
    for item in findings:
        key = (item.severity, item.rule_id, item.message, item.path, item.line)
        if key in seen:
            continue
        seen.add(key)
        result.append(item)
    return result


def has_blocking(findings: Iterable[Finding]) -> bool:
    return any(item.severity == "block" for item in findings)


def git_output(args: list[str]) -> str:
    try:
        result = subprocess.run(
            ["git", *args],
            cwd=repo_root(),
            text=True,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            check=False,
        )
        return result.stdout if result.returncode in (0, 1) else ""
    except Exception:
        return ""


def changed_files() -> list[str]:
    files: set[str] = set()
    for args in (["diff", "--name-only"], ["diff", "--cached", "--name-only"]):
        for line in git_output(args).splitlines():
            line = line.strip()
            if line:
                files.add(normalize_repo_path(line))
    return sorted(files)


def combined_diff() -> str:
    return "\n".join(
        [
            git_output(["diff", "--no-ext-diff", "--unified=0"]),
            git_output(["diff", "--cached", "--no-ext-diff", "--unified=0"]),
        ]
    )


def scan_diff(diff_text: str) -> list[Finding]:
    rules = load_rules()
    findings: list[Finding] = []
    current_path = ""
    added_for_path: dict[str, list[str]] = {}
    for line in diff_text.splitlines():
        if line.startswith("+++ b/"):
            current_path = normalize_repo_path(line[6:])
            continue
        if line.startswith("diff --git "):
            parts = line.split()
            current_path = normalize_repo_path(parts[3].removeprefix("b/")) if len(parts) >= 4 else ""
            continue
        if not current_path or should_ignore_path(current_path, rules):
            continue
        if line.startswith("+") and not line.startswith("+++"):
            added_for_path.setdefault(current_path, []).append(line[1:])

    for path, lines in added_for_path.items():
        text = "\n".join(lines)
        findings.extend(scan_marketing_text(text, path))
        if is_critical_copy_path(path, rules) and critical_copy_keywords_present(text, rules):
            if not any(item.severity == "block" for item in scan_marketing_text(text, path)):
                findings.append(
                    Finding(
                        "warn",
                        "critical_copy_changed",
                        "重要文言の差分があります。確定文言・根拠資料・他プロジェクト整合を確認してください。",
                        path,
                        None,
                        safe_excerpt(text),
                    )
                )
    return dedupe_findings(findings)


def scan_changed_files_full() -> list[Finding]:
    rules = load_rules()
    findings: list[Finding] = []
    for path in changed_files():
        if should_ignore_path(path, rules):
            continue
        if is_secret_path(path, rules):
            findings.append(Finding("block", "secret_path_changed", "秘密情報系ファイルの変更は禁止です。", path))
            continue
        abs_path = repo_root() / path
        if not abs_path.is_file():
            continue
        if is_marketing_copy_path(path, rules):
            try:
                text = abs_path.read_text(encoding="utf-8")
            except UnicodeDecodeError:
                continue
            findings.extend(scan_marketing_text(text, path))
    return dedupe_findings(findings)


def project_context_message() -> str:
    rules = load_rules()
    common = "\n".join(f"- {item['rule']}" for item in rules["confirmed_common_rules"])
    landing = "\n".join(f"- {item['rule']}" for item in rules["landing_specific_rules"])
    conflicts = [
        item
        for item in rules["cross_project_consistency"]
        if item.get("status") in {"confirmed_with_conflict", "cross_project_check_required", "other_projects_check_required", "partial_confirmation"}
    ]
    conflict_text = "\n".join(
        f"- {item['item']}: {item.get('note') or item.get('conflict') or '他プロジェクトとの整合確認が必要'}"
        for item in conflicts
    )
    return (
        "anpitch / anpi-watch-landing project hook context:\n"
        "Codexは実装担当です。LPコピー、料金、FAQ、SEO/OGP、利用規約、免責、法務文言は、確定文言を反映するだけにしてください。\n\n"
        "確認済み共通ルール:\n"
        f"{common}\n\n"
        "landing固有ルール:\n"
        f"{landing}\n\n"
        "要整合・要確認:\n"
        f"{conflict_text}"
    )


def message_for_tool_findings(findings: list[Finding]) -> str:
    return (
        "anpi-watch-landing のHookが操作を止めました。\n"
        "次を修正するか、根拠資料・確定文言を確認してから再実行してください。\n\n"
        f"{compact_findings(findings)}"
    )


def message_for_warning_findings(findings: list[Finding]) -> str:
    return (
        "anpi-watch-landing のHook warningです。\n"
        "次はブロック対象ではありませんが、根拠資料・確定文言・他プロジェクト整合を確認してください。\n\n"
        f"{compact_findings(findings)}"
    )


def message_for_stop_findings(findings: list[Finding]) -> str:
    return (
        "Stop hook: 作業終了前のポリシーチェックで問題を検出しました。\n"
        "禁止文言、料金矛盾、秘密情報、または危険な文言変更を直してから完了してください。\n\n"
        f"{compact_findings(findings)}"
    )
