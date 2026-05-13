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
  title: "始める前のチェックリスト | あんぴッチ",
  description: "あんぴッチを始める前に、必要な準備や知っておきたいことを確認できます。",
};

const checklistItems = [
  "iPhoneで使う予定がある。",
  "毎日OKを押せそう。",
  "連絡先としてお願いできる人が2人いる。",
  "その2人に、あんぴッチのことを説明できる。",
  "連絡先の人が、自分でURLを開いて同意する必要があると分かっている。",
  "2人が同意するまで、連絡先への通知は始まらないと分かっている。",
  "料金は月額300円だと分かっている。",
  "通知履歴で、誰に・いつ・どの通知を送ったかを確認できると分かっている。",
  "ショートメッセージ、スマホ通知、メールは、遅れたり届かなかったりすることがあると分かっている。",
  "このアプリだけで、本人の状況や場所が分かることを約束するものではないと分かっている。",
  "急いで確認したい時は、電話など別の方法も使う必要があると分かっている。",
];

const relatedLinks = [
  {
    href: "/for-family",
    title: "本人に提案したい方へ",
    description: "家族・パートナーとして本人に説明する時の前提を確認します。",
  },
  {
    href: "/for-contacts",
    title: "連絡先としてSMSを受け取る方へ",
    description: "連絡先として通知を受け取る前に知っておきたいことを確認します。",
  },
  {
    href: "/how-it-works",
    title: "48時間の通知ルールを見る",
    description: "通知がいつ、誰に届くかを確認します。",
  },
  {
    href: "/pricing",
    title: "月額300円の料金を見る",
    description: "料金と解約・返金の説明を確認します。",
  },
  {
    href: "/trust",
    title: "できること・できないことを見る",
    description: "あんぴッチでできること、できないことを確認します。",
  },
];

export default function BeforeYouStartPage() {
  return (
    <TrustPage
      eyebrow="Before You Start"
      title="始める前のチェックリスト"
      lead="あんぴッチは、毎日OKを押して、長い時間反応がない時の連絡ルールを決めておくアプリです。始める前に、連絡先2人の同意や、通知について知っておきたいことを確認しておきましょう。"
      actions={[
        { href: "/for-family", label: "本人に提案したい方へ" },
        { href: "/for-contacts", label: "連絡先としてSMSを受け取る方へ" },
        { href: "/how-it-works", label: "48時間の通知ルールを見る" },
      ]}
    >
      <TrustSection
        title="始める前に確認すること"
        description="先に話しておくと、本人も連絡先の方も使いやすくなります。"
      >
        <TrustList items={checklistItems} />
      </TrustSection>

      <TrustSection title="使いやすいケース">
        <TrustList
          items={[
            "一人暮らしをしている。",
            "本人と話し合える家族やパートナーがいる。",
            "連絡先としてお願いできる人が2人いる。",
            "監視ではなく、長く反応がない時の連絡ルールを決めたい。",
            "毎日OKを押す習慣を作れそう。",
          ]}
        />
      </TrustSection>

      <TrustSection title="合わないかもしれないケース">
        <TrustGrid>
          <TrustCard title="準備が難しい場合">
            <TrustList
              items={[
                "連絡先を2人お願いするのが難しい。",
                "本人に説明せず、家族だけで始めたい。",
                "とにかく一番安いサービスだけを探している。",
              ]}
            />
          </TrustCard>
          <TrustCard title="別の見守り方法が必要な場合">
            <TrustList
              items={[
                "位置情報や心拍、体温などを見たい。",
                "警察や消防などへ自動で連絡してほしい。",
                "このアプリだけで、本人の状況確認が完了することを期待している。",
              ]}
            />
          </TrustCard>
        </TrustGrid>
      </TrustSection>

      <TrustSection title="次に見ると分かりやすいページ">
        <TrustLinkGrid links={relatedLinks} />
      </TrustSection>
    </TrustPage>
  );
}
