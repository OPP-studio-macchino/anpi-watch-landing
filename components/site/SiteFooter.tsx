import Link from "next/link";
import { appStoreHref, footerSections } from "./SiteNavigation";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <Link className="site-brand site-brand--footer" href="/" data-nav-id="footer_home">
            <span className="site-brand__mark" aria-hidden="true">
              <span />
            </span>
            <span className="site-brand__name">あんぴッチ</span>
          </Link>
          <a className="site-footer__cta" href={appStoreHref} data-nav-id="nav_appstore">
            App Storeで見る
          </a>
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
    </footer>
  );
}
