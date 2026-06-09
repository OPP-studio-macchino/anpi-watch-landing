#!/usr/bin/env python3
from __future__ import annotations

from hook_lib import allow_output, emit, project_context_message, read_stdin_json


def main() -> int:
    read_stdin_json()
    return emit(
        allow_output(
            "SessionStart",
            additional_context=project_context_message(),
            system_message="anpi-watch-landing の料金・免責・通知・同意ルールを読み込みました。",
        )
    )


if __name__ == "__main__":
    raise SystemExit(main())
