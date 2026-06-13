import "./globals.css";
import type { Metadata, Viewport } from "next";
import { SiteFooter } from "../components/site/SiteFooter";
import { SiteHeader } from "../components/site/SiteHeader";
import { APP_NAME, PAGE_SEO, SITE_URL, canonicalUrl } from "../lib/seo";

const homeSeo = PAGE_SEO["/"];
const homeCanonical = canonicalUrl("/");

export const viewport: Viewport = {
  themeColor: "#0099A1"
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: APP_NAME,
  title: {
    default: `${homeSeo.title} | ${APP_NAME}`,
    template: `%s | ${APP_NAME}`
  },
  description: homeSeo.description,
  alternates: {
    canonical: homeCanonical
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
    shortcut: ["/favicon.ico"]
  },
  appleWebApp: {
    capable: true,
    title: APP_NAME,
    statusBarStyle: "default"
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: APP_NAME,
    title: homeSeo.title,
    description: homeSeo.description,
    url: homeCanonical,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "あんぴッチのアプリアイコンと説明"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: homeSeo.title,
    description: homeSeo.description,
    images: ["/twitter-card.png"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
