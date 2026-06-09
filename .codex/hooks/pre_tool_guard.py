#!/usr/bin/env python3
from __future__ import annotations

from hook_lib import (
    allow_output,
    deny_pre_tool,
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

    if has_blocking(findings):
        return emit(deny_pre_tool(message_for_tool_findings(findings)))

    if findings:
        return emit(
            allow_output(
                "PreToolUse",
                system_message=message_for_warning_findings(findings),
            )
        )
    return emit(allow_output("PreToolUse"))


if __name__ == "__main__":
    raise SystemExit(main())
