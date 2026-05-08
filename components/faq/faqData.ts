export type FAQTone = "info" | "success" | "warning" | "critical";

export type FAQItem = {
  question: string;
  answers: readonly string[];
};

export type FAQSection = {
  id: string;
  title: string;
  description: string;
  items: readonly FAQItem[];
};

export const faqFacts = [
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
    title: "追加料金",
    body: "36時間で連絡先AへSMSを送ると、1回分の追加料金がかかります。同じ回では最大1回です。",
    tone: "info"
  },
  {
    title: "できないこと",
    body: "危険、死亡、病気、今いる場所を判断しません。救助や発見を保証するものではありません。",
    tone: "critical"
  }
] as const;

export const faqSections: readonly FAQSection[] = [
  {
    id: "daily-ok",
    title: "毎日OKについて",
    description: "毎日することは少なくしています。ホームでOKを押します。",
    items: [
      {
        question: "アプリを開けばOKになりますか？",
        answers: [
          "いいえ。",
          "アプリを開くだけでは記録されません。",
          "ホームでOKを押すと、今の時刻でOKを記録します。"
        ]
      },
      {
        question: "1日に何をすればよいですか？",
        answers: [
          "ホームでOKを1回押します。",
          "最後のOKの時刻が新しくなったか見ます。",
          "OKからの時間が短くなったか見ます。"
        ]
      },
      {
        question: "ホームでは何を見ますか？",
        answers: [
          "通知前を見ます。",
          "今の状態を見ます。",
          "最後のOK、OKから、次の予定を見ます。"
        ]
      }
    ]
  },
  {
    id: "notice-flow",
    title: "通知の進み方",
    description: "OKが長くない時だけ、決まった順番でお知らせします。",
    items: [
      {
        question: "何時間で誰に知らせますか？",
        answers: [
          "24時間で本人のスマホに通知します。",
          "30時間で本人にSMSを送ります。",
          "36時間で連絡先AへSMSを送ります。",
          "42時間で連絡先BへSMSを送ります。",
          "48時間以上でA/Bへ最後のSMSを送ります。"
        ]
      },
      {
        question: "通知の一時停止をすると、時間も止まりますか？",
        answers: [
          "いいえ。",
          "通知だけ止めます。",
          "時間のカウントは止まりません。",
          "一時停止は1時間、3時間、6時間から選びます。"
        ]
      }
    ]
  },
  {
    id: "contacts",
    title: "連絡先と同意",
    description: "連絡先A/Bの2人が必要です。2人の同意がそろうまで自動通知は始まりません。",
    items: [
      {
        question: "連絡先は1人でも使えますか？",
        answers: [
          "いいえ。",
          "連絡先Aと連絡先Bの2人が必要です。",
          "2人の同意がそろうまで、自動通知は始まりません。"
        ]
      },
      {
        question: "同意状態には何がありますか？",
        answers: [
          "同意待ちがあります。",
          "同意済みがあります。",
          "停止中があります。"
        ]
      },
      {
        question: "同意待ちの人には何ができますか？",
        answers: [
          "SMSをもう一度送れます。",
          "電話番号が正しいか見ます。",
          "相手にSMSを見てもらいます。"
        ]
      }
    ]
  },
  {
    id: "billing",
    title: "追加料金",
    description: "追加料金がかかる場所は決まっています。",
    items: [
      {
        question: "いつ追加料金がかかりますか？",
        answers: [
          "36時間で連絡先AへSMSを送ると、1回分の追加料金がかかります。",
          "同じ回では追加料金は最大1回です。"
        ]
      },
      {
        question: "42時間や48時間で料金は増えますか？",
        answers: [
          "増えません。",
          "42時間で連絡先BへSMSを送っても、その回の追加料金は増えません。",
          "48時間以上で最後のSMSを送っても、その回の追加料金は増えません。"
        ]
      },
      {
        question: "追加料金はどこで見ますか？",
        answers: [
          "設定を開きます。",
          "料金の記録を開きます。",
          "いつ追加料金がかかったかを見ます。"
        ]
      }
    ]
  },
  {
    id: "records",
    title: "記録の見方",
    description: "設定から、送った内容と結果を見返せます。",
    items: [
      {
        question: "通知の記録では何を見られますか？",
        answers: [
          "誰に送ったかを見られます。",
          "いつ送ったかを見られます。",
          "結果がどうだったかも残ります。"
        ]
      },
      {
        question: "送れていない時はどうしますか？",
        answers: [
          "通知の記録で結果を見ます。",
          "電話番号を見直します。",
          "停止中になっていないか見ます。"
        ]
      }
    ]
  },
  {
    id: "limits",
    title: "このアプリがしないこと",
    description: "できないことも、先に知っておきます。",
    items: [
      {
        question: "危険や死亡を判断しますか？",
        answers: [
          "いいえ。",
          "危険や死亡を判断するアプリではありません。",
          "病気や今いる場所も判断しません。"
        ]
      },
      {
        question: "救助や発見を約束しますか？",
        answers: [
          "いいえ。",
          "救助や発見を保証するものではありません。",
          "役目は、OKが長くない時に順番にお知らせすることです。"
        ]
      }
    ]
  }
];
