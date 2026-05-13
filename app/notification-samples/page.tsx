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
  description: "本人へのスマホ通知、ショートメッセージ（SMS）、同意確認、HELP、STOPのサンプルです。",
};

const relatedLinks = [
  {
    href: "/help/stop",
    title: "STOP / HELP",
    description: "STOP返信、HELP返信、再同意の扱いを確認します。",
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
      lead="実際に届く通知の例です。ここにある文面はサンプルです。実際の文面は、読みやすさや送信の都合で少し変わることがあります。"
      actions={[
        { href: "/how-it-works", label: "48時間の流れを見る" },
        { href: "/for-contacts", label: "連絡先向け説明を見る" },
      ]}
    >
      <TrustSection title="通知例">
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
            title="連絡先への同意確認メッセージ"
            target="連絡先候補"
            timing="本人が連絡先候補として登録した時"
            purpose="通知を受け取るかどうかを選んでもらうため"
            sample="【あんぴッチ】田中さんがあなたを連絡先候補に登録しました。受け取るかどうかはURLから選べます。停止:STOP"
            notes={[
              "このSMSが届いただけでは、まだ同意したことにはなりません。",
              "受け取るかどうかは、あなた自身が選べます。",
            ]}
          />
          <NotificationSample
            title="HELPへの返信"
            target="HELPを送った人"
            timing="HELP受信時"
            purpose="通知の目的と停止方法を説明する"
            sample="【あんぴッチ】これは、田中さんのOKが長くない時のお知らせです。止めるにはSTOPと返信してください。"
            notes={[
              "HELPと返信すると、このSMSの説明が届きます。",
              "HELPは、本人の状況を確認するものではありません。",
            ]}
          />
          <NotificationSample
            title="STOP説明"
            target="STOPを送った人"
            timing="STOP受信時"
            purpose="受信停止の扱いを伝える"
            sample="STOPを受け付けました。再同意が成立するまで、運用通知は送られません。"
            notes={[
              "STOPと返信すると、あんぴッチからのSMSを止められます。",
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
