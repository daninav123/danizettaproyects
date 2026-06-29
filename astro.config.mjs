// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Dominio definitivo (usado en SEO, canonical y sitemap).
  site: 'https://danizetta.studio',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      // El idioma por defecto (es) vive en la raíz "/", el inglés en "/en/".
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      // Añade enlaces hreflang (es/en) en el sitemap para SEO internacional.
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es-ES', en: 'en-US' },
      },
    }),
  ],
});
