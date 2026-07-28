/**
 * Minimaler Markdown-Renderer für Blog-Inhalte.
 * Unterstützt: ## / ### Überschriften, Absätze, - Listen, **fett**.
 */
import { Fragment } from "react";

function renderInline(text: string, keyPrefix: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={`${keyPrefix}-${i}`} className="font-semibold text-white">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <Fragment key={`${keyPrefix}-${i}`}>{part}</Fragment>;
  });
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
