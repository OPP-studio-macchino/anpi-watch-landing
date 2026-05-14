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
  description: "連絡先候補として登録された方に、本人から届く同意のお願いと、あんぴッチから届く通知SMSの違いを説明します。",
};

const relatedLinks = [
  {
    href: "/help/stop",
    title: "STOP / HELP / START",
    description: "あんぴッチから届いたSMSで使う言葉を確認します。",
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
          <TrustCard title="同意のお願いは本人から届く場合があります">
            <p>
              同意のお願いSMSは、本人のスマホから届く場合があります。このSMSに STOP / HELP / START と返信しても、あんぴッチのSMS設定は変わりません。
            </p>
          </TrustCard>
          <TrustCard title="URL同意が必要です">
            <p>
              同意する場合は、SMS内のリンクを開き、内容を確認してから同意してください。同意しない場合は、同意ボタンを押す必要はありません。
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
        description="同意したあと、本人の最終OKから一定時間が経過した場合に、あんぴッチからSMSが届くことがあります。"
      >
        <TrustList
          items={[
            "36h: 連絡先AへSMSを送ります。",
            "42h: 連絡先BへSMSを送ります。",
            "48h: 連絡先A/Bへ最後のSMSを送ります。",
            "通知は救命や対応を強制するものではありません。",
            "通知は、通信状況や携帯電話会社の状況などにより、遅れたり届かなかったりすることがあります。",
            "通知が届いたように見えても、相手が読んだか、対応したかまでは分かりません。",
          ]}
        />
      </TrustSection>

      <TrustSection title="あんぴッチから届いたSMSへの返信">
        <TrustGrid>
          <TrustCard title="STOP">
            <p>
              あんぴッチから届いたSMSに STOP と返信すると、その電話番号にはあんぴッチからSMSを送らないようにします。本人から届いた同意のお願いSMSには効きません。
            </p>
          </TrustCard>
          <TrustCard title="HELP">
            <p>
              あんぴッチから届いたSMSに HELP と返信すると、そのSMSの説明と止める方法が届きます。本人から届いたSMSには効きません。
            </p>
          </TrustCard>
          <TrustCard title="START">
            <p>
              STARTを使う場合も、あんぴッチから届いたSMSに返信します。本人から届いた説明SMSや同意のお願いSMSでは、あんぴッチの受け取り設定は変わりません。
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
