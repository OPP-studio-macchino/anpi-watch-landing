import type { Metadata } from "next";
import Link from "next/link";
import { LegalDraftNotice } from "../../../components/legal/LegalDraftNotice";
import { LegalList, LegalSection, LegalTable } from "../../../components/legal/LegalSection";
import {
  draftNoindexRobots,
  noGuaranteeFacts,
  pricingFacts,
  termsCancelItems,
  termsContactConsentItems,
  termsNoGoItems,
  termsProhibitedItems,
  termsReviewRows,
  termsServiceItems,
  termsUseConditionRows,
  unknownStatus,
} from "../../../components/legal/legalDraftContent";

export const metadata: Metadata = {
  title: "Terms Draft | Legal Review | あんぴッチ",
  description: "Legal / Product / CXレビュー用のTerms Draftです。本番公開には使用しません。",
  robots: draftNoindexRobots,
};

export default function TermsDraftPage() {
  return (
    <main className="wrapper">
      <section className="hero">
        <p className="badge">Legal Review Draft</p>
        <h1>Terms Draft</h1>
        <p className="lead">
          あんぴッチ / anpi-watchの利用規約候補を、Legal / Product / Engineering / CXが確認するためのDraftです。
          事業者情報、問い合わせ窓口、準拠法/紛争解決、返金/解約運用は未確認です。
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
            `事業者情報: ${unknownStatus}`,
            `問い合わせ窓口: ${unknownStatus}`,
            `準拠法 / 紛争解決: ${unknownStatus}`,
            "App Store課金開始状態は未確認です。",
          ]}
        />
      </LegalSection>

      <LegalSection title="サービス内容">
        <LegalList items={termsServiceItems} />
      </LegalSection>

      <LegalSection title="利用条件">
        <LegalTable
          caption="利用条件候補"
          headers={["条件", "Draft"]}
          rows={termsUseConditionRows}
        />
      </LegalSection>

      <LegalSection title="禁止事項">
        <LegalList items={termsProhibitedItems} />
      </LegalSection>

      <LegalSection title="料金">
        <LegalList items={pricingFacts} />
      </LegalSection>

      <LegalSection title="解約">
        <LegalList items={termsCancelItems} />
      </LegalSection>

      <LegalSection title="免責">
        <LegalList items={noGuaranteeFacts} />
      </LegalSection>

      <LegalSection title="連絡先同意">
        <LegalList items={termsContactConsentItems} />
      </LegalSection>

      <LegalSection title="サービス停止 / 障害">
        <p>
          本サービスは、保守、障害、通信事業者、APNs、Twilio、App Store、端末、OS、ネットワーク、法令対応、
          セキュリティ対応により、全部又は一部が利用できない場合があります。
        </p>
        <p>
          障害時も、救命、発見、所在確認、通知到達、連絡先対応は保証しない扱いです。
          稼働率や復旧時間について過度な保証表現を置きません。
        </p>
      </LegalSection>

      <LegalSection title="変更">
        <p>
          規約変更時の通知方法、同意取得方法、重要変更時の扱いは未確認 / 要Legal確認です。
          アプリ内通知、Web掲示、Email、SMS等のどれを用いるかはProduct / Engineering / CX確認が必要です。
        </p>
      </LegalSection>

      <LegalSection title="準拠法 / 紛争解決">
        <p>
          準拠法、管轄、紛争解決手続は未確認 / 要Legal確認です。実値や裁判所名をこのDraftで推測しません。
        </p>
      </LegalSection>

      <LegalSection title="確認事項">
        <LegalTable caption="Review items" headers={["Owner", "Items"]} rows={termsReviewRows} />
      </LegalSection>

      <LegalSection title="No-Go条件">
        <LegalList items={termsNoGoItems} />
      </LegalSection>
    </main>
  );
}
