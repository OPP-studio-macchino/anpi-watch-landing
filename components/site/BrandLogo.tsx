import Link from "next/link";

type BrandLogoProps = {
  href?: string;
  compact?: boolean;
  className?: string;
  navId?: string;
  onClick?: () => void;
};

export function BrandLogo({
  href = "/",
  compact = false,
  className,
  navId,
  onClick,
}: BrandLogoProps) {
  return (
    <Link
      className={["brand-logo", compact ? "brand-logo--compact" : "", className]
        .filter(Boolean)
        .join(" ")}
      href={href}
      aria-label="あんぴッチ トップへ"
      data-nav-id={navId}
      onClick={onClick}
    >
      <img
        className="brand-logo__icon"
        src="/brand/app-icon.png"
        alt=""
        width={1024}
        height={1024}
        aria-hidden="true"
      />
      <span className="brand-logo__copy">
        <strong>あんぴッチ</strong>
        {!compact && <small>ひとり暮らしの連絡ルール</small>}
      </span>
    </Link>
  );
}
