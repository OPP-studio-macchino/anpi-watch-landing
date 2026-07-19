import Link from "next/link";
import {
  TrustList,
  TrustPage,
  TrustSection,
  TrustTable,
} from "../../components/trust-foundation/TrustFoundationPage";
import {
  pricingAndConsentItems,
  serviceScopeItems,
  supportEmail,
  termsCancelItems,
  termsContactConsentItems,
  termsProhibitedItems,
  termsUseConditionRows,
} from "../../components/legal/legalPublicContent";
import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata("/terms");

export default function TermsPage() {
  return (
    <TrustPage
      eyebrow="Terms"
      title="利用規約"
      lead="この利用規約は、あんぴッチの利用条件について説明するものです。"
      heroImage={{
        src: "/page-heroes/anpittchi-terms-hero-clear-path-rules.webp",
        mobileSrc: "/page-heroes/mobile/anpittchi-terms-mobile-hero.webp",
        alt: "利用条件と基本ルールを確認するイメージ",
        mobileObjectPosition: "center 62%",
        mobileTone: "light",
      }}
      actions={[
        { href: "/privacy", label: "プライバシーポリシー" },
        { href: "/support", label: "サポート" },
      ]}
    >
      <TrustSection title="1. サービス内容">
        <TrustList items={serviceScopeItems} />
      </TrustSection>

      <TrustSection title="2. 利用条件">
        <TrustTable
          caption="利用条件"
          headers={["条件", "内容"]}
          rows={termsUseConditionRows}
        />
      </TrustSection>

      <TrustSection title="3. 料金">
        <TrustList items={pricingAndConsentItems} />
      </TrustSection>

      <TrustSection title="4. 連絡先同意">
        <TrustList items={termsContactConsentItems} />
      </TrustSection>

      <TrustSection title="5. 禁止事項">
        <TrustList items={termsProhibitedItems} />
      </TrustSection>

      <TrustSection title="6. 解約">
        <TrustList items={termsCancelItems} />
      </TrustSection>

      <TrustSection title="7. サービス停止または障害">
        <p>
          本サービスは、保守、障害、通信事業者、APNs、FCM、Twilio、App Store、Google Play、端末、OS、ネットワーク、法令対応、セキュリティ対応により、全部又は一部が利用できない場合があります。
        </p>
        <p>
          障害時も、通知到達、連絡先対応、救命、発見、所在確認は保証しません。稼働率や復旧時間について過度な保証表現を置きません。
        </p>
      </TrustSection>

      <TrustSection title="8. アカウント削除・データ請求">
        <p>
          アカウント削除や個人情報の取り扱いについては、サポート窓口からご連絡ください。本人確認のうえ、法令・利用規約・プライバシーポリシーに基づいて対応します。
        </p>
        <p>
          データ削除、連絡先本人からの問い合わせ、STOP、同意撤回については、
          <Link href="/privacy-choices"> Privacy Choices </Link>
          で案内します。
        </p>
      </TrustSection>

      <TrustSection title="9. 個人情報の取扱い">
        <p>
          ユーザーおよび連絡先の個人情報は、
          <Link href="/privacy"> プライバシーポリシー </Link>
          に従い取り扱います。
        </p>
      </TrustSection>

      <TrustSection title="10. お問い合わせ">
        <p>本規約に関するお問い合わせは、{supportEmail} までご連絡ください。</p>
      </TrustSection>

      <TrustSection title="関連リンク">
        <TrustTable
          caption="公開Legal URL"
          headers={["項目", "URL"]}
          rows={[
            ["プライバシーポリシー", "/privacy"],
            ["特定商取引法に基づく表記", "/tokushoho"],
            ["Privacy Choices", "/privacy-choices"],
            ["サポート", "/support"],
          ]}
        />
      </TrustSection>
    </TrustPage>
  );
}
