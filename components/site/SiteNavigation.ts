export const appStoreHref =
  "https://apps.apple.com/jp/app/%E3%81%82%E3%82%93%E3%81%B4%E3%83%83%E3%83%81/id6763868893";

export const desktopHeaderLinks = [
  { href: "/pricing", label: "料金", navId: "header_pricing" },
  { href: "/notification-samples", label: "通知サンプル", navId: "header_notification_samples" },
  { href: "/for-family", label: "紹介したい方へ", navId: "header_for_family" },
  { href: "/for-contacts", label: "連絡先の方へ", navId: "header_for_contacts" },
  { href: "/manual/faq", label: "FAQ", navId: "header_faq" },
] as const;

export const mobileMenuSections = [
  {
    title: "はじめに",
    links: [
      { href: "/before-you-start", label: "始める前に確認する", navId: "mobile_before_you_start" },
      { href: "/how-it-works", label: "48時間の通知ルール", navId: "mobile_how_it_works" },
      { href: "/trust", label: "できること・できないこと", navId: "mobile_trust" },
      { href: "/pricing", label: "料金", navId: "mobile_pricing" },
    ],
  },
  {
    title: "通知を見る",
    links: [
      { href: "/notification-samples", label: "通知サンプル", navId: "mobile_notification_samples" },
      { href: "/delivery-status", label: "通知履歴の見方", navId: "mobile_delivery_status" },
      { href: "/help/stop", label: "STOP / HELP", navId: "mobile_help_stop" },
    ],
  },
  {
    title: "人に説明する",
    links: [
      { href: "/for-family", label: "紹介したい方へ", navId: "mobile_for_family" },
      { href: "/for-contacts", label: "連絡先の方へ", navId: "mobile_for_contacts" },
      { href: "/share-message", label: "説明文テンプレ", navId: "mobile_share_message" },
    ],
  },
  {
    title: "使い方・サポート",
    links: [
      { href: "/manual", label: "操作ガイド", navId: "mobile_manual" },
      { href: "/manual/faq", label: "FAQ", navId: "mobile_manual_faq" },
      { href: "/manual/tutorial", label: "3分体験コース", navId: "mobile_manual_tutorial" },
      { href: "/support", label: "サポート", navId: "mobile_support" },
    ],
  },
  {
    title: "法務・設定",
    links: [
      { href: "/privacy", label: "プライバシーポリシー", navId: "mobile_privacy" },
      { href: "/terms", label: "利用規約", navId: "mobile_terms" },
      { href: "/privacy-choices", label: "プライバシー選択", navId: "mobile_privacy_choices" },
      { href: "/tokushoho", label: "特商法に基づく表示", navId: "mobile_tokushoho" },
    ],
  },
] as const;

export const footerSections = [
  {
    title: "あんぴッチ",
    links: [
      { href: "/", label: "あんぴッチ", navId: "footer_home" },
      { href: "/before-you-start", label: "始める前に確認する", navId: "footer_before_you_start" },
      { href: "/pricing", label: "料金", navId: "footer_pricing" },
    ],
  },
  {
    title: "確認する",
    links: [
      { href: "/how-it-works", label: "48時間の通知ルール", navId: "footer_how_it_works" },
      { href: "/notification-samples", label: "通知サンプル", navId: "footer_notification_samples" },
      { href: "/delivery-status", label: "通知履歴の見方", navId: "footer_delivery_status" },
      { href: "/trust", label: "できること・できないこと", navId: "footer_trust" },
    ],
  },
  {
    title: "紹介・連絡先",
    links: [
      { href: "/for-family", label: "紹介したい方へ", navId: "footer_for_family" },
      { href: "/for-contacts", label: "連絡先の方へ", navId: "footer_for_contacts" },
      { href: "/share-message", label: "説明文テンプレ", navId: "footer_share_message" },
    ],
  },
  {
    title: "サポート",
    links: [
      { href: "/support", label: "サポート", navId: "footer_support" },
      { href: "/help/stop", label: "STOP / HELP", navId: "footer_help_stop" },
      { href: "/manual", label: "操作ガイド", navId: "footer_manual" },
      { href: "/manual/faq", label: "FAQ", navId: "footer_manual_faq" },
      { href: "/manual/tutorial", label: "3分体験コース", navId: "footer_manual_tutorial" },
    ],
  },
  {
    title: "法務",
    links: [
      { href: "/privacy", label: "プライバシーポリシー", navId: "footer_privacy" },
      { href: "/terms", label: "利用規約", navId: "footer_terms" },
      { href: "/privacy-choices", label: "プライバシー選択", navId: "footer_privacy_choices" },
      { href: "/tokushoho", label: "特商法に基づく表示", navId: "footer_tokushoho" },
    ],
  },
] as const;
