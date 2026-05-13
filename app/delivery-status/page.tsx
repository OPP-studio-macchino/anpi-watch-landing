import type { Metadata } from "next";
import {
  TrustLinkGrid,
  TrustList,
  TrustPage,
  TrustSection,
  TrustTable,
} from "../../components/trust-foundation/TrustFoundationPage";

export const metadata: Metadata = {
  title: "配信結果・通知ログの読み方 | あんぴッチ",
  description: "通知履歴、送信要求、送信済み、配信成功、配信失敗、停止中、同意待ちの意味を説明します。",
};

const deliveryRows = [
  ["送信要求", "システムが送信を試みた", "相手に届いたこと"],
  ["送信済み", "外部サービスまたは上流へ渡した", "相手が読んだこと"],
  ["配信成功", "到達確認が返った", "読まれたこと、対応されたこと"],
  [
    "配信失敗",
    "送れなかった、または到達確認できなかった可能性",
    "一切の連絡手段がないこと",
  ],
  ["停止中", "STOPなどにより送信しない状態", "本人の状態が確認されたこと"],
  ["同意待ち", "連絡先本人の同意が未成立", "通知稼働中であること"],
];

const relatedLinks = [
  {
    href: "/how-it-works",
    title: "48時間の通知ルール",
    description: "24h / 30h / 36h / 42h / 48h の流れを確認します。",
  },
  {
    href: "/notification-samples",
    title: "通知サンプル",
    description: "本人向けSMS、連絡先SMS、同意依頼SMSの例を確認します。",
  },
  {
    href: "/trust",
    title: "できること・できないこと",
    description: "通信の限界や保証しないことを確認します。",
  },
];

export default function DeliveryStatusPage() {
  return (
    <TrustPage
      eyebrow="Delivery Status"
      title="配信結果・通知ログの読み方"
      lead="通知履歴は、誰に・いつ・どの通知を送ったかを確認するための履歴です。配信成功は、読まれたことや対応されたことを意味しません。"
      actions={[
        { href: "/how-it-works", label: "48時間の通知ルールを見る" },
        { href: "/notification-samples", label: "通知サンプルを見る" },
        { href: "/trust", label: "できること・できないことを見る" },
      ]}
    >
      <TrustSection
        title="通知履歴とは"
        description="誰に・いつ・どの通知を送ったかを確認するための履歴です。"
      >
        <p>
          通知履歴は、誰に・いつ・どの通知を送ったかを確認するための履歴です。
        </p>
      </TrustSection>

      <TrustSection title="配信結果の意味">
        <TrustTable
          caption="配信結果と、それが意味しないこと"
          headers={["表示", "意味", "意味しないこと"]}
          rows={deliveryRows}
        />
      </TrustSection>

      <TrustSection title="なぜログを見せるのか">
        <p>
          安心演出ではなく、事実・段階・限界を確認できるようにするためです。通知したという表現は、送信要求、送信済み、配信成功を分けて見ます。
        </p>
      </TrustSection>

      <TrustSection title="配信失敗時にできること">
        <TrustList
          items={[
            "電話や別チャネルで確認する。",
            "連絡先情報を見直す。",
            "STOP状態や同意状態を確認する。",
            "緊急の危険が明らかな場合は公的緊急連絡手段を使う。",
          ]}
        />
      </TrustSection>

      <TrustSection title="通信の限界">
        <TrustList
          items={[
            "SMS / Push / Email は通信事業者、端末、OS設定、迷惑判定、外部サービス障害などの影響を受けます。",
            "外部サービスの受理は、端末到達、閲覧、対応を意味しません。",
            "通信状況によって、遅延や不達が生じる場合があります。",
          ]}
        />
      </TrustSection>

      <TrustSection title="関連ページ">
        <TrustLinkGrid links={relatedLinks} />
      </TrustSection>
    </TrustPage>
  );
}
