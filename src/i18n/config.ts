export const defaultLang = 'es' as const;
export const locales = ['es', 'en'] as const;

export type Lang = (typeof locales)[number];

export const languages: Record<Lang, string> = {
  es: 'Español',
  en: 'English',
};

/** Devuelve el idioma a partir de la URL ("/en/..." -> "en"). */
export function getLangFromUrl(url: URL): Lang {
  const [, segment] = url.pathname.split('/');
  if (locales.includes(segment as Lang)) return segment as Lang;
  return defaultLang;
}

/** Construye una ruta respetando el idioma (es en raíz, resto con prefijo). */
export function localizedPath(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLang) return clean;
  return `/${lang}${clean === '/' ? '' : clean}`;
}

/** Segmento de la sección de proyectos por idioma. */
export const workSegment: Record<Lang, string> = {
  es: 'proyectos',
  en: 'work',
};

/** Ruta a la página de caso de estudio de un proyecto. */
export function projectPath(slug: string, lang: Lang): string {
  return localizedPath(`/${workSegment[lang]}/${slug}`, lang);
}
