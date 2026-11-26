const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Prefix an internal absolute path with the configured Astro `base`. */
export function withBase(path: string): string {
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}
