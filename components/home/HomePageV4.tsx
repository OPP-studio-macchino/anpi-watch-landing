import Link from "next/link";
import { AppStoreBadgeLink } from "../site/AppStoreBadgeLink";
import { appStoreHref } from "../site/SiteNavigation";
import styles from "./HomePageV4.module.css";

const steps = [
    {
        number: "01",
        title: "1日1回、「今日も大丈夫」の合図を送る",
        body: "数秒で完了。アプリでは、この合図を「OK」としてサーバーへ記録します。",
        icon: "check",
    },
    {
        number: "02",
        title: "連絡先2名が内容を確認して同意",
        body: "本人が登録しただけでは通知は始まりません。2名がそれぞれ自分で同意してから稼働します。",
        icon: "people",
    },
    {
        number: "03",
        title: "合図が途切れた時だけ、段階通知",
        body: "最初は本人へ。その後、決めた連絡先へ順番にSMSの送信を試みます。",
        icon: "route",
    },
] as const;

const timeline = [
    {
        time: "24時間",
        target: "本人",
        channel: "Push通知",
        detail: "まず本人のiPhoneへ通知を試みます。",
    },
    {
        time: "30時間",
        target: "本人",
        channel: "SMS",
        detail: "本人の電話番号へSMSの送信を試みます。",
    },
    {
        time: "36時間",
        target: "1人目",
        channel: "SMS",
        detail: "1人目の連絡先へ、連絡を試すためのSMSを送信します。",
    },
    {
        time: "42時間",
        target: "2人目",
        channel: "SMS",
        detail: "2人目の連絡先へ、連絡を試すためのSMSを送信します。",
    },
    {
        time: "48時間",
        target: "2名",
        channel: "最終SMS",
        detail: "同意済みの2名へ最終SMSを送信します。",
    },
] as const;

const does = [
    "毎日の「今日も大丈夫」の合図をサーバーへ記録",
    "合図が途切れた時に段階通知を試行",
    "同意した2名だけを連絡先に設定",
    "送信・配達結果を事実ベースで記録",
    "STOPによる受信停止と再同意を管理",
] as const;

const doesNot = [
    "常時の位置情報追跡",
    "病気・事故・死亡・危険の検知",
    "家族や管理者による無断監視",
    "救命・発見・通知到達の保証",
    "119・警察・消防への自動通報",
] as const;

const audiences = [
    {
        eyebrow: "自分のために",
        title: "ひとり暮らしの連絡ルールを、自分で整える。",
        body: "利用条件、通知の流れ、2名への依頼内容を確認してから始められます。",
        href: "/before-you-start",
        cta: "始める前に確認する",
    },
    {
        eyebrow: "家族・知人から",
        title: "監視ではなく、本人と話し合って決める。",
        body: "本人に代わって管理するサービスではありません。紹介する前に、できることと限界を確認できます。",
        href: "/for-family",
        cta: "本人への説明を見る",
    },
    {
        eyebrow: "連絡先として",
        title: "何が届くか、断れるか、STOPできるかを知る。",
        body: "同意は連絡先本人が行います。依頼を受けた方が、自分で判断するための説明です。",
        href: "/for-contacts",
        cta: "連絡先向け説明を見る",
    },
] as const;

const notificationSamples = [
    {
        time: "30時間",
        recipient: "本人へ",
        body: "最終OKから30時間が経過しました。36時間になると、1人目の連絡先へSMSの送信を試みます。",
    },
    {
        time: "36時間",
        recipient: "1人目の連絡先へ",
        body: "本人のOKが36時間以上確認できていません。電話やメッセージで連絡をお試しください。",
    },
    {
        time: "48時間",
        recipient: "2名へ",
        body: "本人のOKが48時間以上確認できていません。これが最終通知です。ご確認をお願いします。",
    },
] as const;

const faqItems = [
    {
        question: "位置情報は共有されますか？",
        answer: "いいえ。あんぴッチは常時の位置情報追跡を行いません。",
    },
    {
        question: "連絡先を登録したら、すぐ通知が始まりますか？",
        answer: "いいえ。2名がそれぞれ同意URLで明示同意するまで、連絡先向けの運用通知は始まりません。",
    },
    {
        question: "通知ごとに追加料金はかかりますか？",
        answer: "かかりません。月額300円で、36時間・42時間・48時間の段階通知に追加料金はありません。",
    },
    {
        question: "救急や警察へ自動通報しますか？",
        answer: "しません。本サービスは公的機関への自動通報、救命、救助、発見を保証するサービスではありません。",
    },
] as const;

