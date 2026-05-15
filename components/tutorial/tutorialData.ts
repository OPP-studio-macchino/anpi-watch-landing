export type TutorialTone = "neutral" | "info" | "warning" | "success";
export type TutorialPreview = "home" | "ok" | "time" | "records";

export const introFacts = [
  {
    title: "このアプリは何？",
    body: "毎日OKを1回記録するアプリです。最後のOKから時間がたつと、順番にお知らせします。",
    tone: "info"
  },
  {
    title: "今日やること",
    body: "ホームで大きいOKを1回押します。今の時刻でOKを記録します。",
    tone: "success"
  },
  {
    title: "先に知ること",
    body: "アプリを開くだけでは記録されません。2人のURL同意がそろうまで自動通知は始まりません。",
    tone: "warning"
  },
  {
    title: "料金",
    body: "料金は月額300円です。",
    tone: "info"
  }
] as const;

export const courseChecks = [
  "ホームを開く",
  "大きいOKを1回押す",
  "時刻と記録を見る"
] as const;

export const stepRail = [
  { id: "step-1", label: "ホーム" },
  { id: "step-2", label: "OK" },
  { id: "step-3", label: "時刻" },
  { id: "step-4", label: "記録" },
  { id: "step-5", label: "完了" }
] as const;

export const tutorialSteps = [
  {
    id: "step-1",
    number: "1",
    title: "ホームを開く",
    summary: "毎日の入口です。まず、大きいOKの場所を見つけます。",
    helper: "迷ったら、この画面に戻ります。",
    preview: "home" as const,
    actions: [
      {
        title: "下の『ホーム』を押します。",
        outcome: "大きいOKが見えます。"
      }
    ]
  },
  {
    id: "step-2",
    number: "2",
    title: "大きいOKを押す",
    summary: "今日はこれだけでOKです。1回だけ押します。",
    helper: "アプリを開いただけでは記録されません。押した時だけ記録されます。",
    preview: "ok" as const,
    actions: [
      {
        title: "大きいOKを押します。",
        outcome: "『今の時刻でOKを記録しました』が出ます。"
      }
    ]
  },
  {
    id: "step-3",
    number: "3",
    title: "今日の時刻を見る",
    summary: "押せたかどうかを、目で確かめます。",
    helper: "『押したつもり』を減らすために見ます。",
    preview: "time" as const,
    actions: [
      {
        title: "時刻の場所を見ます。",
        outcome: "時刻が今に近い表示へ変わります。"
      }
    ]
  },
  {
    id: "step-4",
    number: "4",
    title: "記録を開く",
    summary: "あとで見返せる場所です。今日は入口だけ見ます。",
    helper: "不安を減らすために、記録の場所も先に知っておきます。",
    preview: "records" as const,
    actions: [
      {
        title: "下の『設定』を押します。",
        outcome: "設定の一覧が出ます。"
      },
      {
        title: "『通知の記録』を押します。",
        outcome: "今日の行が見えます。"
      }
    ]
  }
] as const;

export const finishChecks = [
  "大きいOKを押せた",
  "時刻が新しくなった",
  "記録を開けた"
] as const;

export const finishPoints = [
  "次からは、ホームでOKを1回押すだけです。",
  "もっと知りたい時は、くわしいマニュアルで連絡先や通知の流れを見ます。",
  "2人のURL同意がそろうまで、連絡先への通知は始まりません。",
  "料金は月額300円です。",
  "危険や死亡を判断するアプリではありません。救助や発見を保証するものでもありません。"
] as const;

export const tutorialNotes = [
  "まだ連絡先の準備が終わっていない時は、先に『使う前の準備』を見ます。",
  "ホームには、今の状態、最後のOK、OKから、次の予定が出ます。",
  "通知だけ止めても、時間のカウントは止まりません。",
  "このコースは、最初の1回を迷わず終えるためのページです。",
  "文字は短くしています。分からなくなったら、見出しだけ追います。"
] as const;
