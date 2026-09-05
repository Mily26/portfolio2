import { nav, person } from "@/data/site";

export default function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-soft)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--primary-soft)] font-display text-[15px] text-white">
            m
          </span>
          <div>
            <p className="text-[14px] font-semibold">{person.fullName}</p>
            <p className="text-[12.5px] text-[var(--text-subtle)]">
              {person.role} · {person.location}
            </p>
          </div>
        </div>

        <nav className="flex flex-wrap gap-x-5 gap-y-2">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13.5px] text-[var(--text-muted)] transition hover:text-[var(--primary)]"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="border-t border-[var(--border)]">
        <p className="mx-auto max-w-6xl px-5 py-5 text-[12.5px] text-[var(--text-subtle)] sm:px-8">
          © {new Date().getFullYear()} {person.fullName}. Hecho con Next.js y
          mucho violeta.
        </p>
      </div>
    </footer>
  );
}
