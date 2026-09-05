import { skillGroups } from "@/data/site";
import Reveal from "./reveal";
import SectionHeading from "./section-heading";

const toneClasses = {
  violet: {
    chip: "bg-[var(--pastel-violet)]",
    bar: "from-[var(--primary)] to-[var(--primary-soft)]",
  },
  lilac: {
    chip: "bg-[var(--pastel-lilac)]",
    bar: "from-[var(--primary-soft)] to-[var(--pastel-sky)]",
  },
  rose: {
    chip: "bg-[var(--pastel-rose)]",
    bar: "from-[var(--pastel-rose)] to-[var(--primary-soft)]",
  },
} as const;

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div
        className="aura top-10 right-0 size-[400px] bg-[var(--pastel-lilac)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="Las herramientas con las que trabajo"
            description="Lo que uso a diario y lo que fui sumando en el camino, agrupado por dónde encaja dentro de un proyecto."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {skillGroups.map((group, i) => {
            const tone = toneClasses[group.tone];
            return (
              <Reveal key={group.title} delay={i * 100}>
                <div className="h-full rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-7 shadow-[var(--shadow-sm)] transition hover:shadow-[var(--shadow-md)]">
                  <span
                    className={`block h-1.5 w-12 rounded-full bg-gradient-to-r ${tone.bar}`}
                    aria-hidden
                  />
                  <h3 className="mt-5 font-display text-[19px] font-semibold">
                    {group.title}
                  </h3>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className={`rounded-xl px-3 py-2 text-[13.5px] font-medium text-[var(--text)] ${tone.chip}`}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
