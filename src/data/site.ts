export const person = {
  name: "Milagros Alvarez",
  fullName: "Milagros Alvarez Cisterna",
  role: "Backend Developer",
  location: "Monte Cristo, Córdoba, Argentina",
  greeting: "¡Hola! Me llamo",
  intro: "Soy Backend Developer de Córdoba, Argentina",
  email: "milyalvarez.26@gmail.com",
  github: "https://github.com/Mily26",
  githubUser: "Mily26",
  linkedin:
    "https://www.linkedin.com/in/milagros-%C3%A1lvarez-cisterna-9891501b0/",
  website: "https://milyalvarez.com",
  avatar: "https://avatars.githubusercontent.com/u/61996502?v=4",
} as const;

export const nav = [
  { href: "#inicio", label: "Home" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#skills", label: "Skills" },
  { href: "#contacto", label: "Contacto" },
] as const;

export const about = {
  paragraphs: [
    "Soy desarrolladora backend de Monte Cristo, Córdoba (Argentina). Empecé en el frontend construyendo interfaces con JavaScript y React, y con el tiempo me fui corriendo hacia el lado del servidor: la lógica, los datos y todo lo que hace que una aplicación funcione bien por dentro.",
    "Hoy trabajo principalmente con Python y Java, y sigo usando TypeScript cuando el proyecto lo pide. Del lado de los datos trabajo con Apache NiFi para armar flujos de ingesta y con Apache Kafka para mover eventos entre sistemas, además de reportería y procesamiento con pandas. Disfruto de los proyectos donde hay que ordenar información desprolija y convertirla en algo útil.",
    "Cada proyecto de esta página nació de algo que quise entender mejor: una API nueva, un patrón, una herramienta. Sigo aprendiendo con esa misma lógica.",
  ],
  highlights: [
    { value: "31", label: "repositorios públicos" },
    { value: "2020", label: "escribiendo código desde" },
    { value: "Python · Java", label: "stack principal" },
  ],
} as const;

export const categories = ["Todos", "Backend", "Datos", "Frontend"] as const;
export type Category = Exclude<(typeof categories)[number], "Todos">;

export type Project = {
  name: string;
  title: string;
  description: string;
  language: string;
  category: Category;
  repo: string;
  demo?: string;
  featured?: boolean;
  year: string;
};

export const projects: Project[] = [
  {
    name: "TuHoraSalud",
    category: "Backend",
    title: "TuHora Salud",
    description:
      "Aplicación de turnos médicos desarrollada como práctica profesionalizante. Gestión de pacientes, profesionales y agenda de citas.",
    language: "Java",
    repo: "https://github.com/Mily26/TuHoraSalud",
    featured: true,
    year: "2025",
  },
  {
    name: "autosplash",
    category: "Frontend",
    title: "Autosplash",
    description:
      "Sitio web para venta de autos, con catálogo de vehículos y fichas de detalle. Construido con TypeScript.",
    language: "TypeScript",
    repo: "https://github.com/Mily26/autosplash",
    featured: true,
    year: "2026",
  },
  {
    name: "credit-card-fraud-detection",
    category: "Datos",
    title: "Detección de fraude con tarjetas",
    description:
      "Proyecto final del Hackathon de Data Science 2023: modelo para identificar transacciones fraudulentas sobre datos de tarjetas de crédito.",
    language: "Data Science",
    repo: "https://github.com/Mily26/credit-card-fraud-detection",
    featured: true,
    year: "2024",
  },
  {
    name: "biblioteca-app",
    category: "Backend",
    title: "Biblioteca App",
    description:
      "Sistema de gestión de biblioteca desarrollado durante la carrera en el ISPC, con préstamos y control de inventario de libros.",
    language: "TypeScript",
    repo: "https://github.com/Mily26/biblioteca-app",
    year: "2022",
  },
  {
    name: "reporteria",
    category: "Datos",
    title: "Reportería",
    description:
      "Herramientas en Python para generar reportes automáticos a partir de fuentes de datos internas.",
    language: "Python",
    repo: "https://github.com/Mily26/reporteria",
    year: "2026",
  },
  {
    name: "combined-excel",
    category: "Datos",
    title: "Combined Excel",
    description:
      "Script que combina y normaliza múltiples archivos de Excel utilizando pandas, pensado para tareas repetitivas de oficina.",
    language: "Python",
    repo: "https://github.com/Mily26/combined-excel",
    year: "2024",
  },
  {
    name: "react-courflix",
    category: "Frontend",
    title: "Courflix",
    description:
      "Clon de Netflix hecho en React: catálogo por categorías, consumo de API y navegación entre títulos.",
    language: "React",
    repo: "https://github.com/Mily26/react-courflix",
    demo: "https://react-courflix.vercel.app/",
    year: "2020",
  },
  {
    name: "ClimaApp",
    category: "Frontend",
    title: "Clima App",
    description:
      "Aplicación del clima que consulta una API meteorológica y muestra el pronóstico de la ciudad que busques.",
    language: "JavaScript",
    repo: "https://github.com/Mily26/ClimaApp",
    demo: "https://clima-app.vercel.app/",
    year: "2020",
  },
  {
    name: "reading",
    category: "Frontend",
    title: "Reading",
    description:
      "Aplicación de biblioteca personal para llevar registro de los libros leídos, en curso y pendientes.",
    language: "JavaScript",
    repo: "https://github.com/Mily26/reading",
    demo: "https://reading-lemon.vercel.app/",
    year: "2020",
  },
  {
    name: "devblog",
    category: "Frontend",
    title: "Devblog",
    description:
      "Blog de desarrollo con listado de artículos y vista de detalle, construido con JavaScript.",
    language: "JavaScript",
    repo: "https://github.com/Mily26/devblog",
    demo: "https://devblog-delta.vercel.app/",
    year: "2020",
  },
  {
    name: "pokedex",
    category: "Frontend",
    title: "Pokédex",
    description:
      "Pokédex que consume la PokeAPI, con buscador y ficha de cada Pokémon.",
    language: "JavaScript",
    repo: "https://github.com/Mily26/pokedex",
    demo: "https://pokedex-rust-eight.vercel.app/",
    year: "2020",
  },
  {
    name: "memory",
    category: "Frontend",
    title: "Memory",
    description:
      "Aplicación de tareas hecha con JavaScript vanilla, sin frameworks ni dependencias.",
    language: "JavaScript",
    repo: "https://github.com/Mily26/memory",
    demo: "https://memory-omega.vercel.app/",
    year: "2020",
  },
  {
    name: "agency",
    category: "Frontend",
    title: "Agency",
    description:
      "Landing page de agencia trabajada con HTML y CSS, enfocada en maquetado responsive.",
    language: "HTML / CSS",
    repo: "https://github.com/Mily26/agency",
    demo: "https://agency-roan.vercel.app/",
    year: "2020",
  },
  {
    name: "linux-research-demo",
    category: "Frontend",
    title: "Linux Research",
    description:
      "Investigación sobre Linux publicada como sitio estático, con la documentación del proceso.",
    language: "HTML",
    repo: "https://github.com/Mily26/linux-research-demo",
    demo: "https://linux-research-demo.vercel.app",
    year: "2024",
  },
];

export const skillGroups = [
  {
    title: "Backend",
    tone: "violet" as const,
    items: ["Python", "Java", "APIs REST", "SQL", "TypeScript"],
  },
  {
    title: "Frontend",
    tone: "lilac" as const,
    items: ["JavaScript", "React", "Next.js", "HTML5", "CSS3", "Sass"],
  },
  {
    title: "Datos y herramientas",
    tone: "rose" as const,
    items: [
      "Apache NiFi",
      "Apache Kafka",
      "pandas",
      "Jupyter",
      "Git",
      "GitHub",
      "Vercel",
    ],
  },
] as const;
