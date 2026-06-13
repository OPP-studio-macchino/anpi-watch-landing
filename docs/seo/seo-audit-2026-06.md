# SEO Audit Report - 2026-06

対象: `https://www.anpi-watch.app/` の公開主要19ページ

作業範囲: 初回は監査レポート作成のみ。AIO追加方針を受けて `app/robots.txt/route.ts` と `app/sitemap.ts` を実装した。metadata変更、JSON-LD変更、画像変更、本文変更、deploy、Vercel CLI、production writeは行っていない。

## Executive Summary

現状の主要SEO課題は、ページ本文やH1よりも `<head>` とクロール入口に集中している。

- P0: canonicalが多くのページでトップページ `https://anpi-watch.app` に向いており、監査基準の `https://www.anpi-watch.app/...` ともホストが一致していない。
- P0: `/robots.txt` と `/sitemap.xml` はproduction監査時点では404。AIO P0対応としてlocalの `/robots.txt` と `/sitemap.xml` は実装済み。production反映は未実施。
- P0: AIOは通常SEOの技術基礎として扱う。AI検索向けの隠し本文、専用ページ、`llms.txt`、AI専用schemaは作らない。
- P0: OGP/Twitterが全ページでトップページ共通のtitle/description/url/imageを継承している。SNS共有時も検索補助文脈もページ別にならない。
- P0: title templateにより、多くのページで `| あんぴッチ | あんぴッチ` の二重ブランド表記が出ている。
- P1: `support` と `privacy-choices` はmeta descriptionが未設定で、root descriptionを継承している。
- P1: 構造化データは0件。FAQPage、WebSite、SoftwareApplication、WebPage、BreadcrumbListなどの候補はあるが、安全・法務・価格・App Store公開状況と矛盾しない範囲で段階導入する必要がある。
- P1: フッターは19ページを広くカバーしているが、本文上の文脈リンクには不足がある。特に `/pricing` と `/tokushoho` の相互導線がない。

検索順位保証、インデックス保証、CTR保証はしない。目標は、技術SEO、構造化、ページ別meta、内部導線、検索意図対応を正しく整えること。

## Scope and Safety Boundaries

監査した対象ページ:

- `/`
- `/pricing`
- `/notification-samples`
- `/for-family`
- `/for-contacts`
- `/before-you-start`
- `/how-it-works`
- `/trust`
- `/delivery-status`
- `/help/stop`
- `/share-message`
- `/support`
- `/privacy`
- `/terms`
- `/privacy-choices`
- `/tokushoho`
- `/manual`
- `/manual/faq`
- `/manual/tutorial`

SEO文言・構造化データ・内部導線の今後の修正では、以下を禁止または強い注意対象にする。

- 「孤独死を防ぐ」「危険を検知」「死亡を検知」「必ず届く」「助けが来る」「24時間監視」「救命」「100%安心」「絶対安全」
- 警察・消防・救急・自治体・病院・警備会社への自動通報を示す表現
- 医療サービス、救命サービス、警備サービス、介護サービスと誤認される表現
- 通知到達、閲読、連絡先の対応、救助、発見、所在確認を保証する表現
- 月額300円、通知ごとの追加料金なし、連絡先2名のURL同意が揃うまで通知開始しない、という現行前提と矛盾する表現

## Current SEO Structure

Source observation:

- Framework: Next.js App Router。
- Root layout: `app/layout.tsx`。
- `metadataBase`: `process.env.NEXT_PUBLIC_SITE_URL ?? "https://anpi-watch.app"`。
- productionのcanonical/OG URLは `https://anpi-watch.app` になっており、監査対象の `https://www.anpi-watch.app` と不一致。
- Root `metadata.alternates.canonical` は `/`。ページ側でcanonicalを定義していないページではトップページcanonicalを継承している。
- Root title template: `%s | あんぴッチ`。
- 多くのページ側titleが既に `| あんぴッチ` を含むため、productionでは `| あんぴッチ | あんぴッチ` になる。
- Root Open Graph/Twitterは設定済み。ただし全ページでrootのOG/Twitter title/description/url/imageを継承している。
- `viewport` は `themeColor: "#0099A1"` を含む。production headには `viewport` と `theme-color` が出ている。
- `<html lang="ja">` はproductionで確認済み。
- JSON-LD / structured dataはproduction 19ページすべてで0件。
- `generateMetadata` は未使用。
- `app/app/**` に別ルート用metadataがあるが、今回の19ページ対象外。

