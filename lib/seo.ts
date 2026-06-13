import type { Metadata } from "next";

export const APP_NAME = "あんぴッチ";
export const SITE_URL = "https://www.anpi-watch.app";

type PageSeo = {
  title: string;
  description: string;
};

export const PAGE_SEO = {
  "/": {
    title: "毎日OKを押す連絡ルールアプリ",
    description:
      "毎日1回OKを押し、押せなかった時は決めた人へ知らせるiPhoneアプリです。月額300円、通知追加料金なし。2名の同意後に始まります。",
  },
  "/pricing": {
    title: "料金・課金方針",
    description:
      "利用は月額300円です。ダウンロード無料、連絡先への通知に追加料金なし。App Storeのサブスクリプション、解約・返金を確認できます。",
  },
  "/notification-samples": {
    title: "通知サンプル",
    description:
      "本人や連絡先に届くことがあるSMS・通知の例を確認できます。文面はサンプルで、実際の名前や時間は変わることがあります。",
  },
  "/for-family": {
    title: "紹介したい方へ",
    description:
      "離れて暮らす本人にあんぴッチを提案したい家族・知人向け。本人の同意と連絡先2名のURL同意が必要な仕組みを説明します。",
  },
  "/for-contacts": {
    title: "連絡先の方へ",
    description:
      "あんぴッチで連絡先候補になった方向け。SMSを受け取る前に、同意の流れ、通知内容、STOP / HELPの扱いを確認できます。",
  },
  "/before-you-start": {
    title: "始める前のチェックリスト",
    description:
      "利用前に、iPhone、連絡先2名の同意、月額300円、通知が届かない場合があることなどを確認するページです。",
  },
  "/how-it-works": {
    title: "48時間の通知ルール",
    description:
      "最後のOKから24h、30h、36h、42h、48hで何が起きるかを説明します。連絡先通知は2名同意後に始まります。",
  },
  "/trust": {
    title: "できること・できないこと",
    description:
      "あんぴッチでできること、できないことを説明します。未反応時の連絡ルールと、約束できないことを確認できます。",
  },
  "/delivery-status": {
    title: "通知履歴の見方",
    description:
      "誰に、いつ、どの通知を送ったかを確認する通知履歴ページです。送信記録と相手の閲覧・対応は別であることも説明します。",
  },
  "/help/stop": {
    title: "STOP / HELPの使い方",
    description:
      "あんぴッチから届くSMSを止めたい時や内容を確認したい時の説明ページです。STOP / HELP / STARTの使い方を確認できます。",
  },
  "/share-message": {
    title: "説明文テンプレ",
    description:
      "本人や連絡先にあんぴッチを説明する時の文面テンプレ集です。監視ではなく、未反応時の連絡ルールとして伝える文例を確認できます。",
  },
  "/support": {
    title: "サポート",
    description:
      "問い合わせ、アカウント削除、SMS停止、サブスクリプション、返金など、あんぴッチのサポート情報を確認できます。",
  },
  "/privacy": {
    title: "プライバシーポリシー",
    description:
      "あんぴッチで扱う個人情報、利用目的、第三者提供、外部サービス、問い合わせ先などを確認できます。",
  },
  "/terms": {
    title: "利用規約",
    description:
      "あんぴッチの利用条件、禁止事項、サブスクリプション、通知、免責などの基本ルールを確認できます。",
  },
  "/privacy-choices": {
    title: "プライバシー選択",
    description:
      "プライバシーに関する選択肢や、外部サービス・データの扱いについて確認するページです。",
  },
  "/tokushoho": {
    title: "特商法に基づく表示",
    description:
      "あんぴッチのApp Storeサブスクリプション、月額300円、解約、返金、問い合わせなど販売条件を確認できます。",
  },
  "/manual": {
    title: "操作ガイド",
    description:
      "あんぴッチの基本操作を確認するマニュアルです。OKの押し方、連絡先、通知履歴などの使い方へ進めます。",
  },
  "/manual/faq": {
    title: "FAQ",
    description:
      "あんぴッチのよくある質問をまとめました。料金、連絡先同意、通知、STOP / HELP、できること・できないことを確認できます。",
  },
  "/manual/tutorial": {
    title: "3分体験コース",
    description:
      "あんぴッチの基本操作を3分で試すチュートリアルです。ホームを開き、OKを押し、時刻と記録を見る流れを確認できます。",
  },
} as const satisfies Record<string, PageSeo>;

export type SeoPath = keyof typeof PAGE_SEO;

export function canonicalUrl(path: SeoPath): string {
  return path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

export function createPageMetadata(path: SeoPath): Metadata {
  const page = PAGE_SEO[path];
  const canonical = canonicalUrl(path);
  const documentTitle = path === "/" ? `${page.title} | ${APP_NAME}` : page.title;

  return {
    title: documentTitle,
    description: page.description,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      locale: "ja_JP",
      siteName: APP_NAME,
      title: page.title,
      description: page.description,
      url: canonical,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "あんぴッチのアプリアイコンと説明",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: ["/twitter-card.png"],
    },
  };
}
