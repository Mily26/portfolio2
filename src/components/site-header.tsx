"use client";

import { useEffect, useState } from "react";
import { nav, person } from "@/data/site";
import ThemeToggle from "./theme-toggle";
import { CloseIcon, MenuIcon } from "./icons";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#inicio");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Marca en el nav la sección que se está viendo.
  useEffect(() => {
    const sections = nav
      .map(({ href }) => document.querySelector(href))
      .filter((el): el is Element => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Evita el scroll del fondo con el menú móvil abierto.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[var(--border)] bg-[var(--bg)]/85 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <a
          href="#inicio"
          className="group flex items-center gap-2.5 text-[15px] font-semibold tracking-tight"
        >
          <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--primary-soft)] font-display text-[15px] text-white shadow-[var(--shadow-sm)] transition-transform group-hover:-rotate-6">
            m
          </span>
          <span className="hidden sm:inline">{person.name}</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => {
            const isActive = active === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative rounded-full px-3.5 py-2 text-[13.5px] font-medium transition-colors ${
                  isActive
                    ? "text-[var(--primary)]"
                    : "text-[var(--text-muted)] hover:text-[var(--text)]"
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 -z-10 rounded-full bg-[var(--primary-wash)]" />
                )}
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="#contacto"
            className="hidden rounded-full bg-[var(--primary)] px-4.5 py-2.5 text-[13.5px] font-semibold text-white shadow-[var(--shadow-sm)] transition hover:bg-[var(--primary-hover)] sm:inline-block"
          >
            Hablemos
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            className="grid size-10 place-items-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-muted)] md:hidden"
          >
            {open ? (
              <CloseIcon className="size-[18px]" />
            ) : (
              <MenuIcon className="size-[18px]" />
            )}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      <div
        className={`overflow-hidden border-t border-[var(--border)] bg-[var(--bg)]/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 md:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4 sm:px-8">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 text-[15px] font-medium text-[var(--text-muted)] transition hover:bg-[var(--surface-2)] hover:text-[var(--text)]"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
