import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Fraunces } from "next/font/google";
import { person } from "@/data/site";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["SOFT", "WONK"],
});

export const metadata: Metadata = {
  metadataBase: new URL(person.website),
  title: {
    default: `${person.name} — ${person.role}`,
    template: `%s | ${person.name}`,
  },
  description: `${person.intro}. Portfolio de proyectos en Python, Java, TypeScript y React.`,
  keywords: [
    "Milagros Alvarez",
    "Backend Developer",
    "Python",
    "Java",
    "React",
    "Córdoba",
    "Argentina",
    "portfolio",
  ],
  authors: [{ name: person.fullName, url: person.website }],
  creator: person.fullName,
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: person.website,
    title: `${person.name} — ${person.role}`,
    description: person.intro,
    siteName: person.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${person.name} — ${person.role}`,
    description: person.intro,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf8ff" },
    { media: "(prefers-color-scheme: dark)", color: "#100d1b" },
  ],
};

// Se ejecuta antes del primer paint para evitar el parpadeo de tema.
const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    var theme = stored || (prefersDark ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", theme);
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${jakarta.variable} ${fraunces.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
