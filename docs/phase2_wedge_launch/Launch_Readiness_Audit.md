# Phase 2 Wedge Launch Readiness Audit

## 結論

判定: Conditional Ready

Phase 2: Wedge Launch の開始前レビューに渡せる状態です。公開LP、料金、FAQ、Manual、Tutorial 周辺では、月額300円、2名同意、URL同意、救命・発見・所在確認を保証しないことが主要導線で説明されています。

ただし、実際の Launch Go は、最新の build 通過、Legal / CX / Product レビュー完了、App Store提出文言との整合確認が条件です。Apple Ads / Google Search の配信開始、App Store Connectの商品作成、本番課金開始は、この監査の対象外です。

## 確認対象ルート

- `/`
- `/pricing`
- `/before-you-start`
- `/how-it-works`
- `/notification-samples`
- `/for-family`
- `/for-contacts`
- `/share-message`
- `/trust`
- `/delivery-status`
- `/manual`
- `/manual/faq`
- `/manual/tutorial`

## 判定ラベル

- OK: 現ページ内で確認できる。
- Linked: 関連リンクや理解導線で確認できる。
- N/A: ページ目的上、本文での必須説明ではない。
- Watch: Launch前レビューで確認する。

## ルート別チェック表

| ルート | 月額300円 | 料金説明が月額中心 | 2名同意まで通知開始なし | URL同意標準 | 救命・発見・所在確認を保証しない | 通知到達・閲覧・連絡先行動を保証しない | 禁止販売コピー | CTAが理解導線を含む | Findings |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `/` | OK | OK | OK | OK | OK | Linked | OK | OK | トップで価格、2名同意、できないことを説明。通知到達保証なしは `/before-you-start` や `/delivery-status` への理解導線で補強。 |
| `/pricing` | OK | OK | Linked | Linked | OK | OK | OK | OK | 料金ページとして必要情報は明確。2名URL同意は価格説明の主目的ではないため関連導線で確認。 |
| `/before-you-start` | OK | OK | OK | OK | OK | OK | OK | OK | 登録前チェックとして Launch 前に見せたい内容がまとまっている。 |
| `/how-it-works` | OK | OK | OK | OK | OK | OK | OK | OK | 24h / 30h / 36h / 42h / 48h の説明と、スヌーズがT判定を止めない説明がある。 |
| `/notification-samples` | N/A | OK | Linked | OK | OK | OK | OK | OK | 通知サンプルページのため月額300円は本文では繰り返していない。価格誤認が増える場合は `/pricing` への導線追加を検討。今回は修正しない。 |
| `/for-family` | OK | OK | OK | OK | OK | Linked | OK | OK | 家族が本人の代わりに始められないことが明確。通知到達保証なしは関連導線で補強。 |
| `/for-contacts` | N/A | N/A | OK | OK | OK | OK | OK | OK | 連絡先向けページとして、同意前は通知稼働状態でないこと、STOP / HELP、SMS到達・閲覧・対応を保証しないことを説明。 |
| `/share-message` | OK | OK | OK | OK | OK | Linked | OK | OK | 家族・本人・連絡先向けの説明文テンプレ。販売コピーではなく、否定文脈で保証しない範囲を伝えている。 |
| `/trust` | OK | OK | OK | OK | OK | OK | OK | OK | できること・できないこと、通知が届いたように見えても閲覧・対応を保証しないことが明確。 |
| `/delivery-status` | Linked | Linked | OK | OK | Linked | OK | OK | OK | 通知履歴ページとして、通知が届いたように見えても閲覧・対応を保証しない説明がある。料金は関連導線で確認。 |
| `/manual` | OK | OK | OK | OK | OK | OK | OK | OK | Manualデータ内で月額300円、2名URL同意、保証しない範囲を説明。 |
| `/manual/faq` | OK | OK | OK | OK | OK | OK | OK | OK | FAQデータ内で料金、連絡先同意、危険検知・救命保証ではないことを説明。 |
| `/manual/tutorial` | OK | OK | OK | OK | OK | Linked | OK | OK | 初回体験として必要情報を短く説明。詳細は Manual / FAQ に送る導線。 |

## Launch Go 条件

- `npm run build` が通過している。
- 未確定価格表現が残っていない。
- 月額300円が正式価格として扱われている。
- 公開料金説明は月額300円を中心にしている。
- 通知単位の料金不安を公開ページで前面化していない。
- 2名同意とURL同意が標準導線として説明されている。
- 2名のURL同意が揃うまで通知稼働状態にしない説明がある。
- 救命、発見、所在確認、通知到達、閲覧、連絡先行動を保証しない説明がある。
- 禁止販売コピーがない。
- Legal / CX / Product レビューに渡せる状態である。

## Launch No-Go 条件

- 救命保証に見えるコピーがある。
- 危険検知に見えるコピーがある。
- 通知到達保証に見えるコピーがある。
- 月額300円が不明確。
- 月額300円の料金説明が不明確。
- 2名同意前に通知が稼働しているように見える。
- URL同意ではなく代理同意で進められるように見える。
- 連絡先に過度な責任を負わせる表現がある。
- 通知が届いたように見えても閲覧や対応の確認に見える。
- 緊急時にこのサービスだけを使えばよいように見える。

## 禁止表現リスト

以下は販売コピーとして使わない。監査、禁止リスト、否定文脈以外では使わない。

- 孤独死を防ぐ
- 危険を検知する
- 死亡を検知する
- すぐ助けが来る
- 必ず見つかる
- 確実に届く
- これで安心
- このアプリがあれば安心

## 既存差分メモ

開始時点で、以下の既存差分があった。今回の作業では整理、修正、revert していない。

```text
 M AGENTS.md
 M app/app/page.tsx
 M app/before-you-start/page.tsx
 M app/delivery-status/page.tsx
 M app/for-contacts/page.tsx
 M app/for-family/page.tsx
 M app/globals.css
 M app/how-it-works/page.tsx
 M app/manual/faq/page.tsx
 M app/manual/page.tsx
 M app/manual/tutorial/page.tsx
MM app/notification-samples/page.tsx
 M app/page.tsx
 M app/pricing/page.tsx
 M app/share-message/page.tsx
 M app/trust/page.tsx
 M components/faq/FAQPage.tsx
 M components/faq/faqData.ts
 M components/manual/ManualPage.tsx
 M components/manual/manualData.ts
 M components/trust-foundation/TrustFoundationPage.tsx
 M components/tutorial/tutorialData.ts
 M docs/UserManual/FAQ.md
 M docs/UserManual/Tutorial.md
 M docs/UserManual/User_Manual.md
?? Last_OK_Design_System_v1.0.md
?? Last_OK_Design_Tokens_v1.0.json
```

今回触った範囲は `docs/phase2_wedge_launch/` の新規Markdownのみ。`app/`、`components/`、`public/`、package files、config files、Vercel設定、本番環境には触っていない。
