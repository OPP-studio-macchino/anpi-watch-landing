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

## 文章作成のルール

- Codexに文章を書かせない。
- 文章はChatGPTが作る。
- ChatGPTが作った文章をCodexに渡す。
- 文章は、むずかしい言葉を使わない。
- 読み書きが苦手な人やお年寄りにもわかるように、やさしい言葉で書く。
