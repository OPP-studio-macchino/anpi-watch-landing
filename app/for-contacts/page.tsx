import type { Metadata } from "next";
import {
  TrustCard,
  TrustGrid,
  TrustLinkGrid,
  TrustList,
  TrustPage,
  TrustSection,
} from "../../components/trust-foundation/TrustFoundationPage";

export const metadata: Metadata = {
  title: "連絡先としてSMSを受け取る方へ | あんぴッチ",
  description: "連絡先候補として登録された方に、URL同意、STOP、HELP、通知時の行動を説明します。",
};

const relatedLinks = [
  {
    href: "/help/stop",
    title: "STOP / HELP",
    description: "受信停止、HELP、再同意の扱いを確認します。",
  },
  {
    href: "/notification-samples",
    title: "通知サンプル",
    description: "届く可能性があるSMS文面を確認します。",
  },
  {
    href: "/trust",
    title: "できること・できないこと",
    description: "通知で分かること、分からないこと、知っておくことを確認します。",
  },
];

export default function ForContactsPage() {
  return (
    <TrustPage
      eyebrow="For Contacts"
      title="連絡先としてSMSを受け取る方へ"
      lead="あなたは、本人の反応が一定時間確認できない場合に通知を受ける連絡先候補です。登録された時点では、まだ通知稼働状態ではありません。"
      actions={[
        { href: "/how-it-works", label: "同意の流れを確認する" },
        { href: "/notification-samples", label: "通知サンプルを見る" },
        { href: "/trust", label: "できること・できないことを見る" },
      ]}
    >
      <TrustSection
        title="登録と同意は別の状態です"
        description="本人があなたを連絡先候補として登録しても、それだけでは連絡先として有効になりません。"
      >
        <TrustGrid>
          <TrustCard title="URL同意が必要です">
            <p>
              あなた自身がSMS内のリンクを開き、URL同意ページで明示的に同意して初めて、連絡先として有効になります。
            </p>
          </TrustCard>
          <TrustCard title="2名の同意が揃うまで開始しません">
            <p>
              連絡先A/Bの2名の同意が揃うまで、連絡先への通知は開始されません。
            </p>
          </TrustCard>
        </TrustGrid>
      </TrustSection>

      <TrustSection
        title="同意すると届く可能性がある通知"
        description="本人の最終OKから一定時間が経過した場合、段階的にSMS通知を試行します。"
      >
        <TrustList
          items={[
            "36h: 連絡先AへSMS通知を試行します。",
            "42h: 連絡先BへSMS通知を試行します。",
            "48h: 連絡先A/Bへ最終SMSとEmail補助を試行します。",
            "同意しても、救助・訪問・対応を強制されるものではありません。",
            "SMSの到達・閲覧・対応は保証しません。",
          ]}
        />
      </TrustSection>

      <TrustSection title="STOPとHELP">
        <TrustGrid>
          <TrustCard title="STOP">
            <p>
              STOPで受信停止できます。STOP後は、再同意が成立するまで運用通知は送られません。
            </p>
          </TrustCard>
          <TrustCard title="HELP">
            <p>
              HELPは、この番号から届くSMSの目的や停止方法を確認するための案内です。
            </p>
          </TrustCard>
        </TrustGrid>
      </TrustSection>

      <TrustSection title="通知を受け取った時の確認方法">
        <p>
          通知を受け取った場合は、まず本人へ電話やメッセージで確認してください。
        </p>
        <p>
          緊急の危険が明らかな場合は、電話や公的緊急連絡手段など、別の手段で確認してください。
        </p>
        <p>
          あんぴッチは警察・消防・救急・自治体・病院・警備会社などへ自動通報するサービスではありません。
        </p>
      </TrustSection>

      <TrustSection title="SMSが怪しいと感じた場合">
        <p>
          SMS内のリンクだけで判断せず、まず本人に直接確認してください。
        </p>
        <p>
          本人に確認できない場合は、無理にリンクを開く必要はありません。
        </p>
      </TrustSection>

      <TrustSection title="さらに詳しく確認する">
        <TrustLinkGrid links={relatedLinks} />
      </TrustSection>
    </TrustPage>
  );
}
