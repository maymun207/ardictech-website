interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "outline";
}

const variantStyles = {
  default: "bg-primary/10 text-primary",
  accent: "bg-accent/10 text-accent-dark",
  outline: "border border-neutral-300 text-neutral-600",
};

export default function Badge({ children, variant = "default" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${variantStyles[variant]}`}
    >
      {children}
    </span>
  );
}
