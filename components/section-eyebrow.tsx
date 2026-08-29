export function SectionEyebrow({
  children,
  invert = false,
  className = "",
}: {
  children: React.ReactNode;
  invert?: boolean;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <span
        className={`size-[7px] shrink-0 ${invert ? "bg-white" : "bg-primary"}`}
        aria-hidden="true"
      />
      <span
        className={`font-heading text-[13px] font-semibold tracking-[0.08em] uppercase ${
          invert ? "text-white" : "text-primary"
        }`}
      >
        {children}
      </span>
    </div>
  );
}
