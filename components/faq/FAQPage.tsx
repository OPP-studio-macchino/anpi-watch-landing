import Link from "next/link";
import styles from "../manual/ManualPage.module.css";
import { trustFoundationLinkGroups } from "../trust-foundation/TrustFoundationPage";
import { faqFacts, faqSections, type FAQTone } from "./faqData";

function badgeClass(tone: FAQTone) {
  if (tone === "success") return styles.badgeSuccess;
  if (tone === "warning") return styles.badgeWarning;
  if (tone === "critical") return styles.badgeCritical;
  return styles.badgeInfo;
}

function FAQBadge({ tone, label }: { tone: FAQTone; label: string }) {
  return <span className={`${styles.badge} ${badgeClass(tone)}`}>{label}</span>;
}

export function FAQPage() {
  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <div className={styles.headerGrid}>
          <header className={styles.hero}>
            <p className={styles.eyebrow}>FAQ</p>
            <h1 className={styles.title}>よくある質問</h1>
            <p className={styles.lead}>
              あんぴッチで迷いやすい所を、答えから先に読めるようにまとめました。
            </p>
            <p className={styles.lead}>
              毎日のOK、2人の同意、通知の順番、月額料金、記録、できないことを確認できます。
            </p>
            <Link className={styles.jumpLink} href="/manual/tutorial">
              3分体験コースを見る
            </Link>

            <div className={styles.factGrid}>
              {faqFacts.map((fact) => (
                <article key={fact.title} className={styles.factCard}>
                  <FAQBadge tone={fact.tone} label={fact.title} />
                  <h2 className={styles.factTitle}>{fact.title}</h2>
                  <p className={styles.factBody}>{fact.body}</p>
                </article>
              ))}
            </div>
          </header>

          <nav className={styles.toc} aria-label="FAQの目次">
            <div className={styles.tocCard}>
              <p className={styles.tocTitle}>質問の種類</p>
              <div className={styles.tocList}>
                {faqSections.map((section) => (
                  <a key={section.id} className={styles.tocLink} href={`#${section.id}`}>
                    {section.title}
                  </a>
                ))}
              </div>
            </div>
          </nav>
        </div>

        <div className={styles.bodyGrid}>
          <div aria-hidden="true" />
          <div className={styles.content}>
            {faqSections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className={styles.section}
                aria-labelledby={`${section.id}-title`}
              >
                <header className={styles.sectionHeader}>
                  <p className={styles.eyebrow}>質問</p>
                  <h2 id={`${section.id}-title`}>{section.title}</h2>
                  <p>{section.description}</p>
                </header>

                <div className={styles.faqList}>
                  {section.items.map((item) => (
                    <article
                      key={item.faqId}
                      className={styles.faqCard}
                      data-faq-id={item.faqId}
                      data-search-keywords={item.searchKeywords.join(" ")}
                    >
                      <h3>Q. {item.question}</h3>
                      <p>
                        <strong>A. {item.answerSummary}</strong>
                      </p>

                      <ol className={styles.faqAnswers}>
                        {item.answerDetail.map((answer, index) => (
                          <li key={`${item.faqId}-answer-${index}`}>{answer}</li>
                        ))}
                      </ol>

                      <div>
                        <FAQBadge tone="info" label="次にやること" />
                        <p className={styles.factBody}>{item.nextAction}</p>
                      </div>

                      <p hidden>{item.searchKeywords.join(" / ")}</p>
                    </article>
                  ))}
                </div>
              </section>
            ))}

            <section
              id="trust-foundation"
              className={styles.section}
              aria-labelledby="trust-foundation-title"
            >
              <header className={styles.sectionHeader}>
                <p className={styles.eyebrow}>迷った時に見るページ</p>
                <h2 id="trust-foundation-title">困った時に見るページ</h2>
                <p>
                  料金、連絡先、通知、登録前の確認を、ページごとに見られます。
                </p>
              </header>

              <div className={styles.rowList}>
                {trustFoundationLinkGroups.map((group) => (
                  <div key={group.title} className={styles.row}>
                    <strong>{group.title}</strong>
                    <p className={styles.meta}>{group.description}</p>
                    <div className={styles.factGrid}>
                      {group.links.map((link) => (
                        <article key={link.href} className={styles.factCard}>
                          <h3 className={styles.factTitle}>{link.title}</h3>
                          <p className={styles.factBody}>{link.description}</p>
                          <Link className={styles.tocLink} href={link.href}>
                            確認する
                          </Link>
                        </article>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
