type AppStoreBadgeLinkProps = {
  href: string;
  className?: string;
  navId?: string;
  ctaId?: string;
  onClick?: () => void;
  variant?: "badge" | "button";
  label?: string;
};

export function AppStoreBadgeLink({
  href,
  className,
  navId,
  ctaId,
  onClick,
  variant = "badge",
  label = "App Storeで見る",
}: AppStoreBadgeLinkProps) {
  return (
    <a
      className={[
        "app-store-badge-link",
        `app-store-badge-link--${variant}`,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      href={href}
      data-nav-id={navId}
      data-cta-id={ctaId}
      aria-label={label}
      onClick={onClick}
      rel="noreferrer"
    >
      {variant === "badge" ? (
        <img
          className="app-store-badge-link__image"
          src="/assets/app-store-badge-ja-jp-black.svg"
          alt="App Storeからダウンロード"
          width={109}
          height={40}
        />
      ) : (
        <>
          <span className="app-store-badge-link__apple" aria-hidden="true">●</span>
          <span>{label}</span>
        </>
      )}
    </a>
  );
}
