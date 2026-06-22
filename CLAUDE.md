# Cocina Lista

Blog de afiliación sobre cocina práctica y freidora de aire. Astro + GitHub Pages.
Nicho: cocina fácil / air fryer, en español, afiliación **Amazon.es**.

## Estado actual (2026-06-21)
- Proyecto creado y funcional en local. **Aún NO desplegado ni subido a GitHub.**
- 1 artículo real publicado: `freidora-aire-principiantes.mdx`.
- Páginas legales completas (aviso legal, privacidad, cookies, afiliados).
- Componentes de afiliado listos (botón con `rel="sponsored nofollow"` y fichas de producto).

## PENDIENTE CRÍTICO (para que genere dinero)
1. **Registrarse en Amazon Afiliados** → associates.amazon.es (gratis).
2. **Sustituir el tag** `cocinalista-21` por el real en `src/consts.ts` (constante `AMAZON_TAG`).
3. **Crear el repo en GitHub** (`cocina-lista`, público) y subir el código.
4. **Activar GitHub Pages**: Settings → Pages → Source = "GitHub Actions".
5. ⚠️ Amazon **cierra la cuenta si no haces 3 ventas en 180 días** desde el alta. No te registres hasta tener algo de tráfico, o aprovecha ese plazo.
6. Revisar datos personales públicos en `src/consts.ts` (`OWNER_NAME`, `OWNER_EMAIL`).

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
