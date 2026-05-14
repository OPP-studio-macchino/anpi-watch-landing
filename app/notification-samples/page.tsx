import type { Metadata } from "next";
import {
  NotificationSample,
  NotificationSampleGrid,
  TrustLinkGrid,
  TrustPage,
  TrustSection,
} from "../../components/trust-foundation/TrustFoundationPage";

export const metadata: Metadata = {
  title: "通知サンプル | あんぴッチ",
  description: "本人から届く同意のお願いSMSと、あんぴッチから届く通知SMSのサンプルです。",
};

const relatedLinks = [
  {
    href: "/help/stop",
    title: "STOP / HELP / START",
    description: "あんぴッチから届いたSMSで使う返信を確認します。",
  },
  {
    href: "/delivery-status",
    title: "通知履歴・配信結果の見方",
    description: "通知が送れたか、送れなかったか、どう読めばよいかを確認します。",
  },
  {
    href: "/for-contacts",
    title: "連絡先向け説明",
    description: "連絡先候補が同意前に読む内容を確認します。",
  },
];

export default function NotificationSamplesPage() {
  return (
    <TrustPage
      eyebrow="Notification Samples"
      title="通知サンプル"
      lead="実際に届く通知の例です。本人から届く同意のお願いSMSと、あんぴッチから届く通知SMSは別のものです。ここにある文面はサンプルです。"
      actions={[
        { href: "/how-it-works", label: "48時間の流れを見る" },
        { href: "/for-contacts", label: "連絡先向け説明を見る" },
      ]}
    >
      <TrustSection title="本人から届く説明・同意のお願い">
        <NotificationSampleGrid>
          <NotificationSample
            title="本人から届く同意のお願いSMS"
            target="連絡先候補"
            timing="本人が連絡先候補として登録した時"
            purpose="同意ページを開いて、受け取るかどうかを選んでもらうため"
            sample="田中です。あんぴッチで、あなたを連絡先候補に登録しました。受け取るかどうかは、このURLから選べます。同意ページのURL"
            notes={[
              "本人のスマホから届く場合があります。",
              "このSMSに STOP / HELP / START と返信しても、あんぴッチの受け取り設定は変わりません。",
              "同意しない場合は、同意ボタンを押す必要はありません。",
            ]}
          />
        </NotificationSampleGrid>
      </TrustSection>

      <TrustSection title="あんぴッチから届く通知SMS">
        <NotificationSampleGrid>
          <NotificationSample
            title="24時間後：本人へのスマホ通知"
            target="本人"
            timing="最後のOKから24時間後"
            purpose="本人にOKを押してもらうため"
            sample="【あんぴッチ】最後のOKから24時間たちました。問題がなければ、アプリでOKを押してください。"
            notes={[
              "連絡先には送らない通知です。",
              "スマホに出る通知の見え方は、端末や設定によって少し変わることがあります。",
            ]}
          />
          <NotificationSample
            title="30時間後：本人へのショートメッセージ"
            target="本人"
            timing="最後のOKから30時間後"
            purpose="このままだと連絡先Aへ通知することを知らせるため"
            sample="【あんぴッチ】最後のOKから30時間たちました。36時間で連絡先AへSMSを送ります。追加料金なし。連絡先へ通知したくない場合は、今OKを押してください。"
            notes={["36h通知の前に本人へ知らせます。"]}
          />
          <NotificationSample
            title="36時間後：連絡先Aへのショートメッセージ"
            target="連絡先A"
            timing="最後のOKから36時間後"
            purpose="本人と連絡が取れるか確認してもらうため"
            sample="【あんぴッチ】田中さんのOKが36時間ありません。田中さんと連絡が取れるか、電話やメッセージで確認してください。停止:STOP"
            notes={[
              "このSMSは、同意後にあんぴッチから届く通知です。",
              "通信状況などにより、届くのが遅れたり、届かなかったりすることがあります。",
              "受け取った人が無理に動く必要はありません。できる範囲で確認してください。",
            ]}
          />
          <NotificationSample
            title="42時間後：連絡先Bへのショートメッセージ"
            target="連絡先B"
            timing="最後のOKから42時間後"
            purpose="別の連絡先にも確認をお願いするため"
            sample="【あんぴッチ】田中さんのOKが42時間ありません。田中さんと連絡が取れるか、電話やメッセージで確認してください。停止:STOP"
            notes={[
              "この通知を受け取るには、連絡先Bの方が自分で同意している必要があります。",
              "STOP / HELP / START は、あんぴッチから届いたSMSに返信する時だけ使います。",
              "送った記録があっても、相手が読んだとは限りません。",
            ]}
          />
          <NotificationSample
            title="48時間後：連絡先A/Bへの最後の通知"
            target="連絡先A/B"
            timing="最後のOKから48時間後"
            purpose="最後の段階として、本人への確認をお願いするため"
            sample="【あんぴッチ】田中さんのOKが48時間ありません。できる範囲で、田中さんへ電話やメッセージで確認してください。停止:STOP"
            notes={[
              "メールにも送る場合があります。",
              "この通知だけで、本人の状況が分かるとは限りません。",
            ]}
          />
          <NotificationSample
            title="HELPへの返信"
            target="HELPを送った人"
            timing="HELP受信時"
            purpose="通知の目的と停止方法を説明する"
            sample="【あんぴッチ】これは、田中さんのOKが長くない時のお知らせです。止めるにはSTOPと返信してください。"
            notes={[
              "HELPと返信すると、あんぴッチから届いたSMSの説明が届きます。",
              "HELPは、本人の状況を確認するものではありません。",
            ]}
          />
          <NotificationSample
            title="STOP説明"
            target="STOPを送った人"
            timing="STOP受信時"
            purpose="受信停止の扱いを伝える"
            sample="STOPを受け付けました。もう一度同意するまで、あんぴッチからのSMSは届きません。"
            notes={[
              "STOPと返信すると、あんぴッチからのSMSを止められます。",
              "本人から届いた説明SMSや同意のお願いSMSには効きません。",
              "もう一度受け取るには、再度同意が必要です。",
            ]}
          />
        </NotificationSampleGrid>
      </TrustSection>

      <TrustSection title="関連ページ">
        <TrustLinkGrid links={relatedLinks} />
      </TrustSection>
    </TrustPage>
  );
}
