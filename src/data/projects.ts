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
    tags: ['DJ', 'Bodas / Weddings', 'Clubs', 'Web', 'SEO'],
    image: '/images/danizetta-dj.jpg',
  },
];

export function getProjects(): Project[] {
  return projects;
}
