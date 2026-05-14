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
  title: "できること・できないこと | あんぴッチ",
  description: "あんぴッチでできること、できないこと、通知について知っておくことを説明します。",
};

const relatedLinks = [
  {
    href: "/delivery-status",
    title: "通知履歴・配信結果の見方",
    description: "通知が送れたか、送れなかったか、どう読めばよいかを確認します。",
  },
  {
    href: "/before-you-start",
    title: "登録前チェックリスト",
    description: "サービスが自分に合うか確認します。",
  },
  {
    href: "/pricing",
    title: "月額300円の料金",
    description: "月額300円の料金と、解約・返金の説明を確認します。",
  },
];

export default function TrustPageRoute() {
  return (
    <TrustPage
      eyebrow="Trust"
      title="できること・できないこと"
      lead="あんぴッチでできること、できないことを先に説明します。本人も、家族も、連絡先の方も、同じ理解で使えるようにするためです。"
      actions={[
        { href: "/how-it-works", label: "通知ルールを見る" },
        { href: "/notification-samples", label: "通知サンプルを見る" },
      ]}
    >
      <TrustSection title="あんぴッチでできること">
        <TrustGrid>
          <TrustCard title="反応がない時に、順番にお知らせする">
            <TrustList
              items={[
                "本人のOKが長い時間ない時に、登録・同意済みの連絡先へ順番にお知らせします。",
                "2名の連絡先が同意するまで、連絡先への通知は始まりません。",
                "STOPで受け取りを止めた連絡先には、再び同意するまで通知を送りません。",
              ]}
            />
          </TrustCard>
          <TrustCard title="通知の記録を見られる">
            <TrustList
              items={[
                "誰に、いつ、どの通知を送ったかを確認できます。",
                "通知が送れたか、送れなかったかを確認できます。",
                "通知の記録は、あとから確認できます。",
              ]}
            />
          </TrustCard>
        </TrustGrid>
      </TrustSection>

      <TrustSection title="あんぴッチでできないこと">
        <TrustGrid>
          <TrustCard title="体調や場所を調べるアプリではありません">
            <TrustList
              items={[
                "危険な状態かどうかは判断できません。",
                "事故や病気が起きたかどうかは判断できません。",
                "今いる場所は分かりません。",
                "心拍や体温などは見ません。",
                "自動で電話をかけることはしません。",
              ]}
            />
          </TrustCard>
          <TrustCard title="このアプリだけで解決するものではありません">
            <TrustList
              items={[
                "このアプリだけで、本人の状況や場所が分かることを約束するものではありません。",
                "本人への確認が完了することや、居場所が分かることを約束するものではありません。",
                "警察・消防・救急・病院・警備会社などへ自動で連絡するサービスではありません。",
                "連絡先の方がSMSを読んだり、動いたりすることを約束するものではありません。",
              ]}
            />
          </TrustCard>
        </TrustGrid>
      </TrustSection>

      <TrustSection title="通知について知っておくこと">
        <TrustList
          items={[
            "通知は、通信状況や携帯電話会社の状況などにより、遅れたり届かなかったりすることがあります。",
            "通知が届いたように見えても、相手が読んだか、対応したかまでは分かりません。",
            "通知が届かない時に備えて、本人や連絡先と、別の確認方法も話しておくことをおすすめします。",
          ]}
        />
      </TrustSection>

      <TrustSection title="急いで確認したい時">
        <p>
          緊急の危険が明らかな場合は、あんぴッチの通知だけに頼らず、電話や公的な緊急連絡手段など、別の方法でも確認してください。
        </p>
      </TrustSection>

      <TrustSection title="先に知っておいてほしいこと">
        <p>
          あんぴッチは、本人が24時間以上OKを押していない場合は本人へ、36時間以上続くと登録・同意済みの連絡先へ通知します。できることと、できないことを先に知っておくことで、本人・家族・連絡先の方が同じ理解で使えます。
        </p>
      </TrustSection>

      <TrustSection title="さらに詳しく確認する">
        <TrustLinkGrid links={relatedLinks} />
      </TrustSection>
    </TrustPage>
  );
}
