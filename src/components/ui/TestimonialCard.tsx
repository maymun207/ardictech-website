import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export default function TestimonialCard({
  quote,
  name,
  role,
  company,
}: TestimonialCardProps) {
  return (
    <div className="flex h-full flex-col rounded-xl bg-white p-8 shadow-md">
      <Quote className="mb-4 h-8 w-8 text-secondary/40" />
      <blockquote className="flex-1 text-lg leading-relaxed text-neutral-700">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div className="mt-6 border-t border-neutral-100 pt-4">
        <div className="font-heading font-bold text-neutral-900">{name}</div>
        <div className="text-sm text-neutral-500">
          {role}, {company}
        </div>
      </div>
    </div>
  );
}
