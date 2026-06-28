# Dani Zetta — Portfolio

Portfolio personal de **Dani Zetta**: webs, plataformas y visuales.
Construido con [Astro](https://astro.build), bilingüe (ES/EN) y con un diseño
dark cinematográfico.

## 🚀 Comandos

| Comando           | Acción                                             |
| :---------------- | :------------------------------------------------- |
| `npm install`     | Instala las dependencias                           |
| `npm run dev`     | Servidor de desarrollo en `http://localhost:4321`  |
| `npm run build`   | Genera la web de producción en `./dist/`           |
| `npm run preview` | Previsualiza el build de producción en local       |

## 🗂️ Estructura

```
src/
├── components/
│   ├── Header.astro        · cabecera + navegación + selector de idioma
│   ├── Footer.astro
│   ├── ProjectCard.astro   · tarjeta de proyecto
│   ├── Home.astro          · composición de la home
│   └── sections/           · Hero, Work, Visuals, About, Contact
├── data/
│   └── projects.ts         · ⭐ lista de proyectos (edítala aquí)
├── i18n/
│   ├── config.ts           · idiomas y rutas
│   └── content.ts          · ⭐ todos los textos del sitio (ES/EN)
├── layouts/
│   └── BaseLayout.astro    · <head>, SEO, fuentes
├── pages/
│   ├── index.astro         · home en español (raíz "/")
│   └── en/index.astro      · home en inglés ("/en/")
└── styles/
    └── global.css          · ⭐ sistema de diseño (colores, tipos, tokens)
public/
├── favicon.svg
├── robots.txt
└── images/                 · capturas de los proyectos
```

## ✏️ Cómo editar lo más habitual

- **Textos** (titulares, descripciones, botones): `src/i18n/content.ts`
- **Proyectos** (añadir/editar/ordenar): `src/data/projects.ts`
- **Colores y tipografía**: variables al inicio de `src/styles/global.css`
- **Imágenes de proyectos**: `public/images/` + descomenta `image:` en `projects.ts`
- **Dominio** (SEO/sitemap): `site:` en `astro.config.mjs` y `public/robots.txt`

## 🌐 Idiomas

- Español → `/` (idioma por defecto)
- Inglés → `/en/`

El selector de idioma de la cabecera enlaza automáticamente la versión equivalente.

## ☁️ Despliegue

El sitio es 100% estático. Puedes desplegarlo gratis en **Vercel**, **Netlify**
o **Cloudflare Pages**: conecta el repositorio y usa `npm run build` con la
carpeta de salida `dist/`.
