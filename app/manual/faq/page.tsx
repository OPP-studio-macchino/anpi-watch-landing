import type { Metadata } from "next";
import { FAQPage } from "../../../components/faq/FAQPage";

export const metadata: Metadata = {
  title: "あんぴッチ FAQ",
  description:
    "あんぴッチのよくある質問です。毎日のOK、2人の同意、通知の順番、月額料金、できないことを短い言葉で確認できます。"
};

export default function FAQRoute() {
  return <FAQPage />;
}
