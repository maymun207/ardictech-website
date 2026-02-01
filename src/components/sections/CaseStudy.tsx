import { ArrowRight, Quote } from "lucide-react";
import type { Dictionary } from "@/types";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import MetricCard from "@/components/ui/MetricCard";
import Button from "@/components/ui/Button";

interface CaseStudyProps {
  dict: Dictionary;
}

export default function CaseStudy({ dict }: CaseStudyProps) {
  const { caseStudy } = dict;

  return (
    <SectionWrapper id="case-study" className="bg-neutral-50">
      <SectionHeading title={caseStudy.title} subtitle={caseStudy.subtitle} />

      {/* Metrics grid */}
      <div className="mt-12 grid grid-cols-2 gap-8 lg:grid-cols-4">
        {caseStudy.metrics.map((metric) => (
          <MetricCard
            key={metric.label}
            value={metric.value}
            label={metric.label}
          />
        ))}
      </div>

      {/* Challenge / Solution */}
      <div className="mt-16 grid gap-8 md:grid-cols-2">
        <div className="rounded-xl border border-neutral-200 bg-white p-8">
          <h3 className="font-heading text-lg font-bold text-red-600">
            Challenge
          </h3>
          <p className="mt-3 leading-relaxed text-neutral-600">
            {caseStudy.challenge}
          </p>
        </div>
        <div className="rounded-xl border border-neutral-200 bg-white p-8">
          <h3 className="font-heading text-lg font-bold text-accent">
            Solution
          </h3>
          <p className="mt-3 leading-relaxed text-neutral-600">
            {caseStudy.solution}
          </p>
        </div>
      </div>

      {/* Quote */}
      <div className="mt-12 rounded-xl bg-primary p-8 text-white md:p-12">
        <Quote className="mb-4 h-8 w-8 text-secondary" />
        <blockquote className="text-lg leading-relaxed italic md:text-xl">
          &ldquo;{caseStudy.quote.text}&rdquo;
        </blockquote>
        <div className="mt-6">
          <div className="font-heading font-bold">{caseStudy.quote.author}</div>
          <div className="text-sm text-neutral-300">
            {caseStudy.quote.role}
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <Button variant="secondary" href="#">
          {caseStudy.cta}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </SectionWrapper>
  );
}
