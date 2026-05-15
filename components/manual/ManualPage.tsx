import Link from "next/link";
import styles from "./ManualPage.module.css";
import { trustFoundationLinkGroups } from "../trust-foundation/TrustFoundationPage";

import {
    billingRows,
    billingSteps,
    closingPoints,
    contactASteps,
    contactBasics,
    contactBeforeChecks,
    contactBSteps,
    contactCompletionChecks,
    contactConsentNotes,
    contactInputNotes,
    contactMessageExample,
    contactStatusStates,
    contactStopNotes,
    contactTroubles,
    consentStates,
    dailySteps,
    escalationTimeline,
    faqs,
    keyFacts,
    notificationRows,
    recordChecks,
    recordSteps,
    setupReminders,
    setupSteps,
    snoozeSteps,
    successChecks,
    tocItems,
    type Tone,
} from "./manualData";

function toneClass(tone: Tone) {
    if (tone === "success") return styles.toneSuccess;
    if (tone === "info") return styles.toneInfo;
    if (tone === "warning") return styles.toneWarning;
    if (tone === "critical") return styles.toneCritical;
    return styles.toneNeutral;
}

function badgeClass(tone: Tone) {
    if (tone === "success") return styles.badgeSuccess;
    if (tone === "info") return styles.badgeInfo;
    if (tone === "warning") return styles.badgeWarning;
    if (tone === "critical") return styles.badgeCritical;
    return styles.badgeNeutral;
}

function timelineClass(tone: Tone) {
    if (tone === "info") return styles.timelineToneInfo;
    if (tone === "warning") return styles.timelineToneWarning;
    if (tone === "critical") return styles.timelineToneCritical;
    return "";
}

function SectionHeader({
    id,
    eyebrow,
    title,
    description,
}: {
    id: string;
    eyebrow: string;
    title: string;
    description: string;
}) {
    return (
        <header className={styles.sectionHeader}>
            <p className={styles.eyebrow}>{eyebrow}</p>
            <h2 id={id}>{title}</h2>
            <p>{description}</p>
        </header>
    );
}

function StepList({
    steps,
    title,
}: {
    title: string;
    steps: readonly { title: string; outcome: string }[];
}) {
    return (
        <article className={styles.card}>
            <h3>{title}</h3>
            <div className={styles.rowList}>
                {steps.map((step, index) => (
                    <div key={`${step.title}-${index}`} className={styles.row}>
                        <strong>
                            {index + 1}. {step.title}
                        </strong>
                        <p className={styles.meta}>
                            <span style={{ color: "var(--manual-status-info)" }}>
                                こうなればOK:
                            </span>{" "}
                            {step.outcome}
                        </p>
                    </div>
                ))}
            </div>
        </article>
    );
}

function StatusBadge({ tone, label }: { tone: Tone; label: string }) {
    return <span className={`${styles.badge} ${badgeClass(tone)}`}>{label}</span>;
}

function ScreenPreview({ type }: { type: "home" | "contacts" | "settings" }) {
    if (type === "home") {
        return (
            <div className={styles.screen} aria-hidden="true">
                <div className={styles.statusBanner}>
                    <strong>今の状態: 通知前</strong>
                    <StatusBadge tone="success" label="通知前" />
                </div>
                <div className={styles.okButton}>
                    <div>
                        <span>今の時刻で記録</span>
                        <strong>OK</strong>
                    </div>
                </div>
                <div className={styles.rowList}>
                    <div className={styles.row}>
                        <strong>通知前</strong>
                        <p className={styles.meta}>次の通知までの残り時間を見ます。</p>
                    </div>
                    <div className={styles.row}>
                        <strong>最後のOK</strong>
                        <p className={styles.meta}>今日 09:42</p>
                    </div>
                    <div className={styles.row}>
                        <strong>OKから</strong>
                        <p className={styles.meta}>12分</p>
                    </div>
                    <div className={styles.row}>
                        <strong>次の予定</strong>
                        <p className={styles.meta}>24時間で本人へスマホ通知</p>
                    </div>
                </div>
                <div className={styles.chipRow}>
                    <span className={styles.chip}>1時間</span>
                    <span className={styles.chip}>3時間</span>
                    <span className={styles.chip}>6時間</span>
                </div>
            </div>
        );
    }

    if (type === "contacts") {
        return (
            <div className={styles.screen} aria-hidden="true">
                <div className={styles.rowList}>
                    <div className={styles.row}>
                        <strong>連絡先A</strong>
                        <p className={styles.meta}>名前 / 電話番号</p>
                        <StatusBadge tone="warning" label="同意待ち" />
                    </div>
                    <div className={styles.row}>
                        <strong>連絡先B</strong>
                        <p className={styles.meta}>名前 / 電話番号</p>
                        <StatusBadge tone="success" label="同意済み" />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.screen} aria-hidden="true">
            <div className={styles.recordList}>
                <div className={styles.recordItem}>
                    <StatusBadge tone="info" label="スマホ通知" />
                    <strong className={styles.recordLabel}>本人への通知</strong>
                    <div className={styles.recordMeta}>
                        <span>本人</span>
                        <span>24時間経過後 09:00</span>
                        <span>送信済み</span>
                    </div>
                </div>
                <div className={styles.billingRow}>
                    <div className={styles.billingHead}>
                        <StatusBadge tone="warning" label="通知予告" />
                        <span className={styles.amount}>本人SMS</span>
                    </div>
                    <p>36時間で連絡先AへSMSを送ります。</p>
                </div>
            </div>
        </div>
    );
}

