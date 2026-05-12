export type Tone = "neutral" | "success" | "info" | "warning" | "critical";

export const tocItems = [
  { id: "overview", label: "まず知ること" },
  { id: "setup", label: "使う前の準備" },
  { id: "contacts", label: "連絡先A・Bを登録" },
  { id: "daily", label: "毎日OKする" },
  { id: "escalation", label: "通知の進み方" },
  { id: "records", label: "記録と履歴を見る" },
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
    title: "自動通知は2人そろってから始まります",
    body: "本人確認が完了すると、連絡先Aと連絡先Bの同意前でもOKは記録できます。ただし、2人とも同意済みになるまで自動通知は始まりません。",
    tone: "warning"
  },
  {
    title: "あとで見返せます",
    body: "誰に、いつ送ったかを見られます。結果も残ります。通知履歴も見られます。",
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
  "本人確認が完了すると、連絡先A/Bの同意前でもOKは記録できます。ただし、2人の同意がそろうまで自動通知は始まりません。",
  "同意待ちの人にはSMSをもう一度送れます。",
  "番号が違うとSMSが届きません。"
] as const;

export const contactBasics = [
  "連絡先A（1人目）は、先に通知される人です。",
  "連絡先B（2人目）は、次に通知される人です。",
  "家族、親しい友人、近所の人など、あなたに連絡しやすい人を選びます。",
  "あんぴッチは、救助や発見を保証するものではありません。OKが途切れたことを、連絡先へ知らせるためのアプリです。"
] as const;

export const contactBeforeChecks = [
  "連絡先A（1人目）と連絡先B（2人目）は、別々の人にします。",
  "あなた自身の電話番号は、連絡先A・Bには登録しません。",
  "連絡先A・Bに同じ電話番号は入れません。",
  "登録する人には、できれば先に一言伝えます。"
] as const;

export const contactMessageExample = [
  "あんぴッチという安否OKアプリを試しています。",
  "私が長い時間OKを押せないときに、あなたへSMSが届くことがあります。",
  "届いたら、まず私に電話やメッセージをしてみてください。"
] as const;

export const contactASteps = [
  { title: "アプリで「連絡先」画面を開きます。", outcome: "連絡先A（1人目）と連絡先B（2人目）の枠が見えます。" },
  { title: "連絡先A（1人目）の登録ボタンを押します。", outcome: "入力する画面が開きます。" },
  { title: "電話帳から選ぶか、名前と電話番号を手で入力します。", outcome: "名前と電話番号が入ります。メールは任意です。" },
  { title: "名前と電話番号を確認します。", outcome: "本人の電話番号ではないことを確認できます。" },
  { title: "内容に間違いがなければ保存します。", outcome: "連絡先A（1人目）が同意待ちとして登録されます。" },
  { title: "アプリに表示されている案内に沿って同意依頼SMSを送ります。", outcome: "相手の端末に、同意するためのリンクが入ったSMSが送られます。" }
] as const;

export const contactBSteps = [
  { title: "アプリで「連絡先」画面を開きます。", outcome: "連絡先B（2人目）の枠が見えます。" },
  { title: "連絡先B（2人目）の登録ボタンを押します。", outcome: "入力する画面が開きます。" },
  { title: "電話帳から選ぶか、名前と電話番号を手で入力します。", outcome: "名前と電話番号が入ります。メールは任意です。" },
  { title: "連絡先A（1人目）とは別の人か確認します。", outcome: "AとBが別々の電話番号になります。" },
  { title: "内容に間違いがなければ保存します。", outcome: "連絡先B（2人目）が同意待ちとして登録されます。" },
  { title: "アプリに表示されている案内に沿って同意依頼SMSを送ります。", outcome: "相手の端末に、同意するためのリンクが入ったSMSが送られます。" }
] as const;

export const contactInputNotes = [
  "連絡先A/Bには、名前と電話番号が必要です。",
  "メールは任意です。入れなくても連絡先は登録できます。",
  "電話帳から選ぶ場合は、電話帳へのアクセスを求められることがあります。",
  "電話帳から選びたい場合は、許可します。",
  "電話帳を使いたくない場合は、名前と電話番号を手で入力できます。",
  "電話番号は、SMS（ショートメッセージ）を受け取れる携帯電話番号を入れます。",
  "固定電話の番号では、SMSを受け取れないことがあります。",
  "電話番号を入力しただけでは、連絡先本人の同意にはなりません。"
] as const;

export const contactConsentNotes = [
  "連絡先A（1人目）と連絡先B（2人目）を登録したあと、アプリの案内に沿って同意依頼SMSを送ります。",
  "SMSには、あんぴッチからの説明と、同意するためのリンクが入っています。",
  "連絡先本人が自分の端末でSMSのリンクを開き、内容を確認して同意します。",
  "ここでいう同意とは、「この人にSMSを送ってよい」という確認のことです。",
  "ユーザーが電話番号を入力しただけでは、連絡先本人の同意にはなりません。",
  "登録しただけでは同意済みにならず、自動通知も始まりません。",
  "本人確認が完了していれば、連絡先A/Bの同意前でもOKは記録できます。ただし、2人とも同意済みになるまで自動通知は始まりません。"
] as const;

