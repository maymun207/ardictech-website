import { ArrowRight, Play } from "lucide-react";
import type { Dictionary } from "@/types";
import Button from "@/components/ui/Button";

interface HeroSectionProps {
  dict: Dictionary;
}

export default function HeroSection({ dict }: HeroSectionProps) {
  const { hero } = dict;

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-light">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, white 1px, transparent 1px), radial-gradient(circle at 75% 75%, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            {hero.headline}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-neutral-200 sm:text-xl">
            {hero.subheadline}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="#contact" variant="primary" size="lg">
              {hero.ctaPrimary}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button href="#platform" variant="secondary" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              <Play className="mr-2 h-5 w-5" />
              {hero.ctaSecondary}
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/20 pt-8">
            {hero.trustIndicators.map((indicator) => (
              <div
                key={indicator}
                className="text-sm font-medium text-neutral-300"
              >
                {indicator}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
