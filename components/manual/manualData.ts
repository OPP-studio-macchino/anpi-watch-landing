export type Tone = "neutral" | "success" | "info" | "warning" | "critical";

export const tocItems = [
  { id: "overview", label: "まず知ること" },
  { id: "setup", label: "使う前の準備" },
  { id: "daily", label: "毎日OKする" },
  { id: "escalation", label: "通知の進み方" },
  { id: "records", label: "記録と料金を見る" },
  { id: "faq", label: "困った時のQ&A" },
  { id: "summary", label: "これだけ覚えればOK" }
] as const;

export const keyFacts = [
  {
    title: "最後のOKから時間がたつと、順番にお知らせします",
    body: "危険や死亡を判断するアプリではありません。病気や今いる場所も判断しません。",
    tone: "info"
  },
  {
    title: "2人そろうまで、動きません",
    body: "連絡先Aと連絡先Bの同意がそろうまで、OKの記録と自動通知は始まりません。1人だけでは始まりません。",
    tone: "warning"
  },
  {
    title: "あとで見返せます",
    body: "誰に、いつ送ったかを見られます。結果も残ります。いつ追加料金がかかったかも見られます。",
    tone: "success"
  }
] as const;

export const setupSteps = [
  { title: "本人確認を始めます。", outcome: "ホームに「まず本人確認をします」と表示されます。" },
  { title: "電話番号を入力します。", outcome: "このiPhoneで使う電話番号を入力します。" },
  { title: "電話番号を確認してSMSを送ります。", outcome: "「この番号にSMSを送る」を押します。" },
  { title: "SMSのリンクを開いて本人確認を完了します。", outcome: "登録が完了します。" },
  { title: "ホームで準備中の状態を確認します。", outcome: "連絡先A/Bが未登録と表示されます。" },
  { title: "連絡先A・Bを登録します。", outcome: "連絡先Aと連絡先Bが登録されます。" }
] as const;

export const consentStates = [
  {
    label: "同意待ち",
    summary: "返事待ちです。",
    detail: "この状態では自動通知は始まりません。SMSをもう一度送れます。",
    tone: "warning"
  },
  {
    label: "同意済み",
    summary: "同意済みです。",
    detail: "AとBの両方が同意済みになると、自動通知を始められます。",
    tone: "success"
  },
  {
    label: "停止中",
    summary: "受け取りを止めています。",
    detail: "停止中の連絡先には送りません。2人そろわない時は自動通知は始まりません。",
    tone: "critical"
  }
] as const;

export const setupReminders = [
  "2人の同意がそろうまで、OKの記録と自動通知は始まりません。",
  "同意待ちの人にはSMSをもう一度送れます。",
  "番号が違うとSMSが届きません。"
] as const;

export const dailySteps = [
  { title: "下の「ホーム」を押します。", outcome: "大きいOKが見えます。" },
  { title: "大きいOKを押します。", outcome: "今の時刻でOKを記録します。" },
  { title: "ホームの表示を見ます。", outcome: "通知前、今の状態、最後のOK、OKから、次の予定が見えます。" }
] as const;

export const successChecks = [
  "「今の時刻でOKを記録しました」",
  "最後のOKの時刻が新しくなる",
  "OKからの時間が短くなる"
] as const;

export const snoozeSteps = [
  { title: "ホームを開きます。", outcome: "「1時間 / 3時間 / 6時間」が見えます。" },
  { title: "時間を1つ押します。", outcome: "選んだ時間が濃くなります。" },
  { title: "終わる時刻を見ます。", outcome: "いつまで通知だけ止めるかが出ます。" }
] as const;

export const escalationTimeline = [
  {
    time: "24時間",
    title: "本人へスマホ通知",
    detail: "本人のスマホに通知します。連絡先には送りません。",
    tone: "info"
  },
  {
    time: "30時間",
    title: "本人 SMS",
    detail: "本人へSMSを送ります。36時間で追加料金がかかることも先に知らせます。",
    tone: "warning"
  },
  {
    time: "36時間",
    title: "連絡先AへSMS",
    detail: "連絡先AへSMSを送ります。この時点で1回分の追加料金がかかります。",
    tone: "critical"
  },
  {
    time: "42時間",
    title: "連絡先BへSMS",
    detail: "連絡先BへSMSを送ります。42時間で追加料金は増えません。",
    tone: "critical"
  },
  {
    time: "48時間以降",
    title: "A+B 最終通知",
    detail: "連絡先AとBへ最後のSMSを送ります。48時間で追加料金は増えません。救助や発見を保証するものではありません。",
    tone: "critical"
  }
] as const;

