# Apply LP v4.1 copy hotfix

From the repository root:

```bash
PACKAGE="$HOME/Downloads/あんぴッチ_LP_v4_1_copy_hotfix.zip"
TMP="$(mktemp -d)"
unzip -q "$PACKAGE" -d "$TMP"
rsync -ani --itemize-changes "$TMP/" ./
```

After checking the dry run:

```bash
rsync -a "$TMP/" ./
node --test tests/lp-v4-content.test.mjs
npm run build
```