Production shared head status:

- `twitter:card`: `summary_large_image` が全ページに存在。
- `og:image`: `https://anpi-watch.app/og-image.png` が全ページ共通。
- `twitter:image`: `https://anpi-watch.app/twitter-card.png` が全ページ共通。
- `robots` meta: 19ページすべて未設定。通常はindex/follow相当だが、robots.txtも存在しない。

## Robots, Sitemap, Manifest

Production read-only results:

| URL | Status | Result |
|---|---:|---|
| `/robots.txt` | 404 | robots.txtなし |
| `/sitemap.xml` | 404 | sitemapなし |
| `/site.webmanifest` | 200 | manifestあり。root metadataも `/site.webmanifest` を参照 |
| `/manifest.webmanifest` | 404 | 未使用の一般名manifestはなし |
| `/legal-review/privacy` | 404 | SEO対象外として公開されていない |
| `/legal-review/terms` | 404 | SEO対象外として公開されていない |
| `/legal-review/tokushoho` | 404 | SEO対象外として公開されていない |
| `/legal-review/privacy-choices` | 404 | SEO対象外として公開されていない |
| `/legal-review/support` | 404 | SEO対象外として公開されていない |

`/legal-review/` は308で `/legal-review` に正規化され、その先は404。`/legal-review/**` をnoindexで処理する対象ではなく、現状どおり404で扱う方針でよい。

Sitemapがないため、対象19ページがsitemapに含まれているかは現状では「含まれていない」。次タスクでsitemapを実装する場合は、19ページのみを `https://www.anpi-watch.app/...` のcanonical候補で列挙し、`/legal-review/**` を含めない。

AIO P0対応後のlocal sitemap実装:

- 実装ファイル: `app/sitemap.ts`
- canonical host: `https://www.anpi-watch.app`
- URL数: 19
- URL形式: 絶対URLのみ。トップ `/` のみ末尾slashあり。下層は末尾slashなし。
- 除外: `/legal-review/**`, draft route, App Store URL, image URL, API route, relative URL, non-www URL。
- `lastModified` は根拠がないため入れていない。
- `changeFrequency` / `priority` も根拠がないため入れていない。

AIO追加後のlocal robots実装:

```txt
User-agent: *
Allow: /

User-agent: OAI-SearchBot
Allow: /

Sitemap: https://www.anpi-watch.app/sitemap.xml
```

実装ファイル: `app/robots.txt/route.ts`

- `OAI-SearchBot` は明示的に許可した。
- `GPTBot` の明示的allow/denyは追加していない。GPTBotはfoundation model training用途の判断を含むため、今回のSearch/AIO P0ではユーザー判断保留にする。
- `ChatGPT-User` は追加していない。ユーザー起点アクセスであり、検索表示可否をrobots.txtで制御する対象として扱わない。
- `llms.txt`、AI検索向けの隠し本文、専用ページ、structured data / JSON-LDは作成していない。
- `/legal-review/**` をrobots.txtで隠す設定はしていない。存在しない公開確認ページは404のまま扱う。

Official reference checked: OpenAI crawler overview (`https://developers.openai.com/api/docs/bots`). The documented distinction between OAI-SearchBot, GPTBot, and ChatGPT-User matches the AIO policy above.

## AIO / AI Search Optimization Policy

今回のAIOは、AI検索/回答エンジンに正しく理解され、医療・救命・警備・介護サービスとして誤分類されないための通常SEO基礎整備を指す。

