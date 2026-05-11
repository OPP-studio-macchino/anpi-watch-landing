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
  title: "家族・パートナーの方へ | あんぴッチ",
  description: "本人同意を前提に、未反応時の連絡ルールを家族やパートナーと決めるための説明です。",
};

const relatedLinks = [
  {
    href: "/before-you-start",
    title: "登録前チェックリスト",
    description: "2名同意、毎日のOK、通信の限界が合うか確認します。",
  },
  {
    href: "/share-message",
    title: "説明文テンプレ",
    description: "本人が家族や連絡先候補へ説明する文面を確認します。",
  },
  {
    href: "/how-it-works",
    title: "48時間の通知ルール",
    description: "未反応時に誰へ何が送られるかを確認します。",
  },
];

export default function ForFamilyPage() {
  return (
    <TrustPage
      eyebrow="For Family"
      title="家族・パートナーの方へ"
      lead="毎日監視するのではなく、未反応時の連絡ルールを本人と決める。本人の同意なしに勝手に稼働させるサービスではありません。"
      actions={[
        { href: "/pricing", label: "料金方針を見る" },
        { href: "/for-contacts", label: "連絡先向け説明を見る" },
      ]}
    >
      <TrustSection title="家族ができること">
        <TrustGrid>
          <TrustCard title="本人に説明する">
            <TrustList
              items={[
                "本人にサービスの目的と限界を説明する。",
                "本人と連絡先候補を話し合う。",
                "通知を受けた時の対応ルールを事前に決める。",
              ]}
            />
          </TrustCard>
          <TrustCard title="事前ルールを作る">
            <p>
              誰に連絡するか、電話に出ない時に次に何をするかを本人と決めておくと、通知を受けた人が迷いにくくなります。
            </p>
          </TrustCard>
        </TrustGrid>
      </TrustSection>

      <TrustSection title="家族ができないこと">
        <TrustGrid>
          <TrustCard title="本人の代わりに稼働させない">
            <TrustList
              items={[
                "本人の代わりに勝手に稼働させることはできません。",
                "連絡先本人の同意を代理することはできません。",
                "救命や発見を保証させることはできません。",
              ]}
            />
          </TrustCard>
          <TrustCard title="同意は本人ごとに必要です">
            <p>
              本人の利用意思と、連絡先2名それぞれのURL同意が揃ってから通知ルールが動きます。
            </p>
          </TrustCard>
        </TrustGrid>
      </TrustSection>

      <TrustSection
        title="本人に見せる説明文テンプレ"
        description="家族から本人へ説明する時の短い文面です。必要に応じて言い換えてください。"
      >
        <p>
          あんぴッチは、あなたを常時追跡するものではなく、OKが一定時間押されない時に、事前に同意した連絡先へ段階通知を試行するサービスです。誰に、いつ、どの通知を送ったかを確認できます。連絡先通知は月額料金に含まれ、36h以降も追加料金なしです。
        </p>
      </TrustSection>

      <TrustSection title="向いている人・向いていない人">
        <TrustGrid>
          <TrustCard title="向いている人">
            <TrustList
              items={[
                "iPhoneを使っている。",
                "連絡先候補が2人いる。",
                "本人と家族で事前説明ができる。",
                "監視よりも透明な連絡ルールを求める。",
              ]}
            />
          </TrustCard>
          <TrustCard title="向いていない人">
            <TrustList
              items={[
                "救命保証を期待している。",
                "位置追跡やバイタル検知を求めている。",
                "連絡先2名を確保できない。",
                "本人に説明せず家族だけで始めたい。",
              ]}
            />
          </TrustCard>
        </TrustGrid>
      </TrustSection>

      <TrustSection title="登録前に確認する">
        <TrustLinkGrid links={relatedLinks} />
      </TrustSection>
    </TrustPage>
  );
}
