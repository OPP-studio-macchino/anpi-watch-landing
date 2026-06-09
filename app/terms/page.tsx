import type { Metadata } from "next";
import Link from "next/link";
import { LegalList, LegalSection, LegalTable } from "../../components/legal/LegalSection";
import {
  pricingAndConsentItems,
  serviceScopeItems,
  supportEmail,
  termsCancelItems,
  termsContactConsentItems,
  termsProhibitedItems,
  termsUseConditionRows,
} from "../../components/legal/legalPublicContent";

export const metadata: Metadata = {
  title: "利用規約 | あんぴッチ",
  description: "あんぴッチの利用条件を説明します。",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <main className="wrapper">
      <section className="hero">
        <p className="badge">Terms</p>
        <h1>利用規約</h1>
        <p className="lead">
          この利用規約は、あんぴッチの利用条件について説明するものです。
        </p>
        <div className="actions">
          <Link className="secondary" href="/privacy">
            プライバシーポリシー
          </Link>
          <Link className="secondary" href="/support">
            サポート
          </Link>
        </div>
      </section>

      <LegalSection title="1. サービス内容">
        <LegalList items={serviceScopeItems} />
      </LegalSection>

      <LegalSection title="2. 利用条件">
        <LegalTable
          caption="利用条件"
          headers={["条件", "内容"]}
          rows={termsUseConditionRows}
        />
      </LegalSection>

      <LegalSection title="3. 料金">
        <LegalList items={pricingAndConsentItems} />
      </LegalSection>

      <LegalSection title="4. 連絡先同意">
        <LegalList items={termsContactConsentItems} />
      </LegalSection>

      <LegalSection title="5. 禁止事項">
        <LegalList items={termsProhibitedItems} />
      </LegalSection>

      <LegalSection title="6. 解約">
        <LegalList items={termsCancelItems} />
      </LegalSection>

      <LegalSection title="7. サービス停止または障害">
        <p>
          本サービスは、保守、障害、通信事業者、APNs、Twilio、App Store、端末、OS、ネットワーク、法令対応、セキュリティ対応により、全部又は一部が利用できない場合があります。
        </p>
        <p>
          障害時も、通知到達、連絡先対応、救命、発見、所在確認は保証しません。稼働率や復旧時間について過度な保証表現を置きません。
        </p>
      </LegalSection>

      <LegalSection title="8. アカウント削除・データ請求">
        <p>
          アカウント削除や個人情報の取り扱いについては、サポート窓口からご連絡ください。本人確認のうえ、法令・利用規約・プライバシーポリシーに基づいて対応します。
        </p>
        <p>
          データ削除、連絡先本人からの問い合わせ、STOP、同意撤回については、
          <Link href="/privacy-choices"> Privacy Choices </Link>
          で案内します。
        </p>
      </LegalSection>

      <LegalSection title="9. 個人情報の取扱い">
        <p>
          ユーザーおよび連絡先の個人情報は、
          <Link href="/privacy"> プライバシーポリシー </Link>
          に従い取り扱います。
        </p>
      </LegalSection>

      <LegalSection title="10. お問い合わせ">
        <p>本規約に関するお問い合わせは、{supportEmail} までご連絡ください。</p>
      </LegalSection>

      <LegalSection title="関連リンク">
        <LegalTable
          caption="公開Legal URL"
          headers={["項目", "URL"]}
          rows={[
            ["プライバシーポリシー", "/privacy"],
            ["特定商取引法に基づく表記", "/tokushoho"],
            ["Privacy Choices", "/privacy-choices"],
            ["サポート", "/support"],
          ]}
        />
      </LegalSection>
    </main>
  );
}
