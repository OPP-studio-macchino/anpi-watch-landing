import type { Metadata } from "next";
import {
  TrustCard,
  TrustGrid,
  TrustLinkGrid,
  TrustList,
  TrustPage,
  TrustSection,
} from "../../../components/trust-foundation/TrustFoundationPage";

export const metadata: Metadata = {
  title: "STOP / HELP・受信停止について | あんぴッチ",
  description: "あんぴッチからSMSを受け取った連絡先向けに、STOP、HELP、再同意、受信停止後の扱いを説明します。",
};

const relatedLinks = [
  {
    href: "/for-contacts",
    title: "連絡先向け説明",
    description: "URL同意、通知を受けた時の行動、責任範囲を確認します。",
  },
  {
    href: "/notification-samples",
    title: "通知サンプル",
    description: "同意依頼SMS、HELP返信、STOP説明などの文面例を確認します。",
  },
  {
    href: "/trust",
    title: "できること・できないこと",
    description: "通知、記録、同意、通信の限界を確認します。",
  },
];

export default function StopHelpPage() {
  return (
    <TrustPage
      eyebrow="STOP / HELP"
      title="STOP / HELP・受信停止について"
      lead="このページは、あんぴッチからSMSを受け取った連絡先向けの説明ページです。STOPは受信停止、HELPは用途と停止方法の確認です。"
      actions={[
        { href: "/for-contacts", label: "連絡先向け説明を見る" },
        { href: "/notification-samples", label: "通知サンプルを見る" },
        { href: "/trust", label: "できること・できないことを見る" },
      ]}
    >
      <TrustSection title="STOPとは">
        <TrustGrid>
          <TrustCard title="受信停止です">
            <p>
              STOPはSMSの受信停止です。STOP後は再同意が成立するまで、運用通知は送られません。
            </p>
          </TrustCard>
          <TrustCard title="いつでもできます">
            <p>
              STOPはいつでもできます。STOPしても、本人や連絡先にペナルティがあるわけではありません。
            </p>
          </TrustCard>
        </TrustGrid>
      </TrustSection>

      <TrustSection title="HELPとは">
        <TrustGrid>
          <TrustCard title="用途と停止方法の確認">
            <p>
              HELPは、このSMSの用途と停止方法を確認するためのキーワードです。
            </p>
          </TrustCard>
          <TrustCard title="同意状態は変わりません">
            <p>
              HELPは同意状態を変更しません。HELPでは、サービス名、用途、STOP方法、必要な確認導線を説明します。
            </p>
          </TrustCard>
        </TrustGrid>
      </TrustSection>

      <TrustSection
        title="STOP後に起きること"
        description="該当連絡先は停止状態として扱われます。"
      >
        <TrustList
          items={[
            "2名同意の条件を満たせなくなる場合、サービスは通知稼働条件を満たさなくなる可能性があります。",
            "再開には再同意が必要です。",
            "実際の再同意方法は正式運用時の案内に従います。",
            "再同意も、連絡先本人が明示的に行う必要があります。",
          ]}
        />
      </TrustSection>

      <TrustSection title="受信したSMSが分からない時">
        <TrustList
          items={[
            "まずSMS本文のサービス名と対象ユーザー名を確認してください。",
            "怪しいと感じる場合は、URLを開く前に本人へ直接確認してください。",
            "緊急の危険が明らかな場合は、公的緊急連絡手段や電話など別手段を使ってください。",
          ]}
        />
      </TrustSection>

      <TrustSection title="あんぴッチが保証しないこと">
        <TrustList
          items={[
            "SMSの到達、閲覧、対応は保証しません。",
            "連絡先の行動は保証しません。",
            "救命、発見、所在確認は保証しません。",
            "通知を受け取っても、救助・訪問・対応を強制されるものではありません。",
          ]}
        />
      </TrustSection>

      <TrustSection title="よくある質問">
        <TrustGrid>
          <TrustCard title="STOPすると本人に通知されますか？">
            <p>
              停止状態として扱われます。本人側の表示や案内の詳細は正式運用時の仕様に従います。
            </p>
          </TrustCard>
          <TrustCard title="HELPを送ると通知は止まりますか？">
            <p>
              いいえ。HELPは用途と停止方法の確認です。受信停止したい場合はSTOPを使います。
            </p>
          </TrustCard>
          <TrustCard title="STOP後にまた受け取るには？">
            <p>
              再同意が必要です。再同意は連絡先本人が明示的に行います。
            </p>
          </TrustCard>
          <TrustCard title="同意していないのに通知が届きますか？">
            <p>
              運用通知はURL同意が成立した連絡先へ送る前提です。同意依頼など確認用のSMSが届く場合があります。
            </p>
          </TrustCard>
          <TrustCard title="連絡先をやめたい場合は？">
            <p>
              STOPで受信停止できます。本人にも、別の連絡先候補を探す必要があることを伝えてください。
            </p>
          </TrustCard>
        </TrustGrid>
      </TrustSection>

      <TrustSection title="関連ページ">
        <TrustLinkGrid links={relatedLinks} />
      </TrustSection>
    </TrustPage>
  );
}
