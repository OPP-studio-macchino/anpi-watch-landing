import Link from "next/link";
import { createPageMetadata } from "../lib/seo";

export const metadata = createPageMetadata("/");

const appStoreUrl =
    "https://apps.apple.com/jp/app/%E3%81%82%E3%82%93%E3%81%B4%E3%83%83%E3%83%81/id6763868893";

const facts = [
    {
        title: "毎日1回OK",
        body: "毎日1回、OKを押す。押せなかった時は、決めた人へ知らせる。",
    },
    {
        title: "2人が同意してから開始",
        body: "お知らせ先の2人が同意してから始まります。勝手に誰かへ通知されることはありません。",
    },
    {
        title: "月額300円・通知追加料金なし",
        body: "ダウンロードは無料です。利用には月額300円のサブスクリプションが必要です。連絡先へのお知らせに追加料金はかかりません。",
    },
];

const ruleSteps = [
    { time: "24h", target: "本人", method: "Push" },
    { time: "30h", target: "本人", method: "SMS" },
    { time: "36h", target: "連絡先A", method: "SMS" },
    { time: "42h", target: "連絡先B", method: "SMS" },
    { time: "48h", target: "連絡先A/B", method: "最終SMS" },
];

const lowerLinks = [
    {
        href: "/notification-samples",
        title: "通知サンプル",
        description: "連絡先に届く文面を見る",
        ctaId: "home_hero_notification_samples",
    },
    {
        href: "/before-you-start",
        title: "登録前チェックリスト",
        description: "登録前チェックリストを見る",
        ctaId: "home_before_start",
    },
    {
        href: "/for-contacts",
        title: "連絡先向け説明",
        description: "連絡先としてSMSを受け取る方へ",
        ctaId: "home_contact_samples",
    },
    {
        href: "/manual/faq",
        title: "FAQ",
        description: "よくある質問を見る",
        ctaId: "home_faq",
    },
];

