import type { Metadata } from "next";
import { TutorialPage } from "../../../components/tutorial/TutorialPage";

export const metadata: Metadata = {
  title: "あんぴッチ 3分体験コース",
  description:
    "はじめて使う人向けの3分チュートリアルです。ホームを開く、OKを押す、時刻を見る、記録を見る流れを、短い言葉で確認できます。"
};

export default function TutorialRoute() {
  return <TutorialPage />;
}
