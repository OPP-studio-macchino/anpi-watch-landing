import type { Metadata } from "next";
import {
  TrustCard,
  TrustGrid,
  TrustList,
  TrustPage,
  TrustSection,
} from "../../components/trust-foundation/TrustFoundationPage";

export const metadata: Metadata = {
  title: "できること・できないこと | あんぴッチ",
  description: "あんぴッチが行うこと、行わないこと、通信の限界、緊急時の考え方を説明します。",
};

export default function TrustPageRoute() {
  return (
    <TrustPage
      eyebrow="Trust"
      title="できること・できないこと"
      lead="安心を演出するより、何が起きるかを正直に見せる。あんぴッチの価値は、事実・段階・限界を見える化することです。"
      actions={[
        { href: "/how-it-works", label: "通知ルールを見る" },
        { href: "/notification-samples", label: "通知サンプルを見る" },
      ]}
    >
      <TrustSection title="このサービスがすること">
        <TrustGrid>
          <TrustCard title="段階通知を試行する">
            <TrustList
              items={[
                "本人のOKが一定時間確認できない場合に、登録・同意済みの連絡先へ段階通知を試行します。",
                "連絡先の同意・停止状態を扱います。",
                "2名の同意が揃うまで連絡先通知は開始されません。",
              ]}
            />
          </TrustCard>
          <TrustCard title="透明性のために記録する">
            <TrustList
              items={[
                "誰に、いつ、どの通知を送ったかを記録します。",
                "配信結果を確認できる範囲で表示します。",
                "通知エピソード履歴として確認できます。",
              ]}
            />
          </TrustCard>
        </TrustGrid>
      </TrustSection>

      <TrustSection title="このサービスがしないこと">
        <TrustGrid>
          <TrustCard title="判断・監視ではありません">
            <TrustList
              items={[
                "危険・事故・死亡・病状の判断は行いません。",
                "位置追跡は行いません。",
                "バイタル監視は行いません。",
                "自動架電は行いません。",
              ]}
            />
          </TrustCard>
          <TrustCard title="保証ではありません">
            <TrustList
              items={[
                "救命・救助・発見・所在確認を保証しません。",
                "警察・消防・救急・自治体・病院・警備会社への自動通報は行いません。",
                "連絡先が読むことや動くことを保証しません。",
                "SMS / Push / Email の到達、閲覧、対応を保証しません。",
              ]}
            />
          </TrustCard>
        </TrustGrid>
      </TrustSection>

      <TrustSection title="通信の限界">
        <TrustList
          items={[
            "外部プロバイダが送信要求を受理したことは、相手端末への到達、閲覧、対応を意味しません。",
            "deliveredは読まれたことを意味しません。",
            "端末・通信・迷惑判定・OS設定で遅延や不達があり得ます。",
          ]}
        />
      </TrustSection>

      <TrustSection title="緊急時">
        <p>
          緊急の危険がある場合は、公的緊急連絡手段や電話など別手段を使う必要があります。
        </p>
      </TrustSection>

      <TrustSection title="なぜ正直に書くか">
        <p>
          このサービスの価値は安心演出ではなく、反応が途切れた時の連絡ルールと透明性を、本人・家族・連絡先が同じ言葉で確認できることにあります。
        </p>
      </TrustSection>
    </TrustPage>
  );
}
