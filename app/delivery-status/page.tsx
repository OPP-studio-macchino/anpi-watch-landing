import type { Metadata } from "next";
import {
  TrustLinkGrid,
  TrustList,
  TrustPage,
  TrustSection,
  TrustTable,
} from "../../components/trust-foundation/TrustFoundationPage";

export const metadata: Metadata = {
  title: "通知履歴の見方 | あんぴッチ",
  description:
    "通知履歴の見方を説明します。通知が送られたか、届かなかった可能性があるかを確認できます。",
};

const deliveryRows = [
  ["送信しました", "あんぴッチから通知を送った記録です。", "相手が読んだかどうかまでは分かりません。"],
  ["届いた可能性があります", "通知が相手の端末に届いた可能性があります。", "読まれたことや、対応されたことまでは分かりません。"],
  ["うまく届かなかった可能性があります", "電波の状態や電話番号の違いなどで、通知が届かなかった可能性があります。", "必要な時は、電話や別の方法でも確認してください。"],
  ["受け取りを止めています", "その連絡先は、あんぴッチからのSMSを止めています。", "もう一度受け取るには、本人からの案内にそって同意が必要です。"],
  ["まだ同意していません", "連絡先の方が、まだ受け取ることに同意していない状態です。", "2名の同意が揃うまで、連絡先への通知は始まりません。"],
];

const relatedLinks = [
  {
    href: "/how-it-works",
    title: "48時間の通知ルールを見る",
    description: "通知がいつ、誰に届くかを確認します。",
  },
  {
    href: "/notification-samples",
    title: "通知サンプルを見る",
    description: "実際に届く通知の例を確認します。",
  },
  {
    href: "/trust",
    title: "できること・できないことを見る",
    description: "あんぴッチでできること、できないことを確認します。",
  },
  {
    href: "/pricing",
    title: "月額300円の料金を見る",
    description: "料金と解約・返金の説明を確認します。",
  },
];

export default function NotificationHistoryPage() {
  return (
    <TrustPage
      eyebrow="通知履歴"
      title="通知履歴の見方"
      lead="通知履歴では、誰に・いつ・どの通知を送ったかを確認できます。ただし、通知が送られたことと、相手が読んだことは同じではありません。ここでは、表示の見方をやさしく説明します。"
      actions={[
        { href: "/how-it-works", label: "48時間の通知ルールを見る" },
        { href: "/notification-samples", label: "通知サンプルを見る" },
        { href: "/trust", label: "できること・できないことを見る" },
      ]}
    >
      <TrustSection
        title="通知履歴で分かること"
        description="通知履歴では、誰に・いつ・どの通知を送ったかを確認できます。通知がうまく送れなかった可能性がある時も、できる範囲で表示します。"
      >
        <p>
          あとから、通知が送られた時間や相手を確認できます。届かなかった可能性がある時も、分かる範囲で表示します。
        </p>
      </TrustSection>

      <TrustSection title="表示の意味">
        <TrustTable
          caption="通知履歴に表示される言葉の意味"
          headers={["表示", "どういう意味？", "気をつけること"]}
          rows={deliveryRows}
        />
      </TrustSection>

      <TrustSection title="なぜ通知履歴を見られるようにしているのか">
        <p>
          あとから「誰に、いつ、どの通知を送ったか」を確認できるようにするためです。あいまいな説明ではなく、見える形で残すことで、本人も家族も連絡先の方も同じ内容を確認できます。
        </p>
      </TrustSection>

      <TrustSection title="通知がうまく届かなかった時">
        <p>
          通知がうまく届かなかった可能性がある時は、必要に応じて、電話やメッセージなど別の方法でも確認してください。
        </p>
        <TrustList
          items={[
            "連絡先の電話番号が正しいか確認する。",
            "連絡先がSMSを止めていないか確認する。",
            "連絡先がまだ同意していない場合は、本人からもう一度説明する。",
            "急いで確認したい時は、電話や公的な緊急連絡手段など別の方法も使う。",
          ]}
        />
      </TrustSection>

      <TrustSection title="通知について知っておくこと">
        <p>
          通知は、通信状況や携帯電話会社の状況などにより、遅れたり届かなかったりすることがあります。
        </p>
        <p>
          通知が届いたように見えても、相手が読んだか、対応したかまでは分かりません。
        </p>
        <p>
          大切な確認が必要な時は、あんぴッチだけに頼らず、電話など別の方法も使ってください。
        </p>
      </TrustSection>

      <TrustSection title="関連ページ">
        <TrustLinkGrid links={relatedLinks} />
      </TrustSection>
    </TrustPage>
  );
}
