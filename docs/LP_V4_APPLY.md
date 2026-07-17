# LP v4 適用手順

## 対象

`anpi-watch-landing` のリポジトリルートへ、成果物ZIPの内容を上書きする。

## 安全な適用

```bash
set -e

REPO="/path/to/anpi-watch-landing"
PACKAGE="$HOME/Downloads/あんぴッチ_LP_v4_patch.zip"
STAMP="$(date +%Y%m%d_%H%M%S)"
TMP="$(mktemp -d)"
BACKUP="$HOME/Desktop/anpi-watch-landing-before-lp-v4-$STAMP"

mkdir -p "$BACKUP"
cd "$REPO"

git status --short --branch | tee "$BACKUP/git-status-before.txt"
git diff > "$BACKUP/working-tree-before.patch"
git diff --cached > "$BACKUP/staged-before.patch"

ditto -c -k --sequesterRsrc --keepParent app "$BACKUP/app-before.zip"
ditto -c -k --sequesterRsrc --keepParent components "$BACKUP/components-before.zip"
[ -d public ] && ditto -c -k --sequesterRsrc --keepParent public "$BACKUP/public-before.zip"

unzip -q "$PACKAGE" -d "$TMP"

rsync -ani --itemize-changes \
  --exclude='.DS_Store' \
  --exclude='node_modules/' \
  --exclude='.next/' \
  "$TMP/" "$REPO/"

read -r -p "上記を適用しますか？ [y/N]: " ANSWER
[ "$ANSWER" = "y" ] || [ "$ANSWER" = "Y" ] || exit 0

rsync -a \
  --exclude='.DS_Store' \
  --exclude='node_modules/' \
  --exclude='.next/' \
  "$TMP/" "$REPO/"

node --test tests/lp-v4-*.test.mjs
node scripts/verify-lp-v4.mjs
npm run lint
npm run build

git diff --check
git status --short --branch
```

## 注意

- 本成果物はproduction deployを実行しない。
- `public/assets/app-store-badge-ja-jp-black.svg` は既存リポジトリのものを継続利用する。
- `lib/seo`等、今回提供されていない既存ファイルは削除しない。
- Build成功後、ステージングURLでOGP、モバイル固定CTA、各内部リンクを確認してから本番へ反映する。
