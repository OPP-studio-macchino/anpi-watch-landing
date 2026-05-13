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
  description: "あんぴッチの月額300円、解約・返金の考え方を説明します。",
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
  "未反応時の連絡先への段階通知",
  "通知履歴と配信結果の確認",
  "STOP / HELP の説明導線",
  "できること・できないことの確認",
];

const confirmationItems = [
  "あんぴッチは、危険・事故・死亡の有無や病状を判断するサービスではありません。",
  "救命・発見・所在確認は保証しません。",
  "SMS / Push / Email の到達、閲覧、連絡先の対応は保証しません。",
  "緊急時は電話や公的緊急連絡手段など別手段も必要です。",
];

export default function PricingPage() {
  return (
    <TrustPage
      eyebrow="Pricing"
      title="料金・課金方針"
      lead="あんぴッチの利用料金は月額300円です。"
      actions={[
        { href: "/before-you-start", label: "登録前チェックリストを見る" },
        { href: "/trust", label: "できること・できないことを見る" },
      ]}
    >
      <TrustSection title="料金">
        <TrustGrid>
          <TrustCard title="月額300円">
            <p>
              1ユーザーごとの月額料金です。App Storeサブスクリプションとして提供します。
            </p>
          </TrustCard>
          <TrustCard title="月額料金に含まれるもの">
            <p>
              長い時間OKがない時の連絡先への通知も、月額料金の中で利用できます。
            </p>
          </TrustCard>
        </TrustGrid>
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
              description: "送信済みや配信成功が何を意味するかを確認します。",
            },
          ]}
        />
      </TrustSection>

      <TrustSection title="解約・返金について">
        <p>
          解約は、App Storeのサブスクリプション管理から行います。返金を希望する場合は、Appleの返金申請手続きに従って申請します。返金の可否はAppleの判断に従います。
        </p>
        <p>
          あんぴッチ側で返金可否を保証するものではありません。
        </p>
      </TrustSection>

      <TrustSection title="確認しておくこと">
        <TrustList items={confirmationItems} />
        <p>
          未反応時の通知タイミングや、連絡先へ送る内容は別ページで確認できます。
        </p>
        <TrustLinkGrid links={relatedLinks} />
      </TrustSection>
    </TrustPage>
  );
}
