export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      <span className="inline-flex items-center gap-2 text-[12.5px] font-semibold tracking-[0.18em] text-[var(--primary)] uppercase">
        <span className="h-px w-8 bg-[var(--primary-soft)]" aria-hidden />
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-[clamp(1.9rem,4.4vw,2.9rem)] leading-tight font-semibold tracking-tight text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[16px] leading-relaxed text-[var(--text-muted)] text-pretty">
          {description}
        </p>
      )}
    </div>
  );
}
