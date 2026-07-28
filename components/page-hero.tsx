import { Reveal } from "@/components/reveal";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
};

export function PageHero({ title, description }: Props) {
  return (
    <section className="relative overflow-hidden pb-6 pt-10">
      <div className="pointer-events-none absolute -top-10 left-1/2 h-72 w-[640px] -translate-x-1/2 rounded-full bg-gold/8 blur-[120px]" />
      <div className="container relative text-center">
        <Reveal delay={0.05}>
          <h1 className="mx-auto max-w-4xl font-display text-4xl font-extrabold leading-tight tracking-tight text-white text-balance sm:text-5xl md:text-6xl">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-silver-500">
              {description}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
