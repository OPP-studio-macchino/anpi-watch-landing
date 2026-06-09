import type { Metadata } from "next";
import { ManualPage } from "../../components/manual/ManualPage";

export const metadata: Metadata = {
  title: "あんぴッチ ユーザーマニュアル",
  description:
    "あんぴッチの使い方を説明するユーザーマニュアルです。連絡先のURL同意、毎日のOK、月額300円、通知の進み方、記録と通知履歴の見方を確認できます。"
};

export default function ManualRoute() {
  return <ManualPage />;
}
