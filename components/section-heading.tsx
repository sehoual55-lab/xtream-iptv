import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  center?: boolean;
  className?: string;
};

export function SectionHeading({ title, subtitle, center = true, className }: Props) {
  return (
    <div className={cn("mx-auto max-w-3xl", center && "text-center", className)}>
      <Reveal delay={0.05}>
        <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-white text-balance sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p className="mt-5 text-lg leading-relaxed text-silver-500">{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}
