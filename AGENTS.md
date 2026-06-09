# AGENTS.md — anpi-watch-landing

## このリポジトリの役割

`anpi-watch-landing` は、anpitch / あんぴッチのランディングページ、料金表示、FAQ、SEO/OGP、利用者向け説明、問い合わせ・申込導線、免責表示などを担うリポジトリとして扱う。実際の構成が異なる場合は、READMEやコードを優先して判断し、このAGENTS.mdの該当箇所を更新する。

## 基本方針：Codexは「1つのDoingだけ」ではなく、関連する完了条件まで見に行く

Codexは以前より処理能力と正確さが高い前提で動く。単に1ファイルを直して終わるのではなく、ユーザーの依頼を安全に完了させるために必要な範囲で、調査、実装、テスト、差分レビュー、ドキュメント同期、次の手順整理まで一連で行う。

ただし、広く動いてよいのはローカルで安全に確認できる範囲だけ。本番deploy、外部送信、課金、返金、SMS/電話/Pushの実送信、本番DB操作、秘密情報の取得は行わない。

## anpitch共通のプロダクト原則

anpitch / あんぴッチは、安否確認・見守り補助のためのプロダクトである。医療、救命、警備、介護、公的機関通報サービスではない。

必ず守ること：

- 料金の基本表記は「月額300円」。これと矛盾する料金、追加請求、従量課金、無料保証、永久無料のような表現を勝手に作らない。
- 「救命保証」「必ず助ける」「100%安心」「絶対安全」「24時間監視」「孤独死を防ぐ保証」のような保証・過剰安心表現を使わない。
- 「自動で119番通報」「自動で救急/消防/警察へ通報」のような、公的機関へ自動通報する表現や実装を作らない。
- 通知開始には原則として2名の同意が必要。1名だけで通知開始できるような説明・実装・テスト期待値を作らない。
- 通知、同意、安否確認、課金、ユーザーデータ、個人情報に関わる変更は安全側に倒す。
- 仕様が不明な場合は推測で確定しない。「要確認」として報告する。

## 3プロジェクト構成と整合性

anpitchは以下の3プロジェクトで構成される。

- `anpi-watch`: アプリ本体、安否確認、通知、同意、状態管理など
- `anpi-watch-landing`: LP、料金表示、FAQ、SEO/OGP、利用者向け説明など
- `anpi-watch-web`: Web画面、管理画面、ユーザーポータル、運用画面、ユーザーデータ管理など

このリポジトリ単体の変更でも、以下は3プロジェクト間で矛盾させない。

- 料金
- 追加請求の有無
- 通知開始条件
- 2名同意ルール
- 公的機関への自動通報の有無
- 救命保証しないこと
- 医療/警備/介護サービスではないこと
- 免責文言
- FAQとヘルプ文言
- 通知文面
- 課金状態
- ユーザー状態
- 管理者権限
- 個人情報の扱い
- 外部送信
- 本番deploy

他プロジェクトの中身を直接確認できない場合、推測で補完しない。影響がありそうなら最終報告に「Cross-project check needed」として、確認すべきリポジトリ名と項目を書く。

## 作業開始時のルーティング

Codexは作業前に、最低限以下を確認する。

1. ユーザー依頼の目的、完了条件、禁止事項を短く整理する。
2. `AGENTS.md`、`README*`、`docs/`、要件定義、FAQ、利用規約、プライバシーポリシー、ロードマップがある場合は関連箇所だけ確認する。
3. `package.json`、`pyproject.toml`、`requirements.txt`、`Makefile`、`docker-compose*.yml`、CI設定がある場合は、使うべきローカル確認コマンドを把握する。
4. 既存コードの構造、命名、テスト方針を先に読む。思い込みで新しい構造を作らない。
5. `rg` などで関連語を検索し、似た実装がある場合はそれに合わせる。
6. 危険領域に触れる場合は、実装前に安全条件を明確にする。

## Codexが自律的にやってよいこと

- 関連ファイルの調査
- ローカルファイルの編集
- 小さく安全なリファクタリング
- 型、lint、format、テストのローカル実行
- テスト追加・更新
- docsの狭い範囲の同期
- READMEやFAQの仕様同期。ただし文言の新規創作ではなく、確定仕様の反映に限る
- 変更後の差分レビュー
- 手動で必要な本番作業手順の作成
- Hooks / rules / AGENTS.md の保守提案

