import Link from "next/link";
import { AppStoreBadgeLink } from "./AppStoreBadgeLink";
import { BrandLogo } from "./BrandLogo";
import { appStoreHref, footerSections } from "./SiteNavigation";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <BrandLogo className="site-brand--footer" navId="footer_home" />
          <p>
            1日1回、OKを記録。OKが途切れた時は、あらかじめ同意した2名へ段階的に通知を試みます。
          </p>
          <AppStoreBadgeLink className="site-footer__cta" href={appStoreHref} navId="footer_appstore" />
          <small>iPhone対応｜月額300円｜通知ごとの追加料金なし</small>
        </div>

        <nav className="site-footer__nav" aria-label="フッター">
          {footerSections.map((section) => (
            <section className="site-footer__section" key={section.title}>
              <h2>{section.title}</h2>
              <ul>
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} data-nav-id={link.navId}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </nav>
      </div>
      <div className="site-footer__legal-line">
        <p>© {new Date().getFullYear()} O.P.P Studio</p>
        <p>本サービスは救命・危険検知・位置追跡・公的機関への自動通報を行いません。</p>
      </div>
    </footer>
  );
}
