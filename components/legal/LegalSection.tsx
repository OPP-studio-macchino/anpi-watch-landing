import type { ReactNode } from "react";

type LegalSectionProps = {
  title: string;
  children: ReactNode;
};

type LegalListProps = {
  items: string[];
};

type LegalTableProps = {
  caption: string;
  headers: string[];
  rows: string[][];
};

export function LegalSection({ title, children }: LegalSectionProps) {
  return (
    <section className="contact">
      <h2>{title}</h2>
      <div
        style={{
          display: "grid",
          gap: "16px",
        }}
      >
        {children}
      </div>
    </section>
  );
}

export function LegalList({ items }: LegalListProps) {
  return (
    <ul
      style={{
        display: "grid",
        gap: "8px",
        margin: 0,
        paddingLeft: "1.25rem",
      }}
    >
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function LegalTable({ caption, headers, rows }: LegalTableProps) {
  return (
    <div
      style={{
        border: "1px solid var(--border)",
        borderRadius: "16px",
        overflowX: "auto",
      }}
    >
      <table
        style={{
          background: "var(--surface)",
          borderCollapse: "collapse",
          minWidth: "760px",
          width: "100%",
        }}
      >
        <caption
          style={{
            background: "var(--ds-surface-2)",
            color: "var(--muted)",
            fontWeight: 700,
            padding: "12px 14px",
            textAlign: "left",
          }}
        >
          {caption}
        </caption>
        <thead>
          <tr>
            {headers.map((header) => (
              <th
                key={header}
                scope="col"
                style={{
                  background: "var(--ds-surface-2)",
                  borderBottom: "1px solid var(--border)",
                  color: "var(--text)",
                  padding: "12px 14px",
                  textAlign: "left",
                  verticalAlign: "top",
                }}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.join("|")}>
              {row.map((cell, index) => (
                <td
                  key={`${row[0]}-${index}`}
                  style={{
                    borderBottom: "1px solid var(--border)",
                    color: "var(--muted)",
                    padding: "12px 14px",
                    verticalAlign: "top",
                  }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
