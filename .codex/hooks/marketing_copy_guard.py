#!/usr/bin/env python3
from __future__ import annotations

import argparse
import sys

from hook_lib import compact_findings, emit, has_blocking, scan_marketing_text


def main() -> int:
    parser = argparse.ArgumentParser(description="Scan anpitch landing copy for policy risks.")
    parser.add_argument("files", nargs="*", help="Files to scan. Reads stdin when omitted.")
    parser.add_argument("--json", action="store_true", help="Print JSON instead of text.")
    args = parser.parse_args()

    findings = []
    if args.files:
        for path in args.files:
            try:
                with open(path, "r", encoding="utf-8") as f:
                    findings.extend(scan_marketing_text(f.read(), path))
            except UnicodeDecodeError:
                continue
    else:
        findings.extend(scan_marketing_text(sys.stdin.read(), "stdin"))

    if args.json:
        return emit({"ok": not has_blocking(findings), "findings": [item.__dict__ for item in findings]})

    if findings:
        sys.stdout.write(compact_findings(findings, limit=50) + "\n")
    return 2 if has_blocking(findings) else 0


if __name__ == "__main__":
    raise SystemExit(main())
