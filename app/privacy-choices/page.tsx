import {
  TrustCard,
  TrustGrid,
  TrustList,
  TrustPage,
  TrustSection,
  TrustTable,
} from "../../components/trust-foundation/TrustFoundationPage";
import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata("/privacy-choices");

const plannedItems = [
  "アカウント削除",
  "データ削除請求",
  "自分に関する情報の確認",
  "連絡先本人からの削除請求",
  "SMSのSTOP、同意撤回、再同意",
  "問い合わせ情報の削除",
  "サブスクリプション解約の案内",
  "返金申請の案内",
  "削除される可能性があるデータ",
  "保持される可能性がある最小限の監査情報",
  "本人確認方法",
];

const auditRetentionItems = [
  "誤送信防止",
  "同意証跡",
  "STOP抑止",
  "不正防止",
  "課金状態確認",
  "返金・問い合わせ対応",
  "法的対応",
  "監査",
];

const relatedLinkRows = [
  ["プライバシーポリシー", "/privacy"],
  ["利用規約", "/terms"],
  ["特定商取引法に基づく表記", "/tokushoho"],
  ["Privacy Choices", "/privacy-choices"],
  ["Support", "/support"],
];

export default function PrivacyChoicesPage() {
  return (
    <TrustPage
      eyebrow="Privacy Choices"
      title="Privacy Choices / データに関する選択"
      lead="あんぴッチにおけるデータ確認、データ削除、アカウント削除、連絡先本人からの削除請求、SMSのSTOP・同意撤回、問い合わせ情報の削除などに関する案内です。"
      heroImage={{
        src: "/page-heroes/anpittchi-privacy-choices-hero-settings-control.webp",
        mobileSrc: "/page-heroes/mobile/anpittchi-privacy-choices-mobile-hero.webp",
        alt: "設定画面と選択項目を確認するイメージ",
        mobileObjectPosition: "center 58%",
        mobileTone: "light",
      }}
    >
      <TrustSection title="問い合わせ先">
        <TrustGrid>
          <TrustCard title="データに関する問い合わせ">
            <p>
              データに関する問い合わせは、support@anpi-watch.app までご連絡ください。
            </p>
          </TrustCard>
          <TrustCard title="このページで扱う内容">
            <TrustList items={plannedItems} />
          </TrustCard>
        </TrustGrid>
      </TrustSection>

      <TrustSection title="アカウント削除">
        <TrustGrid>
          <TrustCard title="削除を希望する場合">
            <p>
              アカウント削除を希望する場合は、support@anpi-watch.app までご連絡ください。
            </p>
          </TrustCard>
          <TrustCard title="削除と個人情報の取り扱い">
            <p>
              アカウント削除や個人情報の取り扱いについては、サポート窓口からご連絡ください。本人確認のうえ、法令・利用規約・プライバシーポリシーに基づいて対応します。
            </p>
          </TrustCard>
          <TrustCard title="Appleサブスクリプションとの関係">
            <p>
              アカウント削除を行っても、Apple側のサブスクリプションが自動的に解約されない場合があります。サブスクリプションの解約は、Appleのサブスクリプション管理画面から行う必要があります。
            </p>
          </TrustCard>
        </TrustGrid>
      </TrustSection>

      <TrustSection title="データ削除請求">
        <TrustGrid>
          <TrustCard title="削除を希望する場合">
            <p>
              データ削除を希望する場合は、support@anpi-watch.app までご連絡ください。
            </p>
          </TrustCard>
          <TrustCard title="削除と個人情報の取り扱い">
            <p>
              アカウント削除や個人情報の取り扱いについては、サポート窓口からご連絡ください。本人確認のうえ、法令・利用規約・プライバシーポリシーに基づいて対応します。
            </p>
          </TrustCard>
        </TrustGrid>
        <p>
          アカウント削除や個人情報の取り扱いについては、サポート窓口からご連絡ください。本人確認のうえ、法令・利用規約・プライバシーポリシーに基づいて対応します。
        </p>
      </TrustSection>

      <TrustSection title="連絡先本人からの削除請求">
        <TrustGrid>
          <TrustCard title="第三者の同意について">
            <p>
              あんぴッチでは、ユーザーが第三者の電話番号を入力しただけでは、その第三者の同意が成立したものとは扱いません。
            </p>
          </TrustCard>
          <TrustCard title="連絡先本人からの問い合わせ">
            <p>
              連絡先本人から、自分の情報に関する確認、削除、SMS停止、同意撤回の問い合わせがあった場合は、support@anpi-watch.app で受け付ける方針です。
            </p>
          </TrustCard>
          <TrustCard title="別の本人確認・受付フロー">
            <p>
              アカウント削除や個人情報の取り扱いについては、サポート窓口からご連絡ください。本人確認のうえ、法令・利用規約・プライバシーポリシーに基づいて対応します。
            </p>
          </TrustCard>
        </TrustGrid>
      </TrustSection>

      <TrustSection title="SMSのSTOP・同意撤回・再同意">
        <TrustGrid>
          <TrustCard title="STOP・同意撤回">
            <p>
              連絡先は、STOP等によりSMS受信停止または同意撤回を行える場合があります。
            </p>
          </TrustCard>
          <TrustCard title="再同意">
            <p>
              STOP後は、再同意が成立するまで連絡先への運用SMS送信を行わない方針です。
            </p>
          </TrustCard>
        </TrustGrid>
        <p>
          アカウント削除や個人情報の取り扱いについては、サポート窓口からご連絡ください。本人確認のうえ、法令・利用規約・プライバシーポリシーに基づいて対応します。
        </p>
      </TrustSection>

      <TrustSection title="問い合わせ情報の削除">
        <TrustGrid>
          <TrustCard title="削除を希望する場合">
            <p>
              問い合わせ情報の削除を希望する場合は、support@anpi-watch.app までご連絡ください。
            </p>
          </TrustCard>
          <TrustCard title="扱う場合がある情報">
            <p>
              問い合わせ対応のために、メールアドレス、問い合わせ内容、対応履歴などを扱う場合があります。アカウント削除や個人情報の取り扱いについては、サポート窓口からご連絡ください。本人確認のうえ、法令・利用規約・プライバシーポリシーに基づいて対応します。
            </p>
          </TrustCard>
        </TrustGrid>
      </TrustSection>

      <TrustSection title="サブスクリプションの解約">
        <TrustGrid>
          <TrustCard title="Appleの管理画面で行う手続き">
            <p>
              あんぴッチの月額プランは、Appleのサブスクリプションとして管理されます。
            </p>
            <p>
              サブスクリプションの解約は、Appleのサブスクリプション管理画面から行ってください。
            </p>
          </TrustCard>
          <TrustCard title="アカウント削除とは別の手続き">
            <p>
              アプリ内アカウント削除とAppleサブスクリプションの解約は別の手続きです。
            </p>
          </TrustCard>
        </TrustGrid>
      </TrustSection>

      <TrustSection title="返金申請">
        <TrustGrid>
          <TrustCard title="Appleの手続き">
            <p>
              返金申請は、Appleの手続きに従って行う必要があります。
            </p>
          </TrustCard>
          <TrustCard title="返金判断について">
            <p>
              あんぴッチ側では、Appleの返金判断を直接行うことはできません。
            </p>
          </TrustCard>
        </TrustGrid>
      </TrustSection>

      <TrustSection title="保持される可能性がある最小限の情報">
        <p>
          アカウント削除、連絡先削除、STOP、同意撤回、サブスクリプション解約、問い合わせ削除等があった場合でも、以下の目的のために、必要最小限の情報を保持する可能性があります。
        </p>
        <TrustList items={auditRetentionItems} />
        <p>
          アカウント削除や個人情報の取り扱いについては、サポート窓口からご連絡ください。本人確認のうえ、法令・利用規約・プライバシーポリシーに基づいて対応します。
        </p>
      </TrustSection>

      <TrustSection title="本人確認">
        <p>
          アカウント削除、データ削除、連絡先本人からの削除請求、問い合わせ情報の削除などでは、誤削除や第三者による不正な請求を防ぐため、本人確認が必要になる場合があります。
        </p>
        <p>
          本人確認のうえ、法令・利用規約・プライバシーポリシーに基づいて対応します。
        </p>
      </TrustSection>

      <TrustSection title="緊急時について">
        <TrustList
          items={[
            "あんぴッチは救急・警察・消防・医療機関へ連絡するサービスではない。",
            "危険、事故、死亡、病状、所在などを検知するサービスではない。",
            "緊急の危険がある場合は、公的な緊急通報手段や適切な連絡手段を使う。",
          ]}
        />
      </TrustSection>

      <TrustSection title="関連リンク">
        <TrustTable caption="公開Legal URL" headers={["項目", "URL"]} rows={relatedLinkRows} />
      </TrustSection>

    </TrustPage>
  );
}
