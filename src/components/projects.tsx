"use client";

import { useMemo, useState } from "react";
import { categories, projects, type Project } from "@/data/site";
import Reveal from "./reveal";
import SectionHeading from "./section-heading";
import { ArrowUpRightIcon, GithubIcon } from "./icons";

const toneByCategory: Record<Project["category"], string> = {
  Backend: "bg-[var(--pastel-lilac)]",
  Datos: "bg-[var(--pastel-sky)]",
  Frontend: "bg-[var(--pastel-rose)]",
};

function ProjectCard({ project }: { project: Project }) {
  const stopWords = ["de", "del", "con", "la", "el", "y", "en", "para"];
  const initials = project.title
    .split(" ")
    .filter((w) => !stopWords.includes(w.toLowerCase()))
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");

  return (
    <article className="group relative flex h-full flex-col rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow-sm)] transition duration-300 hover:-translate-y-1 hover:border-[var(--primary-soft)] hover:shadow-[var(--shadow-lg)]">
      <div className="flex items-start justify-between gap-4">
        <span
          className={`grid size-12 shrink-0 place-items-center rounded-2xl font-display text-[17px] font-semibold text-[var(--text)] ${toneByCategory[project.category]}`}
          aria-hidden
        >
          {initials}
        </span>
        <div className="flex items-center gap-1.5">
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Código de ${project.title} en GitHub`}
            className="relative z-10 grid size-9 place-items-center rounded-full border border-[var(--border)] text-[var(--text-subtle)] transition hover:border-[var(--primary-soft)] hover:text-[var(--primary)]"
          >
            <GithubIcon className="size-4" />
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Abrir demo de ${project.title}`}
              className="relative z-10 grid size-9 place-items-center rounded-full border border-[var(--border)] text-[var(--text-subtle)] transition hover:border-[var(--primary-soft)] hover:text-[var(--primary)]"
            >
              <ArrowUpRightIcon className="size-4" />
            </a>
          )}
        </div>
      </div>

      <h3 className="mt-5 font-display text-[19px] leading-snug font-semibold">
        <a
          href={project.demo ?? project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="after:absolute after:inset-0 after:content-['']"
        >
          {project.title}
        </a>
      </h3>

      <p className="mt-2.5 grow text-[14.5px] leading-relaxed text-[var(--text-muted)] text-pretty">
        {project.description}
      </p>

      <div className="mt-6 flex items-center justify-between border-t border-[var(--border)] pt-4 text-[12.5px] text-[var(--text-subtle)]">
        <span className="font-medium text-[var(--text-muted)]">
          {project.language}
        </span>
        <span>{project.year}</span>
      </div>
    </article>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("Todos");
  const [showAll, setShowAll] = useState(false);

  const filtered = useMemo(
    () =>
      filter === "Todos"
        ? projects
        : projects.filter((p) => p.category === filter),
    [filter],
  );

  const visible = showAll ? filtered : filtered.slice(0, 6);

  return (
    <section
      id="proyectos"
      className="relative scroll-mt-24 bg-[var(--bg-soft)] py-24 sm:py-32"
    >
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Proyectos"
            title="Cosas que construí para entender cómo funcionan"
            description="Una selección de trabajos personales, académicos y de práctica profesional. Cada uno enlaza a su código y, cuando existe, a la demo en vivo."
          />
        </Reveal>

        <Reveal delay={80}>
          <div
            role="tablist"
            aria-label="Filtrar proyectos por categoría"
            className="mt-10 flex flex-wrap gap-2"
          >
            {categories.map((cat) => {
              const isActive = filter === cat;
              return (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => {
                    setFilter(cat);
                    setShowAll(false);
                  }}
                  className={`rounded-full border px-4 py-2 text-[13.5px] font-medium transition ${
                    isActive
                      ? "border-transparent bg-[var(--primary)] text-white shadow-[var(--shadow-sm)]"
                      : "border-[var(--border-strong)] bg-[var(--surface)] text-[var(--text-muted)] hover:border-[var(--primary-soft)] hover:text-[var(--primary)]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, i) => (
            <Reveal key={project.name} delay={(i % 3) * 80} as="div">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        {filtered.length > 6 && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setShowAll((v) => !v)}
              className="rounded-full border border-[var(--border-strong)] bg-[var(--surface)] px-6 py-3 text-[14px] font-semibold text-[var(--text)] transition hover:border-[var(--primary-soft)] hover:text-[var(--primary)]"
            >
              {showAll
                ? "Mostrar menos"
                : `Ver los ${filtered.length} proyectos`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
