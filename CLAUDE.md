# Cocina Lista

Blog de afiliación sobre cocina práctica y freidora de aire. Astro + GitHub Pages.
Nicho: cocina fácil / air fryer, en español, afiliación **Amazon.es**.

## Estado actual (2026-06-23)
- **LIVE**: https://corocota96-art.github.io/cocina-lista/ (repo público, deploy automático con Node 22).
- 6 artículos publicados sobre freidora de aire.
- Páginas legales completas (aviso legal, privacidad, cookies, afiliados).
- Componentes de afiliado (botón con `rel="sponsored nofollow"` y fichas de producto).
- SEO: datos estructurados JSON-LD (WebSite/Organization/Person/BlogPosting/BreadcrumbList), breadcrumbs visuales, firma de autor, artículos relacionados, alt en imágenes.

## PENDIENTE CRÍTICO (para que genere dinero)
1. **Google Search Console** (lo más importante para tener tráfico): alta del sitio como propiedad "Prefijo de la URL" = `https://corocota96-art.github.io/cocina-lista/`, método "Etiqueta HTML", pegar el código en `GOOGLE_SITE_VERIFICATION` (`consts.ts`) y enviar el sitemap (`sitemap-index.xml`).
2. **Registrarse en Amazon Afiliados** (associates.amazon.es) y sustituir el tag `cocinalista-21` en `consts.ts`. ⚠️ Amazon cierra la cuenta si no hay 3 ventas en 180 días → hacerlo cuando haya algo de tráfico.
3. Revisar datos personales públicos en `consts.ts` (`OWNER_NAME`, `OWNER_EMAIL`).
4. Más artículos con el tiempo (objetivo 15-30). Opcional después: Pinterest enlazando a los posts (cadencia humana).

## Cómo añadir un artículo nuevo
1. Crea un archivo en `src/content/blog/` con extensión `.md` (texto simple) o `.mdx` (si lleva fichas de producto).
2. Copia la cabecera (frontmatter) de `freidora-aire-principiantes.mdx` y cambia título, descripción, fecha y tags.
3. Pon `affiliate: true` si incluye enlaces de afiliado (muestra el aviso obligatorio automáticamente).
4. Para recomendar un producto, usa el componente:
   `<ProductCard name="..." search="lo que buscarías en Amazon" />`
   o un botón suelto: `<AffiliateButton search="..." />`
   (el código de afiliado se añade solo; nunca lo escribas a mano).

## Configuración central
Todo lo global está en **`src/consts.ts`**: título, descripción, URL, tag de Amazon y datos del titular. Es el único archivo de datos que sueles tocar.

## Cómo arrancar / ver en local
```bash
npm run dev      # servidor local en http://localhost:4321/cocina-lista
npm run build    # genera la versión final en /dist
npm run preview  # previsualiza la build
```

## Despliegue
Automático con GitHub Actions (`.github/workflows/deploy.yml`) en cada push a `main`.
URL final: https://corocota96-art.github.io/cocina-lista/

## Stack
Astro 6, MDX, sitemap + RSS, GitHub Pages, GitHub Actions. Sin base de datos, sin backend.

## Archivos clave
- `src/consts.ts` — configuración global (tag de Amazon, datos, URL).
- `src/lib/links.ts` — construye los enlaces (base del sitio + afiliado Amazon).
- `src/components/AffiliateButton.astro` / `ProductCard.astro` — piezas de afiliado.
- `src/components/AffiliateDisclosure.astro` — aviso de transparencia (se inserta solo).
- `src/layouts/BlogPost.astro` — plantilla de artículo.
- `src/layouts/Page.astro` — plantilla de páginas estáticas (legales, sobre mí).
- `src/content/blog/` — los artículos.
- `astro.config.mjs` — `site` + `base: '/cocina-lista'` (cambiar a `/` si algún día usas dominio propio).

## NOTAS
- Si activas un dominio propio: cambia `base` a `'/'` en `astro.config.mjs` y `BASE_PATH` en `consts.ts`.
- No se usan cookies propias ni analítica (para cumplir RGPD sin banner). Si añades Google Analytics, hace falta banner de consentimiento.
- Las imágenes de producto de Amazon solo pueden usarse vía su API/SiteStripe; por eso las fichas no incluyen foto por defecto.
