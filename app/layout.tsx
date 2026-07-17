import "./globals.css";
import type { Metadata, Viewport } from "next";
import { SiteFooter } from "../components/site/SiteFooter";
import { SiteHeader } from "../components/site/SiteHeader";

const siteUrl = "https://www.anpi-watch.app";
const appName = "あんぴッチ";
const defaultTitle = "あんぴッチ｜ひとり暮らしの連絡ルール";
const defaultDescription =
  "本人が1日1回「今日も大丈夫」の合図を送り、一定時間その合図が途切れた時に、同意した2名へ段階的に通知を試みるiPhoneアプリ。";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f5ef" },
    { media: "(prefers-color-scheme: dark)", color: "#08111f" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: appName,
  title: {
    default: defaultTitle,
    template: `%s | ${appName}`,
  },
  description: defaultDescription,
  category: "lifestyle",
  alternates: {
    canonical: `${siteUrl}/`,
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },
  appleWebApp: {
    capable: true,
    title: appName,
    statusBarStyle: "default",
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: appName,
    title: defaultTitle,
    description: defaultDescription,
    url: `${siteUrl}/`,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "あんぴッチ。ひとり暮らしの連絡ルールを整えるiPhoneアプリ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/twitter-card.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <a className="skip-link" href="#main-content">
          本文へ移動
        </a>
        <SiteHeader />
        <div id="main-content" tabIndex={-1}>
          {children}
        </div>
        <SiteFooter />
      </body>
    </html>
  );
}
