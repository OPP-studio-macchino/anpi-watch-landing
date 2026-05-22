import type { Metadata } from "next";
import Link from "next/link";
import { LegalList, LegalSection, LegalTable } from "../../components/legal/LegalSection";
import {
  pricingAndConsentItems,
  publicLegalStatus,
  serviceScopeItems,
  supportEmail,
  termsCancelItems,
  termsContactConsentItems,
  termsProhibitedItems,
  termsStatusItems,
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
        <p className="lead">{publicLegalStatus}</p>
        <div className="actions">
          <Link className="secondary" href="/privacy">
            プライバシーポリシー
          </Link>
          <Link className="secondary" href="/support">
            サポート
          </Link>
        </div>
      </section>

      <LegalSection title="0. 文書の位置づけ">
        <LegalList items={termsStatusItems} />
      </LegalSection>

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
          ユーザーは、当社所定の方法により、アカウント削除又は退会を申請できる方針です。具体的な受付方法、本人確認方法、処理期間は正式公開前の最終確認中です。
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

      <LegalSection title="10. 変更">
        <p>
          規約変更時の通知方法、同意取得方法、重要変更時の扱いは正式公開前の最終確認中です。アプリ内通知、Web掲示、Email、SMS等のどれを用いるかは確認が必要です。
        </p>
      </LegalSection>

      <LegalSection title="11. 準拠法・紛争解決">
        <p>
          準拠法、管轄、紛争解決手続は正式公開前の最終確認中です。実値や裁判所名を推測しません。
        </p>
      </LegalSection>

      <LegalSection title="12. お問い合わせ">
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
