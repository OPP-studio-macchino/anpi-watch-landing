import type { Metadata } from "next";
import Link from "next/link";
import { LegalDraftNotice } from "../../../components/legal/LegalDraftNotice";
import { LegalList, LegalSection, LegalTable } from "../../../components/legal/LegalSection";
import {
  draftNoindexRobots,
  pricingFacts,
  sctaDisplayCautions,
  sctaDisplayRows,
  sctaNoGoItems,
  sctaReviewRows,
  sctaUnconfirmedItems,
  unknownStatus,
} from "../../../components/legal/legalDraftContent";

export const metadata: Metadata = {
  title: "特商法表記 Draft | Legal Review | あんぴッチ",
  description: "Legal / Product / CXレビュー用の特商法表記Draftです。本番公開には使用しません。",
  robots: draftNoindexRobots,
};

export default function SpecifiedCommercialTransactionsDraftPage() {
  return (
    <main className="wrapper">
      <section className="hero">
        <p className="badge">Legal Review Draft</p>
        <h1>特商法表記 Draft</h1>
        <p className="lead">
          あんぴッチの特商法表記候補を、Legal / 事業者 / Product / CXが確認するためのDraftです。
          事業者情報が未確認のため、本番公開、App Store Connect入力、landing公開には使用しません。
        </p>
        <div className="actions">
          <Link className="secondary" href="/legal-review">
            Legal Review一覧へ戻る
          </Link>
        </div>
        <LegalDraftNotice />
      </section>

      <LegalSection title="Draftの位置づけ">
        <p>
          このページはLegal確認前のレビュー用Draftです。事業者名、住所、電話番号、メールアドレス、
          代表者名、運営責任者名を推測で埋めていません。
        </p>
        <LegalList
          items={[
            `事業者情報: ${unknownStatus}`,
            `URL: ${unknownStatus}`,
            `返金/キャンセル方針: ${unknownStatus}`,
            `App Store課金開始日: ${unknownStatus}`,
          ]}
        />
      </LegalSection>

      <LegalSection title="表示項目候補">
        <LegalTable
          caption="特商法表記 表示項目候補"
          headers={["表示項目", "Draft value", "Status"]}
          rows={sctaDisplayRows}
        />
      </LegalSection>

      <LegalSection title="決定済み情報">
        <LegalList items={pricingFacts} />
      </LegalSection>

      <LegalSection title="未確認項目">
        <LegalList items={sctaUnconfirmedItems} />
      </LegalSection>

      <LegalSection title="誇大広告を避けるための表示注意">
        <LegalList items={sctaDisplayCautions} />
      </LegalSection>

      <LegalSection title="Legal / CX / Product確認事項">
        <LegalTable caption="Review items" headers={["Owner", "Items"]} rows={sctaReviewRows} />
      </LegalSection>

      <LegalSection title="No-Go条件">
        <LegalList items={sctaNoGoItems} />
      </LegalSection>
    </main>
  );
}