方針:

- Google SearchのAI Overviews / AI Mode向けには、AI専用schemaやAI専用ファイルではなく、crawlability、indexability、helpful content、内部リンク、metadata、canonical、robots/sitemapを整える。
- ChatGPT Search向けには、`OAI-SearchBot` をrobots.txtで明示的に許可する。
- AI検索向けの隠し本文、専用ページ、`llms.txt`、AI専用テキストファイルは作らない。
- 本文、見出し、FAQ、法務文言はAIO目的で勝手に変更しない。
- AIO文言でも、救命保証、危険検知、通知到達保証、医療/警備/介護誤認、自動通報に見える表現は使わない。

AIO観点の残P0:

- canonicalを `https://www.anpi-watch.app/...` 基準候補でページ別に正す。
- sitemapは対象19ページでlocal実装済み。production反映後に公開確認する。
- ページ別metadata/OGP/Twitterを正し、AI検索にもページの役割が誤読されにくい構造にする。
- 内部リンクの文脈を整え、料金、同意、通知限界、法務ページの関係をクローラにも分かるようにする。

## Page-Level Metadata Audit

共通状態:

- OGP: 19ページすべて `og:title` / `og:description` / `og:url` がトップページ共通。
- Twitter: 19ページすべて `twitter:title` / `twitter:description` / `twitter:image` がトップページ共通。
- Robots: 19ページすべてmeta robotsなし。index/follow相当だが、robots.txtなし。
- Structured data: 19ページすべてJSON-LDなし。

