import Image from "next/image";
import { person } from "@/data/site";
import {
  ArrowDownIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
} from "./icons";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[92vh] items-center overflow-hidden pt-[72px]"
    >
      {/* Auras pastel */}
      <div
        className="aura -top-32 -left-24 size-[520px] bg-[var(--pastel-lilac)]"
        aria-hidden
      />
      <div
        className="aura top-24 -right-32 size-[460px] bg-[var(--pastel-rose)]"
        aria-hidden
      />
      <div
        className="aura bottom-0 left-1/3 size-[380px] bg-[var(--pastel-sky)]"
        aria-hidden
      />

      <div className="relative mx-auto grid w-full max-w-6xl gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-[var(--surface)]/70 px-3.5 py-1.5 text-[12.5px] font-medium text-[var(--text-muted)] backdrop-blur">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-[var(--primary-soft)] opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-[var(--primary)]" />
            </span>
            Disponible para nuevos proyectos
          </span>

          <h1 className="mt-7 font-display text-[clamp(2.6rem,7vw,4.6rem)] leading-[1.03] font-semibold tracking-tight text-balance">
            {person.greeting}{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-[var(--primary)] via-[var(--primary-soft)] to-[var(--primary)] bg-clip-text text-transparent">
                {person.name}
              </span>
              <span
                className="absolute -bottom-1 left-0 -z-0 h-3 w-full rounded-full bg-[var(--pastel-violet)]"
                aria-hidden
              />
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-[17px] leading-relaxed text-[var(--text-muted)] text-pretty">
            Soy{" "}
            <strong className="font-semibold text-[var(--text)]">
              {person.role}
            </strong>{" "}
            de Córdoba, Argentina. Construyo la parte que no se ve: APIs, lógica
            de negocio y procesos de datos que sostienen a las aplicaciones.
          </p>

          <div className="mt-6 flex items-center gap-2 text-[13.5px] text-[var(--text-subtle)]">
            <MapPinIcon className="size-4" />
            {person.location}
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#proyectos"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3.5 text-[14.5px] font-semibold text-white shadow-[var(--shadow-md)] transition hover:bg-[var(--primary-hover)]"
            >
              Ver proyectos
              <ArrowDownIcon className="size-4 transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href={person.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-[var(--surface)] px-6 py-3.5 text-[14.5px] font-semibold text-[var(--text)] transition hover:border-[var(--primary-soft)] hover:text-[var(--primary)]"
            >
              <MailIcon className="size-[18px]" />
              Escribirme
            </a>
          </div>

          <div className="mt-9 flex items-center gap-3">
            <a
              href={person.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="grid size-11 place-items-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-muted)] transition hover:-translate-y-0.5 hover:border-[var(--primary-soft)] hover:text-[var(--primary)]"
            >
              <GithubIcon className="size-[18px]" />
            </a>
            <a
              href={person.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid size-11 place-items-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-muted)] transition hover:-translate-y-0.5 hover:border-[var(--primary-soft)] hover:text-[var(--primary)]"
            >
              <LinkedinIcon className="size-[18px]" />
            </a>
          </div>
        </div>

        {/* Retrato */}
        <div className="relative mx-auto w-full max-w-[380px] lg:mx-0">
          <div className="dotted absolute -top-6 -right-6 size-32 rounded-2xl opacity-60" aria-hidden />
          <div className="relative rounded-[32px] border border-[var(--border)] bg-[var(--surface)]/80 p-3 shadow-[var(--shadow-lg)] backdrop-blur">
            <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[var(--pastel-lilac)] via-[var(--pastel-violet)] to-[var(--pastel-rose)]">
              <Image
                src={person.avatar}
                alt={person.fullName}
                width={420}
                height={420}
                priority
                className="aspect-square w-full object-cover"
              />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2 px-3 py-4">
              <div className="min-w-0">
                <p className="truncate text-[14.5px] font-semibold">
                  {person.fullName}
                </p>
                <p className="text-[12.5px] text-[var(--text-subtle)]">
                  @{person.githubUser}
                </p>
              </div>
              <span className="shrink-0 rounded-full bg-[var(--primary-wash)] px-3 py-1.5 text-[11px] font-semibold tracking-wide text-[var(--primary)] uppercase">
                {person.role}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
