import type { Metadata } from "next";
import Link from "next/link";
import { LegalSection, LegalTable } from "../../components/legal/LegalSection";
import { tokushohoRows } from "../../components/legal/legalPublicContent";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表示 | あんぴッチ",
  description: "あんぴッチのApp Store内課金による月額サブスクリプションの表示です。",
  alternates: {
    canonical: "/tokushoho",
  },
};

export default function TokushohoPage() {
  return (
    <main className="wrapper">
      <section className="hero">
        <p className="badge">Legal</p>
        <h1>特定商取引法に基づく表示</h1>
        <p className="lead">
          あんぴッチの有料プランは、App Storeのアプリ内課金による月額サブスクリプションとして提供されます。
        </p>
        <div className="actions">
          <Link className="secondary" href="/terms">
            利用規約
          </Link>
          <Link className="secondary" href="/support">
            サポート
          </Link>
        </div>
      </section>

      <LegalSection title="表示">
        <LegalTable caption="特定商取引法に基づく表示" headers={["項目", "表示内容"]} rows={tokushohoRows} />
      </LegalSection>

      <LegalSection title="関連リンク">
        <LegalTable
          caption="公開Legal URL"
          headers={["項目", "URL"]}
          rows={[
            ["プライバシーポリシー", "/privacy"],
            ["利用規約", "/terms"],
            ["Privacy Choices", "/privacy-choices"],
            ["サポート", "/support"],
          ]}
        />
      </LegalSection>
    </main>
  );
}