| Page | Production title | Meta description | Canonical | H1 | Main gaps |
|---|---|---|---|---|---|
| `/` | `あんぴッチ | 毎日OKを記録するアプリ` | root descriptionあり | `https://anpi-watch.app` | `毎日1回、OKを押す。押せなかった時は、決めた人へ知らせる。` | canonical hostがwww基準と不一致。OG/Twitter共通。 |
| `/pricing` | `料金・課金方針 | あんぴッチ | あんぴッチ` | 月額300円・解約・返金 | `https://anpi-watch.app` | `料金・課金方針` | canonicalがトップ。title二重ブランド。OG/Twitter共通。`/tokushoho`導線不足。 |
| `/notification-samples` | `通知サンプル | あんぴッチ | あんぴッチ` | SMSサンプル | `https://anpi-watch.app` | `通知サンプル` | canonicalがトップ。title二重ブランド。OG/Twitter共通。 |
| `/for-family` | `離れて暮らす本人に、あんぴッチを提案したい方へ | あんぴッチ | あんぴッチ` | 家族・パートナー向け | `https://anpi-watch.app` | `離れて暮らす本人に、あんぴッチを提案したい方へ` | canonicalがトップ。title二重ブランド。OG/Twitter共通。 |
| `/for-contacts` | `連絡先としてSMSを受け取る方へ | あんぴッチ | あんぴッチ` | 連絡先候補向け | `https://anpi-watch.app` | `連絡先としてSMSを受け取る方へ` | canonicalがトップ。title二重ブランド。OG/Twitter共通。 |
| `/before-you-start` | `始める前のチェックリスト | あんぴッチ | あんぴッチ` | 準備・確認 | `https://anpi-watch.app` | `始める前のチェックリスト` | canonicalがトップ。title二重ブランド。OG/Twitter共通。 |
| `/how-it-works` | `48時間の通知ルール | あんぴッチ | あんぴッチ` | 24h-48h通知ルール | `https://anpi-watch.app` | `48時間の通知ルール` | canonicalがトップ。title二重ブランド。OG/Twitter共通。 |
| `/trust` | `できること・できないこと | あんぴッチ | あんぴッチ` | サービス境界 | `https://anpi-watch.app` | `できること・できないこと` | canonicalがトップ。title二重ブランド。OG/Twitter共通。 |
| `/delivery-status` | `通知履歴の見方 | あんぴッチ | あんぴッチ` | 通知履歴 | `https://anpi-watch.app` | `通知履歴の見方` | canonicalがトップ。title二重ブランド。OG/Twitter共通。 |
| `/help/stop` | `SMSを止めたい時・内容を確認したい時 | あんぴッチ | あんぴッチ` | STOP/HELP | `https://anpi-watch.app` | `SMSを止めたい時・内容を確認したい時` | canonicalがトップ。title二重ブランド。OG/Twitter共通。FAQPage候補あり。 |
| `/share-message` | `家族・パートナーから本人に提案する文面テンプレ | あんぴッチ | あんぴッチ` | 提案文面テンプレ | `https://anpi-watch.app` | `家族・パートナーから本人に提案する文面テンプレ` | canonicalがトップ。title二重ブランド。OG/Twitter共通。 |
| `/support` | `あんぴッチ サポート | あんぴッチ` | root descriptionを継承 | `https://anpi-watch.app` | `あんぴッチ サポート` | page descriptionなし。canonicalがトップ。OG/Twitter共通。本文内の法務URL表がリンクではない。 |
| `/privacy` | `プライバシーポリシー | あんぴッチ | あんぴッチ` | privacy descriptionあり | `https://anpi-watch.app/privacy` | `プライバシーポリシー` | title二重ブランド。canonical hostがwww基準と不一致。OG/Twitter共通。 |
| `/terms` | `利用規約 | あんぴッチ | あんぴッチ` | terms descriptionあり | `https://anpi-watch.app/terms` | `利用規約` | title二重ブランド。canonical hostがwww基準と不一致。OG/Twitter共通。 |
| `/privacy-choices` | `Privacy Choices / データに関する選択 | あんぴッチ` | root descriptionを継承 | `https://anpi-watch.app` | `Privacy Choices / データに関する選択` | page descriptionなし。canonicalがトップ。OG/Twitter共通。本文内の法務URL表がリンクではない。 |
| `/tokushoho` | `特定商取引法に基づく表示 | あんぴッチ | あんぴッチ` | App Store内課金の月額サブスクリプション表示 | `https://anpi-watch.app/tokushoho` | `特定商取引法に基づく表示` | title二重ブランド。canonical hostがwww基準と不一致。OG/Twitter共通。`/pricing`導線不足。 |
| `/manual` | `あんぴッチ ユーザーマニュアル | あんぴッチ` | manual descriptionあり | `https://anpi-watch.app` | `使い方ガイド` | canonicalがトップ。OG/Twitter共通。 |
| `/manual/faq` | `あんぴッチ FAQ | あんぴッチ` | FAQ descriptionあり | `https://anpi-watch.app` | `よくある質問` | canonicalがトップ。OG/Twitter共通。FAQPage最有力候補だがJSON-LDなし。 |
| `/manual/tutorial` | `あんぴッチ 3分体験コース | あんぴッチ` | tutorial descriptionあり | `https://anpi-watch.app` | `あんぴッチは、毎日1回のOKを迷わず終えるためのアプリです。` | canonicalがトップ。OG/Twitter共通。 |

## Search Intent Mapping

以下はdraftの監査用分類であり、確定SEO文言ではない。

