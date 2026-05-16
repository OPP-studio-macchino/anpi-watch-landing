import type { Metadata } from "next";
import Link from "next/link";
import { LegalDraftNotice } from "../../components/legal/LegalDraftNotice";
import { LegalList, LegalSection } from "../../components/legal/LegalSection";
import {
  draftNoindexRobots,
  legalReviewLinks,
  legalUrlReadinessItems,
  nonProductionRouteNotes,
} from "../../components/legal/legalDraftContent";

export const metadata: Metadata = {
  title: "Legal Review Draft | あんぴッチ",
  description: "Legal / Product / CXレビュー用Draft routeです。本番用Legal URLではありません。",
  robots: draftNoindexRobots,
};

export default function LegalReviewIndexPage() {
  return (
    <main className="wrapper">
      <section className="hero">
        <p className="badge">Legal Review Draft</p>
        <h1>Legal公開ページ候補レビュー</h1>
        <p className="lead">
          Privacy Policy / Terms / 特商法表記 / User Privacy Choicesを画面確認するためのDraft routeです。
          ここは本番用Legal URLではありません。
        </p>
        <LegalDraftNotice />
      </section>

      <section className="features" aria-label="Legal review draft routes">
        {legalReviewLinks.map((link) => (
          <article key={link.href}>
            <h2>{link.title}</h2>
            <p>{link.description}</p>
            <div className="actions">
              <Link className="secondary" href={link.href}>
                Draftを見る
              </Link>
            </div>
          </article>
        ))}
      </section>

      <LegalSection title="本番URLではないこと">
        <LegalList items={nonProductionRouteNotes} />
      </LegalSection>

      <LegalSection title="未確定事項">
        <LegalList items={legalUrlReadinessItems} />
      </LegalSection>
    </main>
  );
}
