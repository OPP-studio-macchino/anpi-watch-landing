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
  title: "離れて暮らす本人に、あんぴッチを提案したい方へ | あんぴッチ",
  description: "本人にあんぴッチを紹介したい家族・パートナー向けに、できること、できないこと、説明の仕方をまとめています。",
};

const relatedLinks = [
  {
    href: "/before-you-start",
    title: "登録前チェックリスト",
    description: "連絡先2人の同意、毎日のOK、通知が届かない場合があることを確認します。",
  },
  {
    href: "/share-message",
    title: "本人に提案する文面",
    description: "家族・パートナーから本人へ伝える文面を確認します。",
  },
  {
    href: "/for-contacts",
    title: "連絡先として読む方へ",
    description: "連絡先候補としてSMSを受け取る方の説明を確認します。",
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
      title="離れて暮らす本人に、あんぴッチを提案したい方へ"
      lead="このページは、家族・パートナーにあんぴッチを紹介したい方のための説明ページです。あんぴッチは、本人を勝手に監視したり、本人の代わりに通知を始めたりするサービスではありません。本人が内容を理解し、連絡先2名の同意が揃って初めて、通知ルールが有効になります。"
      actions={[
        { href: "/share-message", label: "本人に送る説明文テンプレを見る" },
        { href: "/for-contacts", label: "連絡先向け説明を見る" },
      ]}
    >
      <TrustSection title="このページで分かること">
        <TrustList
          items={[
            "家族ができること",
            "家族ができないこと",
            "本人にどう説明すればよいか",
            "連絡先2名の同意がなぜ必要か",
            "あんぴッチが向いているケース・向いていないケース",
          ]}
        />
        <p>
          連絡先候補として読む方は、連絡先向け説明を確認してください。
        </p>
      </TrustSection>

      <TrustSection title="家族ができること">
        <p>
          家族ができることは、本人にサービスの内容を説明し、未反応時の連絡ルールを一緒に決めることです。
        </p>
        <TrustList
          items={[
            "本人にあんぴッチを紹介する。",
            "連絡先候補を一緒に考える。",
            "通知が届いた時の対応を事前に話す。",
            "料金と通知ルールを一緒に確認する。",
          ]}
        />
        <p>
          あなたができるのは、本人に代わって管理することではありません。本人と一緒に、未反応時の連絡ルールを決めることです。
        </p>
      </TrustSection>

      <TrustSection title="家族ができないこと">
        <p>
          本人の同意なしに、家族だけで通知を始めることはできません。
        </p>
        <TrustList
          items={[
            "本人の代わりに勝手に稼働させる。",
            "連絡先本人の同意を代理する。",
            "救命や発見を保証させる。",
            "位置情報やバイタルを確認する。",
          ]}
        />
      </TrustSection>

      <TrustSection title="本人に伝える時の説明">
        <p>
          「毎日監視するアプリ」ではなく、「長く反応がない時に誰へ連絡するかを先に決めるアプリ」として説明してください。
        </p>
        <TrustLinkGrid
          links={[
            {
              href: "/share-message",
              title: "本人に送る説明文テンプレを見る",
              description: "家族・パートナーから本人へ伝える短い説明文を確認します。",
            },
          ]}
        />
      </TrustSection>

      <TrustSection title="向いているケース">
        <TrustList
          items={[
            "本人がiPhoneを使っている。",
            "本人と話し合える関係がある。",
            "連絡先候補が2人いる。",
            "監視ではなく、透明な連絡ルールを求めている。",
          ]}
        />
      </TrustSection>

      <TrustSection title="向いていないケース">
        <TrustGrid>
          <TrustCard title="始め方が合わない場合">
            <TrustList
              items={[
                "本人に説明せずに始めたい。",
                "連絡先2名を確保できない。",
              ]}
            />
          </TrustCard>
          <TrustCard title="期待する機能が違う場合">
            <TrustList
              items={[
                "救命保証や自動通報を期待している。",
                "位置追跡やバイタル監視を求めている。",
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
