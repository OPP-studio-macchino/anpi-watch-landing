import type { Metadata } from "next";
import Link from "next/link";
import { LegalList, LegalSection, LegalTable } from "../../components/legal/LegalSection";
import {
  pricingAndConsentItems,
  publicLegalStatus,
  serviceScopeItems,
  tokushohoOpenItems,
  tokushohoRows,
} from "../../components/legal/legalPublicContent";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記 | あんぴッチ",
  description: "あんぴッチの特定商取引法に基づく表記です。",
  alternates: {
    canonical: "/tokushoho",
  },
};

export default function TokushohoPage() {
  return (
    <main className="wrapper">
      <section className="hero">
        <p className="badge">Legal</p>
        <h1>特定商取引法に基づく表記</h1>
        <p className="lead">
          あんぴッチの月額サブスクリプション販売およびWeb/LP上の広告表示に関する表示事項です。
        </p>
        <p className="lead">{publicLegalStatus}</p>
        <div className="actions">
          <Link className="secondary" href="/terms">
            利用規約
          </Link>
          <Link className="secondary" href="/support">
            サポート
          </Link>
        </div>
      </section>

      <LegalSection title="表示事項">
        <LegalTable caption="特定商取引法に基づく表記" headers={["項目", "表示内容"]} rows={tokushohoRows} />
      </LegalSection>

      <LegalSection title="決定済み情報">
        <LegalList items={pricingAndConsentItems} />
      </LegalSection>

      <LegalSection title="サービスの性質">
        <LegalList items={serviceScopeItems} />
      </LegalSection>

      <LegalSection title="最終確認中の項目">
        <LegalList items={tokushohoOpenItems} />
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
