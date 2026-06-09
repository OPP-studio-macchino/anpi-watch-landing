#!/usr/bin/env python3
from __future__ import annotations

import argparse
import sys

from hook_lib import (
    changed_files,
    combined_diff,
    compact_findings,
    dedupe_findings,
    emit,
    has_blocking,
    project_context_message,
    scan_changed_files_full,
    scan_command_text,
    scan_diff,
    scan_marketing_text,
)


def main() -> int:
    parser = argparse.ArgumentParser(description="Run anpitch project policy checks.")
    parser.add_argument("--diff", action="store_true", help="Scan current git diff.")
    parser.add_argument("--context", action="store_true", help="Print SessionStart context.")
    parser.add_argument("--command", help="Scan a shell command string.")
    parser.add_argument("--json", action="store_true", help="Print JSON result.")
    parser.add_argument("files", nargs="*", help="Files to scan.")
    args = parser.parse_args()

    if args.context:
        sys.stdout.write(project_context_message() + "\n")
        return 0

    findings = []
    if args.command:
        findings.extend(scan_command_text(args.command))
    if args.diff:
        findings.extend(scan_diff(combined_diff()))
        findings.extend(scan_changed_files_full())
    for path in args.files:
        try:
            with open(path, "r", encoding="utf-8") as f:
                findings.extend(scan_marketing_text(f.read(), path))
        except UnicodeDecodeError:
            continue
        except FileNotFoundError:
            findings.extend(scan_marketing_text(path, "argument"))

    findings = dedupe_findings(findings)
    if args.json:
        return emit(
            {
                "ok": not has_blocking(findings),
                "changed_files": changed_files() if args.diff else [],
                "findings": [item.__dict__ for item in findings],
            }
        )

    if findings:
        sys.stdout.write(compact_findings(findings, limit=80) + "\n")
    return 2 if has_blocking(findings) else 0


if __name__ == "__main__":
    raise SystemExit(main())