## Codexが自律的にやってはいけないこと

- 本番deploy
- 本番DB操作
- 本番環境へのSSH
- 本番migration
- 本番Docker再起動
- SMS、電話、Push、メールの実送信
- Stripe等の本番課金、返金、サブスク変更
- Vercelのログイン、link、env取得、deploy、prod deploy
- 秘密情報、APIキー、トークン、認証情報の探索・出力
- `.env`、秘密鍵、サービスアカウントJSON、証明書を読むこと。ただし `.env.example` は可
- 顧客・ユーザーの個人情報をログ出力すること
- 仕様不明な法務文言、料金文言、LPコピー、FAQを勝手に作ること
- 既存の同意条件、通知条件、課金条件、管理者権限を推測で緩めること
- ユーザーの明示なしに新しい外部依存を追加すること

## Source-of-Truth Synchronization

- Do not blindly trust old docs when practical operations, implemented behavior, or explicit user decisions differ from requirements, roadmaps, Gate tables, OpenAPI/AsyncAPI contracts, manuals, support docs, or other baseline files.
- When such drift is detected, Codex must identify the affected source-of-truth files and update the relevant requirements, roadmap, Gate, API/event contract, manual, support, and legal documents as part of the same task.
- If the documentation cannot be updated in the same task, explicitly report `Docs debt remains` and list the exact file names that must be updated later.
- Do not advance implementation or specification decisions while leaving known stale docs in place.
- After a practical behavior change, treat the affected baseline files as synchronization targets so a new chat or future Codex run does not treat old requirements as authoritative.
- Avoid broad rewrites. Keep documentation synchronization narrowly scoped to the parts affected by the practical change.
- A task that changes product behavior is not complete until documentation synchronization has been checked.

優先順位：

1. 現在のユーザー明示指示
2. この `AGENTS.md` と `.codex/` Hooks / rules
3. 実装済みの安全ロジックとテスト
4. 最新のREADME、docs、仕様書、FAQ、規約、ロードマップ
5. 古いメモや未確認資料

矛盾がある場合は、勝手に片方を正として進めない。差分、候補、影響範囲を報告する。

## 実装スタイル

- 既存の設計・命名・ディレクトリ構造に合わせる。
- 変更はできるだけ小さく、関連する範囲に閉じる。
- ユーザー依頼と無関係な大規模リファクタリングをしない。
- 重複実装を増やさず、既存の共通関数・型・hooks・services・schemas・constantsを探して使う。
- 型安全を壊さない。`any` や無理なキャストで逃げない。
- エラー握りつぶしをしない。ユーザーに見える失敗は、原因と次の行動が分かる形にする。
- 日付、時刻、タイムゾーン、期限、通知時刻は雑に扱わない。
- 監視・通知・同意・課金・認可に関わるロジックは、条件分岐を明示し、テストで守る。
- ログに個人情報、電話番号、メールアドレス、住所、緊急連絡先、トークン、課金情報を出さない。
- 例外的に危険領域を変更する場合は、なぜ必要か、どのテストで守ったかを報告する。

## テスト・検証

変更内容に応じて、ローカルで実行可能な範囲の確認を行う。

- まず `package.json`、Makefile、README、CI設定から正しいコマンドを探す。
- JS/TS変更では、該当する `lint`、`typecheck`、`test`、`build` を優先する。
- Python/Django変更では、該当する `pytest`、`python manage.py test`、migrate checkなどを優先する。ただし本番DBや本番設定は使わない。
- テストがない重要ロジックを変更した場合、可能なら小さなテストを追加する。
- 通知・同意・課金・認可・DB更新ロジックを変更した場合、正常系だけでなく失敗系・境界条件も確認する。
- コマンドが失敗した場合、失敗を隠さず、原因、実行コマンド、次に必要な対応を報告する。
- 実行できなかった場合は「未実行」と明記し、理由を書く。

## 文章作成のルール

- Codexに重要文章を書かせない。
- 文章はChatGPTまたはユーザーが作る。
- ChatGPTまたはユーザーが作った文章をCodexに渡し、Codexは実装・配置・整形・差し替えを行う。
- どうしても短いUI文言の補助が必要な場合は、既存トーンに合わせ、必ず「仮文言」として報告する。
- 文章は、むずかしい言葉を使わない。
- 読み書きが苦手な人やお年寄りにもわかるように、やさしい言葉で書く。
- 法務、料金、免責、救命、通知、公的機関通報、医療/警備/介護の誤認に関わる文言は勝手に新規作成しない。