function Icon({ type }: { type: "check" | "people" | "route" | "shield" | "clock" | "bell" }) {
    const paths = {
        check: <path d="m5 12 4 4L19 6" />,
        people: (
            <>
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </>
        ),
        route: (
            <>
                <circle cx="6" cy="19" r="2" />
                <circle cx="18" cy="5" r="2" />
                <path d="M8 19h3a4 4 0 0 0 4-4v-1a4 4 0 0 1 4-4h1" />
            </>
        ),
        shield: (
            <>
                <path d="M20 13c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V5l8-3 8 3v8Z" />
                <path d="m9 12 2 2 4-4" />
            </>
        ),
        clock: (
            <>
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
            </>
        ),
        bell: (
            <>
                <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </>
        ),
    };

    return (
        <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            {paths[type]}
        </svg>
    );
}

function PhoneFrame({
    src,
    alt,
    className = "",
}: {
    src: string;
    alt: string;
    className?: string;
}) {
    return (
        <figure className={`${styles.phoneFrame} ${className}`.trim()}>
            <div className={styles.phoneFrameInner}>
                <img
                    src={src}
                    alt={alt}
                    width={944}
                    height={2048}
                    loading="lazy"
                    decoding="async"
                />
            </div>
        </figure>
    );
}

export function HomePageV4() {
    return (
        <main className={styles.page}>
            <section className={styles.hero} aria-labelledby="lp-v4-title">
                <div className={styles.heroGlow} aria-hidden="true" />
                <div className={styles.heroInner}>
                    <div className={styles.heroCopy}>
                        <p className={styles.eyebrow}>ひとり暮らしの連絡ルール</p>
                        <h1 id="lp-v4-title">
                            <span>1日1回、「今日も大丈夫」の合図を。</span>
                            <span>合図が途切れた時は、決めた人へ。</span>
                        </h1>
                        <p className={styles.heroLead}>
                            あんぴッチは、本人が1日1回「今日も大丈夫」の合図を送り、一定時間その合図が途切れた時に、あらかじめ同意した2名へ段階的に通知を試みるiPhoneアプリです。
                        </p>
                        <div className={styles.heroActions}>
                            <AppStoreBadgeLink href={appStoreHref} ctaId="lp_v4_hero_appstore" />
                            <Link
                                href="/for-family"
                                className={styles.secondaryButton}
                                data-cta-id="lp_v4_hero_family"
                            >
                                家族・知人に説明する
                            </Link>
                        </div>
                        <ul className={styles.trustChips} aria-label="料金と開始条件">
                            <li>月額300円</li>
                            <li>通知追加料金なし</li>
                            <li>2名の同意後に開始</li>
                        </ul>
                        <p className={styles.heroNote}>
                            危険・病気・事故・死亡・位置情報を検知するサービスではありません。
                        </p>
                    </div>

                    <div className={styles.heroVisual} aria-label="実際のあんぴッチ ホーム画面">
                        <PhoneFrame
                            src="/brand/home-ok.webp"
                            alt="あんぴッチのホーム画面。通知稼働中で、OKを記録できる状態"
                            className={styles.heroPhone}
                        />
                        <div className={styles.successCard}>
                            <Icon type="check" />
                            <span>
                                <strong>OKを受け付けました</strong>
                                <small>サーバーで記録を確認</small>
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.problem} aria-labelledby="problem-title">
                <div className={styles.narrowCopy}>
                    <p className={styles.sectionLabel}>WHY</p>
                    <h2 id="problem-title">
                        「便りがないのは元気な便り」。
                        <br />
                        でも、便りが途切れた時の連絡先は、
                        <br />
                        元気なうちに決めておける。
                    </h2>
                    <p className={styles.problemLead}>
                        毎日、長い電話やメッセージを交わさなくてもいい。
                    </p>
                    <div className={styles.problemGrid}>
                        <p>毎日連絡を取り合うのは負担になる。</p>
                        <p>位置情報を共有し続ける必要もない。</p>
                    </div>
                    <p className={styles.problemConclusion}>
                        1日1回の<strong>「今日も大丈夫」の合図</strong>と、
                        <br />
                        合図が途切れた時に連絡する2名を決めておく。
                    </p>
                </div>
            </section>

            <section className={styles.section} id="how-it-works" aria-labelledby="how-title">
                <div className={styles.sectionHeader}>
                    <p className={styles.sectionLabel}>HOW IT WORKS</p>
                    <h2 id="how-title">仕組みは、3ステップです。</h2>
                    <p>難しい設定や、常時の監視はありません。</p>
                </div>
                <ol className={styles.steps}>
                    {steps.map((step) => (
                        <li key={step.number} data-step={step.number}>
                            <div className={styles.stepIcon}>
                                <Icon type={step.icon} />
                            </div>
                            <span className={styles.stepNumber}>{step.number}</span>
                            <h3>{step.title}</h3>
                            <p>{step.body}</p>
                        </li>
                    ))}
                </ol>
            </section>

            <section
                className={`${styles.section} ${styles.productScreens}`}
                aria-labelledby="screens-title"
            >
                <div className={styles.sectionHeader}>
                    <p className={styles.sectionLabel}>REAL PRODUCT</p>
                    <h2 id="screens-title">実際の画面で、状態が分かります。</h2>
                </div>
                <div className={styles.screenGrid}>
                    <article>
                        <div>
                            <p className={styles.screenIndex}>01</p>
                            <h3>OKを短く記録</h3>
                            <p>現在の状態、前回OK、今必要な操作を一つの画面に整理しました。</p>
                        </div>
                        <PhoneFrame
                            src="/brand/home-success.webp"
                            alt="OKの受付成功を表示したホーム画面"
                        />
                    </article>
                    <article>
                        <div>
                            <p className={styles.screenIndex}>02</p>
                            <h3>2名の同意状況</h3>
                            <p>登録と同意を分け、2名がそれぞれ同意した時だけ通知が稼働します。</p>
                        </div>
                        <PhoneFrame
                            src="/brand/contacts-demo.webp"
                            alt="架空のデモ情報を使った連絡先2名の同意状況画面"
                        />
                    </article>
                    <article>
                        <div>
                            <p className={styles.screenIndex}>03</p>
                            <h3>通知の流れと記録</h3>
                            <p>最終OKからの時間、通知先、チャネルを後から確認できます。</p>
                        </div>
                        <PhoneFrame
                            src="/brand/records.webp"
                            alt="24時間から48時間までの段階通知を表示した記録画面"
                        />
                    </article>
                </div>
            </section>

            <section
                className={`${styles.section} ${styles.timelineSection}`}
                id="timeline"
                aria-labelledby="timeline-title"
            >
                <div className={styles.timelineIntro}>
                    <p className={styles.sectionLabel}>48-HOUR RULE</p>
                    <h2 id="timeline-title">本人から連絡先へ、順番にお知らせ。</h2>
                    <p>
                        いきなり連絡先へ通知するのではなく、まず本人へ確認を促します。2名の連絡先が同意済みで、有効な状態の時だけ連絡先向け通知を試みます。
                    </p>
                    <Link href="/how-it-works" className={styles.textLink}>
                        通知ルールを詳しく見る <span aria-hidden="true">→</span>
                    </Link>
                </div>
                <ol className={styles.timeline}>
                    {timeline.map((item, index) => (
                        <li key={item.time}>
                            <span className={styles.timelineDot} aria-hidden="true">
                                {index + 1}
                            </span>
                            <div>
                                <p className={styles.timelineTime}>{item.time}</p>
                                <h3>
                                    {item.target}へ {item.channel}
                                </h3>
                                <p>{item.detail}</p>
                            </div>
                        </li>
                    ))}
                </ol>
                <p className={styles.disclaimerLine}>
                    通知は外部通信に依存します。到達・閲覧・対応・救命・発見を保証するものではありません。
                </p>
            </section>

            <section
                className={`${styles.section} ${styles.comparisonSection}`}
                id="not-monitoring"
                aria-labelledby="comparison-title"
            >
                <div className={styles.sectionHeader}>
                    <p className={styles.sectionLabel}>QUIET CONNECTION</p>
                    <h2 id="comparison-title">いつもは静かに。必要な時だけ、つながる。</h2>
                    <p>「安心」という言葉で曖昧にせず、することと、しないことを分けます。</p>
                </div>
                <div className={styles.comparisonGrid}>
                    <article>
                        <div className={styles.comparisonTitle}>
                            <Icon type="check" />
                            <h3>あんぴッチがすること</h3>
                        </div>
                        <ul>
                            {does.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </article>
                    <article className={styles.comparisonMuted}>
                        <div className={styles.comparisonTitle}>
                            <Icon type="shield" />
                            <h3>あんぴッチがしないこと</h3>
                        </div>
                        <ul>
                            {doesNot.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </article>
                </div>
            </section>

            <section
                className={`${styles.section} ${styles.audienceSection}`}
                id="for-who"
                aria-labelledby="audience-title"
            >
                <div className={styles.sectionHeader}>
                    <p className={styles.sectionLabel}>CHOOSE YOUR VIEW</p>
                    <h2 id="audience-title">立場に合った説明から確認できます。</h2>
                    <p>本人、家族・知人、連絡先では、知るべきことと責任が違います。</p>
                </div>
                <div className={styles.audienceGrid}>
                    {audiences.map((audience) => (
                        <article key={audience.href}>
                            <p>{audience.eyebrow}</p>
                            <h3>{audience.title}</h3>
                            <div>{audience.body}</div>
                            <Link href={audience.href}>
                                {audience.cta} <span aria-hidden="true">→</span>
                            </Link>
                        </article>
                    ))}
                </div>
            </section>

            <section
                className={`${styles.section} ${styles.samplesSection}`}
                aria-labelledby="samples-title"
            >
                <div className={styles.samplesIntro}>
                    <p className={styles.sectionLabel}>MESSAGE PREVIEW</p>
                    <h2 id="samples-title">届く内容を、同意の前に確認。</h2>
                    <p>通知は恐怖を煽らず、確認できた事実と次の行動だけを伝えます。</p>
                    <Link href="/notification-samples" className={styles.textLink}>
                        すべての通知文を見る <span aria-hidden="true">→</span>
                    </Link>
                </div>
                <div className={styles.sampleCards}>
                    {notificationSamples.map((sample) => (
                        <article key={sample.time}>
                            <div>
                                <span>{sample.time}</span>
                                <strong>{sample.recipient}</strong>
                            </div>
                            <p>{sample.body}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section
                className={`${styles.section} ${styles.pricingSection}`}
                id="pricing"
                aria-labelledby="pricing-title"
            >
                <div className={styles.pricingCard}>
                    <div className={styles.pricingCopy}>
                        <p className={styles.sectionLabel}>PRICE</p>
                        <h2 id="pricing-title">月額300円。通知ごとの追加料金はありません。</h2>
                        <p>ダウンロードは無料です。利用には月額サブスクリプションが必要です。</p>
                        <AppStoreBadgeLink href={appStoreHref} ctaId="lp_v4_pricing_appstore" />
                    </div>
                    <div className={styles.pricingAmount}>
                        <p>月額</p>
                        <strong>
                            300<span>円</span>
                        </strong>
                        <small>日本のApp Store価格</small>
                    </div>
                    <ul className={styles.pricingIncludes}>
                        <li>毎日のOK記録</li>
                        <li>連絡先2名</li>
                        <li>24・30・36・42・48時間の段階通知</li>
                        <li>通知履歴・配達状態</li>
                        <li>STOP・再同意の管理</li>
                    </ul>
                    <Link href="/pricing" className={styles.pricingLink}>
                        料金とサブスクリプションを詳しく確認する
                    </Link>
                </div>
            </section>

            <section
                className={`${styles.section} ${styles.faqSection}`}
                aria-labelledby="faq-title"
            >
                <div className={styles.sectionHeader}>
                    <p className={styles.sectionLabel}>FAQ</p>
                    <h2 id="faq-title">よくある確認</h2>
                </div>
                <div className={styles.faqList}>
                    {faqItems.map((item) => (
                        <details key={item.question}>
                            <summary>{item.question}</summary>
                            <p>{item.answer}</p>
                        </details>
                    ))}
                </div>
                <Link href="/manual/faq" className={styles.textLink}>
                    FAQをすべて見る <span aria-hidden="true">→</span>
                </Link>
            </section>

            <section className={styles.finalCta} aria-labelledby="final-cta-title">
                <img
                    src="/brand/app-icon.png"
                    alt=""
                    width={1024}
                    height={1024}
                    aria-hidden="true"
                />
                <p className={styles.sectionLabel}>ANPITCH</p>
                <h2 id="final-cta-title">元気なうちに、もしもの時の連絡先を決めておく。</h2>
                <p>ひとりで暮らす自由を、静かに支える。</p>
                <AppStoreBadgeLink href={appStoreHref} ctaId="lp_v4_final_appstore" />
                <small>iPhone対応｜月額300円｜連絡先2名の同意後に開始</small>
            </section>

            <div className={styles.mobileCta}>
                <span>
                    <strong>あんぴッチ</strong>
                    <small>月額300円・通知追加料金なし</small>
                </span>
                <AppStoreBadgeLink
                    href={appStoreHref}
                    variant="button"
                    label="App Storeで見る"
                    ctaId="lp_v4_mobile_sticky"
                />
            </div>
        </main>
    );
}

export { faqItems };
