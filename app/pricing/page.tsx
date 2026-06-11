import type { Metadata } from "next";
import {
    TrustCard,
    TrustGrid,
    TrustLinkGrid,
    TrustList,
    TrustPage,
    TrustSection,
} from "../../components/trust-foundation/TrustFoundationPage";

const appStoreUrl =
    "https://apps.apple.com/jp/app/%E3%81%82%E3%82%93%E3%81%B4%E3%83%83%E3%83%81/id6763868893";

export const metadata: Metadata = {
    title: "料金・課金方針 | あんぴッチ",
    description:
        "あんぴッチの月額300円、解約・返金の考え方を説明します。",
};

const relatedLinks = [
    {
        href: "/delivery-status",
        title: "配信結果・通知ログ",
        description: "通知履歴と配信結果の読み方を確認します。",
    },
    {
        href: "/how-it-works",
        title: "48時間の通知ルール",
        description: "未反応時に誰へ何が送られるかを確認します。",
    },
    {
        href: "/trust",
        title: "できること・できないこと",
        description: "通信の限界や保証しないことを確認します。",
    },
];

const includedItems = [
    "毎日のOK記録",
    "連絡先2名の登録と同意状態の確認",
    "36h / 42h / 48h の連絡先通知",
    "通知履歴と配信結果の確認",
    "STOP / HELP の説明導線",
    "できること・できないことの確認",
];

const confirmationItems = [
    "あんぴッチは、危険・事故・死亡の有無や病状を判断するサービスではありません。",
    "救命・発見・所在確認は保証しません。",
    "通知は、通信状況や携帯電話会社の状況などにより、遅れたり届かなかったりすることがあります。",
    "通知が届いたように見えても、相手が読んだか、対応したかまでは分かりません。",
    "緊急時は電話や公的緊急連絡手段など別手段も必要です。",
];

export default function PricingPage() {
    return (
        <TrustPage
            eyebrow="Pricing"
            title="料金・課金方針"
            lead="あんぴッチの利用料金は月額300円です。"
            heroImage={{
                src: "/page-heroes/anpittchi-pricing-hero-subscription-desk.webp",
                mobileSrc: "/page-heroes/mobile/anpittchi-pricing-mobile-hero.webp",
                alt: "ノートとカードが置かれた机で月額料金を確認する画面のイメージ",
                mobileObjectPosition: "center 66%",
                mobileTone: "light",
            }}
            actions={[
                { href: "/before-you-start", label: "登録前チェックリストを見る" },
                { href: "/trust", label: "できること・できないことを見る" },
            ]}
        >
            <TrustSection title="料金">
                <TrustGrid>
                    <TrustCard title="月額300円">
                        <p>
                            ダウンロードは無料です。利用には月額300円のサブスクリプションが必要です。連絡先へのお知らせに追加料金はかかりません。
                        </p>
                    </TrustCard>
                    <TrustCard title="月額料金に含まれるもの">
                        <p>
                            毎日のOK記録、連絡先2名の登録、通知履歴の確認などが含まれます。
                        </p>
                    </TrustCard>
                </TrustGrid>
                <div className="actions">
                    <a
                        href={appStoreUrl}
                        className="primary"
                        data-cta-id="pricing_appstore"
                    >
                        App Storeで見る
                    </a>
                </div>
            </TrustSection>

            <TrustSection title="月額300円に含まれるもの">
                <TrustList items={includedItems} />
            </TrustSection>

            <TrustSection title="通知履歴について">
                <p>
                    通知が発生した場合は、誰に・いつ・どの通知を送ったかを確認できます。
                </p>
                <TrustLinkGrid
                    links={[
                        {
                            href: "/delivery-status",
                            title: "配信結果・通知ログの読み方",
                            description: "送信した記録や届いた可能性が何を意味するかを確認します。",
                        },
                    ]}
                />
            </TrustSection>

            <TrustSection title="料金FAQ">
                <TrustGrid>
                    <TrustCard title="Q. 料金はいくらですか？">
                        <p>
                            A. 料金は月額300円です。
                        </p>
                    </TrustCard>
                </TrustGrid>
            </TrustSection>

            <TrustSection title="解約・返金について">
                <p>
                    解約は、App
                    Storeのサブスクリプション管理から行います。返金を希望する場合は、Appleの返金申請手続きに従って申請します。返金の可否はAppleの判断に従います。
                </p>
                <p>あんぴッチ側で返金可否を保証するものではありません。</p>
            </TrustSection>

            <TrustSection title="確認しておくこと">
                <TrustList items={confirmationItems} />
                <p>未反応時の通知タイミングや、連絡先へ送る内容は別ページで確認できます。</p>
                <TrustLinkGrid links={relatedLinks} />
            </TrustSection>
        </TrustPage>
    );
}
