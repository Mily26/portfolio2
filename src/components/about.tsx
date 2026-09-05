import { about, person } from "@/data/site";
import Reveal from "./reveal";
import SectionHeading from "./section-heading";
import { SparkIcon } from "./icons";

export default function About() {
  return (
    <section id="sobre-mi" className="relative py-24 sm:py-32">
      <div
        className="aura top-1/4 -left-40 size-[420px] bg-[var(--pastel-violet)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Sobre mí"
            title="Del navegador al servidor, siguiendo la curiosidad"
          />
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div className="space-y-5">
            {about.paragraphs.map((text, i) => (
              <Reveal key={i} delay={i * 90}>
                <p className="text-[16.5px] leading-[1.75] text-[var(--text-muted)] text-pretty">
                  {text}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-7 shadow-[var(--shadow-md)]">
              <SparkIcon className="size-6 text-[var(--primary)]" />
              <p className="mt-4 font-display text-[19px] leading-snug font-medium text-balance">
                “{person.intro}”
              </p>
              <div className="mt-7 space-y-5 border-t border-[var(--border)] pt-6">
                {about.highlights.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-baseline justify-between gap-4"
                  >
                    <span className="text-[14px] text-[var(--text-muted)]">
                      {item.label}
                    </span>
                    <span className="shrink-0 font-display text-[18px] font-semibold text-[var(--primary)]">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