export const recordSteps = [
  { title: "下の「設定」を押します。", outcome: "設定の一覧が出ます。" },
  { title: "「通知の記録」を押します。", outcome: "日付ごとの一覧が出ます。" },
  { title: "1行を見ます。", outcome: "誰に送ったか見えます。" }
] as const;

export const billingSteps = [
  { title: "「設定」を押します。", outcome: "設定の一覧が出ます。" },
  { title: "「料金の記録」を押します。", outcome: "今月の回数が見えます。" },
  { title: "1行を見ます。", outcome: "日付と金額が見えます。" }
] as const;

export const recordChecks = [
  "誰に送ったか",
  "いつ送ったか",
  "結果がどうだったか",
  "いつ追加料金がかかったか"
] as const;

export const notificationRows = [
  {
    channel: "スマホ通知",
    recipient: "本人",
    sentAt: "24時間経過後 09:00",
    template: "OKを押すお知らせ",
    result: "送信済み",
    tone: "info"
  },
  {
    channel: "SMS",
    recipient: "連絡先A",
    sentAt: "36時間経過後 21:00",
    template: "連絡先AへのSMS",
    result: "配信成功",
    tone: "success"
  },
  {
    channel: "SMS",
    recipient: "連絡先B",
    sentAt: "42時間経過後 03:00",
    template: "連絡先BへのSMS",
    result: "配信失敗",
    tone: "critical"
  }
] as const;

export const billingRows = [
  {
    state: "予告",
    trigger: "30時間の本人SMS",
    amount: "まだ発生しません",
    detail: "36時間で連絡先AへSMSを送ると、この回の追加料金が1回かかります。",
    tone: "warning"
  },
  {
    state: "発生",
    trigger: "36時間の連絡先AへのSMS",
    amount: "1回分",
    detail: "この時点で記録されます。同じ回では最大1回です。42時間や48時間では増えません。",
    tone: "critical"
  },
  {
    state: "確認",
    trigger: "設定 > 料金の記録",
    amount: "今月の回数",
    detail: "いつ追加料金がかかったかをあとから見返せます。",
    tone: "info"
  }
] as const;

export const faqs = [
  {
    question: "OKが押せません",
    answers: ["いったん画面を閉じます。", "もう一度アプリを開きます。", "大きいOKが見えるか確認します。", "アプリを開くだけでは記録されません。OKを押します。"]
  },
  {
    question: "2人そろいません",
    answers: ["「連絡先」を開きます。", "2人の状態を見ます。", "同意待ちの人にはSMSをもう一度送ります。"]
  },
  {
    question: "番号の文が届きません",
    answers: ["番号を見直します。", "赤い注意が出ていないか確認します。", "しばらく待ってから新しい文が届くか見ます。"]
  },
  {
    question: "記録に何も出ません",
    answers: ["「設定」を開きます。", "「通知の記録」を開きます。", "今日の行があるか見ます。"]
  },
  {
    question: "料金が気になります",
    answers: ["「料金の記録」を開きます。", "今月の回数を見ます。", "36時間で連絡先AへSMSを送った時に1回分の追加料金がかかります。", "同じ回では最大1回です。"]
  },
  {
    question: "このアプリは何を判断しますか",
    answers: ["危険、死亡、病気、今いる場所を判断しません。", "救助や発見を保証するものではありません。", "役目は、OKを押していない時間が続いた時に、順番にお知らせすることです。"]
  }
] as const;

export const closingPoints = [
  "1日1回、ホームの大きなOKボタンを押す",
  "アプリを開くだけでは記録されない",
  "2人の同意がそろうまでOKの記録と自動通知は始まらない",
  "36時間で連絡先AへSMSを送ると、追加料金が1回かかる",
  "このアプリは救助や発見を保証するものではない"
] as const;
