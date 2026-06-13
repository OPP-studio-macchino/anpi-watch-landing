import {
  TrustCard,
  TrustGrid,
  TrustList,
  TrustPage,
  TrustSection,
  TrustTable,
} from "../../components/trust-foundation/TrustFoundationPage";
import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata("/support");

const supportScopeItems = [
  "アプリの使い方",
  "本人確認に関すること",
  "連絡先登録に関すること",
  "連絡先同意に関すること",
  "SMSのSTOP、同意撤回、再同意に関すること",
  "通知履歴や配信結果に関すること",
  "アカウント削除に関すること",
  "データ削除に関すること",
  "連絡先本人からの削除請求に関すること",
  "サブスクリプションの解約方法に関すること",
  "返金申請に関する案内",
];

const relatedLinkRows = [
  ["プライバシーポリシー", "/privacy"],
  ["利用規約", "/terms"],
  ["特定商取引法に基づく表記", "/tokushoho"],
  ["Privacy Choices", "/privacy-choices"],
];

export default function SupportPage() {
  return (
    <TrustPage
      eyebrow="Support"
      title="あんぴッチ サポート"
      lead="あんぴッチに関する問い合わせ方法と、アカウント削除・データ削除・連絡先本人からの問い合わせ・SMS停止・サブスクリプション解約に関する案内です。"
      heroImage={{
        src: "/page-heroes/anpittchi-support-hero-guidance-organizer.webp",
        mobileSrc: "/page-heroes/mobile/anpittchi-support-mobile-hero.webp",
        alt: "困った時に見るサポート案内のイメージ",
        mobileObjectPosition: "center 60%",
        mobileTone: "light",
      }}
    >
      <TrustSection title="問い合わせ先">
        <TrustGrid>
          <TrustCard title="メールでのお問い合わせ">
            <p>
              あんぴッチに関するお問い合わせは、support@anpi-watch.app までご連絡ください。
            </p>
          </TrustCard>
          <TrustCard title="サポートできる内容">
            <TrustList items={supportScopeItems} />
          </TrustCard>
        </TrustGrid>
      </TrustSection>

      <TrustSection title="アカウント削除について">
        <TrustGrid>
          <TrustCard title="削除を希望する場合">
            <p>
              アカウント削除や個人情報の取り扱いについては、サポート窓口からご連絡ください。本人確認のうえ、法令・利用規約・プライバシーポリシーに基づいて対応します。
            </p>
          </TrustCard>
          <TrustCard title="Appleサブスクリプションとの関係">
            <p>
              アカウント削除を行っても、Apple側のサブスクリプションが自動的に解約されない場合があります。アカウント削除とAppleサブスクリプションの解約は別の手続きです。
            </p>
          </TrustCard>
        </TrustGrid>
      </TrustSection>

      <TrustSection title="データ削除について">
        <TrustGrid>
          <TrustCard title="削除を希望する場合">
            <p>
              データ削除を希望する場合は、support@anpi-watch.app までご連絡ください。
            </p>
          </TrustCard>
          <TrustCard title="保持する可能性がある情報">
            <p>
              アカウント削除や個人情報の取り扱いについては、サポート窓口からご連絡ください。本人確認のうえ、法令・利用規約・プライバシーポリシーに基づいて対応します。
            </p>
          </TrustCard>
        </TrustGrid>
      </TrustSection>

      <TrustSection title="連絡先本人からの削除請求について">
        <TrustGrid>
          <TrustCard title="連絡先本人からの問い合わせ">
            <p>
              連絡先本人から、自分の情報に関する確認、削除、SMS停止、同意撤回の問い合わせがあった場合は、support@anpi-watch.app で受け付ける方針です。
            </p>
          </TrustCard>
          <TrustCard title="本人のアカウント削除とは別の手続き">
            <p>
              アカウント削除や個人情報の取り扱いについては、サポート窓口からご連絡ください。本人確認のうえ、法令・利用規約・プライバシーポリシーに基づいて対応します。
            </p>
          </TrustCard>
        </TrustGrid>
        <TrustList
          items={[
            "あんぴッチでは、ユーザーが第三者の電話番号を入力しただけでは、その第三者の同意が成立したものとは扱いません。",
          ]}
        />
      </TrustSection>

      <TrustSection title="SMSのSTOP・同意撤回・再同意について">
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

      <TrustSection title="サブスクリプションの解約について">
        <TrustGrid>
          <TrustCard title="Appleの管理画面で行う手続き">
            <p>
              あんぴッチの月額プランは、Appleのサブスクリプションとして管理されます。サブスクリプションの解約は、Appleのサブスクリプション管理画面から行ってください。
            </p>
          </TrustCard>
          <TrustCard title="アカウント削除とは別の手続き">
            <p>
              アプリ内アカウント削除とAppleサブスクリプションの解約は別の手続きです。
            </p>
          </TrustCard>
        </TrustGrid>
      </TrustSection>

      <TrustSection title="返金申請について">
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

      <TrustSection title="緊急時について">
        <TrustList
          items={[
            "あんぴッチは救急・警察・消防・医療機関へ連絡するサービスではない。",
            "危険、事故、死亡、病状、所在などを検知するサービスではない。",
            "緊急の危険がある場合は、公的な緊急通報手段や適切な連絡手段を使う。",
          ]}
        />
      </TrustSection>

      <TrustSection title="返信目安">
        <p>
          お問い合わせ内容を確認し、必要な場合は順に返信します。内容によっては返信に時間がかかる場合があります。
        </p>
      </TrustSection>

      <TrustSection title="関連リンク">
        <TrustTable
          caption="公開Legal URL"
          headers={["項目", "URL"]}
          rows={relatedLinkRows}
        />
      </TrustSection>
    </TrustPage>
  );
}
