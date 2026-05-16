import type { Metadata } from "next";
import Link from "next/link";
import { LegalDraftNotice } from "../../../components/legal/LegalDraftNotice";
import { LegalList, LegalSection, LegalTable } from "../../../components/legal/LegalSection";
import {
  contactChoiceRows,
  dataDeletionRows,
  draftNoindexRobots,
  noGuaranteeFacts,
  pricingFacts,
  privacyChoiceRows,
  privacyChoicesNoGoItems,
  privacyChoicesReviewRows,
  privacyChoicesUnconfirmedItems,
} from "../../../components/legal/legalDraftContent";

export const metadata: Metadata = {
  title: "User Privacy Choices Draft | Legal Review | あんぴッチ",
  description: "Legal / Product / CXレビュー用のUser Privacy Choices Draftです。本番公開には使用しません。",
  robots: draftNoindexRobots,
};

export default function PrivacyChoicesDraftPage() {
  return (
    <main className="wrapper">
      <section className="hero">
        <p className="badge">Legal Review Draft</p>
        <h1>User Privacy Choices Draft</h1>
        <p className="lead">
          User Privacy Choices URL候補ページとデータ削除/同意撤回導線を、Legal / Product / Engineering / CXが確認するためのDraftです。
          User Privacy Choices URLが必要かは未確認です。
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
          このページはLegal確認前のレビュー用Draftです。削除対象、保持例外、保持期間、連絡先本人からの削除依頼処理、
          Apple transaction dataの扱いはLegal / Engineering確認が必要です。
        </p>
      </LegalSection>

      <LegalSection title="ユーザーができる選択">
        <LegalTable
          caption="User choices candidate"
          headers={["Choice", "Draft handling", "Status"]}
          rows={privacyChoiceRows}
        />
      </LegalSection>

      <LegalSection title="連絡先ができる選択">
        <LegalTable
          caption="Contact choices candidate"
          headers={["Choice", "Draft handling", "Status"]}
          rows={contactChoiceRows}
        />
      </LegalSection>

      <LegalSection title="料金・通知条件の整合確認">
        <LegalList items={pricingFacts} />
      </LegalSection>

      <LegalSection title="保証しないこと">
        <LegalList items={noGuaranteeFacts} />
      </LegalSection>

      <LegalSection title="未確認事項">
        <LegalList items={privacyChoicesUnconfirmedItems} />
      </LegalSection>

      <LegalSection title="データ削除 / 保持の整理候補">
        <LegalTable
          caption="Data deletion and retention candidate"
          headers={["Data group", "Delete candidate", "Retention exception candidate", "Reviewer"]}
          rows={dataDeletionRows}
        />
      </LegalSection>

      <LegalSection title="Legal / Product / Engineering / CX確認事項">
        <LegalTable
          caption="Review items"
          headers={["Owner", "Items"]}
          rows={privacyChoicesReviewRows}
        />
      </LegalSection>

      <LegalSection title="No-Go条件">
        <LegalList items={privacyChoicesNoGoItems} />
      </LegalSection>
    </main>
  );
}
