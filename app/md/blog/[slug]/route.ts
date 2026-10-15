import { siteConfig } from "@/config/site.config";
import { blogPosts, getPost } from "@/data/blog";

export const dynamic = "force-static";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

/** /md/blog/<slug> — yazının Markdown sürümü (Accept: text/markdown isteklerinde sunulur). */
export async function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return new Response("Not found", { status: 404 });
  const faq = post.faqs?.length ? `\n\n## Sık sorulan sorular\n\n${post.faqs.map((f) => `### ${f.question}\n\n${f.answer}`).join("\n\n")}` : "";
  const text = `# ${post.title}\n\nURL: ${siteConfig.url}/blog/${post.slug}\nTarih: ${post.date} · Yazar: ${post.author}\n\n${post.description}\n\n${post.content.trim()}${faq}\n`;
  return new Response(text, { headers: { "Content-Type": "text/markdown; charset=utf-8", "Cache-Control": "public, max-age=3600" } });
}
