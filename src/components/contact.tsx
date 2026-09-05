"use client";

import { useState } from "react";
import { person } from "@/data/site";
import Reveal from "./reveal";
import {
  ArrowUpRightIcon,
  CheckIcon,
  CopyIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
} from "./icons";

const links = [
  {
    label: "LinkedIn",
    value: "Milagros Álvarez Cisterna",
    href: person.linkedin,
    Icon: LinkedinIcon,
  },
  {
    label: "GitHub",
    value: `@${person.githubUser}`,
    href: person.github,
    Icon: GithubIcon,
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(person.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${person.email}`;
    }
  }

  return (
    <section
      id="contacto"
      className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32"
    >
      <div
        className="aura -bottom-24 left-1/4 size-[500px] bg-[var(--pastel-violet)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-[36px] border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-lg)]">
            <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="bg-gradient-to-br from-[var(--pastel-violet)] via-[var(--pastel-lilac)] to-[var(--pastel-rose)] p-9 sm:p-12">
                <span className="text-[12.5px] font-semibold tracking-[0.18em] text-[var(--primary)] uppercase">
                  Contacto
                </span>
                <h2 className="mt-4 font-display text-[clamp(1.9rem,4vw,2.7rem)] leading-tight font-semibold tracking-tight text-balance">
                  ¿Trabajamos juntos?
                </h2>
                <p className="mt-4 max-w-md text-[16px] leading-relaxed text-[var(--text-muted)] text-pretty">
                  Escribime si tenés un proyecto en mente, una vacante para
                  backend o simplemente ganas de charlar sobre código. Respondo
                  todos los mensajes.
                </p>

                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <a
                    href={`mailto:${person.email}`}
                    className="inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3.5 text-[14.5px] font-semibold text-white shadow-[var(--shadow-md)] transition hover:bg-[var(--primary-hover)]"
                  >
                    <MailIcon className="size-[18px]" />
                    {person.email}
                  </a>
                  <button
                    type="button"
                    onClick={copyEmail}
                    aria-label="Copiar dirección de correo"
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-[var(--surface)]/80 px-4 py-3.5 text-[14px] font-semibold text-[var(--text)] backdrop-blur transition hover:border-[var(--primary-soft)] hover:text-[var(--primary)]"
                  >
                    {copied ? (
                      <>
                        <CheckIcon className="size-4" /> Copiado
                      </>
                    ) : (
                      <>
                        <CopyIcon className="size-4" /> Copiar
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div className="flex flex-col justify-center gap-3 p-9 sm:p-12">
                {links.map(({ label, value, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-[var(--border)] p-4 transition hover:border-[var(--primary-soft)] hover:bg-[var(--surface-2)]"
                  >
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-[var(--primary-wash)] text-[var(--primary)]">
                      <Icon className="size-[18px]" />
                    </span>
                    <span className="min-w-0 grow">
                      <span className="block text-[12.5px] text-[var(--text-subtle)]">
                        {label}
                      </span>
                      <span className="block truncate text-[14.5px] font-medium">
                        {value}
                      </span>
                    </span>
                    <ArrowUpRightIcon className="size-4 shrink-0 text-[var(--text-subtle)] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--primary)]" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