export function ManualPage() {
    return (
        <main className={styles.page}>
            <div className={styles.shell}>
                <div className={styles.headerGrid}>
                    <header className={styles.hero}>
                        <p className={styles.eyebrow}>ユーザーマニュアル</p>
                        <h1 className={styles.title}>使い方ガイド</h1>
                        <p className={styles.lead}>
                            あんぴッチの使い方を、順番に確認できます。
                        </p>
                        <p className={styles.lead}>
                            はじめて使う方は、まず「毎日のOK」「連絡先の同意」「通知の流れ」から読んでください。
                        </p>
                        <a className={styles.jumpLink} href="#setup">
                            最初の準備を見る
                        </a>

                        <div className={styles.factGrid}>
                            {keyFacts.map((fact) => (
                                <article key={fact.title} className={styles.factCard}>
                                    <StatusBadge tone={fact.tone} label={fact.title} />
                                    <h2 className={styles.factTitle}>{fact.title}</h2>
                                    <p className={styles.factBody}>{fact.body}</p>
                                </article>
                            ))}
                        </div>
                    </header>

                    <nav className={styles.toc} aria-label="目次">
                        <div className={styles.tocCard}>
                            <p className={styles.tocTitle}>このページで分かること</p>
                            <div className={styles.tocList}>
                                {tocItems.map((item) => (
                                    <a
                                        key={item.id}
                                        className={styles.tocLink}
                                        href={`#${item.id}`}
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </nav>
                </div>

                <div className={styles.bodyGrid}>
                    <div aria-hidden="true" />

                    <div className={styles.content}>
                        <section
                            id="overview"
                            className={styles.section}
                            aria-labelledby="overview-title"
                        >
                            <SectionHeader
                                id="overview-title"
                                eyebrow="まず最初に"
                                title="このアプリは『返事がない時間』を見て、順番に知らせるアプリです"
                                description="このアプリが見るのは、最後にOKを押した時刻です。危険や死亡を判断するアプリではありません。ホーム画面では、今の状態・次に何が起きるか・あなたが次にすることを見ます。"
                            />
                            <div className={styles.miniGrid}>
                                <article className={styles.previewCard}>
                                    <span className={styles.previewLabel}>毎日見る画面</span>
                                    <h3>ふだんはホームでOKを押します</h3>
                                    <p>
                                        1日1回、ホームの大きなOKボタンを押します。アプリを開いただけではOKは記録されません。OKボタンを押した時刻が最後のOKとして記録されます。
                                    </p>
                                    <ScreenPreview type="home" />
                                </article>
                                <article className={styles.previewCard}>
                                    <span className={styles.previewLabel}>最初の大事な準備</span>
                                    <h3>連絡先は2人必要です</h3>
                                    <p>
                                        本人確認のあとに連絡先A・Bを登録します。本人確認が完了すると、連絡先2人のURL同意前でもOKは記録できます。ただし、連絡先A・Bの2人がURLから同意済みになるまで連絡先への通知は始まりません。
                                    </p>
                                    <ScreenPreview type="contacts" />
                                </article>
                            </div>
                        </section>

                        <section
                            id="trust-foundation"
                            className={styles.section}
                            aria-labelledby="trust-foundation-title"
                        >
                            <SectionHeader
                                id="trust-foundation-title"
                                eyebrow="はじめに読むページ"
                                title="料金、連絡先の同意、通知の流れを確認できます"
                                description="何を知りたいか、どんな時に読むかに合わせて選べます。"
                            />
                            <div className={styles.rowList}>
                                {trustFoundationLinkGroups.map((group) => (
                                    <div key={group.title} className={styles.row}>
                                        <strong>{group.title}</strong>
                                        <p className={styles.meta}>{group.description}</p>
                                        <div className={styles.factGrid}>
                                            {group.links.map((link) => (
                                                <article
                                                    key={link.href}
                                                    className={styles.factCard}
                                                >
                                                    <h3 className={styles.factTitle}>
                                                        {link.title}
                                                    </h3>
                                                    <p className={styles.factBody}>
                                                        {link.description}
                                                    </p>
                                                    <Link
                                                        className={styles.tocLink}
                                                        href={link.href}
                                                    >
                                                        確認する
                                                    </Link>
                                                </article>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section
                            id="setup"
                            className={styles.section}
                            aria-labelledby="setup-title"
                        >
                            <SectionHeader
                                id="setup-title"
                                eyebrow="最初の準備"
                                title="最初は本人確認から始めます"
                                description="ホームに「まず本人確認をします」と表示されたら、電話番号を確認してSMSのリンクを開きます。そのあとホームで準備中の状態を確認し、連絡先Aと連絡先Bを登録します。本人確認が完了すると、連絡先2人のURL同意前でもOKは記録できます。ただし、連絡先A・Bの2人がURLから同意済みになるまで連絡先への通知は始まりません。"
                            />
                            <div className={styles.split}>
                                <StepList title="準備の流れ" steps={setupSteps} />
                                <article className={styles.card}>
                                    <h3>連絡先の状態の見方</h3>
                                    <div className={styles.statusGrid}>
                                        {consentStates.map((state) => (
                                            <div
                                                key={state.label}
                                                className={`${styles.card} ${toneClass(state.tone)}`}
                                            >
                                                <StatusBadge
                                                    tone={state.tone}
                                                    label={state.label}
                                                />
                                                <h3>{state.summary}</h3>
                                                <p>{state.detail}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <ul className={styles.list}>
                                        {setupReminders.map((item) => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>
                                </article>
                            </div>
                        </section>

                        <section
                            id="contacts"
                            className={styles.section}
                            aria-labelledby="contacts-title"
                        >
                            <SectionHeader
                                id="contacts-title"
                                eyebrow="連絡先の登録"
                                title="連絡先A・Bを登録する"
                                description="本人確認が終わったら、連絡先A（1人目）と連絡先B（2人目）を登録します。連絡先A/Bには名前と電話番号が必要で、メールは任意です。登録は同意のお願いの準備で、登録しただけでは同意済みになりません。連絡先本人がSMSのリンクを開いて同意します。本人確認が完了していれば、連絡先2人のURL同意前でもOKは記録できます。ただし、2人ともURLから同意済みになるまで連絡先への通知は始まりません。"
                            />

                            <div className={styles.rowList}>
                                <div className={styles.split}>
                                    <article className={styles.card}>
                                        <StatusBadge tone="info" label="AとBの違い" />
                                        <h3>先にA、次にBへ知らせます</h3>
                                        <ul className={styles.list}>
                                            {contactBasics.map((item) => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ul>
                                    </article>

                                    <article className={`${styles.card} ${styles.toneWarning}`}>
                                        <StatusBadge tone="warning" label="登録前に確認" />
                                        <h3>登録する前に確認すること</h3>
                                        <ul className={styles.list}>
                                            {contactBeforeChecks.map((item) => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ul>
                                        <div className={styles.rowList}>
                                            <div className={styles.row}>
                                                <strong>先に一言伝える例</strong>
                                                <ul className={styles.list}>
                                                    {contactMessageExample.map((item) => (
                                                        <li key={item}>{item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </article>
                                </div>

                                <div className={styles.split}>
                                    <StepList
                                        title="連絡先A（1人目）を登録する"
                                        steps={contactASteps}
                                    />
                                    <StepList
                                        title="連絡先B（2人目）を登録する"
                                        steps={contactBSteps}
                                    />
                                </div>

                                <div className={styles.split}>
                                    <article className={styles.card}>
                                        <StatusBadge tone="info" label="入力方法" />
                                        <h3>電話帳から選ぶか、手で入力します</h3>
                                        <ul className={styles.list}>
                                            {contactInputNotes.map((item) => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ul>
                                    </article>

                                    <article className={styles.card}>
                                        <StatusBadge tone="warning" label="同意のお願いSMS" />
                                        <h3>登録後に相手の同意が必要です</h3>
                                        <ul className={styles.list}>
                                            {contactConsentNotes.map((item) => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ul>
                                    </article>
                                </div>

                                <div className={styles.split}>
                                    <article className={styles.card}>
                                        <h3>画面に出る状態の意味</h3>
                                        <div className={styles.statusGrid}>
                                            {contactStatusStates.map((state) => (
                                                <div
                                                    key={state.label}
                                                    className={`${styles.card} ${toneClass(state.tone)}`}
                                                >
                                                    <StatusBadge
                                                        tone={state.tone}
                                                        label={state.label}
                                                    />
                                                    <h3>{state.summary}</h3>
                                                    <p>{state.detail}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </article>

                                    <article className={`${styles.card} ${styles.toneCritical}`}>
                                        <StatusBadge tone="critical" label="STOP" />
                                        <h3>受け取りを止めた連絡先には送りません</h3>
                                        <ul className={styles.list}>
                                            {contactStopNotes.map((item) => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ul>
                                    </article>
                                </div>

                                <article className={styles.card}>
                                    <h3>よくあるつまずき</h3>
                                    <div className={styles.faqList}>
                                        {contactTroubles.map((item) => (
                                            <article key={item.question} className={styles.faqCard}>
                                                <h3>Q. {item.question}</h3>
                                                <ol className={styles.faqAnswers}>
                                                    {item.answers.map((answer) => (
                                                        <li key={answer}>{answer}</li>
                                                    ))}
                                                </ol>
                                            </article>
                                        ))}
                                    </div>
                                </article>

                                <div className={styles.split}>
                                    <article className={`${styles.card} ${styles.toneSuccess}`}>
                                        <StatusBadge tone="success" label="登録と同意の目安" />
                                        <h3>4つそろったら通知の準備を確認できます</h3>
                                        <ul className={styles.list}>
                                            {contactCompletionChecks.map((item) => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ul>
                                        <p>
                                            まだ「同意待ち」が残っている場合は、相手にSMSのリンクを確認してもらいます。
                                        </p>
                                        <p>
                                            「停止中」がある場合は、その連絡先にはSMSを送れません。必要に応じて、別の連絡先を登録してください。
                                        </p>
                                    </article>

                                    <article className={`${styles.card} ${styles.toneWarning}`}>
                                        <StatusBadge tone="warning" label="最後に確認" />
                                        <h3>登録しただけでは準備完了ではありません</h3>
                                        <p>
                                            連絡先登録では、2人を登録することと、2人がURLから同意済みになることを分けて確認します。電話番号を入力しただけでは同意済みではありません。本人確認が完了していれば同意前でもOKは記録できますが、連絡先への通知は連絡先Aと連絡先Bの両方が同意済みになるまで始まりません。
                                        </p>
                                    </article>
                                </div>
                            </div>
                        </section>

                        <section
                            id="daily"
                            className={styles.section}
                            aria-labelledby="daily-title"
                        >
                            <SectionHeader
                                id="daily-title"
                                eyebrow="毎日すること"
                                title="毎日することは、ホームでOKを1回押すだけです"
                                description="1日1回、ホームの大きなOKボタンを押します。アプリを開いただけではOKは記録されません。OKボタンを押した時刻が最後のOKとして記録されます。ホームでは、通知前、今の状態、最後のOK、OKから、次の予定を見ます。"
                            />
                            <div className={styles.split}>
                                <article className={styles.previewCard}>
                                    <span className={styles.previewLabel}>ホームの見本</span>
                                    <h3>いちばん大事なのは OK です</h3>
                                    <p>
                                        ホームでは OK
                                        が中心です。ほかの操作より先に、まずOKを押します。
                                    </p>
                                    <ScreenPreview type="home" />
                                </article>
                                <div className={styles.rowList}>
                                    <StepList title="毎日の流れ" steps={dailySteps} />
                                    <article className={styles.card}>
                                        <h3>こう見えたら終わりです</h3>
                                        <ul className={styles.list}>
                                            {successChecks.map((item) => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ul>
                                    </article>
                                </div>
                            </div>

                            <div className={styles.split}>
                                <StepList title="通知だけ止めたい時" steps={snoozeSteps} />
                                <article className={`${styles.card} ${styles.toneWarning}`}>
                                    <StatusBadge tone="warning" label="通知の一時停止" />
                                    <h3>一時停止は『通知だけ止める』機能です</h3>
                                    <p>
                                        時間のカウントは止まりません。OKを押さないままなら、24時間、30時間、36時間、42時間、48時間以上の順に進みます。
                                    </p>
                                </article>
                            </div>
                        </section>

                        <section
                            id="escalation"
                            className={styles.section}
                            aria-labelledby="escalation-title"
                        >
                            <SectionHeader
                                id="escalation-title"
                                eyebrow="反応がない時の流れ"
                                title="長く反応がない時は、決まった時間で順番に進みます"
                                description="誰に、いつ、何が起きるかを隠しません。このアプリは危険、死亡、病気、今いる場所を判断しません。反応がない時間に合わせて、順番にお知らせします。"
                            />
                            <article className={styles.card}>
                                <h3>24時間から48時間までの流れ</h3>
                                <ol className={styles.timelineList}>
                                    {escalationTimeline.map((item) => (
                                        <li
                                            key={item.time}
                                            className={`${styles.timelineItem} ${timelineClass(item.tone)}`}
                                        >
                                            <div className={styles.timelineCard}>
                                                <p className={styles.timelineTime}>{item.time}</p>
                                                <p className={styles.timelineTitle}>{item.title}</p>
                                                <p className={styles.timelineDetail}>
                                                    {item.detail}
                                                </p>
                                            </div>
                                        </li>
                                    ))}
                                </ol>
                            </article>
                        </section>

                        <section
                            id="records"
                            className={styles.section}
                            aria-labelledby="records-title"
                        >
                            <SectionHeader
                                id="records-title"
                                eyebrow="記録と通知履歴"
                                title="『だれに、いつ、何を送ったか』をあとで見返せます"
                                description="あとで確認できると、言った言わないを減らせます。送信の結果と通知履歴は、設定から見ます。"
                            />
                            <div className={styles.split}>
                                <article className={styles.previewCard}>
                                    <span className={styles.previewLabel}>設定の見本</span>
                                    <h3>記録は設定から見ます</h3>
                                    <p>
                                        『通知の記録』と『通知履歴』を、あとで何度でも見返せます。
                                    </p>
                                    <ScreenPreview type="settings" />
                                </article>
                                <div className={styles.rowList}>
                                    <StepList title="通知の記録を見る" steps={recordSteps} />
                                    <StepList title="通知履歴を見る" steps={billingSteps} />
                                </div>
                            </div>

                            <div className={styles.split}>
                                <article className={styles.card}>
                                    <h3>ここで確認できること</h3>
                                    <ul className={styles.list}>
                                        {recordChecks.map((item) => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>

                                    <div className={styles.recordList}>
                                        {notificationRows.map((row) => (
                                            <div
                                                key={`${row.channel}-${row.recipient}-${row.sentAt}`}
                                                className={styles.recordItem}
                                            >
                                                <StatusBadge tone={row.tone} label={row.channel} />
                                                <strong className={styles.recordLabel}>
                                                    {row.template}
                                                </strong>
                                                <div className={styles.recordMeta}>
                                                    <span>{row.recipient}</span>
                                                    <span>{row.sentAt}</span>
                                                    <span>{row.result}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </article>

                                <article className={styles.card}>
                                    <h3>通知履歴の見え方</h3>
                                    <div className={styles.recordList}>
                                        {billingRows.map((row) => (
                                            <div key={row.state} className={styles.billingRow}>
                                                <div className={styles.billingHead}>
                                                    <StatusBadge
                                                        tone={row.tone}
                                                        label={row.state}
                                                    />
                                                    <span className={styles.amount}>
                                                        {row.amount}
                                                    </span>
                                                </div>
                                                <strong className={styles.recordLabel}>
                                                    {row.trigger}
                                                </strong>
                                                <p>{row.detail}</p>
                                            </div>
                                        ))}
                                    </div>
                                </article>
                            </div>
                        </section>

                        <section id="faq" className={styles.section} aria-labelledby="faq-title">
                            <SectionHeader
                                id="faq-title"
                                eyebrow="よくある質問"
                                title="止まった場所を見つけて、そこから直します"
                                description="まず、どの画面で止まったかを見ます。次に、画面に出ている言葉をそのまま確認します。"
                            />
                            <div className={styles.faqList}>
                                {faqs.map((faq) => (
                                    <article key={faq.question} className={styles.faqCard}>
                                        <h3>Q. {faq.question}</h3>
                                        <ol className={styles.faqAnswers}>
                                            {faq.answers.map((answer) => (
                                                <li key={answer}>{answer}</li>
                                            ))}
                                        </ol>
                                    </article>
                                ))}
                            </div>
                        </section>

                        <section
                            id="summary"
                            className={styles.section}
                            aria-labelledby="summary-title"
                        >
                            <SectionHeader
                                id="summary-title"
                                eyebrow="最後に確認"
                                title="これだけ覚えれば使えます"
                                description="毎日の中心は OK です。迷った時は、連絡先の状態と設定の記録を見ます。"
                            />
                            <ol className={styles.summaryList}>
                                {closingPoints.map((item, index) => (
                                    <li key={item} className={styles.summaryItem}>
                                        <span className={styles.summaryNumber}>{index + 1}</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ol>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}
