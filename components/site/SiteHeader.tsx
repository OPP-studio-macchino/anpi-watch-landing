"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { AppStoreBadgeLink } from "./AppStoreBadgeLink";
import { BrandLogo } from "./BrandLogo";
import { appStoreHref, desktopHeaderLinks, mobileMenuSections } from "./SiteNavigation";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus();
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
          <BrandLogo navId="header_home" onClick={closeMenu} />

          <nav className="site-header__nav" aria-label="主要ページ">
            {desktopHeaderLinks.map((link) => (
              <Link href={link.href} key={link.href} data-nav-id={link.navId}>
                {link.label}
              </Link>
            ))}
          </nav>

          <AppStoreBadgeLink
            className="site-header__cta"
            href={appStoreHref}
            navId="nav_appstore"
          />

          <button
            ref={menuButtonRef}
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

      <div
        className={`site-mobile-menu ${isOpen ? "site-mobile-menu--open" : ""}`}
        id={menuId}
        aria-hidden={!isOpen}
      >
        <button
          className="site-mobile-menu__backdrop"
          type="button"
          aria-label="メニューを閉じる"
          onClick={closeMenu}
          tabIndex={isOpen ? 0 : -1}
        />
        <div className="site-mobile-menu__panel">
          <div className="site-mobile-menu__brand-row">
            <BrandLogo compact onClick={closeMenu} />
            <button type="button" onClick={closeMenu} aria-label="メニューを閉じる">
              ×
            </button>
          </div>
          <AppStoreBadgeLink
            className="site-mobile-menu__cta"
            href={appStoreHref}
            navId="nav_appstore_mobile"
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
