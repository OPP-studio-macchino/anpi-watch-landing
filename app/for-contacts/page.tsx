import {
  TrustCard,
  TrustGrid,
  TrustLinkGrid,
  TrustList,
  TrustPage,
  TrustSection,
} from "../../components/trust-foundation/TrustFoundationPage";
import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata("/for-contacts");

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
      lead="あなたは、本人の未反応時に通知を受ける連絡先候補です。同意すると、本人のOKが一定時間途切れた場合にSMS通知を受け取ることがあります。登録された時点では、まだ通知稼働状態ではありません。"
      heroImage={{
        src: "/page-heroes/anpittchi-for-contacts-hero-contact-consent-review.webp",
        mobileSrc: "/page-heroes/mobile/anpittchi-for-contacts-mobile-hero.webp",
        alt: "連絡先候補がSMSを受け取る前に内容を確認しているイメージ",
        mobileObjectPosition: "center 52%",
        mobileTone: "light",
      }}
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
              連絡先A/Bの2名のURL同意が揃うまで、連絡先への通知は開始されません。
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

      <TrustSection
        title="通知を受け取ったら"
        description="あんぴッチから通知が届いたら、まず本人に電話やメッセージで連絡を試してください。通知は「本人の反応が一定時間確認できない」ことを知らせるもので、危険や病状を判断するものではありません。"
      >
        <TrustGrid>
          <TrustCard title="本人に電話する">
            <p>
              まず本人の電話番号に連絡を試してください。つながらない場合は、少し時間をおいてもう一度試すこともできます。
            </p>
          </TrustCard>
          <TrustCard title="SMSやメッセージを送る">
            <p>
              電話に出ない場合は、短いメッセージを送って反応を待つ方法もあります。
            </p>
          </TrustCard>
          <TrustCard title="近くの人に確認を頼む">
            <p>
              本人の近くにいる家族・知人・管理会社など、無理なく確認できる人がいれば連絡を検討してください。
            </p>
          </TrustCard>
          <TrustCard title="状況を家族や知人に共有する">
            <p>
              一人で判断しにくい場合は、他の家族や知人に通知が届いたことを共有してください。
            </p>
          </TrustCard>
          <TrustCard title="緊急性が高いと判断できる場合">
            <p>
              具体的な危険情報がある場合や、緊急性が高いと判断できる場合は、地域の緊急通報手段など、適切な連絡先の利用を検討してください。
            </p>
          </TrustCard>
        </TrustGrid>
        <p>
          あんぴッチは、救命・発見・所在確認・通知の到達・連絡先の対応を保証するものではありません。通知を受け取った方の状況や距離によって、できることは異なります。
        </p>
        <p>
          SMSを受け取りたくない場合は、SMSにSTOPと返信してください。内容を確認したい場合はHELPを使えます。STOP後に再開する場合は、再度同意が必要です。
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
