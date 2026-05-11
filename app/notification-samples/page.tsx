import type { Metadata } from "next";
import {
  NotificationSample,
  NotificationSampleGrid,
  TrustPage,
  TrustSection,
} from "../../components/trust-foundation/TrustFoundationPage";

export const metadata: Metadata = {
  title: "通知サンプル | あんぴッチ",
  description: "本人向けPush、本人SMS、連絡先SMS、同意依頼SMS、HELP、STOPのサンプルです。",
};

export default function NotificationSamplesPage() {
  return (
    <TrustPage
      eyebrow="Notification Samples"
      title="通知サンプル"
      lead="実際に送られる可能性のある通知例です。サンプルであり、本番文面は短文化・法務・配信都合で調整される可能性があります。"
      actions={[
        { href: "/how-it-works", label: "48時間の流れを見る" },
        { href: "/for-contacts", label: "連絡先向け説明を見る" },
      ]}
    >
      <TrustSection title="通知例">
        <NotificationSampleGrid>
          <NotificationSample
            title="L1 Push"
            target="本人"
            timing="最終OKから24h"
            purpose="本人にOK操作を促す"
            sample="【安否確認】最終OKから24時間以上です。状況に問題がなければOKを押してください。"
            notes={["連絡先には送らない通知です。", "Pushの表示は端末設定により変わります。"]}
          />
          <NotificationSample
            title="L2 本人SMS"
            target="本人"
            timing="最終OKから30h"
            purpose="36hで連絡先Aへ通知予定であることを伝える"
            sample="【安否確認】最終OKから30時間以上です。36時間で連絡先AへSMS送信。追加料金なし。連絡先へ通知したくない場合は今OK。"
            notes={["36h通知の前に本人へ知らせます。", "36h以降の連絡先通知は月額料金に含まれます。"]}
          />
          <NotificationSample
            title="L3 連絡先A SMS"
            target="連絡先A"
            timing="最終OKから36h"
            purpose="本人に連絡できるか確認してもらう"
            sample="【安否確認】{name}さん反応なし（最終OK:{mm/dd HH:MM}）。連絡できるか確認してください。停止:STOP"
            notes={["到達・閲覧・対応は保証しません。", "通知を受けた人に対応を強制するものではありません。"]}
          />
          <NotificationSample
            title="L4 連絡先B SMS"
            target="連絡先B"
            timing="最終OKから42h"
            purpose="別の連絡先にも確認を依頼する"
            sample="【安否確認】{name}さん反応なし（最終OK:{mm/dd HH:MM}）。連絡できるか確認してください。停止:STOP"
            notes={["連絡先B本人のURL同意が必要です。", "送信要求の受理は閲覧や対応を意味しません。"]}
          />
          <NotificationSample
            title="L5 最終SMS"
            target="連絡先A/B"
            timing="最終OKから48h"
            purpose="最後の段階通知として直接確認を促す"
            sample="【安否確認】最終警報：{name}さん反応なし（最終OK:{mm/dd HH:MM}）。至急、直接確認をお願いします。停止:STOP"
            notes={["Email補助を試行する場合があります。", "救助・発見・所在確認は保証しません。"]}
          />
          <NotificationSample
            title="連絡先同意依頼SMS"
            target="連絡先候補"
            timing="本人が連絡先候補として登録した時"
            purpose="URL同意ページへ案内する"
            sample="【安否通知】{name}さんが緊急連絡先に登録しました。承諾/拒否: {short_url} 停止:STOP"
            notes={["登録は同意ではありません。", "連絡先本人が自分の端末で明示的に同意します。"]}
          />
          <NotificationSample
            title="HELP返信"
            target="HELPを送った人"
            timing="HELP受信時"
            purpose="通知の目的と停止方法を説明する"
            sample="【安否通知HELP】この番号は安否未確認時の通知です。停止は STOP と返信してください。"
            notes={["HELPは案内用の返信です。", "本人や連絡先の状態判断を行うものではありません。"]}
          />
          <NotificationSample
            title="STOP説明"
            target="STOPを送った人"
            timing="STOP受信時"
            purpose="受信停止の扱いを伝える"
            sample="STOPを受け付けました。再同意が成立するまで、運用通知は送られません。"
            notes={["STOPは即時有効です。", "再開には再同意が必要です。"]}
          />
        </NotificationSampleGrid>
      </TrustSection>
    </TrustPage>
  );
}
