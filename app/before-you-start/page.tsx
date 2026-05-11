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
  title: "登録前チェックリスト | あんぴッチ",
  description: "あんぴッチが自分に合うかを、2名同意、毎日のOK、月額料金、通信の限界から確認します。",
};

const checklistItems = [
  "iPhoneでの利用を前提にできる。",
  "毎日OKを押す意思がある。",
  "連絡先候補が2人いる。",
  "2人に事前説明できる。",
  "連絡先本人のURL同意が必要だと理解している。",
  "2名同意が揃うまで通知は開始されないと理解している。",
  "36h / 42h / 48h の通知は月額料金に含まれ、追加料金なしだと理解している。",
  "通知エピソード履歴は課金履歴ではなく、透明性のための記録だと理解している。",
  "SMS / Push / Email は遅延や不達があり得ると理解している。",
  "救命・発見・所在確認は保証しません。",
  "緊急時は電話や公的緊急連絡手段など別手段が必要だと理解している。",
];

const relatedLinks = [
  {
    href: "/for-family",
    title: "家族・パートナー向け説明",
    description: "本人同意と事前ルールを家族側から確認します。",
  },
  {
    href: "/for-contacts",
    title: "連絡先向け説明",
    description: "URL同意と通知を受けた時の行動を確認します。",
  },
  {
    href: "/how-it-works",
    title: "48時間の通知ルール",
    description: "24h / 30h / 36h / 42h / 48h の流れを確認します。",
  },
  {
    href: "/pricing",
    title: "料金・課金方針",
    description: "月額料金と通知エピソード履歴の考え方を確認します。",
  },
  {
    href: "/trust",
    title: "できること・できないこと",
    description: "保証しないことと通信の限界を確認します。",
  },
];

export default function BeforeYouStartPage() {
  return (
    <TrustPage
      eyebrow="Before You Start"
      title="登録前チェックリスト"
      lead="あんぴッチは、全員に向くサービスではありません。2名の連絡先同意と、毎日のOK習慣が必要です。"
      actions={[
        { href: "/for-family", label: "家族・パートナー向け説明を見る" },
        { href: "/for-contacts", label: "連絡先向け説明を見る" },
        { href: "/how-it-works", label: "48時間の通知ルールを見る" },
      ]}
    >
      <TrustSection
        title="登録前に確認すること"
        description="救命保証や自動通報を期待している場合は向いていません。登録前に、2名の連絡先候補と説明できる関係があるかを確認してください。"
      >
        <TrustList items={checklistItems} />
      </TrustSection>

      <TrustSection title="向いている人">
        <TrustList
          items={[
            "一人暮らし。",
            "2名以上の協力連絡先がいる。",
            "本人と連絡先で事前にルールを決められる。",
            "監視ではなく透明な連絡ルールを求めている。",
            "毎日OKを続ける意思がある。",
          ]}
        />
      </TrustSection>

      <TrustSection title="向いていない人">
        <TrustGrid>
          <TrustCard title="前提が合わない場合">
            <TrustList
              items={[
                "連絡先2名を確保できない。",
                "本人や連絡先に説明せず始めたい。",
                "価格だけで選びたい。",
              ]}
            />
          </TrustCard>
          <TrustCard title="期待する機能が違う場合">
            <TrustList
              items={[
                "救命保証を期待している。",
                "自動通報や駆けつけを期待している。",
                "位置追跡やバイタル監視を求めている。",
              ]}
            />
          </TrustCard>
        </TrustGrid>
      </TrustSection>

      <TrustSection title="次に読むページ">
        <TrustLinkGrid links={relatedLinks} />
      </TrustSection>
    </TrustPage>
  );
}
