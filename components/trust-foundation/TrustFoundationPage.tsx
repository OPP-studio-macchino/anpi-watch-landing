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
    title: "通知の流れを見る",
    description: "24h / 30h / 36h / 42h / 48h の流れを確認します。",
  },
  {
    href: "/pricing",
    title: "月額300円の料金",
    description: "料金と解約・返金の説明を確認します。",
  },
  {
    href: "/trust",
    title: "できること・できないことを見る",
    description: "通知で分かること、分からないこと、知っておくことを確認します。",
  },
];

export const trustFoundationAudienceLinks: TrustLink[] = [
  {
    href: "/for-family",
    title: "本人に提案したい方へ",
    description: "家族・パートナーとして本人に説明する時の前提を確認します。",
  },
  {
    href: "/for-contacts",
    title: "連絡先としてSMSを受け取る方へ",
    description: "URLを開いて同意すること、STOP、HELP、通知を受けた時の行動を確認します。",
  },
  {
    href: "/share-message",
    title: "提案・依頼の文面テンプレ",
    description: "家族・パートナーから本人へ提案する文面を確認します。",
  },
];

export const trustFoundationOperationLinks: TrustLink[] = [
  {
    href: "/notification-samples",
    title: "通知サンプルを見る",
    description: "本人向けSMS、連絡先SMS、同意依頼SMSの例を確認します。",
  },
  {
    href: "/help/stop",
    title: "SMSを止めたい時・内容を確認したい時",
    description: "SMSを止めたい時や、HELPで説明を確認したい時の方法を確認します。",
  },
  {
    href: "/delivery-status",
    title: "通知履歴の見方",
    description: "通知が送れたか、送れなかったか、どう読めばよいかを確認します。",
  },
];

export const trustFoundationBeforeLinks: TrustLink[] = [
  {
    href: "/before-you-start",
    title: "始める前のチェックリスト",
    description: "連絡先2人の同意、毎日のOK、通知が届かない場合があることを確認します。",
  },
];

export const trustFoundationLinkGroups: TrustLinkGroup[] = [
  {
    title: "はじめに読むページ",
    description: "料金、連絡先の同意、通知の流れを、はじめに確認できます。",
    links: trustFoundationCoreLinks,
  },
  {
    title: "読む人に合わせて選ぶ",
    description: "本人に提案したい方、連絡先としてSMSを受け取る方、説明文を用意したい方はこちら。",
    links: trustFoundationAudienceLinks,
  },
  {
    title: "通知が届いた時に見る",
    description: "実際に届く通知、SMSを止める方法、通知履歴の見方を確認できます。",
    links: trustFoundationOperationLinks,
  },
  {
    title: "始める前に確認する",
    description: "連絡先2人の同意、毎日のOK、通知が届かない場合があることを確認してから始められます。",
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
        <span className={styles.metaBadge}>誰に届くか: {target}</span>
        <span className={styles.metaBadge}>いつ届くか: {timing}</span>
        <span className={styles.metaBadge}>何のためか: {purpose}</span>
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
