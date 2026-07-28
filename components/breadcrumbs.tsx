import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { JsonLd } from "@/components/jsonld";
import { breadcrumbJsonLd } from "@/lib/seo";

export type Crumb = { name: string; path: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const full: Crumb[] = [{ name: "Ana Sayfa", path: "/" }, ...items];
  return (
    <nav aria-label="Breadcrumb" className="container pt-24 md:pt-28">
      <JsonLd data={breadcrumbJsonLd(full)} />
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-slate-400">
        {full.map((c, i) => {
          const last = i === full.length - 1;
          return (
            <li key={c.path} className="flex items-center gap-1.5">
              {last ? (
                <span className="text-gold" aria-current="page">
                  {c.name}
                </span>
              ) : (
                <Link href={c.path} className="hover:text-white">
                  {c.name}
                </Link>
              )}
              {!last && <ChevronRight className="h-3.5 w-3.5 text-slate-600" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