| Page | Primary intent | Target query cluster draft | Page role | Avoid terms | Internal links needed |
|---|---|---|---|---|---|
| `/` | ブランド・サービス概要 | あんぴッチ / 毎日OK 記録アプリ / 未反応時 連絡ルール | 全体入口 | 共通禁止全般 | 既存で主要導線あり。canonical/OG優先。 |
| `/pricing` | 料金確認 | あんぴッチ 料金 / 月額300円 / サブスクリプション 解約 | 課金不安の解消 | 無料保証、追加請求誤認 | `/tokushoho` への本文リンクを追加候補。 |
| `/notification-samples` | 通知文面確認 | あんぴッチ SMS / 通知サンプル / 同意SMS | 通知前の安心材料 | 必ず届く、読んだ保証 | `/how-it-works` と相互導線あり。 |
| `/for-family` | 本人に提案したい家族向け | 離れて暮らす 家族 / 見守り補助 / 本人に提案 | 紹介前の理解 | 監視、救命、危険検知 | `/share-message` と相互導線あり。 |
| `/for-contacts` | 連絡先候補向け | 連絡先 SMS 同意 / STOP HELP / URL同意 | 連絡先の不安解消 | 対応義務、救助義務 | `/help/stop` と相互導線あり。 |
| `/before-you-start` | 利用前チェック | 始める前 チェック / 2名同意 / OK習慣 | 利用適合の確認 | 1名開始、保証表現 | `/trust` と相互導線あり。 |
| `/how-it-works` | 仕組み理解 | 48時間 通知ルール / 24h 30h 36h 42h 48h | 機能理解 | 自動通報、検知 | `/notification-samples` と相互導線あり。 |
| `/trust` | サービス境界 | できること できないこと / 通知の限界 | 誤認防止 | 医療/警備/介護誤認 | `/before-you-start` と相互導線あり。 |
| `/delivery-status` | 通知履歴理解 | 通知履歴 / 配信結果 / 届いた可能性 | 表示の読み方 | 届いた保証、読了保証 | `/how-it-works`、`/notification-samples`、`/trust`あり。 |
| `/help/stop` | SMS停止・HELP | STOP HELP START / SMS 止めたい | 受信者サポート | 解除後も送る誤認 | `/for-contacts` と相互導線あり。 |
| `/share-message` | 説明文テンプレ | 家族から本人へ説明 / 連絡先にお願い | 共有前の文面支援 | 恐怖訴求、押し付け | `/for-family` と相互導線あり。 |
| `/support` | 問い合わせ・削除・解約案内 | あんぴッチ サポート / アカウント削除 / 問い合わせ | サポート入口 | 返信保証、即時対応保証 | 法務URL表をクリック可能な本文リンクにする候補。 |
| `/privacy` | プライバシー確認 | あんぴッチ プライバシーポリシー / 個人情報 | 法務・信頼 | 未確認の保持期間断定 | `/privacy-choices`、`/support`あり。 |
| `/terms` | 利用条件確認 | あんぴッチ 利用規約 / 解約 / サービス停止 | 法務・利用条件 | 稼働保証、救命保証 | `/privacy`、`/privacy-choices`、`/support`あり。 |
| `/privacy-choices` | データ選択・削除 | データ削除 / Privacy Choices / STOP 同意撤回 | データ主体向け案内 | 削除即時保証、返金保証 | 法務URL表をクリック可能な本文リンクにする候補。 |
| `/tokushoho` | 特商法表示 | 特定商取引法 / App Store課金 / 月額サブスク | 法務・取引条件 | 価格不一致、販売者情報の推測 | `/pricing` への本文リンクを追加候補。 |
| `/manual` | 操作ガイド | あんぴッチ 使い方 / OK 押す / 連絡先登録 | 操作マニュアル | 1名開始、通知保証 | FAQ/tutorial/主要説明ページとの導線は既存コンポーネント側であり。 |
| `/manual/faq` | よくある質問 | あんぴッチ FAQ / 2名同意 / 通知順番 | 質問解決 | 救命・検知系を肯定しない | FAQPage構造化候補。 |
| `/manual/tutorial` | 初回操作 | あんぴッチ チュートリアル / 3分体験 / OK操作 | 初回体験支援 | 操作完了以外の安全保証 | `/manual` への導線あり。 |

## Internal Link Audit

Header:

- Desktop header links: `/pricing`, `/notification-samples`, `/for-family`, `/for-contacts`, `/manual/faq`。
- Desktop headerは主要5ページに絞られている。SEOクローラ上はfooterがあるため孤立はしないが、`/before-you-start`, `/how-it-works`, `/trust`, `/delivery-status`, `/help/stop`, `/share-message`, `/support`, legal, manual root/tutorialはファーストナビからは遠い。
- Mobile menuは19ページをかなり広くカバーしている。