export const contactStatusStates = [
  {
    label: "同意待ち",
    summary: "まだ返事がありません。",
    detail: "連絡先を登録し、同意依頼SMSを送ったあと、本人の同意を待っている状態です。この状態では、自動通知は始まりません。",
    tone: "warning"
  },
  {
    label: "同意済み",
    summary: "相手が同意しています。",
    detail: "連絡先本人がSMSのリンクを開き、内容を確認して同意した状態です。AとBの両方が同意済みになると、自動通知の準備が完了します。",
    tone: "success"
  },
  {
    label: "停止中",
    summary: "受け取りを止めています。",
    detail: "相手がSMSの受け取りを停止している状態です。停止中の連絡先には、あんぴッチからSMSを送りません。",
    tone: "critical"
  }
] as const;

export const contactStopNotes = [
  "停止中は、同意済みの連絡先として扱いません。",
  "停止中の連絡先には、自動通知のSMSを送りません。",
  "連絡先A/Bのどちらかが停止中の場合は、2人とも同意済みになるまで自動通知は始まりません。"
] as const;

export const contactTroubles = [
  {
    question: "自分の電話番号を入れようとした",
    answers: ["連絡先A・Bには、あなた自身の電話番号は登録しません。", "あなた以外の人を登録してください。"]
  },
  {
    question: "連絡先AとBに同じ番号を入れようとした",
    answers: ["連絡先A（1人目）と連絡先B（2人目）は、別々の電話番号にします。", "1人だけでは、2人の連絡先に知らせる仕組みになりません。"]
  },
  {
    question: "SMSが届かない",
    answers: ["電話番号が正しいか確認します。", "携帯電話番号になっているか確認します。", "相手のスマホでSMSを受け取れるか確認します。", "少し時間をおいても届かない場合は、同意依頼をもう一度送ります。", "それでも届かない場合は、別の連絡先を検討します。"]
  },
  {
    question: "連絡先の人が同意してくれない",
    answers: ["同意してくれない人には、無理に登録しません。", "自動通知は、相手の同意があって初めて送ります。", "別の家族、友人、近所の人など、協力してくれる人を選びます。"]
  },
  {
    question: "電話帳から選べない",
    answers: ["電話帳へのアクセスを許可していない可能性があります。", "電話帳から選べない場合でも、名前と電話番号を手で入力できます。"]
  }
] as const;

export const contactCompletionChecks = [
  "連絡先A（1人目）の名前と電話番号が登録されている",
  "連絡先B（2人目）の名前と電話番号が登録されている",
  "連絡先A（1人目）が「同意済み」になっている",
  "連絡先B（2人目）が「同意済み」になっている"
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
    detail: "本人へSMSを送ります。連絡先へ通知したくない場合は今OKします。",
    tone: "warning"
  },
  {
    time: "36時間",
    title: "連絡先AへSMS",
    detail: "連絡先AへSMS送信を試行します。通知ごとの追加請求はありません。",
    tone: "critical"
  },
  {
    time: "42時間",
    title: "連絡先BへSMS",
    detail: "連絡先BへSMS送信を試行します。通知ごとの追加請求はありません。",
    tone: "critical"
  },
  {
    time: "48時間以降",
    title: "A+B 最終通知",
    detail: "連絡先AとBへ最後のSMS送信を試行します。通知ごとの追加請求はありません。救助や発見を保証するものではありません。",
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
  { title: "「通知履歴」を押します。", outcome: "今月の連絡先通知回数が見えます。" },
  { title: "1行を見ます。", outcome: "誰に・いつ・どの通知を送ったかが見えます。" }
] as const;

export const recordChecks = [
  "誰に送ったか",
  "いつ送ったか",
  "結果がどうだったか",
  "どの通知を送ったか"
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
    state: "通知予告",
    trigger: "30時間の本人SMS",
    amount: "通知ごとの追加請求なし",
    detail: "36時間で連絡先AへSMS送信を試行します。通知ごとの追加請求はありません。連絡先へ通知したくない場合は今OKします。",
    tone: "warning"
  },
  {
    state: "通知",
    trigger: "36時間通知",
    amount: "月額300円に含まれます",
    detail: "連絡先AへSMS送信を試行した記録です。通知ごとの追加請求はありません。",
    tone: "critical"
  },
  {
    state: "確認",
    trigger: "設定 > 通知履歴",
    amount: "今月の連絡先通知回数",
    detail: "通知履歴は、誰に・いつ・どの通知を送ったかを確認するための履歴です。通知ごとの追加請求はありません。",
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
    answers: ["料金は月額300円です。", "「通知履歴」を開きます。", "今月の連絡先通知回数を見ます。", "未反応時の段階通知は月額料金に含まれていて、通知ごとの追加請求はありません。"]
  },
  {
    question: "このアプリは何を判断しますか",
    answers: ["危険、死亡、病気、今いる場所を判断しません。", "救助や発見を保証するものではありません。", "役目は、OKを押していない時間が続いた時に、順番にお知らせすることです。"]
  }
] as const;

export const closingPoints = [
  "1日1回、ホームの大きなOKボタンを押す",
  "アプリを開くだけでは記録されない",
  "本人確認後は連絡先A/Bの同意前でもOKを記録でき、自動通知は2人の同意がそろってから始まる",
  "未反応時の段階通知で、通知ごとの追加請求はない",
  "このアプリは救助や発見を保証するものではない"
] as const;
