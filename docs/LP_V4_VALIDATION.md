# LP v4 検証記録

## この環境で実行する検証

```bash
node --test tests/lp-v4-*.test.mjs
node scripts/verify-lp-v4.mjs
```

確認対象:

- トップページの価値提案と安全表現
- 実画面アセットの参照
- 禁止表現の不在
- ヘッダーナビゲーション
- canonical / OGP / Twitter / JSON-LD
- 画像ファイルの存在と公開用の架空データ化
- TypeScript / TSXの構文解析

## リポジトリ適用後に実行する検証

実際のパッケージマネージャーに合わせて以下を実行する。

```bash
npm run lint
npm run test
npm run build
```

または `pnpm` / `yarn` を使用している場合は同等コマンドを使う。

## 手動確認

- 390px、768px、1440pxの各幅でトップページを確認。
- iPhone Safariでモバイル固定CTAが本文を過剰に隠さないこと。
- キーボード操作でヘッダー、FAQ、全CTAへ到達できること。
- VoiceOverで見出し構造とリンク名が理解できること。
- Reduced Motionで主要情報が失われないこと。
- OGP画像がX、LINE、Facebook等で正しく表示されること。