Footer:

- Footer sections cover the 19 target pages.
- Orphan page risk is low because footer includes all target pages.

Body/contextual links:

- `/notification-samples` <-> `/how-it-works`: OK。
- `/for-family` <-> `/share-message`: OK。
- `/for-contacts` <-> `/help/stop`: OK。
- `/trust` <-> `/before-you-start`: OK。
- `/pricing` <-> `/tokushoho`: gap。pricingから特商法、特商法から料金への本文リンクがない。
- `/support` と `/privacy-choices` は、法務URLを表に文字列として出しているが、`TrustTable`はanchorを生成しない。footerでは到達できるが、本文上の文脈リンクとしては弱い。

## Structured Data Candidates

実装候補とリスクを分ける。今回は実装しない。

| Candidate | Recommended scope | Fit | Main risks / constraints |
|---|---|---|---|
| `WebSite` | home/root | P1候補 | サイト名、URL、publisher程度に限定。検索ボックスがないならSearchActionは入れない。 |
| `SoftwareApplication` | homeまたはpricing | P1候補 | App Store公開済みURL、アプリ名、OS、月額300円と矛盾しない範囲のみ。評価、レビュー、インストール数、未確認カテゴリを入れない。 |
| `WebPage` / `AboutPage` | `/`, `/trust`, `/how-it-works`, legal/manual pages | P1候補 | ページ別canonicalが先に正しくないとURL矛盾が出る。 |
| `BreadcrumbList` | 全ページまたは階層ページ | P1/P2候補 | 現UIには完全なパンくずがなく「トップへ戻る」が中心。表示またはナビ構造と矛盾しない形に限定する。 |
| `FAQPage` | `/manual/faq` 最優先。`/help/stop` は可。`/pricing` は限定的候補 | P1候補 | ページ上に実際のQ&Aがある範囲だけ。非表示・生成Q&Aを足さない。禁止表現を肯定しない。 |
| `Organization` | footer/root | P2候補 | 未確認の住所、電話番号、個人名を入れない。support emailの扱いは法務/プライバシー確認後。 |

Structured data導入順のdraft:

1. canonical/host/sitemap/robotsを先に直す。
2. `/manual/faq` にFAQPage候補を検討する。
3. homeにWebSite + SoftwareApplicationを最小プロパティで検討する。
4. ページ別WebPage/BreadcrumbListは、URL・表示構造・ナビ構造の整合後に検討する。

## Technical Basics

確認済み:

- `lang="ja"`: productionで確認済み。
- `viewport`: `width=device-width, initial-scale=1`。
- `theme-color`: `#0099A1`。
- favicon/icons: `favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png` がroot headに出ている。
- manifest: `/site.webmanifest` が200で存在。
- hero alt: user-provided current factとして19/19 OK。今回もsource上でaltは確認できる範囲で存在。
- App Store URL: source上の既存hrefは `https://apps.apple.com/jp/app/.../id6763868893`。新規URLは作っていない。

Technical risks:

- Core Web Vitals: page hero画像は多くが256KB程度、home heroはdesktop/mobileとも512KB程度。`loading="eager"` のheroが多いため、LCP実測は別タスクで確認が必要。
- Duplicate content: legal/support/privacy choicesに似た案内文が複数ある。現時点の最大問題は本文重複よりもcanonicalがトップへ向いていること。
- AppleDouble files: source treeに `app/._*`, `components/._*`, `docs/._design` が存在する。今回の変更では触っていない。validationでdocs側の既存AppleDoubleを確認済み。

## Risk Audit

Prohibited expression scan:

- `rg`では「救急」「警察」「消防」「自動通報」「危険検知」「救命保証」「必ず届く」「助けが来る」などがhitした。
- 多くは「ではありません」「保証しません」「約束できません」などの否定・境界説明、またはdocs内の禁止/除外候補としての列挙。
- ただし、SEO title/description/OG/Twitterにこれらの語を入れると、否定文でも検索スニペットやSNSカードで誤読されるリスクがある。metaではより安全な境界表現を使う方針にする。