禁止または要確認の表現例：

- 救命保証
- 必ず助ける
- 100%安心
- 絶対安全
- 24時間監視
- 自動で119番通報
- 自動で救急へ通報
- 警察/消防へ自動通報
- 医療サービス
- 救命サービス
- 警備サービス
- 介護サービス
- 追加請求あり
- 従量課金あり
- 完全無料
- 永久無料
- 1名だけで通知開始

## Secrets / Privacy / Data Safety

- `.env`, `.env.*`, `*.pem`, `*.key`, `serviceAccount*.json`, credentials, tokens, private keys, OAuth secrets, Firebase/Twilio/Stripe/OpenAI/GitHub/AWS secrets are protected.
- Do not search for secrets. Do not print secrets. Do not copy secrets into docs, tests, logs, screenshots, or reports.
- Use `.env.example` or placeholder names only.
- If a secret is accidentally visible in user input, do not repeat it. Tell the user to rotate it if needed.
- Never include real phone numbers, email addresses, addresses, emergency contacts, billing identifiers, customer records, inquiry contents, or user IDs in logs or examples unless they are clearly fake placeholders.

## Vercel CLI / Deployment Safety

- Do not run Vercel CLI authentication or account commands unless the user explicitly asks for that exact action.
- Forbidden by default:
  - `vercel`
  - `vercel login`
  - `vercel logout`
  - `vercel whoami`
  - `vercel deploy`
  - `vercel --prod`
  - `vercel pull`
  - `vercel link`
  - `vercel inspect`
  - `vercel env`
  - `vercel logs`
  - any other `vercel ...` command that can trigger authentication, deployment, project linking, environment access, or account access.
- Do not trigger Vercel Device Authorization Flow or open an "Authorize Device" browser page.
- Do not create, edit, or rely on `.vercel/` project metadata unless the user explicitly requests it.
- Do not search for or use Vercel tokens, secrets, or environment variables.
- For production web verification, prefer public HTTP checks such as `curl` against deployed URLs.
- If Vercel Dashboard, Vercel CLI authentication, or production deployment confirmation is needed, stop and report the exact manual action required from the user.
- Never deploy to Vercel from CLI on behalf of the user without an explicit instruction that names the target command and environment.

### 日本語メモ

Vercel CLIの認証・deploy・環境変数取得・project linkは、Vercelアカウント権限やproduction deployに直結するため、Codex/AIエージェントは勝手に実行しない。必要な場合は、ユーザーがVercel Dashboardで手動確認するか、ユーザーが明示的にCLI実行を指示した時だけ行う。

## Production Deployment Safety

- Codex/AI agents must not perform production deployment.
- Forbidden by default:
  - SSH into production hosts
  - `ssh root@...`
  - changing files under `/opt/anpi-watch`
  - `git pull` on production
  - `docker-compose -f docker-compose.prod.yml ...`
  - restarting production containers
  - running production `migrate`
  - opening production Django shell
  - editing production cron
  - running `run_escalation` on production
  - modifying production secrets or environment files
  - touching production database records
- Codex may prepare and print manual deployment steps, but must not execute them.
- Production deploy, migration, restart, and production DB operations are performed manually by the user.
- If production confirmation is needed, Codex must stop and report the exact manual command or dashboard action required.
- Never run commands that can send real SMS, Push notifications, billing events, migrations, or production data changes unless the user explicitly performs them manually.

### 日本語メモ

Codex/AIエージェントは本番deployを実行しない。本番へのSSH、`git pull`、Docker再起動、migration、本番DB shell、cron変更、`run_escalation` 実行は禁止。必要な場合は、Codexは手順を提示するだけにし、ユーザーが手動で実行する。

## 危険コマンドの扱い

以下は原則禁止。必要なら手順だけ作り、ユーザーに手動実行してもらう。

- `rm -rf` の広範囲実行
- `sudo` を伴う環境変更
- 本番hostへの `ssh`
- `docker compose` / `docker-compose` の本番再起動
- production migration
- production seed / reset
- DB truncate / delete / drop
- Firebase deploy / functions deploy / hosting deploy
- Stripe本番操作
- Twilio本番送信
- メール一斉送信
- cron変更
- `.vercel/` 操作
- `.env` 取得・表示・編集

