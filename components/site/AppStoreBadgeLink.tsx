type AppStoreBadgeLinkProps = {
  href: string;
  className?: string;
  navId?: string;
  ctaId?: string;
  onClick?: () => void;
};

export function AppStoreBadgeLink({ href, className, navId, ctaId, onClick }: AppStoreBadgeLinkProps) {
  return (
    <a
      className={["app-store-badge-link", className].filter(Boolean).join(" ")}
      href={href}
      data-nav-id={navId}
      data-cta-id={ctaId}
      aria-label="App Storeで見る"
      onClick={onClick}
    >
      <img
        className="app-store-badge-link__image"
        src="/assets/app-store-badge-ja-jp-black.svg"
        alt=""
        width={109}
        height={40}
        aria-hidden="true"
      />
    </a>
  );
}