Specific risks:

- Medical/security/care-service misclassification: `/trust`, `/privacy`, `/terms`, `/support` の本文は否定しているが、structured dataやmetaでカテゴリを誤ると医療・警備・介護サービスに見えるリスクがある。
- Payment/price mismatch: sourceは月額300円と通知追加料金なしに概ね一致。今後のSoftwareApplication structured dataでも価格表現を推測しない。
- Legal page indexing: `/privacy`, `/terms`, `/privacy-choices`, `/tokushoho`, `/support` は公開法務/サポートページとしてindex対象候補。ただしcanonical host/pathを先に正す。
- `/legal-review/**`: SEO対象外。現状404で確認済み。sitemapに入れない。
- App Store CTA consistency: App Store URLは既存hrefのみ確認。App Store側の公開状態やメタデータは今回未監査。

## Implementation Priority

### P0

1. Canonical host/pathを確定して統一する。
   - 監査基準候補: `https://www.anpi-watch.app/...`。
   - rootの `metadataBase` とproduction env/defaultの不一致を解消する。
   - 19ページすべてにページ別canonicalを持たせる、またはroot canonical継承でトップへ向かない構成にする。

2. `/robots.txt` と `/sitemap.xml` を用意する。
   - robots.txtはAIO追加対応でlocal実装済み。
   - sitemapも対象19ページでlocal実装済み。
   - `/legal-review/**` は含めていない。
   - robots.txtの `Sitemap: https://www.anpi-watch.app/sitemap.xml` とsitemap URLを一致させた。

3. Title templateとページtitleの二重ブランドを解消する。
   - page titleから `| あんぴッチ` を外してtemplateに任せる、またはtemplateを変える。
   - どちらか一方に統一する。

4. ページ別OGP/Twitterを入れる。
   - `og:title`, `og:description`, `og:url`, `twitter:title`, `twitter:description` をページ別にする。
   - まずは共通画像のままでもよいが、URLと文脈はページ別にする。

5. `support` と `privacy-choices` のmeta descriptionを追加する。
   - draft扱いで、問い合わせ・データ選択・削除・STOP/同意撤回を説明する。
   - 即時対応、返金保証、削除保証、救命/通報系表現は避ける。

### P1

1. `/manual/faq` のFAQPage structured dataを検討する。
2. WebSite / SoftwareApplication structured dataを最小プロパティで検討する。
3. `/pricing` と `/tokushoho` の相互本文リンクを追加する。
4. `/support` と `/privacy-choices` の法務URL表を、クリック可能な関連リンクとして扱える設計にする。
5. desktop headerに、検索意図上重要な `/how-it-works`, `/trust`, `/before-you-start` を入れるか検討する。

### P2

1. ページ別OG画像または画像alt/OG altの改善を検討する。
2. BreadcrumbListは、表示またはナビ構造と矛盾しない形を設計してから検討する。
3. LCP/Core Web Vitalsをproductionで実測する。
4. Search Consoleでインデックス状況、canonical選択、sitemap送信状況を確認する。

## Validation Performed

Read-only source commands:

- `git status --short --branch`
  - before edit: `## main...origin/main`
  - after edit: `## main...origin/main` plus `?? docs/seo/seo-audit-2026-06.md`
- `rg -n "metadata|generateMetadata|openGraph|twitter|robots|sitemap|canonical|application/ld\\+json|jsonLd|schema.org|FAQPage|SoftwareApplication|BreadcrumbList" app components public`
  - 34 lines.
  - metadata found in root layout and page files.
  - FAQ component names found.
  - no `application/ld+json`, `schema.org`, `SoftwareApplication`, or `BreadcrumbList` implementation found.
  - initial audit found no robots/sitemap implementation; AIO P0 work later added `app/robots.txt/route.ts` and `app/sitemap.ts`.
