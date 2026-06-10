import type { Metadata } from "next";
import Link from "next/link";
import {
  TrustList,
  TrustPage,
  TrustSection,
  TrustTable,
} from "../../components/trust-foundation/TrustFoundationPage";
import {
  pricingAndConsentItems,
  privacyExternalServiceItems,
  privacyHandledInfoItems,
  privacyNotHandledItems,
  privacyPurposeItems,
  privacyRetentionItems,
  serviceScopeItems,
  supportEmail,
} from "../../components/legal/legalPublicContent";

export const metadata: Metadata = {
  title: "プライバシーポリシー | あんぴッチ",
  description: "あんぴッチにおける利用者情報の取り扱いについて説明します。",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <TrustPage
      eyebrow="Privacy Policy"
      title="プライバシーポリシー"
      lead="このプライバシーポリシーは、あんぴッチにおける利用者情報の取り扱いについて説明するものです。"
      heroImage={{
        src: "/page-heroes/anpittchi-privacy-hero-private-desk.webp",
        alt: "書類とスマートフォンを置いたプライバシー説明のイメージ",
      }}
      actions={[
        { href: "/privacy-choices", label: "Privacy Choices" },
        { href: "/support", label: "サポート" },
      ]}
    >
      <TrustSection title="サービスの性質">
        <TrustList items={serviceScopeItems} />
      </TrustSection>

      <TrustSection title="料金と連絡先同意">
        <TrustList items={pricingAndConsentItems} />
      </TrustSection>

      <TrustSection title="1. 取り扱う情報">
        <p>
          本サービスでは、サービス提供、本人確認、連絡先同意、段階通知、通知履歴、購読状態確認、問い合わせ対応、誤送信防止、不正防止、法的対応および監査のため、以下の情報を取り扱う場合があります。
        </p>
        <TrustList items={privacyHandledInfoItems} />
        <TrustList items={privacyNotHandledItems} />
      </TrustSection>

      <TrustSection title="2. 利用目的">
        <TrustList items={privacyPurposeItems} />
      </TrustSection>

      <TrustSection title="3. 連絡先情報と同意">
        <p>
          ユーザーが第三者の電話番号を入力しただけでは、その第三者の同意が成立したものとは扱いません。
        </p>
        <p>
          連絡先A/Bへの通知は、各連絡先本人が明示的に同意した場合に限り開始されます。2名の連絡先同意がそろわない限り、連絡先への段階通知は開始されません。
        </p>
        <p>
          連絡先本人は、STOP等によりSMS受信停止または同意撤回を行える場合があります。STOP後は、再同意が成立するまで連絡先への運用SMS送信を行わない方針です。
        </p>
      </TrustSection>

      <TrustSection title="4. 外部サービスの利用">
        <p>本サービスは、サービス提供に必要な範囲で、以下の外部サービスを利用する場合があります。</p>
        <TrustList items={privacyExternalServiceItems} />
        <p>
          これらの外部サービスでは、各サービスの仕様、契約、法令、運用上の制約に従って情報が取り扱われる場合があります。
        </p>
      </TrustSection>

      <TrustSection title="5. 通知と通信に関する情報">
        <p>
          本サービスでは、SMSやPush通知の送信、配信結果の確認、STOP/START/HELPの受付、配信失敗や停止状態の確認のため、通信に関する記録を取り扱う場合があります。
        </p>
        <p>
          外部プロバイダが送信要求を受理したことは、受信者端末への到達、閲覧、理解、対応を保証するものではありません。
        </p>
      </TrustSection>

      <TrustSection title="6. サブスクリプションに関する情報">
        <p>あんぴッチの月額プランは、Appleのサブスクリプションとして管理されます。</p>
        <p>
          アプリ内アカウント削除とAppleサブスクリプションの解約は別の手続きです。アカウント削除を行っても、Apple側のサブスクリプションが自動的に解約されない場合があります。
        </p>
        <p>
          Apple subscription、StoreKit transaction、original_transaction_id、entitlement状態など購読確認に必要な情報は、課金状態確認、購入に関する問い合わせ対応、不正防止、法的対応のため、必要な範囲で取り扱う場合があります。
        </p>
      </TrustSection>

      <TrustSection title="7. データ削除、アカウント削除、Privacy Choices">
        <p>
          ユーザーは、アカウント削除、データ削除、問い合わせ情報の削除、または自身に関する情報の確認を求められる場合があります。
        </p>
        <p>
          連絡先本人から、自分の情報に関する確認、削除、SMS停止、同意撤回の問い合わせがあった場合も、受付を行う方針です。
        </p>
        <p>
          データに関する選択、削除請求、連絡先本人からの問い合わせ、STOP、同意撤回、サブスクリプション解約の案内については、
          <Link href="/privacy-choices"> Privacy Choices </Link>
          で案内します。
        </p>
        <p>お問い合わせは {supportEmail} までご連絡ください。</p>
      </TrustSection>

      <TrustSection title="8. 情報の保持と削除">
        <TrustList items={privacyRetentionItems} />
      </TrustSection>

      <TrustSection title="9. 安全管理">
        <p>
          本サービスでは、取り扱う情報について、漏えい、滅失、毀損、不正アクセス、誤送信などを防ぐため、必要な安全管理措置を講じます。
        </p>
        <p>
          通知、同意、停止、削除請求、問い合わせ、購読状態、監査ログに関する情報は、アクセス権限、記録、確認手順を設けて管理します。
        </p>
      </TrustSection>

      <TrustSection title="10. 緊急時について">
        <p>
          本サービスは、救急、警察、消防、自治体、医療機関その他第三者へ連絡するサービスではありません。
        </p>
        <p>緊急の危険がある場合は、地域の緊急通報手段その他適切な連絡手段を直ちに利用してください。</p>
      </TrustSection>

      <TrustSection title="11. お問い合わせ">
        <p>
          本ポリシー、データの取り扱い、アカウント削除、データ削除、連絡先本人からの問い合わせ、STOP、同意撤回、サポートに関するお問い合わせは、{supportEmail} までご連絡ください。
        </p>
      </TrustSection>

      <TrustSection title="関連リンク">
        <TrustTable
          caption="公開Legal URL"
          headers={["項目", "URL"]}
          rows={[
            ["利用規約", "/terms"],
            ["特定商取引法に基づく表記", "/tokushoho"],
            ["Privacy Choices", "/privacy-choices"],
            ["サポート", "/support"],
          ]}
        />
      </TrustSection>
    </TrustPage>
  );
}
