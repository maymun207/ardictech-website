import type { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="group rounded-xl border border-neutral-200 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
        {icon}
      </div>
      <h3 className="font-heading text-lg font-bold text-neutral-900">
        {title}
      </h3>
      <p className="mt-2 text-neutral-600">{description}</p>
    </div>
  );
}
