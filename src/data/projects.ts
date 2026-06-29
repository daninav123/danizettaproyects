import type { Lang } from '../i18n/config';

/** Texto que cambia según idioma. */
type Localized = Record<Lang, string>;

export interface Project {
  slug: string;
  name: string;
  url: string;
  year: string;
  /** Color de acento del proyecto (se usa en hover y en el placeholder). */
  accent: string;
  category: Localized;
  role: Localized;
  tagline: Localized;
  description: Localized;
  /** El reto / contexto (para la página de caso de estudio). */
  brief: Localized;
  /** La solución / enfoque. */
  approach: Localized;
  /** Lo que incluye / entregables. */
  highlights: { es: string[]; en: string[] };
  tags: string[];
  /** Ruta a la imagen en /public/images. Si no existe, se muestra un placeholder. */
  image?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'planivia',
    name: 'Planivia',
    url: 'https://planivia.net',
    year: '2025',
    accent: '#e2a08f',
    featured: true,
    category: {
      es: 'Plataforma SaaS · Bodas',
      en: 'SaaS Platform · Weddings',
    },
    role: {
      es: 'Producto, diseño y desarrollo',
      en: 'Product, design & development',
    },
    tagline: {
      es: 'Tu boda se organiza sola. En serio.',
      en: 'Your wedding plans itself. Seriously.',
    },
    description: {
      es: 'Plataforma todo-en-uno para organizar bodas: gestión de invitados, presupuesto, seating, web de boda, invitaciones digitales y coordinación de proveedores, con un asistente de IA que automatiza el trabajo administrativo. Gratis hasta 80 invitados y disponible en más de 88 países.',
      en: 'All-in-one platform to plan weddings: guest management, budgeting, seating, wedding website, digital invitations and vendor coordination, with an AI assistant that automates the admin work. Free up to 80 guests and available in 88+ countries.',
    },
    brief: {
      es: 'Organizar una boda implica decenas de tareas dispersas —invitados, presupuesto, seating, proveedores, web e invitaciones— en mil sitios distintos. Hacía falta una única herramienta que lo unificara y eliminara el trabajo administrativo.',
      en: 'Planning a wedding means dozens of scattered tasks —guests, budget, seating, vendors, website and invitations— across a dozen tools. It needed a single product that unified everything and removed the admin work.',
    },
    approach: {
      es: 'Diseñé y desarrollé una plataforma SaaS todo-en-uno, de la arquitectura de producto a la UX/UI y el desarrollo, con un asistente de IA que automatiza la gestión. Pensada para escalar internacionalmente (+88 países) y con un plan gratuito hasta 80 invitados.',
      en: 'I designed and built an all-in-one SaaS platform end to end —product architecture, UX/UI and development— with an AI assistant that automates the busywork. Built to scale internationally (88+ countries) with a free tier up to 80 guests.',
    },
    highlights: {
      es: ['Gestión de invitados y RSVP', 'Presupuesto y plano de mesas', 'Web de boda + invitaciones digitales', 'Coordinación de proveedores', 'Asistente con IA', 'Multi-idioma · +88 países'],
      en: ['Guest management & RSVP', 'Budget & seating plan', 'Wedding website + digital invites', 'Vendor coordination', 'AI assistant', 'Multi-language · 88+ countries'],
    },
    tags: ['SaaS', 'IA / AI', 'Web App', 'UX/UI'],
    image: '/images/planivia.jpg',
  },
  {
    slug: 'resona-events',
    name: 'ReSona Events',
    url: 'https://resonaevents.com',
    year: '2024',
    accent: '#6fb1a6',
    featured: true,
    category: {
      es: 'Producción audiovisual',
      en: 'Audiovisual production',
    },
    role: {
      es: 'Identidad y desarrollo web',
      en: 'Identity & web development',
    },
    tagline: {
      es: 'Bodas que suenan como se ven.',
      en: 'Weddings that sound as good as they look.',
    },
    description: {
      es: 'Web de marca para una productora audiovisual de bodas y eventos en Valencia: sonido, iluminación y montaje pensados para emocionar. Una presencia digital oscura y cinematográfica, a la altura de las celebraciones que producen.',
      en: 'Brand website for an audiovisual wedding and event production studio in Valencia: sound, lighting and staging crafted to move people. A dark, cinematic digital presence that matches the celebrations they produce.',
    },
    brief: {
      es: 'Una productora audiovisual de bodas y eventos en Valencia necesitaba una presencia digital a la altura de su trabajo: cinematográfica, premium y que convirtiera visitas en consultas.',
      en: 'An audiovisual wedding & event production studio in Valencia needed a digital presence worthy of its work: cinematic, premium and built to turn visits into enquiries.',
    },
    approach: {
      es: 'Identidad y desarrollo web. Una web oscura y editorial que transmite la experiencia de cada celebración —sonido, iluminación y montaje— y guía al visitante hacia el contacto.',
      en: 'Identity and web development. A dark, editorial site that conveys the experience behind every celebration —sound, lighting and staging— and guides visitors toward getting in touch.',
    },
    highlights: {
      es: ['Identidad de marca', 'Web cinematográfica', 'Enfoque a captación de leads', 'Diseño a medida'],
      en: ['Brand identity', 'Cinematic website', 'Lead-generation focused', 'Bespoke design'],
    },
    tags: ['Branding', 'Web', 'Audiovisual', 'Eventos / Events'],
    image: '/images/resona.jpg',
  },
  {
    slug: 'resona-rent',
    name: 'ReSona Rent',
    url: 'https://resonarent.com',
    year: '2025',
    accent: '#4f9bd9',
    featured: true,
    category: {
      es: 'Alquiler audiovisual · E-commerce',
      en: 'AV rental · E-commerce',
    },
    role: {
      es: 'Producto, diseño y desarrollo',
      en: 'Product, design & development',
    },
    tagline: {
      es: 'Alquila equipos audiovisuales profesionales.',
      en: 'Pro audiovisual gear, rented by the day.',
    },
    description: {
      es: 'Plataforma de alquiler de equipos audiovisuales en Valencia: sonido, iluminación, vídeo y estructuras. Búsqueda por producto y fechas, reserva 100% online, depósito reembolsable y entrega/recogida. La rama de alquiler de ReSona.',
      en: 'Audiovisual equipment rental platform in Valencia: sound, lighting, video and rigging. Search by product and dates, 100% online booking, refundable deposit and delivery/pickup. The rental arm of ReSona.',
    },
    brief: {
      es: 'La rama de alquiler de ReSona necesitaba una plataforma para alquilar equipos audiovisuales online, con disponibilidad por fechas y reserva sin fricción.',
      en: 'ReSona’s rental arm needed a platform to rent audiovisual gear online, with date availability and frictionless booking.',
    },
    approach: {
      es: 'Producto, diseño y desarrollo de una plataforma de alquiler: catálogo por categorías, búsqueda por producto y fechas, reserva 100% online, depósito reembolsable y logística de entrega/recogida en Valencia.',
      en: 'Product, design and development of a rental platform: category catalogue, search by product and dates, 100% online booking, refundable deposit and delivery/pickup logistics in Valencia.',
    },
    highlights: {
      es: ['Catálogo por categorías', 'Reserva por fechas online', 'Depósito reembolsable', 'Entrega y recogida en Valencia'],
      en: ['Category catalogue', 'Online date-based booking', 'Refundable deposit', 'Delivery & pickup in Valencia'],
    },
    tags: ['E-commerce', 'Reservas / Booking', 'Web App', 'AV'],
    image: '/images/resona-rent.jpg',
  },
  {
    slug: 'dra-clara-navarro',
    name: 'Dra. Clara Navarro',
    url: 'https://draclaranavarro.com',
    year: '2025',
    accent: '#c8ad7a',
    featured: true,
    category: {
      es: 'Medicina estética',
      en: 'Aesthetic medicine',
    },
    role: {
      es: 'Diseño, desarrollo y SEO',
      en: 'Design, development & SEO',
    },
    tagline: {
      es: 'El arte de revelar tu belleza.',
      en: 'The art of revealing your beauty.',
    },
    description: {
      es: 'Web trilingüe para una clínica de medicina estética con tres sedes en Valencia. Reservas online, posicionamiento SEO y una estética de lujo basada en design tokens, con resultados naturales y antes/después como protagonistas.',
      en: 'Trilingual website for an aesthetic medicine clinic with three locations in Valencia. Online booking, SEO and a luxury aesthetic built on design tokens, putting natural results and before/after imagery front and centre.',
    },
    brief: {
      es: 'Una clínica de medicina estética con tres sedes en Valencia necesitaba una web de lujo, multilingüe y orientada a reservas y posicionamiento.',
      en: 'An aesthetic-medicine clinic with three locations in Valencia needed a luxury, multilingual website focused on bookings and search ranking.',
    },
    approach: {
      es: 'Diseño, desarrollo y SEO. Estética de lujo construida sobre un sistema de design tokens, reservas online, arquitectura trilingüe y posicionamiento, con resultados naturales y antes/después como protagonistas.',
      en: 'Design, development and SEO. A luxury aesthetic built on a design-token system, online booking, a trilingual architecture and search optimisation, with natural results and before/after imagery up front.',
    },
    highlights: {
      es: ['Reservas online', 'Trilingüe (ES/VA/EN)', 'SEO técnico y de contenido', 'Sistema de design tokens'],
      en: ['Online booking', 'Trilingual (ES/VA/EN)', 'Technical & content SEO', 'Design-token system'],
    },
    tags: ['Web', 'SEO', 'Reservas / Booking', 'i18n'],
    image: '/images/clara-navarro.jpg',
  },
  {
    slug: 'danizetta-dj',
    name: 'Dani Zetta · DJ',
    url: 'https://danizetta.com',
    year: '2026',
    accent: '#3aa6d8',
    featured: true,
    category: {
      es: 'DJ · Bodas & Clubs',
      en: 'DJ · Weddings & Clubs',
    },
    role: {
      es: 'Identidad y desarrollo web',
      en: 'Identity & web development',
    },
    tagline: {
      es: 'Tu día, tu banda sonora.',
      en: 'Your day, your soundtrack.',
    },
    description: {
      es: 'Mi faceta como DJ: bodas en toda España y sesiones en clubs nacionales e internacionales. Web bilingüe con dos líneas —bodas y clubs—, música a medida y energía de cabina.',
      en: 'My work as a DJ: weddings across Spain and club sets nationally and internationally. Bilingual site split into two lines —weddings and clubs—, tailored music and dancefloor energy.',
    },
    brief: {
      es: 'Mi faceta como DJ necesitaba su propia web, con dos públicos muy distintos —bodas y clubs— conviviendo en un mismo sitio sin perder fuerza.',
      en: 'My work as a DJ needed its own site, with two very different audiences —weddings and clubs— living together without losing impact.',
    },
    approach: {
      es: 'Identidad y desarrollo. Web bilingüe con dos líneas claras (bodas a nivel nacional y clubs nacionales e internacionales), tipografía potente y todo orientado a la contratación.',
      en: 'Identity and development. A bilingual site with two clear lines (weddings nationwide and clubs at home and abroad), bold typography and everything geared toward bookings.',
    },
    highlights: {
      es: ['Dos líneas: bodas y clubs', 'Bilingüe ES/EN', 'SEO nacional (bodas)', 'Enfoque a contratación'],
      en: ['Two lines: weddings & clubs', 'Bilingual ES/EN', 'National SEO (weddings)', 'Booking-focused'],
    },
    tags: ['DJ', 'Bodas / Weddings', 'Clubs', 'Web', 'SEO'],
    image: '/images/danizetta-dj.jpg',
  },
];

export function getProjects(): Project[] {
  return projects;
}
