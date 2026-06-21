"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { AppStoreBadgeLink } from "./AppStoreBadgeLink";
import { appStoreHref, desktopHeaderLinks, mobileMenuSections } from "./SiteNavigation";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className="site-header">
        <div className="site-header__inner">
          <Link
            className="site-brand"
            href="/"
            data-nav-id="header_home"
            aria-label="あんぴッチ トップへ"
            onClick={closeMenu}
          >
            <img
              className="site-brand__mark"
              src="/icon.png"
              alt=""
              width={34}
              height={34}
              aria-hidden="true"
            />
          </Link>

          <nav className="site-header__nav" aria-label="主要ページ">
            {desktopHeaderLinks.map((link) => (
              <Link href={link.href} key={link.href} data-nav-id={link.navId}>
                {link.label}
              </Link>
            ))}
          </nav>

          <AppStoreBadgeLink className="site-header__cta" href={appStoreHref} navId="nav_appstore" />

          <button
            type="button"
            className="site-menu-button"
            aria-expanded={isOpen}
            aria-controls={menuId}
            aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
            onClick={() => setIsOpen((current) => !current)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </header>

      <div className={`site-mobile-menu ${isOpen ? "site-mobile-menu--open" : ""}`} id={menuId}>
        <div className="site-mobile-menu__panel">
          <AppStoreBadgeLink
            className="site-mobile-menu__cta"
            href={appStoreHref}
            navId="nav_appstore"
            onClick={closeMenu}
          />
          <nav className="site-mobile-menu__nav" aria-label="モバイルメニュー">
            {mobileMenuSections.map((section) => (
              <section className="site-mobile-menu__section" key={section.title}>
                <h2>{section.title}</h2>
                <ul>
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} data-nav-id={link.navId} onClick={closeMenu}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
