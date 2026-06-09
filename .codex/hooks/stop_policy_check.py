#!/usr/bin/env python3
from __future__ import annotations

from hook_lib import (
    allow_output,
    block_stop,
    compact_findings,
    combined_diff,
    dedupe_findings,
    emit,
    has_blocking,
    message_for_stop_findings,
    read_stdin_json,
    scan_changed_files_full,
    scan_diff,
)


def main() -> int:
    payload = read_stdin_json()
    if payload.get("stop_hook_active"):
        return emit(
            allow_output(
                "Stop",
                system_message="Stop hookは再入中のため、無限ループ防止のため追加ブロックしません。",
            )
        )

    diff = combined_diff()
    findings = dedupe_findings([*scan_diff(diff), *scan_changed_files_full()])

    if has_blocking(findings):
        return emit(block_stop(message_for_stop_findings(findings)))

    if findings:
        return emit(
            allow_output(
                "Stop",
                system_message=(
                    "Stop hook warning: 完了前に確認が必要な文言・整合項目です。\n"
                    f"{compact_findings(findings)}"
                ),
            )
        )
    return emit(allow_output("Stop"))


if __name__ == "__main__":
    raise SystemExit(main())
