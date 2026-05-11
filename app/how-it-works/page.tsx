import type { Metadata } from "next";
import {
  TrustCard,
  TrustGrid,
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
  ["24h", "本人", "Push通知", "なし", "連絡先には送らない"],
  ["30h", "本人", "本人SMS", "なし", "36hで連絡先Aへ通知予定と伝える"],
  ["36h", "連絡先A", "SMS通知を試行", "なし", "到達・閲覧・対応は保証しない"],
  ["42h", "連絡先B", "SMS通知を試行", "なし", "到達・閲覧・対応は保証しない"],
  [
    "48h",
    "連絡先A/B",
    "最終SMS + Email補助を試行",
    "なし",
    "救助・発見は保証しない",
  ],
];

export default function HowItWorksPage() {
  return (
    <TrustPage
      eyebrow="How It Works"
      title="48時間の通知ルール"
      lead="最終OKからの時間経過に基づいて、本人向け通知から連絡先向け通知へ段階的に進みます。追加料金は発生しません。"
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
          headers={["時間", "対象", "起きること", "追加料金", "注意"]}
          rows={notificationRows}
        />
      </TrustSection>

      <TrustSection title="OKとスヌーズの扱い">
        <TrustGrid>
          <TrustCard title="OK">
            <p>
              OKを押すとlast_seen_atが更新され、時間判定の状態が戻ります。
            </p>
          </TrustCard>
          <TrustCard title="スヌーズ">
            <p>
              スヌーズは通知を静かにするだけで、最終OKからの時間判定は止めません。
            </p>
          </TrustCard>
        </TrustGrid>
      </TrustSection>

      <TrustSection title="通知の限界">
        <TrustList
          items={[
            "配信結果は端末・通信・迷惑判定・OS設定などにより変動します。",
            "送信要求の受理は、相手の閲覧や対応を意味しません。",
            "救命・発見・所在確認は保証しません。",
          ]}
        />
      </TrustSection>
    </TrustPage>
  );
}
