import type { Metadata } from "next";
import { tokushohoRows } from "../../components/legal/legalPublicContent";
import {
  TrustPage,
  TrustSection,
  TrustTable,
} from "../../components/trust-foundation/TrustFoundationPage";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表示 | あんぴッチ",
  description: "あんぴッチのApp Store内課金による月額サブスクリプションの表示です。",
  alternates: {
    canonical: "/tokushoho",
  },
};

export default function TokushohoPage() {
  return (
    <TrustPage
      eyebrow="Legal"
      title="特定商取引法に基づく表示"
      lead="あんぴッチの有料プランは、App Storeのアプリ内課金による月額サブスクリプションとして提供されます。"
      heroImage={{
        src: "/page-heroes/anpittchi-tokushoho-hero-transaction-ledger.webp",
        alt: "取引条件を確認する台帳と書類のイメージ",
      }}
      actions={[
        { href: "/terms", label: "利用規約" },
        { href: "/support", label: "サポート" },
      ]}
    >
      <TrustSection title="表示">
        <TrustTable caption="特定商取引法に基づく表示" headers={["項目", "表示内容"]} rows={tokushohoRows} />
      </TrustSection>

      <TrustSection title="関連リンク">
        <TrustTable
          caption="公開Legal URL"
          headers={["項目", "URL"]}
          rows={[
            ["プライバシーポリシー", "/privacy"],
            ["利用規約", "/terms"],
            ["Privacy Choices", "/privacy-choices"],
            ["サポート", "/support"],
          ]}
        />
      </TrustSection>
    </TrustPage>
  );
}
