import { draftNoticeItems } from "./legalDraftContent";

export function LegalDraftNotice() {
  return (
    <aside
      aria-label="Legal review draft notice"
      style={{
        border: "1px solid var(--manual-status-warning)",
        borderRadius: "16px",
        background: "var(--manual-status-warning-subtle)",
        color: "var(--manual-text-primary)",
        marginTop: "24px",
        padding: "18px",
      }}
    >
      <h2
        style={{
          fontSize: "1.1rem",
          lineHeight: 1.4,
          margin: "0 0 10px",
        }}
      >
        Legal / Product / CXレビュー用Draft
      </h2>
      <ul
        style={{
          display: "grid",
          gap: "6px",
          margin: 0,
          paddingLeft: "1.25rem",
        }}
      >
        {draftNoticeItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </aside>
  );
}
