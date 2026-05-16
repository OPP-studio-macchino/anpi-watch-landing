import type { Metadata } from "next";
import {
  TrustCard,
  TrustGrid,
  TrustLinkGrid,
  TrustList,
  TrustPage,
  TrustSection,
  TrustTable,
} from "../../components/trust-foundation/TrustFoundationPage";

export const metadata: Metadata = {
  title: "48時間の通知ルール | あんぴッチ",
  description: "最終OKから24h、30h、36h、42h、48hで起きる通知ルールを説明します。",
};

const notificationRows = [
  ["24h", "本人", "スマホ通知", "連絡先には送らない"],
  ["30h", "本人", "本人SMS", "36hで連絡先AへSMSを送ります。"],
  ["36h", "連絡先A", "SMS通知を試行", "安否が確認できていないため、連絡を試してほしいと伝える"],
  ["42h", "連絡先B", "SMS通知を試行", "安否が確認できていないため、連絡を試してほしいと伝える"],
  [
    "48h",
    "連絡先A/B",
    "最終SMSを試行",
    "安否が確認できていないため、できる範囲で連絡を試してほしいと伝える",
  ],
];

const relatedLinks = [
  {
    href: "/notification-samples",
    title: "通知サンプル",
    description: "本人向けSMS、連絡先SMS、同意依頼SMSの例を確認します。",
  },
  {
    href: "/delivery-status",
    title: "通知履歴・配信結果の見方",
    description: "通知が送れたか、送れなかったか、どう読めばよいかを確認します。",
  },
  {
    href: "/trust",
    title: "できること・できないこと",
    description: "通知で分かること、分からないこと、知っておくことを確認します。",
  },
];

export default function HowItWorksPage() {
  return (
    <TrustPage
      eyebrow="How It Works"
      title="48時間の通知ルール"
      lead="最終OKからの時間経過に基づいて、本人向け通知から連絡先向け通知へ段階的に進みます。"
      actions={[
        { href: "/notification-samples", label: "通知サンプルを見る" },
        { href: "/pricing", label: "料金方針を見る" },
      ]}
    >
      <TrustSection
        title="通知タイムライン"
        description="連絡先A/Bの2名がURLから同意していない場合、連絡先通知は開始されません。"
      >
        <TrustTable
          caption="最終OKからの時間経過に基づく通知タイムライン"
          headers={["時間", "対象", "起きること", "注意"]}
          rows={notificationRows}
        />
      </TrustSection>

      <TrustSection title="OKとスヌーズの扱い">
        <TrustGrid>
          <TrustCard title="OK">
            <p>
              OKを押すと、未反応の時間カウントがリセットされます。次の通知ルールは、そのOKを基準にもう一度はじまります。
            </p>
          </TrustCard>
          <TrustCard title="スヌーズ">
            <p>
              スヌーズは通知を静かにするだけで、最終OKから数える未反応の時間カウントは止めません。
            </p>
          </TrustCard>
        </TrustGrid>
      </TrustSection>

      <TrustSection title="通知について知っておくこと">
        <TrustList
          items={[
            "ショートメッセージやスマホ通知は、通信状況や端末設定によって遅れたり、届かなかったりすることがあります。",
            "通知が届いたように見えても、相手が読んだか、対応したかまでは分かりません。",
            "料金は月額300円です。",
            "救命・発見・所在確認は保証しません。",
            "あんぴッチは、警察・消防・救急などへ自動通報するサービスではありません。緊急の危険が明らかな場合は、電話や公的緊急連絡手段など別の手段も使ってください。",
          ]}
        />
      </TrustSection>

      <TrustSection title="関連ページ">
        <TrustLinkGrid links={relatedLinks} />
      </TrustSection>
    </TrustPage>
  );
}
