// Ayudantes para construir enlaces. Centralizan la ruta base del
// sitio (GitHub Pages) y el código de afiliado de Amazon, para que
// nunca tengas que escribirlos a mano en los artículos.

import { AMAZON_TAG, AMAZON_DOMAIN } from '../consts';

/**
 * Antepone la ruta base del sitio a una ruta interna.
 * En GitHub Pages el sitio cuelga de /cocina-lista/, así que
 * todos los enlaces internos deben pasar por aquí.
 *   withBase('/')            -> /cocina-lista/
 *   withBase('blog')         -> /cocina-lista/blog
 *   withBase('blog/algo/')   -> /cocina-lista/blog/algo/
 */
export function withBase(path: string | undefined = ''): string {
	const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
	const clean = String(path).replace(/^\/+/, '');
	return clean ? `${base}/${clean}` : `${base}/`;
}

/** Enlace de afiliado a un producto concreto de Amazon (por ASIN). */
export function amazonProduct(asin: string): string {
	return `https://${AMAZON_DOMAIN}/dp/${asin}?tag=${AMAZON_TAG}&linkCode=ll1&language=es_ES`;
}

/** Enlace de afiliado a una búsqueda de Amazon (cuando no tienes ASIN). */
export function amazonSearch(query: string): string {
	return `https://${AMAZON_DOMAIN}/s?k=${encodeURIComponent(query)}&tag=${AMAZON_TAG}`;
}
