import type { Lang } from './config';
import { defaultLang } from './config';

/**
 * Todos los textos de la interfaz, por idioma.
 * Para editar la copia del sitio, cambia los valores aquí.
 */
export const content = {
  es: {
    meta: {
      title: 'Dani Zetta — Diseño, desarrollo web y visuales',
      description:
        'Portfolio de Dani Zetta. Diseño y desarrollo webs, plataformas y visuales en directo con alma cinematográfica para marcas que quieren destacar.',
    },
    nav: {
      work: 'Proyectos',
      visuals: 'Visuales',
      about: 'Estudio',
      contact: 'Contacto',
    },
    hero: {
      eyebrow: 'Diseño · Desarrollo · Visuales',
      title: 'Webs y experiencias digitales con alma cinematográfica.',
      subtitle:
        'Soy Dani Zetta. Diseño y desarrollo plataformas, webs de marca y visuales en directo para negocios que quieren dejar huella.',
      ctaWork: 'Ver proyectos',
      ctaContact: 'Hablemos',
      scroll: 'Desliza',
    },
    work: {
      eyebrow: 'Proyectos seleccionados',
      title: 'Trabajo reciente',
      subtitle:
        'Una selección de productos y marcas que he diseñado y desarrollado de principio a fin.',
      visit: 'Visitar sitio',
      role: 'Rol',
      year: 'Año',
    },
    visuals: {
      eyebrow: 'Motion & Live',
      title: 'Visuales',
      subtitle:
        'Visuales en directo, motion graphics y contenido audiovisual para eventos, escenarios y marcas. Una selección en constante evolución.',
      note: 'Piezas propias: branding en movimiento, intros de boda, fondos y experimentos con IA.',
    },
    about: {
      eyebrow: 'El estudio',
      title: 'Diseño con criterio. Código con intención.',
      body: [
        'Trabajo en la intersección entre diseño, desarrollo y dirección visual. Cada proyecto se construye desde cero, cuidando tanto la primera impresión como el rendimiento, la accesibilidad y el SEO.',
        'Desde plataformas SaaS hasta webs de marca y visuales para directo, mi objetivo es siempre el mismo: que el resultado se sienta inevitable, premium y honesto con el negocio que representa.',
      ],
      stats: [
        { value: '5+', label: 'Proyectos en marcha' },
        { value: '3', label: 'Idiomas de trabajo' },
        { value: '100%', label: 'Diseño a medida' },
      ],
    },
    contact: {
      eyebrow: 'Contacto',
      title: '¿Tienes una idea? Hagámosla real.',
      subtitle:
        'Cuéntame tu proyecto y te respondo con un primer enfoque. Sin compromiso.',
      cta: 'Escríbeme',
      email: 'info@danizetta.studio',
    },
    footer: {
      tagline: 'Diseño, desarrollo y visuales.',
      rights: 'Todos los derechos reservados.',
      built: 'Hecho con Astro.',
    },
  },

  en: {
    meta: {
      title: 'Dani Zetta — Web design, development & visuals',
      description:
        'Portfolio of Dani Zetta. I design and build websites, platforms and live visuals with a cinematic soul for brands that want to stand out.',
    },
    nav: {
      work: 'Work',
      visuals: 'Visuals',
      about: 'Studio',
      contact: 'Contact',
    },
    hero: {
      eyebrow: 'Design · Development · Visuals',
      title: 'Websites and digital experiences with a cinematic soul.',
      subtitle:
        "I'm Dani Zetta. I design and build platforms, brand websites and live visuals for businesses that want to leave a mark.",
      ctaWork: 'View work',
      ctaContact: "Let's talk",
      scroll: 'Scroll',
    },
    work: {
      eyebrow: 'Selected projects',
      title: 'Recent work',
      subtitle:
        'A selection of products and brands I have designed and developed end to end.',
      visit: 'Visit site',
      role: 'Role',
      year: 'Year',
    },
    visuals: {
      eyebrow: 'Motion & Live',
      title: 'Visuals',
      subtitle:
        'Live visuals, motion graphics and audiovisual content for events, stages and brands. An ever-evolving selection.',
      note: 'My own pieces: motion branding, wedding intros, backgrounds and AI experiments.',
    },
    about: {
      eyebrow: 'The studio',
      title: 'Thoughtful design. Intentional code.',
      body: [
        'I work at the intersection of design, development and visual direction. Every project is built from scratch, caring as much about the first impression as about performance, accessibility and SEO.',
        'From SaaS platforms to brand websites and live visuals, the goal is always the same: a result that feels inevitable, premium and true to the business it represents.',
      ],
      stats: [
        { value: '5+', label: 'Live projects' },
        { value: '3', label: 'Working languages' },
        { value: '100%', label: 'Bespoke design' },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Got an idea? Let’s make it real.',
      subtitle:
        'Tell me about your project and I’ll get back with a first approach. No strings attached.',
      cta: 'Get in touch',
      email: 'info@danizetta.studio',
    },
    footer: {
      tagline: 'Design, development & visuals.',
      rights: 'All rights reserved.',
      built: 'Built with Astro.',
    },
  },
} as const;

export type Content = (typeof content)[typeof defaultLang];

export function getContent(lang: Lang): Content {
  return content[lang] as Content;
}
