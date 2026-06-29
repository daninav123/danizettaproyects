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
      services: 'Servicios',
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
      caseStudy: 'Ver caso',
    },
    caseStudy: {
      back: 'Todos los proyectos',
      visit: 'Ver web en vivo',
      brief: 'El reto',
      approach: 'La solución',
      highlights: 'Lo que incluye',
      info: 'Ficha',
      role: 'Rol',
      year: 'Año',
      category: 'Categoría',
      stack: 'Stack',
      next: 'Siguiente proyecto',
    },
    visuals: {
      eyebrow: 'Motion & Live',
      title: 'Visuales',
      subtitle:
        'Visuales en directo, motion graphics y contenido audiovisual para eventos, escenarios y marcas. Una selección en constante evolución.',
      note: 'Colección 3D Y2K: iconos de los 2000 modelados y animados, parte de mi trabajo de motion para escenarios y eventos.',
    },
    services: {
      eyebrow: 'Servicios',
      title: 'Qué hago',
      subtitle:
        'Diseño y desarrollo de producto, identidad y audiovisual. Trabajo desde Valencia para clientes de toda España y fuera.',
      items: [
        {
          title: 'Diseño y desarrollo web',
          desc: 'Webs de marca, landing pages y plataformas SaaS a medida en Valencia: diseño, desarrollo, rendimiento y SEO de principio a fin.',
          tags: ['Web a medida', 'SaaS', 'E-commerce', 'SEO'],
        },
        {
          title: 'Visuales & Motion',
          desc: 'Visuales en directo (VJ), motion graphics e intros para bodas, eventos, escenarios y marcas. Contenido audiovisual que se mueve.',
          tags: ['VJ / Directo', 'Motion', 'Intros de boda', 'Mapping'],
        },
        {
          title: 'DJ · Bodas & Clubs',
          desc: 'DJ profesional para bodas en toda España y sesiones en clubs nacionales e internacionales. Música a medida y energía real en la pista.',
          tags: ['Bodas', 'Clubs', 'Eventos privados'],
        },
        {
          title: 'Identidad & Branding',
          desc: 'Identidad visual y dirección de arte para que tu marca se vea tan bien como funciona, coherente en web, audiovisual y redes.',
          tags: ['Branding', 'Dirección de arte', 'Logo & sistema'],
        },
      ],
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
      services: 'Services',
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
      caseStudy: 'View case',
    },
    caseStudy: {
      back: 'All projects',
      visit: 'View live site',
      brief: 'The challenge',
      approach: 'The solution',
      highlights: 'What it includes',
      info: 'Details',
      role: 'Role',
      year: 'Year',
      category: 'Category',
      stack: 'Stack',
      next: 'Next project',
    },
    visuals: {
      eyebrow: 'Motion & Live',
      title: 'Visuals',
      subtitle:
        'Live visuals, motion graphics and audiovisual content for events, stages and brands. An ever-evolving selection.',
      note: 'A 3D Y2K collection: iconic 2000s gadgets modelled and animated — part of my motion work for stages and events.',
    },
    services: {
      eyebrow: 'Services',
      title: 'What I do',
      subtitle:
        'Product design and development, identity and audiovisual. Based in Valencia, working with clients across Spain and beyond.',
      items: [
        {
          title: 'Web design & development',
          desc: 'Brand websites, landing pages and custom SaaS platforms: design, development, performance and SEO end to end.',
          tags: ['Custom web', 'SaaS', 'E-commerce', 'SEO'],
        },
        {
          title: 'Visuals & Motion',
          desc: 'Live visuals (VJ), motion graphics and intros for weddings, events, stages and brands. Audiovisual content that moves.',
          tags: ['VJ / Live', 'Motion', 'Wedding intros', 'Mapping'],
        },
        {
          title: 'DJ · Weddings & Clubs',
          desc: 'Professional DJ for weddings across Spain and club sets nationally and internationally. Tailored music and real dancefloor energy.',
          tags: ['Weddings', 'Clubs', 'Private events'],
        },
        {
          title: 'Identity & Branding',
          desc: 'Visual identity and art direction so your brand looks as good as it works —consistent across web, audiovisual and social.',
          tags: ['Branding', 'Art direction', 'Logo & system'],
        },
      ],
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
