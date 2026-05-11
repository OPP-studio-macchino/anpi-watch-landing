import type { Metadata } from "next";
import {
  TrustCard,
  TrustGrid,
  TrustLinkGrid,
  TrustList,
  TrustPage,
  TrustSection,
} from "../../components/trust-foundation/TrustFoundationPage";

export const metadata: Metadata = {
  title: "料金・課金方針 | あんぴッチ",
  description: "あんぴッチの月額料金、連絡先通知、通知エピソード履歴の考え方を説明します。",
};

const relatedLinks = [
  {
    href: "/delivery-status",
    title: "配信結果・通知ログ",
    description: "通知エピソード履歴と配信結果の読み方を確認します。",
  },
  {
    href: "/how-it-works",
    title: "48時間の通知ルール",
    description: "段階通知の流れと追加料金なしの扱いを確認します。",
  },
  {
    href: "/trust",
    title: "できること・できないこと",
    description: "通信の限界や保証しないことを確認します。",
  },
];

export default function PricingPage() {
  return (
    <TrustPage
      eyebrow="Pricing"
      title="料金・課金方針"
      lead="月額料金で利用できます。36h / 42h / 48h の連絡先通知は月額料金に含まれます。正式価格は準備中です。"
      actions={[
        { href: "/how-it-works", label: "通知ルールを見る" },
        { href: "/trust", label: "できること・できないことを見る" },
      ]}
    >
      <TrustSection
        title="月額料金に含まれるもの"
        description="連絡先通知は、通知のたびに料金が増える仕組みではありません。"
      >
        <TrustGrid>
          <TrustCard title="月額料金で利用">
            <p>
              MVPの正式課金は月額サブスクリプションのみです。正式価格は準備中です。
            </p>
          </TrustCard>
          <TrustCard title="段階通知は月額に含む">
            <p>
              36h / 42h / 48h の連絡先通知は月額料金に含まれます。36hで連絡先AへSMS送信を試行しても、追加料金は発生しません。
            </p>
          </TrustCard>
          <TrustCard title="通知ごとの料金増はなし">
            <p>
              36時間段階だけの消費型アプリ内購入はMVPでは作成しません。通知ごとに月額料金とは別の支払いを求める設計ではありません。
            </p>
          </TrustCard>
          <TrustCard title="実決済の扱い">
            <p>
              App Storeサブスクリプションを予定しています。実決済は月額サブスクリプションとして扱います。
            </p>
          </TrustCard>
        </TrustGrid>
      </TrustSection>

      <TrustSection
        title="通知エピソード履歴"
        description="通知エピソード履歴は、料金ではなく透明性のための記録です。"
      >
        <TrustGrid>
          <TrustCard title="確認できること">
            <TrustList
              items={[
                "誰に通知を送ったか",
                "いつ通知を送ったか",
                "どの段階の通知だったか",
                "今月の連絡先通知回数",
              ]}
            />
          </TrustCard>
          <TrustCard title="課金履歴ではありません">
            <p>
              通知エピソード履歴は、誰に・いつ・どの通知を送ったかを確認するための記録です。課金履歴ではありません。
            </p>
          </TrustCard>
        </TrustGrid>
      </TrustSection>

      <TrustSection title="解約・返金について">
        <p>
          解約や返金は、正式リリース時のApp Store表示・規約に従います。現時点では詳細未確定です。
        </p>
      </TrustSection>

      <TrustSection title="関連ページ">
        <TrustLinkGrid links={relatedLinks} />
      </TrustSection>
    </TrustPage>
  );
}
