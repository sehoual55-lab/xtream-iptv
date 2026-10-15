/**
 * Blog içerikleri için hafif Markdown oluşturucu.
 * Desteklenenler: ## / ### başlıklar, paragraflar, - listeler, 1. numaralı listeler,
 * | tablolar |, **kalın**, `kod`, [bağlantı](url) (iç bağlantılar next/link ile).
 */
import { Fragment, type ReactNode } from "react";
import Link from "next/link";

const INLINE = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)\s]+\))/g;

function renderInline(text: string, keyPrefix: string): ReactNode[] {
  return text.split(INLINE).map((part, i) => {
    const key = `${keyPrefix}-${i}`;
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={key} className="font-semibold text-white">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code key={key} className="rounded-md bg-white/10 px-1.5 py-0.5 font-mono text-[0.9em] text-gold">
          {part.slice(1, -1)}
        </code>
      );
    }
    const link = part.match(/^\[([^\]]+)\]\(([^)\s]+)\)$/);
    if (link) {
      const [, label, href] = link;
      const isCta = label.includes("Sipariş");
      const cls = isCta
        ? "inline-flex items-center rounded-full bg-gold px-3 py-1 text-sm font-semibold text-black no-underline hover:opacity-90"
        : "font-medium text-gold underline decoration-gold/40 underline-offset-4 hover:decoration-gold";
      if (href.startsWith("/")) {
        return (
          <Link key={key} href={href} className={cls}>
            {label}
          </Link>
        );
      }
      return (
        <a key={key} href={href} className={cls} target="_blank" rel="noopener noreferrer">
          {label}
        </a>
      );
    }
    return <Fragment key={key}>{part}</Fragment>;
  });
}

function Table({ block, keyPrefix }: { block: string; keyPrefix: string }) {
  const rows = block
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l.startsWith("|") && !/^\|\s*-{2,}/.test(l) && !/^\|(\s*:?-+:?\s*\|)+$/.test(l))
    .map((l) => l.slice(1, l.endsWith("|") ? -1 : undefined).split("|").map((c) => c.trim()));
  if (rows.length === 0) return null;
  const [head, ...body] = rows;
  return (
    <div className="glass overflow-x-auto rounded-2xl">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-white/10 text-xs uppercase tracking-wider text-slate-400">
            {head.map((c, i) => (
              <th key={i} className="px-4 py-3 font-semibold">
                {renderInline(c, `${keyPrefix}-th-${i}`)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body.map((r, i) => (
            <tr key={i} className="border-b border-white/5 text-slate-300 last:border-0">
              {r.map((c, j) => (
                <td key={j} className="px-4 py-3 align-top">
                  {renderInline(c, `${keyPrefix}-td-${i}-${j}`)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Markdown({ content }: { content: string }) {
  const blocks = content.trim().split(/\n\n+/);

  return (
    <div className="space-y-5">
      {blocks.map((block, i) => {
        const trimmed = block.trim();

        if (trimmed.startsWith("### ")) {
          return (
            <h3 key={i} className="pt-3 font-display text-xl font-semibold text-white">
              {renderInline(trimmed.slice(4), `h3-${i}`)}
            </h3>
          );
        }
        if (trimmed.startsWith("## ")) {
          return (
            <h2 key={i} className="pt-4 font-display text-2xl font-bold text-white md:text-3xl">
              {renderInline(trimmed.slice(3), `h2-${i}`)}
            </h2>
          );
        }
        if (trimmed.startsWith("|")) {
          return <Table key={i} block={trimmed} keyPrefix={`t-${i}`} />;
        }
        if (/^\d+\.\s/.test(trimmed)) {
          const lis = trimmed.split("\n").map((l) => l.replace(/^\d+\.\s+/, ""));
          return (
            <ol key={i} className="space-y-2 pl-1">
              {lis.map((li, j) => (
                <li key={j} className="flex gap-3 text-slate-300">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/15 text-xs font-bold text-gold">
                    {j + 1}
                  </span>
                  <span>{renderInline(li, `ol-${i}-${j}`)}</span>
                </li>
              ))}
            </ol>
          );
        }
        if (trimmed.startsWith("- ")) {
          const lis = trimmed.split("\n").map((l) => l.replace(/^-\s+/, ""));
          return (
            <ul key={i} className="space-y-2 pl-1">
              {lis.map((li, j) => (
                <li key={j} className="flex gap-2.5 text-slate-300">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span>{renderInline(li, `li-${i}-${j}`)}</span>
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p key={i} className="leading-relaxed text-slate-300">
            {renderInline(trimmed, `p-${i}`)}
          </p>
        );
      })}
    </div>
  );
}
