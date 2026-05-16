import type { Metadata } from "next";
import Link from "next/link";
import { LegalDraftNotice } from "../../../components/legal/LegalDraftNotice";
import { LegalList, LegalSection, LegalTable } from "../../../components/legal/LegalSection";
import {
  decidedServiceFacts,
  draftNoindexRobots,
  legalReviewStatus,
  noGuaranteeFacts,
  privacyChoicesItems,
  privacyDataRows,
  privacyNoGoItems,
  privacyProviderRows,
  privacyPurposeItems,
  privacyRetentionItems,
  privacyReviewRows,
  pricingFacts,
  unknownStatus,
} from "../../../components/legal/legalDraftContent";

export const metadata: Metadata = {
  title: "Privacy Policy Draft | Legal Review | あんぴッチ",
  description: "Legal / Product / CXレビュー用のPrivacy Policy Draftです。本番公開には使用しません。",
  robots: draftNoindexRobots,
};

export default function PrivacyPolicyDraftPage() {
  return (
    <main className="wrapper">
      <section className="hero">
        <p className="badge">Legal Review Draft</p>
        <h1>Privacy Policy Draft</h1>
        <p className="lead">
          あんぴッチ / anpi-watchのPrivacy Policy候補を、Legal / Product / Engineering / CXが確認するためのDraftです。
          App Privacy回答、公開URL、tracking判断、データ保持/削除方針は未確定です。
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
          このページはLegal確認前のレビュー用Draftです。本番公開、App Store提出、App Store
          Connect入力にそのまま使う最終版ではありません。
        </p>
        <LegalList
          items={[
            "Privacy Policy URLは未確定です。",
            "User Privacy Choices URLの必要性は未確定 / 要Legal確認です。",
            "App Privacy回答は未確定 / 要Legal確認です。",
            "tracking判断は未確定 / 要Legal確認です。",
          ]}
        />
      </LegalSection>

      <LegalSection title="サービス概要">
        <LegalList items={[...decidedServiceFacts, ...noGuaranteeFacts]} />
      </LegalSection>

      <LegalSection title="料金と通知条件">
        <LegalList items={pricingFacts} />
      </LegalSection>

      <LegalSection title="収集する可能性があるデータ">
        <p>
          以下は実装照合に基づく棚卸し候補であり、App Privacy回答の最終判断ではありません。
        </p>
        <LegalTable
          caption="Data inventory candidate"
          headers={["Data item", "Status", "Review note"]}
          rows={privacyDataRows}
        />
      </LegalSection>

      <LegalSection title="利用目的候補">
        <LegalList items={privacyPurposeItems} />
      </LegalSection>

      <LegalSection title="第三者提供 / 外部送信候補">
        <LegalTable
          caption="Provider candidate"
          headers={["Provider candidate", "Purpose", "Data candidate", "Status"]}
          rows={privacyProviderRows}
        />
      </LegalSection>

      <LegalSection title="データ保持 / 削除">
        <LegalList items={privacyRetentionItems} />
      </LegalSection>

      <LegalSection title="User rights / privacy choices">
        <LegalList items={privacyChoicesItems} />
      </LegalSection>

      <LegalSection title="Tracking">
        <p>
          Tracking該当性は未確定 / 要Legal確認です。Twilio、Apple / APNs、App Store /
          StoreKit、hosting、support、analytics候補を含め、Legal確認後にApp Privacy回答とPrivacy
          Policyへ反映します。
        </p>
      </LegalSection>

      <LegalSection title="Security">
        <p>
          本サービスは、アクセス制御、通信保護、署名検証、監査ログ、PIIマスキング等の安全管理措置を検討・実装します。
          ただし、このDraftでは実装詳細や過度な保証は行いません。完全な安全性、漏えいゼロ、障害ゼロは保証しない扱いです。
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <LegalList
          items={[
            `事業者情報: ${unknownStatus}`,
            `住所: ${unknownStatus}`,
            `電話番号: ${unknownStatus}`,
            `メールアドレス: ${unknownStatus}`,
            `運営責任者名: ${unknownStatus}`,
            `問い合わせフォーム: ${legalReviewStatus}`,
          ]}
        />
      </LegalSection>

      <LegalSection title="Revision history">
        <LegalTable
          caption="Revision history"
          headers={["Date", "Status", "Notes"]}
          rows={[["2026-05-16", "Draft for review", "Legal / Product / Engineering / CX確認前。"]]}
        />
      </LegalSection>

      <LegalSection title="確認事項">
        <LegalTable caption="Review items" headers={["Owner", "Items"]} rows={privacyReviewRows} />
      </LegalSection>

      <LegalSection title="No-Go条件">
        <LegalList items={privacyNoGoItems} />
      </LegalSection>
    </main>
  );
}
