import Link from "next/link";
import styles from "./TutorialPage.module.css";
import {
  courseChecks,
  finishChecks,
  finishPoints,
  introFacts,
  stepRail,
  tutorialNotes,
  tutorialSteps,
  type TutorialPreview,
  type TutorialTone
} from "./tutorialData";

function factClass(tone: TutorialTone) {
  if (tone === "info") return styles.factInfo;
  if (tone === "warning") return styles.factWarning;
  if (tone === "success") return styles.factSuccess;
  return styles.factNeutral;
}

function badgeClass(tone: TutorialTone) {
  if (tone === "info") return styles.badgeInfo;
  if (tone === "warning") return styles.badgeWarning;
  if (tone === "success") return styles.badgeSuccess;
  return styles.badgeNeutral;
}

function ToneBadge({ tone, label }: { tone: TutorialTone; label: string }) {
  return <span className={`${styles.badge} ${badgeClass(tone)}`}>{label}</span>;
}

function PreviewCard({ type }: { type: TutorialPreview }) {
  if (type === "home") {
    return (
      <div className={styles.phoneFrame} aria-hidden="true">
        <div className={styles.phoneTopBar} />
        <div className={styles.phoneBody}>
          <div className={styles.previewBanner}>
            <strong>今の状態 通知前</strong>
            <span>最後のOK 12分前</span>
          </div>
          <div className={styles.previewOkButton}>OK</div>
          <div className={styles.previewMetaCard}>OKから 12分</div>
          <div className={styles.previewMetaCard}>次の予定 24時間でスマホ通知</div>
        </div>
        <div className={styles.tabRow}>
          <span className={`${styles.tabChip} ${styles.tabChipActive}`}>ホーム</span>
          <span className={styles.tabChip}>連絡先</span>
          <span className={styles.tabChip}>設定</span>
        </div>
      </div>
    );
  }

  if (type === "ok") {
    return (
      <div className={styles.phoneFrame} aria-hidden="true">
        <div className={styles.phoneTopBar} />
        <div className={styles.phoneBody}>
          <div className={`${styles.previewBanner} ${styles.previewBannerCalm}`}>
            <strong>今の時刻でOKを記録しました</strong>
            <span>このあとは時刻を見ます</span>
          </div>
          <div className={`${styles.previewOkButton} ${styles.previewOkDone}`}>OK</div>
          <div className={styles.doneRow}>
            <span className={styles.doneDot}>✓</span>
            <span>押した時だけ記録されます</span>
          </div>
          <div className={styles.previewMetaCard}>今日の確認 たった今</div>
        </div>
        <div className={styles.tabRow}>
          <span className={`${styles.tabChip} ${styles.tabChipActive}`}>ホーム</span>
          <span className={styles.tabChip}>連絡先</span>
          <span className={styles.tabChip}>設定</span>
        </div>
      </div>
    );
  }

  if (type === "time") {
    return (
      <div className={styles.phoneFrame} aria-hidden="true">
        <div className={styles.phoneTopBar} />
        <div className={styles.phoneBody}>
          <div className={styles.previewTimeCard}>
            <span className={styles.previewLabel}>今日の確認</span>
            <strong>09:42</strong>
            <p>今の時刻に近い表示ならOKです。</p>
          </div>
          <div className={styles.previewMetaCard}>前回のOK たった今</div>
          <div className={styles.previewMetaCard}>今日の記録 1件</div>
        </div>
        <div className={styles.tabRow}>
          <span className={`${styles.tabChip} ${styles.tabChipActive}`}>ホーム</span>
          <span className={styles.tabChip}>連絡先</span>
          <span className={styles.tabChip}>設定</span>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.phoneFrame} aria-hidden="true">
      <div className={styles.phoneTopBar} />
      <div className={styles.phoneBody}>
        <div className={styles.settingRow}>
          <strong>通知の記録</strong>
          <span>開く</span>
        </div>
          <div className={styles.recordCard}>
            <div className={styles.recordHead}>
            <ToneBadge tone="info" label="スマホ通知" />
            <strong>OKを押すお知らせ</strong>
            </div>
            <p>本人 / 今日 09:00 / 送信済み</p>
        </div>
        <div className={styles.settingRow}>
          <strong>通知履歴</strong>
          <span>今月 0回</span>
        </div>
      </div>
      <div className={styles.tabRow}>
        <span className={styles.tabChip}>ホーム</span>
        <span className={styles.tabChip}>連絡先</span>
        <span className={`${styles.tabChip} ${styles.tabChipActive}`}>設定</span>
      </div>
    </div>
  );
}

