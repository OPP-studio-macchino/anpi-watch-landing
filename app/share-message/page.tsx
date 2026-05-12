import type { Metadata } from "next";
import {
  MessageTemplate,
  NotificationSampleGrid,
  TrustCard,
  TrustGrid,
  TrustLinkGrid,
  TrustList,
  TrustPage,
  TrustSection,
} from "../../components/trust-foundation/TrustFoundationPage";

export const metadata: Metadata = {
  title: "家族・連絡先に送る説明文テンプレ | あんぴッチ",
  description: "本人が家族や連絡先候補へ説明するときに使える、押し付けない短い文面テンプレ集です。",
};

const relatedLinks = [
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
    description: "通知、記録、同意、通信の限界を確認します。",
  },
];

export default function ShareMessagePage() {
  return (
    <TrustPage
      eyebrow="Share Message"
      title="家族・連絡先に送る説明文テンプレ"
      lead="本人が家族・連絡先候補へ説明するときに使える文面テンプレ集です。テンプレは強制ではなく、相手が断れる余地を残すためのものです。"
      actions={[
        { href: "/for-contacts", label: "連絡先向け説明を見る" },
        { href: "/help/stop", label: "STOP/HELPを見る" },
        { href: "/trust", label: "できること・できないことを見る" },
      ]}
    >
      <TrustSection title="使う前に確認すること">
        <TrustGrid>
          <TrustCard title="押し付けない">
            <TrustList
              items={[
                "テンプレは強制ではありません。",
                "相手が断れる余地を残します。",
                "救助や訪問を強制しません。",
              ]}
            />
          </TrustCard>
          <TrustCard title="事実を短く伝える">
            <TrustList
              items={[
                "URL同意が必要であることを明記します。",
                "料金は月額300円で、通知ごとの追加請求はないことを明記します。",
                "丁寧で、短めで、相手の負担を軽くする文面にします。",
              ]}
            />
          </TrustCard>
        </TrustGrid>
      </TrustSection>

      <TrustSection title="説明文テンプレ">
        <NotificationSampleGrid>
          <MessageTemplate
            title="家族・パートナーに相談する文面"
            recipient="家族・パートナー"
            body="あんぴッチというアプリを見つけました。毎日OKを押して、もし長い時間反応がない時だけ、登録した連絡先に順番に通知するものです。危険を判断したり、救助を保証するものではありません。監視ではなく、何日も反応がない時の連絡ルールを先に決めるものです。一度、一緒に内容を見てもらえますか？"
            note="まず相談したい時の文面です。相手に判断を急がせない形にしています。"
          />
          <MessageTemplate
            title="連絡先候補にお願いする文面"
            recipient="連絡先候補"
            body="あんぴッチというアプリで、私の連絡先候補として登録させてもらいたいです。私が長い時間OKを押せない時に、SMSが届くことがあります。救助や訪問を強制するものではありません。無理なら同意しなくても大丈夫です。内容を確認して、よければURLから同意してください。"
            note="連絡先本人のURL同意が必要で、断れる余地があることを先に伝えます。"
          />
          <MessageTemplate
            title="同意依頼SMSが届く前の補足文"
            recipient="連絡先候補"
            body="このあと、あんぴッチから同意確認のSMSが届くかもしれません。SMS内のURLで、通知を受け取るかどうかを自分で選べます。STOPで受信停止もできます。"
            note="SMSが届く前に、相手が怪しいと感じにくいよう補足します。"
          />
          <MessageTemplate
            title="通知が届いた時にどう動くかを決める文面"
            recipient="家族・連絡先候補"
            body="もし通知が届いたら、まず私に電話かメッセージをしてみてください。連絡が取れない場合は、事前に決めた家族や近くの人に連絡してください。緊急の危険が明らかな場合は、電話など別の手段を使ってください。"
            note="通知を受けた人が迷いにくいよう、事前ルールを決める文面です。"
          />
          <MessageTemplate
            title="断られた時に返す文面"
            recipient="連絡先候補"
            body="確認してくれてありがとう。無理にお願いするものではないので大丈夫です。別の連絡先候補を探します。"
            note="相手の負担を軽くし、断ってもよいことを明確にします。"
          />
          <MessageTemplate
            title="料金について説明する文面"
            recipient="家族・連絡先候補"
            body="料金は月額300円です。未反応時の段階通知は月額料金に含まれていて、通知ごとに料金が増える仕組みではありません。"
            note="月額300円と通知ごとの追加請求なしの方針を短く説明します。"
          />
          <MessageTemplate
            title="STOP/HELPについて説明する文面"
            recipient="連絡先候補"
            body="通知を受け取りたくない場合は、SMSに STOP と返信すると停止できます。HELP と返信すると、このSMSの用途や停止方法を確認できます。"
            note="STOPは受信停止、HELPは用途確認であることを伝えます。"
          />
          <MessageTemplate
            title="できること・できないことを短く説明する文面"
            recipient="家族・連絡先候補"
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
