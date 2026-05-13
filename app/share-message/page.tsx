import type { Metadata } from "next";
import {
  MessageTemplate,
  NotificationSampleGrid,
  TrustLinkGrid,
  TrustList,
  TrustPage,
  TrustSection,
} from "../../components/trust-foundation/TrustFoundationPage";

export const metadata: Metadata = {
  title: "家族・パートナーから本人に提案する文面テンプレ | あんぴッチ",
  description: "離れて暮らす本人にあんぴッチを提案したい家族・パートナー向けの文面テンプレ集です。",
};

const relatedLinks = [
  {
    href: "/for-family",
    title: "本人に提案したい方へ",
    description: "家族・パートナーとして本人に説明する時の前提を確認します。",
  },
  {
    href: "/for-contacts",
    title: "連絡先向け説明",
    description: "URL同意、STOP、HELP、通知を受けた時の行動を確認します。",
  },
  {
    href: "/help/stop",
    title: "STOP / HELP",
    description: "受信停止、HELP、再同意の扱いを確認します。",
  },
  {
    href: "/trust",
    title: "できること・できないこと",
    description: "通知で分かること、分からないこと、知っておくことを確認します。",
  },
];

export default function ShareMessagePage() {
  return (
    <TrustPage
      eyebrow="Share Message"
      title="家族・パートナーから本人に提案する文面テンプレ"
      lead="このページは、離れて暮らす本人にあんぴッチを提案したい家族・パートナーのための文面テンプレ集です。あんぴッチは、本人を勝手に監視したり、本人の代わりに通知を始めたりするサービスではありません。まずは本人に内容を伝え、一緒に未反応時の連絡ルールを確認してください。"
      actions={[
        { href: "/for-family", label: "本人に提案したい方へ" },
        { href: "/for-contacts", label: "連絡先向け説明を見る" },
        { href: "/help/stop", label: "STOP/HELPを見る" },
        { href: "/trust", label: "できること・できないことを見る" },
      ]}
    >
      <TrustSection title="このページで使える文面">
        <TrustList
          items={[
            "本人にあんぴッチを提案する文面",
            "本人と通知ルールを話し合う文面",
            "本人が始めると決めた後、連絡先候補にお願いする文面",
            "STOP / HELP や料金を短く説明する文面",
          ]}
        />
      </TrustSection>

      <TrustSection title="本人に提案する文面">
        <NotificationSampleGrid>
          <MessageTemplate
            title="最初に相談する"
            recipient="家族・パートナーから離れて暮らす本人へ"
            body="あんぴッチというアプリを見つけました。毎日OKを押して、もし長い時間反応がない時だけ、登録した連絡先に順番に通知するものです。危険を判断したり、救助を保証するものではありません。監視ではなく、何日も反応がない時の連絡ルールを先に決めるものです。一度、一緒に内容を見てもらえますか？"
            note="本人に押し付けず、「一緒に確認したい」という形で伝える文面です。"
          />
          <MessageTemplate
            title="通知ルールを一緒に決めたい時"
            recipient="家族・パートナーから本人へ"
            body="もし使うなら、通知が届いた時に誰がどう確認するかを先に決めておきたいです。あんぴッチは救命や発見を保証するものではなく、反応が長くない時の連絡ルールを見えるようにするものです。無理に始める必要はないので、内容を一緒に確認しましょう。"
            note="家族が一方的に決めるのではなく、本人と話し合うための文面です。"
          />
          <MessageTemplate
            title="料金を短く説明する"
            recipient="家族・パートナーから本人へ"
            body="料金は月額300円です。長い時間OKがない時の連絡先への通知も、月額料金の中で利用できます。"
            note="料金不安を先に減らすための文面です。"
          />
        </NotificationSampleGrid>
      </TrustSection>

      <TrustSection
        title="本人が始めると決めた後、連絡先候補に送る文面"
        description="ここから下は、本人があんぴッチを使うと決めた後に、連絡先候補へ説明するための文面です。家族が本人の代わりに同意を取るものではありません。"
      >
        <NotificationSampleGrid>
          <MessageTemplate
            title="連絡先候補にお願いする文面"
            recipient="本人から連絡先候補へ"
            body="あんぴッチというアプリで、私の連絡先候補として登録させてもらいたいです。私が長い時間OKを押せない時に、SMSが届くことがあります。救助や訪問を強制するものではありません。無理なら同意しなくても大丈夫です。内容を確認して、よければURLから同意してください。"
            note="連絡先本人のURL同意が必要で、断れる余地があることを先に伝えます。"
          />
          <MessageTemplate
            title="同意依頼SMSが届く前の補足文"
            recipient="本人から連絡先候補へ"
            body="このあと、あんぴッチから同意確認のSMSが届くかもしれません。SMS内のURLで、通知を受け取るかどうかを自分で選べます。STOPで受信停止もできます。"
            note="SMSが届く前に、相手が怪しいと感じにくいよう補足します。"
          />
          <MessageTemplate
            title="通知が届いた時にどう動くかを決める文面"
            recipient="本人から連絡先候補へ"
            body="もし通知が届いたら、まず私に電話かメッセージをしてみてください。連絡が取れない場合は、事前に決めた家族や近くの人に連絡してください。緊急の危険が明らかな場合は、電話など別の手段を使ってください。"
            note="通知を受けた人が迷いにくいよう、事前ルールを決める文面です。"
          />
          <MessageTemplate
            title="断られた時に返す文面"
            recipient="本人から連絡先候補へ"
            body="確認してくれてありがとう。無理にお願いするものではないので大丈夫です。別の連絡先候補を探します。"
            note="相手の負担を軽くし、断ってもよいことを明確にします。"
          />
          <MessageTemplate
            title="STOP / HELPについて説明する文面"
            recipient="本人から連絡先候補へ"
            body="通知を受け取りたくない場合は、SMSに STOP と返信すると停止できます。HELP と返信すると、このSMSの用途や停止方法を確認できます。"
            note="STOPは受信停止、HELPは用途確認であることを伝えます。"
          />
          <MessageTemplate
            title="できること・できないことを短く説明する文面"
            recipient="本人から連絡先候補へ"
            body="あんぴッチは、反応が途切れた時に登録・同意済みの連絡先へ段階通知を試行するサービスです。危険や死亡を判断するものではなく、救命・発見・所在確認を保証するものでもありません。"
            note="サービスの限界を短く伝える文面です。"
          />
        </NotificationSampleGrid>
      </TrustSection>

      <TrustSection title="関連ページ">
        <TrustLinkGrid links={relatedLinks} />
      </TrustSection>
    </TrustPage>
  );
}
