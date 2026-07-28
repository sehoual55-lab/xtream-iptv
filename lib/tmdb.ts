/**
 * TMDB-Integration (The Movie Database).
 * Zeigt aktuelle Filme & Serien als Poster-Showcase.
 *
 * Setze TMDB_API_KEY in .env.local. Ohne Schlüssel werden hochwertige
 * Fallback-Inhalte angezeigt, damit die Seite immer gut aussieht.
 */

import { siteConfig } from "@/config/site.config";

const TMDB_BASE = "https://api.themoviedb.org/3";
export const TMDB_IMG = "https://image.tmdb.org/t/p/w500";

/** Key aus Umgebungsvariable, sonst aus der zentralen Konfiguration. */
function tmdbKey(): string {
  return process.env.TMDB_API_KEY || siteConfig.tmdb.apiKey || "";
}

export type MediaItem = {
  id: number;
  title: string;
  poster: string;
  rating: number;
  type: "movie" | "tv";
};

type TmdbResult = {
  id: number;
  title?: string;
  name?: string;
  poster_path: string | null;
  vote_average: number;
};

async function fetchTmdb(path: string): Promise<TmdbResult[]> {
  const key = tmdbKey();
  if (!key) return [];
  try {
    const res = await fetch(
      `${TMDB_BASE}${path}${path.includes("?") ? "&" : "?"}api_key=${key}&language=de-DE`,
      { next: { revalidate: 60 * 60 * 12 } } // 12h Cache
    );
    if (!res.ok) return [];
    const data = await res.json();
    return (data.results ?? []) as TmdbResult[];
  } catch {
    return [];
  }
}

function mapItems(results: TmdbResult[], type: "movie" | "tv"): MediaItem[] {
  return results
    .filter((r) => r.poster_path)
    .slice(0, 12)
    .map((r) => ({
      id: r.id,
      title: r.title ?? r.name ?? "",
      poster: `${TMDB_IMG}${r.poster_path}`,
      rating: Math.round(r.vote_average * 10) / 10,
      type,
    }));
}

/**
 * Kuratierte, echte TMDB-Poster als Fallback (falls der Build-Server die TMDB-API
 * nicht erreicht). Beim Build auf einem Rechner mit Internet werden diese
 * automatisch durch die aktuellen Trending-Titel ersetzt.
 */
const FALLBACK_MOVIES: MediaItem[] = [
  ["/1AsrB0n7X2xE30RA0S5fagr545g.jpg", 9.1, "Spider-Man: Brand New Day"],
  ["/4E8Ji8jTcWNncl9PdUCauoj2qh9.jpg", 8.0, "Die Odyssee"],
  ["/mJiLDE6gu1u6ZPgLR22vmkP64u2.jpg", 7.1, "Backrooms"],
  ["/c4hwwylwgo5lBO2O2WSBxxQF2kC.jpg", 7.3, "Masters of the Universe"],
  ["/1bAhSRf3BVOCI9zNzTLrsJA1LAq.jpg", 8.3, "Obsession"],
  ["/5QrwqFLCYVCI5emBzJkm2VhAfPR.jpg", 7.3, "The Mandalorian and Grogu"],
  ["/wnkUQWAhVH72gmc5jlZnFv1K7jK.jpg", 7.2, "Der Teufel trägt Prada 2"],
  ["/oT4IcIGuNTzs4Z7gWbF2leJeWuu.jpg", 8.0, "Mortal Kombat II"],
  ["/x1QRMN8Mgci1Z121zFp3PwcEIwW.jpg", 5.9, "Vaiana"],
  ["/dpcDnatuJlRUldshZkZoqdJDijg.jpg", 6.7, "The Death of Robin Hood"],
].map(([p, r, t], i) => ({
  id: 10000 + i,
  title: t as string,
  poster: `${TMDB_IMG}${p}`,
  rating: r as number,
  type: "movie" as const,
}));

const FALLBACK_TV: MediaItem[] = [
  ["/8f33Q5AuM2G5ZqFeusbIqDjr3cI.jpg", 8.7, "One Piece"],
  ["/7V0Ebks0GgpKvQ7QbLAIdX5dos4.jpg", 8.4, "House of the Dragon"],
  ["/w6KapI2JvrCkOPmQhkwYPJNjqeo.jpg", 7.9, "Star Trek: Strange New Worlds"],
  ["/pAxeLxVzeCTqJhvYPPdNDhMsHcI.jpg", 8.2, "Silo"],
  ["/e0kKmeM8R7Kersh5N2PPzIRNRhr.jpg", 8.4, "Bleach"],
  ["/kKsdvIOfWhqw5ZfAepi5EZqhrsP.jpg", 8.7, "Rick and Morty"],
  ["/gfw41bHY2boxVse5l8M6m0sft5n.jpg", 8.3, "A Shop for Killers"],
  ["/vComTg8O9m22c7jG9jHbeKJBz5Q.jpg", 8.1, "Reacher"],
].map(([p, r, t], i) => ({
  id: 20000 + i,
  title: t as string,
  poster: `${TMDB_IMG}${p}`,
  rating: r as number,
  type: "tv" as const,
}));

const FALLBACK: MediaItem[] = [...FALLBACK_MOVIES, ...FALLBACK_TV];

export async function getTrendingMovies(): Promise<MediaItem[]> {
  const items = mapItems(await fetchTmdb("/trending/movie/week"), "movie");
  return items.length ? items : FALLBACK.filter((f) => f.type === "movie");
}

export async function getTrendingTv(): Promise<MediaItem[]> {
  const items = mapItems(await fetchTmdb("/trending/tv/week"), "tv");
  return items.length ? items : FALLBACK.filter((f) => f.type === "tv");
}

export async function getShowcase(): Promise<MediaItem[]> {
  const [movies, tv] = await Promise.all([getTrendingMovies(), getTrendingTv()]);
  const merged: MediaItem[] = [];
  const max = Math.max(movies.length, tv.length);
  for (let i = 0; i < max; i++) {
    if (movies[i]) merged.push(movies[i]);
    if (tv[i]) merged.push(tv[i]);
  }
  return merged.length ? merged : FALLBACK;
}
