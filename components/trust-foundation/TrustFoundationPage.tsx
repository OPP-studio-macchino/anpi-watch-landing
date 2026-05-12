import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./TrustFoundationPage.module.css";

type TrustPageProps = {
  eyebrow: string;
  title: string;
  lead: string;
  actions?: Array<{ href: string; label: string }>;
  children: ReactNode;
};

type TrustSectionProps = {
  title: string;
  description?: string;
  children: ReactNode;
};

type TrustCardProps = {
  title: string;
  children: ReactNode;
};

export type TrustLink = {
  href: string;
  title: string;
  description: string;
};

export type TrustLinkGroup = {
  title: string;
  description: string;
  links: TrustLink[];
};

type TrustTableProps = {
  caption: string;
  headers: string[];
  rows: string[][];
};

type NotificationSampleProps = {
  title: string;
  target: string;
  timing: string;
  purpose: string;
  sample: string;
  notes: string[];
};

type MessageTemplateProps = {
  title: string;
  recipient: string;
  body: string;
  note: string;
};

export const trustFoundationCoreLinks: TrustLink[] = [
  {
    href: "/how-it-works",
    title: "48時間の通知ルール",
    description: "24h / 30h / 36h / 42h / 48h の流れを確認します。",
  },
  {
    href: "/pricing",
    title: "料金・課金方針",
    description: "月額300円、通知ごとの追加請求なし、通知履歴の考え方を確認します。",
  },
  {
    href: "/trust",
    title: "できること・できないこと",
    description: "通知、記録、同意、通信の限界を確認します。",
  },
];

export const trustFoundationAudienceLinks: TrustLink[] = [
  {
    href: "/for-family",
    title: "家族・パートナーの方へ",
    description: "本人同意と、事前に決める連絡ルールを確認します。",
  },
  {
    href: "/for-contacts",
    title: "連絡先の方へ",
    description: "URL同意、STOP、HELP、通知を受けた時の行動を確認します。",
  },
  {
    href: "/share-message",
    title: "説明文テンプレ",
    description: "家族や連絡先候補へ事実ベースで説明する文面を確認します。",
  },
];

export const trustFoundationOperationLinks: TrustLink[] = [
  {
    href: "/notification-samples",
    title: "通知サンプル",
    description: "本人向けSMS、連絡先SMS、同意依頼SMSの例を確認します。",
  },
  {
    href: "/help/stop",
    title: "STOP / HELP",
    description: "受信停止、HELP、再同意、連絡先の負担範囲を確認します。",
  },
  {
    href: "/delivery-status",
    title: "配信結果・通知ログ",
    description: "送信要求、送信済み、配信成功、停止中、同意待ちの読み方を確認します。",
  },
];

export const trustFoundationBeforeLinks: TrustLink[] = [
  {
    href: "/before-you-start",
    title: "登録前チェックリスト",
    description: "2名同意、毎日のOK、通信の限界が自分に合うか確認します。",
  },
];

export const trustFoundationLinkGroups: TrustLinkGroup[] = [
  {
    title: "まず確認する",
    description: "初回ユーザーが最初に見る3ページです。",
    links: trustFoundationCoreLinks,
  },
  {
    title: "関係者別に確認する",
    description: "本人、家族、連絡先候補が同じ前提を確認します。",
    links: trustFoundationAudienceLinks,
  },
  {
    title: "運用時に確認する",
    description: "通知文面、受信停止、配信結果の読み方を確認します。",
    links: trustFoundationOperationLinks,
  },
  {
    title: "登録前に確認する",
    description: "2名同意と毎日のOKが自分に合うか確認します。",
    links: trustFoundationBeforeLinks,
  },
];

export const trustFoundationLinks: TrustLink[] = [
  ...trustFoundationCoreLinks,
  ...trustFoundationAudienceLinks,
  ...trustFoundationOperationLinks,
  ...trustFoundationBeforeLinks,
];

export function TrustPage({ eyebrow, title, lead, actions, children }: TrustPageProps) {
  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <Link className={styles.backLink} href="/">
          トップへ戻る
        </Link>
        <section className={styles.hero}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.lead}>{lead}</p>
          {actions && actions.length > 0 ? (
            <div className={styles.actions}>
              {actions.map((action) => (
                <Link className={styles.actionLink} href={action.href} key={action.href}>
                  {action.label}
                </Link>
              ))}
            </div>
          ) : null}
        </section>
        {children}
      </div>
    </main>
  );
}

export function TrustSection({ title, description, children }: TrustSectionProps) {
  return (
    <section className={styles.section}>
      <header className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>{title}</h2>
        {description ? <p className={styles.sectionDescription}>{description}</p> : null}
      </header>
      {children}
    </section>
  );
}

export function TrustCard({ title, children }: TrustCardProps) {
  return (
    <article className={styles.card}>
      <h3 className={styles.cardTitle}>{title}</h3>
      {children}
    </article>
  );
}

export function TrustGrid({ children }: { children: ReactNode }) {
  return <div className={styles.grid}>{children}</div>;
}

export function TrustList({ items }: { items: string[] }) {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function TrustTable({ caption, headers, rows }: TrustTableProps) {
  return (
    <div className={styles.tableWrap}>
      <table className={styles.table}>
        <caption className={styles.tableCaption}>{caption}</caption>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header} scope="col">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.join("|")}>
              {row.map((cell, index) => (
                <td key={`${row[0]}-${index}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function TrustLinkGrid({ links = trustFoundationLinks }: { links?: TrustLink[] }) {
  return (
    <div className={styles.linkGrid}>
      {links.map((link) => (
        <Link className={styles.linkCard} href={link.href} key={link.href}>
          <span className={styles.linkTitle}>{link.title}</span>
          <span className={styles.linkDescription}>{link.description}</span>
        </Link>
      ))}
    </div>
  );
}

export function NotificationSample({
  title,
  target,
  timing,
  purpose,
  sample,
  notes,
}: NotificationSampleProps) {
  return (
    <article className={styles.sampleCard}>
      <header className={styles.sampleHeader}>
        <h3 className={styles.sampleTitle}>{title}</h3>
      </header>
      <div className={styles.sampleMeta}>
        <span className={styles.metaBadge}>対象: {target}</span>
        <span className={styles.metaBadge}>タイミング: {timing}</span>
        <span className={styles.metaBadge}>目的: {purpose}</span>
      </div>
      <p className={styles.sampleText}>{sample}</p>
      <div className={styles.note}>
        <TrustList items={notes} />
      </div>
    </article>
  );
}

export function NotificationSampleGrid({ children }: { children: ReactNode }) {
  return <div className={styles.sampleGrid}>{children}</div>;
}

export function MessageTemplate({ title, recipient, body, note }: MessageTemplateProps) {
  return (
    <article className={styles.sampleCard}>
      <header className={styles.sampleHeader}>
        <h3 className={styles.sampleTitle}>{title}</h3>
      </header>
      <div className={styles.sampleMeta}>
        <span className={styles.metaBadge}>相手: {recipient}</span>
      </div>
      <p className={styles.sampleText}>{body}</p>
      <p className={styles.templateNote}>{note}</p>
    </article>
  );
}
