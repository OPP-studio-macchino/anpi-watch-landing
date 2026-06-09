#!/usr/bin/env python3
from __future__ import annotations

import json

from hook_lib import (
    Finding,
    allow_output,
    deny_permission,
    emit,
    has_blocking,
    message_for_tool_findings,
    message_for_warning_findings,
    read_stdin_json,
    scan_tool_payload,
)


def main() -> int:
    payload = read_stdin_json()
    findings = scan_tool_payload(payload)
    raw = json.dumps(payload, ensure_ascii=False)

    if "require_escalated" in raw or "bypassPermissions" in raw or "danger-full-access" in raw:
        findings.append(
            Finding(
                "block",
                "permission_escalation_requires_human",
                "権限昇格やsandbox回避の承認は、このプロジェクトではHookで許可しません。必要な場合はユーザーが手動で判断・実行してください。",
                "permission_request",
            )
        )

    if has_blocking(findings):
        return emit(deny_permission(message_for_tool_findings(findings)))

    if findings:
        return emit(
            allow_output(
                "PermissionRequest",
                system_message=(
                    "PermissionRequest hook warning:\n"
                    "承認前に、本番deploy、外部送信、課金、秘密情報、LP文言変更ではないことを確認してください。\n"
                    + message_for_warning_findings(findings)
                ),
            )
        )
    return emit(allow_output("PermissionRequest"))


if __name__ == "__main__":
    raise SystemExit(main())