export default function HomePage() {
    return (
        <main className="hm-home">
            <section className="hm-hero" aria-labelledby="home-title">
                <picture className="hm-hero__background">
                    <source
                        media="(max-width: 41.9375rem)"
                        srcSet="/anpittchi-hero-night-apartment-mobile.webp"
                    />
                    <img
                        src="/anpittchi-hero-night-apartment-desktop.webp"
                        alt="月明かりの少ない夜に窓のあかりが見える南仏のアパートメントの外観"
                        width={1916}
                        height={821}
                        loading="eager"
                        decoding="async"
                    />
                </picture>
                <div className="hm-hero__copy">
                    <div className="hm-brand" aria-label="あんぴッチ iPhoneアプリ">
                        <span className="hm-brand__mark" aria-hidden="true">
                            <span />
                        </span>
                        <p className="hm-brand__name">あんぴッチ</p>
                        <span className="hm-brand__chip">iPhoneアプリ</span>
                    </div>
                    <h1 id="home-title" className="hm-hero__title">
                        <span>毎日1回、OKを押す。</span>
                        <span>押せなかった時は、</span>
                        <span>決めた人へ知らせる。</span>
                    </h1>
                    <p className="hm-hero__lead">
                        あんぴッチは、ひとり暮らしの方が、もし何日も連絡できなかった時に、前もって決めた人へお知らせするiPhoneアプリです。
                    </p>
                    <div className="hm-hero__actions" aria-label="あんぴッチの主要な導線">
                        <a
                            href={appStoreUrl}
                            className="primary"
                            data-cta-id="home_hero_appstore"
                        >
                            App Storeで見る
                        </a>
                        <Link
                            href="/for-family"
                            className="secondary"
                            data-cta-id="home_hero_referrer_guide"
                        >
                            家族・知人に紹介する前に確認する
                        </Link>
                    </div>
                    <p className="hm-hero__price-note">
                        ダウンロードは無料です。利用には月額300円のサブスクリプションが必要です。連絡先へのお知らせに追加料金はかかりません。
                    </p>
                </div>
            </section>

            <section className="hm-ledger" aria-labelledby="facts-title">
                <div className="hm-section-heading">
                    <h2 id="facts-title">3つの事実</h2>
                </div>
                <dl className="hm-trust-ledger">
                    {facts.map((fact) => (
                        <div className="hm-trust-ledger__item" key={fact.title}>
                            <dt>{fact.title}</dt>
                            <dd>{fact.body}</dd>
                        </div>
                    ))}
                </dl>
            </section>

            <figure className="hm-visual-frame hm-visual-frame--daily-ok">
                <img
                    src="/anpittchi-daily-ok-checkin-lifestyle.webp"
                    alt="テーブルの上のiPhoneでOKボタンを押す日常の利用イメージ"
                    width={1672}
                    height={941}
                    loading="lazy"
                    decoding="async"
                />
            </figure>

            <section className="hm-rule-section" aria-labelledby="timeline-title">
                <div className="hm-section-heading hm-section-heading--wide">
                    <h2 id="timeline-title">48hルールの見える化</h2>
                    <p>
                        24h 本人Push、30h 本人SMS、36h 連絡先A SMS、42h 連絡先B SMS、48h A/B最終SMS を基本とします。
                    </p>
                </div>
                <figure className="hm-visual-frame hm-visual-frame--rule">
                    <img
                        src="/anpittchi-48h-notification-rule-infographic.webp"
                        alt="24時間から48時間までの段階通知ルールを示す図"
                        width={1672}
                        height={941}
                        loading="lazy"
                        decoding="async"
                    />
                </figure>
                <ol className="hm-mobile-rule-ladder">
                    {ruleSteps.map((step) => (
                        <li key={step.time}>
                            <span>{step.time}</span>
                            <strong>{step.target}</strong>
                            <small>{step.method}</small>
                        </li>
                    ))}
                </ol>
            </section>

            <section className="hm-referrer" aria-labelledby="referrer-title">
                <div className="hm-referrer__copy">
                    <h2 id="referrer-title">離れて暮らす家族や、身近な人に紹介したい方へ</h2>
                    <p>
                        本人に直接すすめる前に、何ができて、何ができないアプリなのかを確認できます。
                    </p>
                    <Link
                        href="/for-family"
                        className="primary"
                        data-cta-id="home_referrer_guide"
                    >
                        紹介する前に確認する
                    </Link>
                </div>
                <figure className="hm-visual-frame hm-visual-frame--referrer">
                    <img
                        src="/anpittchi-referrer-check-before-introduction.webp"
                        alt="家族や知人に紹介する前にアプリ内容を確認する人のイメージ"
                        width={1672}
                        height={941}
                        loading="lazy"
                        decoding="async"
                    />
                </figure>
            </section>

            <section className="hm-scope" aria-labelledby="can-cannot-title">
                <div className="hm-section-heading">
                    <h2 id="can-cannot-title">できること / できないこと</h2>
                </div>
                <div className="hm-scope__dossier">
                    <article>
                        <h3>できること</h3>
                        <p>毎日1回、OKを押す。押せなかった時は、決めた人へ知らせる。</p>
                    </article>
                    <article>
                        <h3>できないこと</h3>
                        <p>
                            病気や事故を見つけるアプリではありません。必ず助けが来ることや、必ず通知が届くことも約束できません。
                        </p>
                    </article>
                </div>
            </section>

            <section className="hm-pricing" aria-labelledby="pricing-title">
                <div className="hm-pricing__amount">
                    <h2 id="pricing-title">料金</h2>
                    <strong>月額300円</strong>
                </div>
                <div className="hm-pricing__details">
                    <p>
                        ダウンロードは無料です。
                        <br />
                        利用には月額300円のサブスクリプションが必要です。
                        <br />
                        連絡先へのお知らせに追加料金はかかりません。
                    </p>
                    <Link
                        href="/pricing"
                        className="secondary"
                        data-cta-id="home_pricing_detail"
                    >
                        料金を確認する
                    </Link>
                </div>
            </section>

            <section className="hm-index" aria-labelledby="links-title">
                <div className="hm-section-heading">
                    <h2 id="links-title">はじめに知っておきたいこと</h2>
                </div>
                <nav className="hm-document-shelf" aria-label="はじめに知っておきたいこと">
                    {lowerLinks.map((link, index) => (
                        <Link
                            href={link.href}
                            className="hm-document-shelf__item"
                            data-cta-id={link.ctaId}
                            key={link.href}
                        >
                            <span>{String(index + 1).padStart(2, "0")}</span>
                            <strong>{link.title}</strong>
                            <small>{link.description}</small>
                        </Link>
                    ))}
                </nav>
            </section>
        </main>
    );
}
