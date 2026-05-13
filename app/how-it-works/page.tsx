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
  ["30h", "本人", "本人SMS", "36hで連絡先Aへ通知予定と伝える"],
  ["36h", "連絡先A", "SMS通知を試行", "到達・閲覧・対応は保証しない"],
  ["42h", "連絡先B", "SMS通知を試行", "到達・閲覧・対応は保証しない"],
  [
    "48h",
    "連絡先A/B",
    "最終SMS + Email補助を試行",
    "救助・発見は保証しない",
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
        description="連絡先A/Bの2名同意が揃っていない場合、連絡先通知は開始されません。"
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
            "ショートメッセージ、スマホ通知、メールは、通信状況や端末設定によって遅れたり、届かなかったりすることがあります。",
            "配信成功と表示されても、相手が読んだことや対応したことを意味するわけではありません。",
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