- `rg -n "apps.apple.com|App Storeで見る|id6763868893" app components`
  - 8 lines.
  - existing App Store href found in home, pricing, and shared site navigation.
- `rg -n "孤独死を防ぐ|危険を検知|必ず届く|助けが来|自動通報|119|救急|警察|消防|従量|追加請求あり|完全無料|永久無料|100%安心|絶対安全|24時間監視|医療サービス|警備サービス|介護サービス|読んだことを保証|対応したことを保証|確実に届" app components docs`
  - 40 lines after this audit report was added.
  - app/components hits are negative boundary statements.
  - docs hits include prohibited/negative keyword lists and this audit report.
- Official OpenAI crawler reference checked: `https://developers.openai.com/api/docs/bots`
  - OAI-SearchBot is the Search crawler.
  - GPTBot is for foundation model training.
  - ChatGPT-User is user-initiated and not the robots target for Search appearance.
- `npm run build`
  - pass. `/robots.txt` and `/sitemap.xml` appear in the Next route output.
- `npx tsc --noEmit`
  - pass.
- local HTTP `curl http://localhost:3020/robots.txt`
  - 200.
  - contains `User-agent: *`, `Allow: /`, `User-agent: OAI-SearchBot`, and `Sitemap: https://www.anpi-watch.app/sitemap.xml`.
  - does not contain `GPTBot` or `ChatGPT-User`.
- local HTTP `curl http://localhost:3020/sitemap.xml`
  - 200.
  - exactly 19 `<url>` entries.
  - contains only the 19 target `https://www.anpi-watch.app/...` canonical URLs.
  - does not contain `/legal-review`, `apps.apple.com`, `/page-heroes`, image URLs, relative URLs, or non-www URLs.
- `rg -n "llms\\.txt|GPTBot|OAI-SearchBot|ChatGPT-User" app public docs`
  - expected hits are `app/robots.txt/route.ts` and this SEO audit report.
  - `GPTBot` appears only in the audit/report explanation, not in robots output.
- `find public app -iname "llms.txt" -print`
  - no output.
- `rg -n "AI検索|AIO|AI Overviews|AI Mode|OAI-SearchBot|GPTBot|llms.txt" docs/seo/seo-audit-2026-06.md`
  - hits confirm this AIO section and validation notes.

Production read-only HTTP:

- 19 target pages: all 200.
- `/robots.txt`: 404.
- `/sitemap.xml`: 404.
- `/site.webmanifest`: 200.
- `/manifest.webmanifest`: 404.
- `/legal-review/privacy`, `/legal-review/terms`, `/legal-review/tokushoho`, `/legal-review/privacy-choices`, `/legal-review/support`: all 404.

Post-report validation:

- `find public -name '._*' -print`
  - no output.
- `find docs -name '._*' -print`
  - no output after removing ignored AppleDouble file `docs/._design`.
- `git diff --check`
  - pass.
- `git diff --stat`
  - no output because the audit report is untracked and there are no tracked diffs.
- `git status --short --branch --untracked-files=all`
  - `## main...origin/main`
  - `?? app/robots.txt/route.ts`
  - `?? app/sitemap.ts`
  - `?? docs/seo/seo-audit-2026-06.md`

## Remaining Risks

- Search Console / indexing status is not checked.
- Vercel deployment history, project env, and `NEXT_PUBLIC_SITE_URL` production value are not checked because Vercel CLI/account/env access is out of scope.
- production `/robots.txt` is still not verified as deployed. Local `/robots.txt` is implemented and validated only.
- production `/sitemap.xml` is still not verified as deployed. Local `/sitemap.xml` is implemented and validated only.
- App Store public page metadata is not audited; only existing source href was checked.
- Core Web Vitals are not measured.
- Structured data is candidate-only. No JSON-LD was implemented.
- SEO title/description replacement copy is not finalized. Any future copy should be reviewed for product, legal, billing, consent, and public-copy safety before implementation.