ローカル確認でも、外部送信や課金や本番データ変更につながる可能性があれば実行しない。

## 依存関係の追加

- 新しいproduction dependencyは勝手に追加しない。
- 既存依存で解決できるか先に確認する。
- 追加が必要な場合は、理由、代替案、影響、ライセンス、サイズ、保守性を報告する。
- dev dependencyでも、テスト・型・lint目的以外は慎重に扱う。

## 最終報告の形式

作業完了時は、簡潔に以下を報告する。

- 変更内容
- 触った主要ファイル
- 実行した確認コマンドと結果
- 未実行の確認と理由
- docs同期の有無
- cross-project整合確認が必要な項目
- 本番でユーザーが手動実行すべきことがあれば、その正確な手順
- 残るリスクや要確認事項

「たぶん直った」「問題ないはず」のような曖昧な言い方を避ける。確認したことと未確認のことを分ける。


## anpi-watch-landing固有の重要ルール

このリポジトリでは、文言事故を最重要リスクとして扱う。

特に守ること：

- LPコピー、CTA、料金、FAQ、SEO title/description、OGP文言、利用規約、免責事項をCodexが勝手に作らない。
- 料金が「月額300円」からズレる表示を作らない。
- 「無料」「完全無料」「追加費用なし」「一生無料」「初期費用なし」など、料金誤認につながる表現は、根拠資料がない限り使わない。
- 「救命」「命を守る」「必ず気づける」「孤独死を防ぐ」「100%通知」「24時間監視」など、過剰・保証・医療/警備誤認の表現を使わない。
- 「自動で119番」「自動で救急」「警察/消防へ自動通報」などの表現を使わない。
- 「1人登録すれば通知開始」「1名だけで見守り開始」など、2名同意ルールと矛盾する表現を使わない。
- 「医療サービス」「救命サービス」「警備サービス」「介護サービス」と誤認される表現を使わない。
- SEO meta、OGP、JSON-LD、構造化データ、画像alt、aria-label、title属性、フォーム文言などの見えにくい文言も対象にする。
- フォーム送信、問い合わせ送信、申込、決済リンク、本番公開、Vercel/Netlify/Firebase Hosting deployは厳しく扱う。

## 優先して読む場所

存在する場合は、作業内容に応じて以下を優先して確認する。

- `AGENTS.md`
- `README*`
- `docs/`
- LP文言管理ファイル
- FAQ
- 料金表
- CTA文言
- サービス説明
- 利用規約、プライバシーポリシー、特定商取引法表記、免責事項
- SEO/OGP設定
- `package.json`
- `src/`, `app/`, `pages/`, `components/`, `content/`, `public/`
- `metadata`, `head`, `seo`, `og`, `schema`, `json-ld` に関するファイル
- フォーム、問い合わせ、申込、決済リンク、外部送信に関するコード

## LP文言の変更ルール

Codexは、ユーザーまたはChatGPTから渡された確定文言を反映するだけにする。文言を自作してよいのは、明らかな誤字修正、表記ゆれの統一、既存文言の移動・整形などの低リスク作業に限る。

以下は必ず要確認：

- 新しいキャッチコピー
- 料金説明
- FAQの回答
- 免責文言
- 利用規約・プライバシーポリシー
- 特商法表記
- サービスの効果や安全性を説明する文言
- 通知開始条件の説明
- 公的機関通報に関する説明
- SEO description / OGP description

## フォーム・申込・外部連携

フォーム送信、問い合わせ、申込、決済リンク、CRM連携、メール配信、Webhookは外部影響を持つ。ローカルで確認する場合はmock、dry-run、test endpointを使う。本番に送信するコマンドや設定変更はしない。

## 変更後レビュー

LP、FAQ、料金、SEO、OGP、規約、免責、フォームに触った場合、最終報告に以下を書く。

- 変更した文言の種類
- 新規作成か、確定文言の反映か
- 料金300円ルールと矛盾しないこと
- 救命保証・自動119・医療/警備/介護誤認がないこと
- 2名同意ルールと矛盾しないこと
- docsまたは他リポジトリとの整合確認が必要か