export function TutorialPage() {
  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <section className={styles.hero}>
          <div className={styles.heroGrid}>
            <div>
              <p className={styles.kicker}>3分体験コース</p>
              <h1 className={styles.title}>あんぴッチは、毎日1回のOKを迷わず終えるためのアプリです。</h1>
              <p className={styles.lead}>
                このページでは、まず1回やってみます。
                <br />
                ホームを開く。OKを押す。時刻を見る。記録を見る。
              </p>
              <p className={styles.lead}>
                むずかしい設定は、ここでは後回しです。
                <br />
                まずは『今日これだけやればいい』を体で覚えます。
              </p>

              <div className={styles.heroActions}>
                <a className={styles.primaryAction} href="#step-1">
                  3分コースを始める
                </a>
                <Link className={styles.secondaryAction} href="/manual#setup">
                  先に準備を見る
                </Link>
              </div>
            </div>

            <aside className={styles.courseCard}>
              <p className={styles.cardEyebrow}>このコースでやること</p>
              <ul className={styles.checkList}>
                {courseChecks.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className={styles.courseNote}>
                <strong>先に知ること</strong>
                <p>
                  危険や死亡を判断するアプリではありません。
                  <br />
                  救助や発見を保証するものではありません。
                </p>
              </div>
            </aside>
          </div>

          <div className={styles.factGrid}>
            {introFacts.map((fact) => (
              <article key={fact.title} className={`${styles.factCard} ${factClass(fact.tone)}`}>
                <ToneBadge tone={fact.tone} label={fact.title} />
                <h2>{fact.title}</h2>
                <p>{fact.body}</p>
              </article>
            ))}
          </div>
        </section>

        <nav className={styles.rail} aria-label="体験コースの手順">
          {stepRail.map((item, index) => (
            <a key={item.id} className={styles.railItem} href={`#${item.id}`}>
              <span className={styles.railNumber}>{index + 1}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        <section className={styles.notesSection} aria-labelledby="notes-title">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>はじめる前に</p>
            <h2 id="notes-title">先にこれだけ知っておくと、途中で止まりにくいです。</h2>
          </div>
          <div className={styles.noteGrid}>
            {tutorialNotes.map((item) => (
              <article key={item} className={styles.noteCard}>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.stepsSection} aria-labelledby="steps-title">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>3分でやってみる</p>
            <h2 id="steps-title">1つずつ、短い言葉で進みます。</h2>
            <p>
              各ステップでは、
              <strong> 何を押すか </strong>
              と
              <strong> どう見えたら終わりか </strong>
              だけを見ます。
            </p>
          </div>

          <div className={styles.stepList}>
            {tutorialSteps.map((step) => (
              <article key={step.id} id={step.id} className={styles.stepCard}>
                <div className={styles.stepCopy}>
                  <div className={styles.stepHeading}>
                    <span className={styles.stepNumber}>{step.number}</span>
                    <div>
                      <p className={styles.stepKicker}>STEP {step.number}</p>
                      <h3>{step.title}</h3>
                    </div>
                  </div>

                  <p className={styles.stepSummary}>{step.summary}</p>
                  <p className={styles.stepHelper}>{step.helper}</p>

                  <div className={styles.actionList}>
                    {step.actions.map((action, index) => (
                      <div key={`${step.id}-${index}`} className={styles.actionRow}>
                        <strong>{index + 1}. {action.title}</strong>
                        <p>できた目印: {action.outcome}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={styles.stepPreview}>
                  <p className={styles.previewEyebrow}>画面の見本</p>
                  <PreviewCard type={step.preview} />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="step-5" className={styles.finishSection} aria-labelledby="finish-title">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>最後の確認</p>
            <h2 id="finish-title">ここまでできれば、今日の体験は終わりです。</h2>
            <p>最初の1回で全部を覚える必要はありません。次からは、同じ流れをくり返すだけです。</p>
          </div>

          <div className={styles.finishGrid}>
            <article className={styles.finishCard}>
              <p className={styles.cardEyebrow}>できた目印</p>
              <ul className={styles.checkList}>
                {finishChecks.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className={styles.finishCardAlt}>
              <p className={styles.cardEyebrow}>次からの使い方</p>
              <ul className={styles.pointList}>
                {finishPoints.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className={styles.finishActions}>
                <Link className={styles.primaryAction} href="/manual">
                  くわしいマニュアルを見る
                </Link>
                <a className={styles.secondaryAction} href="#step-1">
                  もう一度はじめから見る
                </a>
              </div>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}
