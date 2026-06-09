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
  title: "SMSを止めたい時・内容を確認したい時 | あんぴッチ",
  description: "あんぴッチから届くSMSを止めたい時、内容を確認したい時、また受け取りたい時の方法を説明します。",
};

const relatedLinks = [
  {
    href: "/for-contacts",
    title: "連絡先としてSMSを受け取る方へ",
    description: "連絡先として通知を受け取る前に知っておきたいことを確認します。",
  },
  {
    href: "/notification-samples",
    title: "通知サンプルを見る",
    description: "実際に届く可能性があるSMSや通知の例を確認します。",
  },
  {
    href: "/trust",
    title: "できること・できないことを見る",
    description: "あんぴッチでできること、できないことを確認します。",
  },
];

export default function StopHelpPage() {
  return (
    <TrustPage
      eyebrow="STOP / HELP"
      title="SMSを止めたい時・内容を確認したい時"
      lead="このページは、あんぴッチから届くショートメッセージを止めたい時や、内容を確認したい時の説明です。SMSは、携帯電話に届く短いメッセージです。STOP / HELP / START は、あんぴッチから届いたSMSに返信する言葉です。本人から届いた説明SMSや同意のお願いSMSには効きません。"
      actions={[
        { href: "/for-contacts", label: "連絡先としてSMSを受け取る方へ" },
        { href: "/notification-samples", label: "通知サンプルを見る" },
        { href: "/trust", label: "できること・できないことを見る" },
      ]}
    >
      <TrustSection title="SMSを止めたい時">
        <TrustGrid>
          <TrustCard title="STOPと返信してください">
            <p>
              あんぴッチからのSMSを受け取りたくない時は、あんぴッチから届いたSMSに STOP と返信してください。STOP と返信すると、その電話番号には、あんぴッチからのSMSを送らないようにします。
            </p>
          </TrustCard>
          <TrustCard title="STOPについて">
            <TrustList
              items={[
                "STOPはいつでも使えます。",
                "STOPしても、本人や連絡先に罰はありません。",
                "本人から届いた説明SMSや同意のお願いSMSに返信しても、あんぴッチのSMS設定は変わりません。",
                "また受け取りたい時は、本人からの案内にそって、もう一度同意してください。",
              ]}
            />
          </TrustCard>
        </TrustGrid>
      </TrustSection>

      <TrustSection title="このSMSが何か知りたい時">
        <TrustGrid>
          <TrustCard title="HELPと返信してください">
            <p>
              あんぴッチから届いたSMSが何のために届いたのか知りたい時は、そのSMSに HELP と返信してください。あんぴッチの説明と、SMSを止める方法が届きます。
            </p>
          </TrustCard>
          <TrustCard title="HELPについて">
            <TrustList
              items={[
                "HELPと返信しても、SMSは止まりません。",
                "SMSを止めたい時は、STOP と返信してください。",
                "HELPは、本人の状況を確認するものではありません。",
              ]}
            />
          </TrustCard>
        </TrustGrid>
      </TrustSection>

      <TrustSection title="STOPした後">
        <p>
          STOPした後は、その電話番号にはあんぴッチからのSMSを送りません。そのため、本人の連絡先として使えなくなる場合があります。
        </p>
        <TrustList
          items={[
            "本人には、連絡先が足りないことを確認してもらう必要があります。",
            "もう一度受け取りたい時は、本人からの案内にそって同意してください。",
            "STOPした人が、救助や訪問をしなければならないわけではありません。",
          ]}
        />
      </TrustSection>

      <TrustSection title="また受け取りたい時">
        <p>
          もう一度あんぴッチのSMSを受け取りたい時は、本人から届く案内にそって、もう一度同意してください。START を使う場合も、あんぴッチから届いたSMSに返信します。本人から届いたSMSでは、あんぴッチの受け取り設定は変わりません。
        </p>
      </TrustSection>

      <TrustSection title="SMSが怪しいと感じた時">
        <p>
          SMS内のリンクだけで判断せず、まず本人に直接確認してください。本人に確認できない場合は、無理にリンクを開く必要はありません。
        </p>
        <TrustList
          items={[
            "あんぴッチは、警察・消防・救急などへ自動で連絡するサービスではありません。",
            "緊急の危険が明らかな時は、電話や公的な緊急連絡手段など、別の方法で確認してください。",
          ]}
        />
      </TrustSection>

      <TrustSection title="知っておいてほしいこと">
        <TrustList
          items={[
            "通知を受け取っても、救助・訪問・対応を強制されるものではありません。",
            "SMSは、通信状況やスマホの設定によって、遅れたり届かなかったりすることがあります。",
            "あんぴッチだけで、本人の状況や場所が分かることを約束するものではありません。",
          ]}
        />
      </TrustSection>

      <TrustSection title="よくある質問">
        <TrustGrid>
          <TrustCard title="STOPすると本人に通知されますか？">
            <p>
              本人には、連絡先として使えない可能性があることを確認してもらう必要があります。
            </p>
          </TrustCard>
          <TrustCard title="STOPと返信すると、どうなりますか？">
            <p>
              あんぴッチから届いたSMSに返信した場合、その電話番号には、あんぴッチからのSMSを送らないようにします。本人から届いた同意のお願いSMSには効きません。
            </p>
          </TrustCard>
          <TrustCard title="HELPと返信すると、SMSは止まりますか？">
            <p>
              止まりません。HELPは、あんぴッチから届いたSMSの説明を受け取るための言葉です。止めたい時は、あんぴッチから届いたSMSにSTOPと返信してください。
            </p>
          </TrustCard>
          <TrustCard title="STOPした後、また受け取れますか？">
            <p>
              はい。もう一度受け取りたい時は、本人からの案内にそって、もう一度同意してください。
            </p>
          </TrustCard>
          <TrustCard title="同意していないのにSMSが届くことはありますか？">
            <p>
              本人があなたを連絡先候補として登録した時に、本人のスマホから同意をお願いするSMSが届くことがあります。このSMSが届いただけでは、まだ同意したことにはなりません。
            </p>
          </TrustCard>
          <TrustCard title="通知が届いたら、必ず対応しないといけませんか？">
            <p>
              いいえ。通知を受け取っても、救助や訪問を強制されるものではありません。できる範囲で、本人に電話やメッセージで確認してください。
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
