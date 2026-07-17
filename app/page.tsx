import type { Metadata } from "next";
import { HomePageV4, faqItems } from "../components/home/HomePageV4";
import { appStoreHref } from "../components/site/SiteNavigation";

const title = "あんぴッチ｜1日1回「今日も大丈夫」の合図を";
const description =
  "本人が1日1回「今日も大丈夫」の合図を送り、一定時間その合図が途切れた時に、同意済みの連絡先2名へ段階的に通知を試みるiPhoneアプリ。月額300円、通知ごとの追加料金なし。";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "https://www.anpi-watch.app/",
  },
  keywords: [
    "安否確認アプリ",
    "一人暮らし 安否確認",
    "見守りアプリ",
    "ひとり暮らし",
    "連絡先 通知",
    "一人暮らし 発見遅れ",
    "あんぴッチ",
  ],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://www.anpi-watch.app/",
    siteName: "あんぴッチ",
    title,
    description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "あんぴッチ。1日1回「今日も大丈夫」の合図を送り、途切れた時は決めた人へ段階的に通知を試みるiPhoneアプリ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/twitter-card.png"],
  },
};

const softwareApplicationJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "あんぴッチ",
  alternateName: "Anpi Watch",
  applicationCategory: "LifestyleApplication",
  operatingSystem: "iOS",
  url: "https://www.anpi-watch.app/",
  downloadUrl: appStoreHref,
  image: "https://www.anpi-watch.app/brand/app-icon.png",
  description,
  offers: {
    "@type": "Offer",
    price: "300",
    priceCurrency: "JPY",
    category: "monthly subscription",
  },
  publisher: {
    "@type": "Organization",
    name: "O.P.P Studio",
    url: "https://www.anpi-watch.app/",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HomePageV4 />
    </>
  );
}
