#!/usr/bin/env python3
from __future__ import annotations

from hook_lib import (
    allow_output,
    block_user_prompt,
    compact_findings,
    emit,
    has_blocking,
    prompt_generation_findings,
    read_stdin_json,
    scan_command_text,
    scan_marketing_text,
)


def main() -> int:
    payload = read_stdin_json()
    prompt = str(payload.get("prompt") or payload.get("_raw") or "")
    findings = []
    findings.extend(scan_marketing_text(prompt, "prompt"))
    findings.extend(scan_command_text(prompt, "prompt"))
    findings.extend(prompt_generation_findings(prompt))

    if has_blocking(findings):
        return emit(
            block_user_prompt(
                "この依頼は、料金・免責・救命保証・自動通報・秘密情報・本番操作の安全ルールに触れています。\n"
                "確定文言や根拠資料を示すか、危険な指示を取り除いてください。\n\n"
                f"{compact_findings(findings)}"
            )
        )

    if findings:
        return emit(
            allow_output(
                "UserPromptSubmit",
                additional_context=(
                    "UserPromptSubmit hook warning:\n"
                    "次の点は作業中に要確認です。勝手に文言を作らず、資料と照合してください。\n"
                    f"{compact_findings(findings)}"
                ),
                system_message="料金・免責・文言・外部操作に関する要確認事項があります。",
            )
        )
    return emit(allow_output("UserPromptSubmit"))


if __name__ == "__main__":
    raise SystemExit(main())
