# Portfolio — Milagros Alvarez

Portfolio personal de **Milagros Alvarez Cisterna**, Backend Developer de Monte Cristo, Córdoba (Argentina). Reconstrucción en Next.js del sitio original [milyalvarez.com](https://milyalvarez.com), conservando su contenido y estructura (Home · Sobre mí · Proyectos · Skills · Contacto) con una identidad visual nueva en violeta pastel.

## Stack

- **Next.js 15** (App Router) + **React 19**
- **TypeScript** en modo estricto
- **Tailwind CSS 4** con tokens de diseño en variables CSS
- Tipografías: **Plus Jakarta Sans** (texto) y **Fraunces** (títulos), vía `next/font`

## Empezar

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de producción
npm start       # servir el build
```

## Estructura

```
src/
├── app/
│   ├── globals.css      # paleta, tokens y utilidades base
│   ├── layout.tsx       # fuentes, metadata, script anti-flash de tema
│   └── page.tsx         # composición de secciones
├── components/
│   ├── site-header.tsx  # nav con sección activa + menú móvil
│   ├── hero.tsx
│   ├── about.tsx
│   ├── projects.tsx     # grilla con filtros por categoría
│   ├── skills.tsx
│   ├── contact.tsx
│   ├── site-footer.tsx
│   ├── theme-toggle.tsx # modo claro/oscuro persistido
│   ├── reveal.tsx       # animación de entrada por IntersectionObserver
│   ├── section-heading.tsx
│   └── icons.tsx        # iconos SVG inline (sin dependencias)
└── data/
    └── site.ts          # única fuente de datos: perfil, proyectos, skills
```

Todo el contenido se edita en `src/data/site.ts`: datos personales, listado de
proyectos (con repo, demo, categoría y año) y grupos de skills.

## Paleta

Violeta pastel sobre fondos claros y neutros. Los pasteles viven en fondos y
acentos; el texto mantiene contraste alto para que el resultado sea profesional
y legible. Definida como variables CSS en `globals.css`, con set completo para
modo claro y oscuro:

| Rol | Claro | Oscuro |
| --- | --- | --- |
| Fondo | `#faf8ff` | `#100d1b` |
| Superficie | `#ffffff` | `#1b1630` |
| Texto | `#201a30` | `#efeafb` |
| Primario | `#6d4ac7` | `#b99bff` |
| Pasteles | lila, violeta, rosa, celeste | equivalentes oscurecidos |

## Accesibilidad

- Navegación por teclado con `:focus-visible` visible en toda la página
- `aria-label` en botones de icono y `role="tab"` en los filtros
- Respeta `prefers-reduced-motion` y `prefers-color-scheme`
- Sin desbordes horizontales entre 360 px y desktop
