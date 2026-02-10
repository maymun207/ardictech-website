interface SectionWrapperProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export default function SectionWrapper({
  id,
  children,
  className = "",
  dark = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`py-20 ${dark ? "bg-black text-white" : "bg-white"} ${className}`}
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-20">{children}</div>
    </section>
  );
}
