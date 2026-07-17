export const appStoreHref =
  "https://apps.apple.com/jp/app/%E3%81%82%E3%82%93%E3%81%B4%E3%83%83%E3%83%81/id6763868893";

export const desktopHeaderLinks = [
  { href: "/#how-it-works", label: "仕組み", navId: "header_how_it_works" },
  { href: "/#timeline", label: "通知の流れ", navId: "header_timeline" },
  { href: "/#for-who", label: "家族・連絡先", navId: "header_for_who" },
  { href: "/#pricing", label: "料金", navId: "header_pricing" },
  { href: "/manual/faq", label: "FAQ", navId: "header_faq" },
] as const;

export const mobileMenuSections = [
  {
    title: "あんぴッチを知る",
    links: [
      { href: "/#how-it-works", label: "仕組み", navId: "mobile_how_it_works" },
      { href: "/#timeline", label: "通知の流れ", navId: "mobile_timeline" },
      { href: "/#not-monitoring", label: "すること・しないこと", navId: "mobile_not_monitoring" },
      { href: "/#pricing", label: "料金", navId: "mobile_pricing" },
    ],
  },
  {
    title: "立場別に確認する",
    links: [
      { href: "/before-you-start", label: "自分で使いたい方", navId: "mobile_before_you_start" },
      { href: "/for-family", label: "家族・知人へ紹介したい方", navId: "mobile_for_family" },
      { href: "/for-contacts", label: "連絡先として依頼を受けた方", navId: "mobile_for_contacts" },
    ],
  },
  {
    title: "詳しく確認する",
    links: [
      { href: "/notification-samples", label: "通知サンプル", navId: "mobile_notification_samples" },
      { href: "/delivery-status", label: "通知履歴の見方", navId: "mobile_delivery_status" },
      { href: "/manual/faq", label: "FAQ", navId: "mobile_faq" },
      { href: "/support", label: "サポート", navId: "mobile_support" },
    ],
  },
] as const;

export const footerSections = [
  {
    title: "はじめる前に",
    links: [
      { href: "/before-you-start", label: "登録前チェック", navId: "footer_before_you_start" },
      { href: "/how-it-works", label: "48時間の通知ルール", navId: "footer_how_it_works" },
      { href: "/pricing", label: "料金", navId: "footer_pricing" },
      { href: "/trust", label: "できること・できないこと", navId: "footer_trust" },
    ],
  },
  {
    title: "本人・家族・連絡先",
    links: [
      { href: "/for-family", label: "家族・知人へ紹介する", navId: "footer_for_family" },
      { href: "/for-contacts", label: "連絡先向け説明", navId: "footer_for_contacts" },
      { href: "/share-message", label: "説明文テンプレート", navId: "footer_share_message" },
      { href: "/notification-samples", label: "通知サンプル", navId: "footer_notification_samples" },
    ],
  },
  {
    title: "使い方・サポート",
    links: [
      { href: "/manual", label: "操作ガイド", navId: "footer_manual" },
      { href: "/manual/faq", label: "FAQ", navId: "footer_faq" },
      { href: "/delivery-status", label: "通知履歴の見方", navId: "footer_delivery_status" },
      { href: "/help/stop", label: "STOP / HELP", navId: "footer_help_stop" },
      { href: "/support", label: "お問い合わせ", navId: "footer_support" },
    ],
  },
  {
    title: "法務・プライバシー",
    links: [
      { href: "/privacy", label: "プライバシーポリシー", navId: "footer_privacy" },
      { href: "/terms", label: "利用規約", navId: "footer_terms" },
      { href: "/privacy-choices", label: "プライバシー選択", navId: "footer_privacy_choices" },
      { href: "/tokushoho", label: "特商法に基づく表示", navId: "footer_tokushoho" },
    ],
  },
] as const;
