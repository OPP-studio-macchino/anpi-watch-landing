export type FAQTone = "info" | "success" | "warning" | "critical";

export type FAQFact = {
  title: string;
  body: string;
  tone: FAQTone;
};

export type FAQItem = {
  faqId: string;
  question: string;
  searchKeywords: readonly string[];
  answerSummary: string;
  answerDetail: readonly string[];
  nextAction: string;
};

export type FAQSection = {
  id: string;
  title: string;
  description: string;
  items: readonly FAQItem[];
};

export const faqFacts: readonly FAQFact[] = [
  {
    title: "毎日OK",
    body: "ホームでOKを1回押します。アプリを開くだけでは記録されません。",
    tone: "success"
  },
  {
    title: "2人の同意",
    body: "連絡先Aと連絡先Bの2人が同意するまで、自動通知は始まりません。",
    tone: "warning"
  },
  {
    title: "追加請求なし",
    body: "料金は月額300円です。",
    tone: "info"
  },
  {
    title: "できないこと",
    body: "危険、死亡、病気、今いる場所を判断しません。救助や発見を約束するものではありません。",
    tone: "critical"
  }
];

export const faqSections: readonly FAQSection[] = [
  {
    id: "daily-ok",
    title: "毎日OKについて",
    description: "毎日することは、ホームでOKを1回押すだけです。",
    items: [
      {
        faqId: "faq_daily_ok",
        question: "毎日、何をすればいいの？",
        searchKeywords: ["毎日 何する", "OKボタン どこ", "使い方 わからない", "毎日 押すだけ"],
        answerSummary: "ホーム画面の青い「OK」ボタンを、1日1回押してください。",
        answerDetail: [
          "ホーム画面を開きます。",
          "画面まんなかの青い「OK」を1回押します。",
          "押した時こくが新しくなっていれば、その日の操作は終わりです。",
          "アプリを開いただけではOKの記録にはなりません。"
        ],
        nextAction: "ホーム画面を開いて、青い「OK」ボタンを1回押す"
      },
      {
        faqId: "faq_app_open_is_not_ok",
        question: "アプリを開けばOKになりますか？",
        searchKeywords: ["開くだけでOK", "アプリ開いた", "OK 記録されない", "押さないとだめ"],
        answerSummary: "いいえ。アプリを開くだけでは記録されません。",
        answerDetail: [
          "OKの記録は、ホーム画面の青い「OK」を押した時だけ残ります。",
          "開いただけでは、最後のOK時こくは新しくなりません。",
          "押したあとに、最後のOK時こくが変わったか見てください。"
        ],
        nextAction: "ホーム画面で青い「OK」ボタンを押す"
      },
      {
        faqId: "faq_missed_ok_flow",
        question: "ボタンを押し忘れたら、どうなるの？",
        searchKeywords: ["押し忘れた", "今日 OK 押してない", "ボタン忘れた", "家族に連絡いつ"],
        answerSummary: "すぐに家族へ連絡は行きません。24時間→30時間→36時間→42時間→48時間の順で進みます。",
        answerDetail: [
          "24時間をすぎると、まずあなたのスマホにお知らせが出ます。",
          "30時間をすぎると、あなたにSMSが届きます。",
          "36時間をすぎると、連絡先AへSMSが進みます。",
          "42時間をすぎると、連絡先BへSMSが進みます。",
          "48時間をすぎると、A/Bへ最後のSMSを送り、必要に応じてメールも使います。"
        ],
        nextAction: "気づいたら、すぐにホーム画面の青い「OK」ボタンを押す"
      },
      {
        faqId: "faq_late_ok_after_forget",
        question: "押し忘れに気づいたら、あとから押してもいいの？",
        searchKeywords: ["あとから押していい", "今から OK 押す", "押し忘れ 気づいた", "遅れて押す"],
        answerSummary: "はい。気づいた時点で押せば、その先の連絡は止まります。",
        answerDetail: [
          "青い「OK」を押すと、押した時こくが新しく記録されます。",
          "そのあとに進むはずだった連絡は止まります。",
          "ただし、もう送られた連絡をあとから消すことはできません。"
        ],
        nextAction: "今すぐホーム画面を開いて、青い「OK」ボタンを押す"
      },
      {
        faqId: "faq_snooze_only",
        question: "お知らせだけ静かにしたいときは？",
        searchKeywords: ["通知うるさい", "お知らせ止めたい", "音だけ消したい", "しずかにする"],
        answerSummary: "お知らせの音や表示だけは静かにできますが、時間の流れは止まりません。",
        answerDetail: [
          "1時間、3時間、6時間だけ、お知らせを静かにできます。",
          "止まるのは音や表示だけです。",
          "OKを押していない時間の数え方は、そのまま進みます。",
          "家族や大切な人への連絡まで止めたいときは、青い「OK」を押してください。"
        ],
        nextAction: "音だけ静かにしたいなら「しずかにする」を選び、流れも止めたいなら青い「OK」を押す"
      }
    ]
  },
  {
    id: "notice-flow",
    title: "通知の進み方",
    description: "OKを押していない時間が続くと、決まった順番でお知らせします。",
    items: [
      {
        faqId: "faq_who_gets_notice_when",
        question: "何時間で誰に知らせますか？",
        searchKeywords: ["何時間で通知", "誰に知らせる", "24 30 36 42 48", "通知の順番"],
        answerSummary: "24時間で本人、36時間から連絡先へ、48時間で最後の連絡に進みます。",
        answerDetail: [
          "24時間で、本人のスマホにお知らせします。",
          "30時間で、本人にSMSを送ります。",
          "36時間で、連絡先AへSMSを送ります。",
          "42時間で、連絡先BへSMSを送ります。",
          "48時間以上で、A/Bへ最後のSMSを送ります。"
        ],
        nextAction: "通知の流れを見たいときは、ホームや設定のタイムラインを見る"
      },
      {
        faqId: "faq_l2_notice_action",
        question: "『あと6時間で連絡先AへSMSを送ります』と出たら、どうすればいい？",
        searchKeywords: ["あと6時間 通知", "36時間前", "連絡先AへSMS", "今なら止める"],
        answerSummary: "連絡したくない場合は、36時間になる前に青い「OK」ボタンを押してください。",
        answerDetail: [
          "ホーム画面を開きます。",
          "画面まんなかの青い「OK」を押します。",
          "36時間になる前に押せば、連絡先AへのSMSは止まります。",
        ],
        nextAction: "連絡先へ通知したくないなら、今すぐ青い「OK」ボタンを押す"
      }
    ]
  },
  {
    id: "contacts",
    title: "連絡先と同意",
    description: "連絡先A/Bの2人が必要です。2人の同意がそろうまで自動通知は始まりません。",
    items: [
      {
        faqId: "faq_why_two_contacts",
        question: "なんで2人も登録しなきゃいけないの？",
        searchKeywords: ["2人必要 なぜ", "連絡先 1人じゃだめ", "家族 2人 必須", "なんで2名"],
        answerSummary: "1人だけだと気づけない日があるため、2人ともそろってから動く仕組みです。",
        answerDetail: [
          "1人目が見られない日でも、2人目が気づけることがあります。",
          "1人だけに負担がかかりすぎるのを防げます。",
          "2人とも「受け取っていい」と同意して、はじめて動きます。",
          "1人だけ、または同意待ちのままでは始まりません。"
        ],
        nextAction: "受け取る人を2人入れて、2人とも同意済みになっているか確認する"
      },
      {
        faqId: "faq_contact_declines",
        question: "相手が『いいよ』と言ってくれない時は？",
        searchKeywords: ["同意してくれない", "相手が嫌がる", "連絡先 OKしてくれない", "登録できない"],
        answerSummary: "その人で無理に進めず、別の人に変えるか、2人そろうまで始めないでください。",
        answerDetail: [
          "もう一度、ていねいにお願いできます。",
          "別の人に変えることもできます。",
          "2人そろうまでは、まだ始めないでください。",
          "2人そろわない間は、自動通知は動きません。"
        ],
        nextAction: "今の相手に無理をせず、必要なら別の人に入れ替える"
      },
      {
        faqId: "faq_change_contact",
        question: "相手を変えたいときは？",
        searchKeywords: ["連絡先 変えたい", "家族 変更", "登録相手 入れ替え", "A B 変更"],
        answerSummary: "変えられますが、新しい人が同意するまで、その人の分はまだ使えません。",
        answerDetail: [
          "連絡を受ける人を新しい人に変えます。",
          "新しい人へ同意のお願いを送ります。",
          "新しい人が同意済みになるのを待ちます。",
          "2人そろうまでは、自動通知は止まったままです。"
        ],
        nextAction: "連絡先を変更したあと、2人とも同意済みになっているか確認する"
      },
      {
        faqId: "faq_contact_stop",
        question: "相手が『もう受け取りたくない』と言ったら？",
        searchKeywords: ["受け取りたくない", "STOP された", "連絡先 外したい", "相手がやめたい"],
        answerSummary: "その番号への連絡は止まり、この仕組みも2人不足のため止まります。",
        answerDetail: [
          "その番号には、もう運用のSMSを送りません。",
          "2人そろわなくなるため、自動通知はいったん止まります。",
          "使い直すには、別の人を入れて、もう一度同意が必要です。",
          "いやがる人へ送り続ける作りではありません。"
        ],
        nextAction: "別の連絡先を入れて、2人そろう状態に戻す"
      }
    ]
  },
  {
    id: "billing",
    title: "月額300円と通知履歴",
    description: "月額300円の考え方と、連絡先へ通知した回数の見方をまとめています。",
    items: [
      {
        faqId: "faq_when_charged",
        question: "お金がかかるのはいつ？",
        searchKeywords: ["いつ料金", "お金 いつかかる", "料金 発生 条件", "36時間 通知"],
        answerSummary: "料金は月額300円です。",
        answerDetail: [
          "App Storeサブスクリプションとして月額300円で使うしくみです。",
          "今月、連絡先へ何回通知したかは通知履歴で見られます。"
        ],
        nextAction: "料金が気になるときは、設定から通知履歴を開く"
      },
      {
        faqId: "faq_no_extra_charge_after_36h",
        question: "36時間や42時間や48時間で、通知ごとの追加請求はありますか？",
        searchKeywords: ["追加料金 ある", "36時間 追加料金", "42時間 48時間 料金", "二重料金"],
        answerSummary: "いいえ。未反応時の段階通知は月額料金に含まれます。",
        answerDetail: [
          "36時間で連絡先AへSMS送信を試行しても、通知ごとの追加請求はありません。",
          "42時間で連絡先BへSMS送信を試行しても、通知ごとの追加請求はありません。",
          "48時間以上で最後のSMS送信を試行しても、通知ごとの追加請求はありません。",
          "通知が起きた記録は、通知履歴として残ります。"
        ],
        nextAction: "通知履歴として確認する"
      },
      {
        faqId: "faq_notification_history_view",
        question: "今月、連絡先へ何回通知したかは見られるの？",
        searchKeywords: ["通知回数 見たい", "履歴 どこ", "今月 何回通知", "連絡先通知回数"],
        answerSummary: "はい。今月の連絡先通知回数や、通知履歴を見返せます。",
        answerDetail: [
          "ホームまたは設定を開きます。",
          "通知履歴、または連絡先通知回数の画面を開きます。",
          "いつ、だれに、どの通知を送ったかを確認できます。",
          "配信結果も、分かる範囲で表示します。"
        ],
        nextAction: "ホームまたは設定から、通知履歴の画面を開く"
      }
    ]
  },
  {
    id: "records-privacy",
    title: "記録と秘密のこと",
    description: "どんな記録が残るか、どこまで見られるかを説明します。",
    items: [
      {
        faqId: "faq_location_tracking",
        question: "私が今どこにいるか、ずっと見られているの？",
        searchKeywords: ["位置情報 ずっと見られる", "居場所 監視", "どこにいるかバレる", "ずっと見守り"],
        answerSummary: "いいえ。ずっと居場所を見つづける仕組みではありません。",
        answerDetail: [
          "主に見ているのは、最後に「OK」を押した時こくです。",
          "今いる場所をずっと追いかけるものではありません。",
          "家族や大切な人が、常に居場所を見るための道具ではありません。"
        ],
        nextAction: "気になるときは、設定や案内画面で記録される内容を確認する"
      },
      {
        faqId: "faq_what_is_logged",
        question: "何が記録に残るの？",
        searchKeywords: ["何が残る", "記録 何を見る", "履歴 どこまで", "ログ 何がある"],
        answerSummary: "「いつOKを押したか」「だれにいつ連絡したか」「届いたか」などが残ります。",
        answerDetail: [
          "いつ「OK」を押したかが残ります。",
          "だれに、いつ、どんな連絡を送ったかが残ります。",
          "その連絡が届いたかどうかが残ります。",
          "連絡先が同意したか、止めたかが残ります。",
          "通知回数や通知履歴も見返せます。"
        ],
        nextAction: "履歴や記録の画面を開いて、通知の記録を見返す"
      },
      {
        faqId: "faq_delivery_failed",
        question: "送れていない時はどうしますか？",
        searchKeywords: ["送れていない", "SMS 届かない", "配信失敗", "通知失敗"],
        answerSummary: "通知の記録を見て、電話番号や停止中の状態を確認してください。",
        answerDetail: [
          "通知の記録で、結果を見ます。",
          "電話番号が正しいか見直します。",
          "連絡先が停止中になっていないか確認します。",
          "同じ内容を何度も送らないよう、必要な時だけ再送します。"
        ],
        nextAction: "通知履歴を開き、結果・電話番号・停止中かどうかを確認する"
      }
    ]
  },
  {
    id: "limits",
    title: "このアプリがしないこと",
    description: "できないことも、先に知っておくと誤解が減ります。",
    items: [
      {
        faqId: "faq_auto_call_ambulance",
        question: "倒れたら、すぐ救急車を呼んでくれるの？",
        searchKeywords: ["救急車 呼んでくれる", "倒れたら どうなる", "自動で救急", "緊急通報 してくれる"],
        answerSummary: "いいえ。救急車を自動で呼ぶ仕組みではありません。",
        answerDetail: [
          "あなたの反応がしばらくないときに、家族や大切な人へ順番に知らせます。",
          "救急車を自動で呼ぶことはしません。",
          "救助や発見を約束するものでもありません。"
        ],
        nextAction: "緊急の備えは、あんぴッチだけに任せず、家族や近くの人との連絡方法も決めておく"
      },
      {
        faqId: "faq_auto_detect_danger",
        question: "危ないと自動で見つけてくれるの？",
        searchKeywords: ["危険を見つける", "自動で異常検知", "命の状態 わかる", "危ないか判断"],
        answerSummary: "いいえ。危ない状態や命の状態を見分ける仕組みではありません。",
        answerDetail: [
          "分かるのは、しばらくOKが押されていないということです。",
          "危ないかどうか、命の状態がどうか、何が起きたかは判断しません。",
          "だから、決まった時間で、決まった順番に連絡が進みます。"
        ],
        nextAction: "この仕組みは「反応がないことを知らせるもの」として使う"
      },
      {
        faqId: "faq_auto_phone_call",
        question: "電話をかけて起こしてくれるの？",
        searchKeywords: ["自動で電話", "起こしてくれる", "電話連絡 ある", "架電してくれる"],
        answerSummary: "いいえ。今は自動で電話をかける仕組みではありません。",
        answerDetail: [
          "使うのは、スマホのお知らせです。",
          "必要な段階ではSMSを使います。",
          "48時間以上では、必要に応じてメールも使います。",
          "自動の電話は、今の対象ではありません。"
        ],
        nextAction: "通知の流れを知りたいときは、24時間→30時間→36時間→42時間→48時間の順番を確認する"
      }
    ]
  }
];
