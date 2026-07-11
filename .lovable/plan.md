
## Objetivo

1. Importar **todas as 34 receitas** do arquivo XML do WordPress (`culinariafitnesscom.WordPress.2026-07-11.xml`) mantendo exatamente o mesmo layout premium já usado em `RecipePost.tsx` (cards, ícones, badges, seções).
2. Corrigir o problema de imagens quebradas no primeiro carregamento, otimizando o site para WebP e garantindo que nada apareça quebrado.

---

## Parte 1 — Importação das 34 Receitas

**Origem:** 34 posts do XML, distribuídos nas categorias:
- Almoço e Jantar (11)
- Sobremesas Fit (4)
- Café da Manhã (2 + waffles)
- Lanche da Tarde (7)
- Bebidas Fitness (8)
- Marmitas (1) — já existente

**Estratégia:**

Vou escrever um script Python que lê o XML e gera automaticamente o array `recipes` em `src/data/recipes.ts` no formato TypeScript já existente. Para cada post o script extrai:

- `title`, `slug` (do `<link>`), `date` (alternando 27/28 junho 2026), `category`, `excerpt` (primeiros 200 chars do `<content:encoded>` sem HTML)
- `image`: URL da imagem destacada (`<wp:postmeta>` `_thumbnail_id` → URL do attachment correspondente). Todas serão migradas para WebP local (ver Parte 2).
- Do corpo HTML do post, parseio as seções conhecidas (headings `<h2>`/`<h3>` em português) para preencher:
  - `ingredients` (lista "Ingredientes")
  - `directions` (lista "Modo de Preparo")
  - `notes` (blocos "Dicas"/"Notas")
  - `nutritionalBenefits` (Resumo de Benefícios Nutricionais por Ingrediente)
  - `nutritionalTable` (Tabela Nutricional)
  - `differentiation` (Diferenciação da Receita Fitness)
  - `entrepreneurship` (Empreendendo com Esta Receita)
  - `history` (Resumo Histórico)
- Metadados fixos: `course`, `cuisine=Brasileira`, `difficulty` inferida pela categoria, `servings/prepTime/cookTime/calories` extraídos quando disponíveis ou defaults consistentes.

O resultado substitui/estende o array atual em `src/data/recipes.ts` (mantendo as 20 receitas já existentes onde os slugs coincidirem, atualizando o restante). O layout no `RecipePost.tsx` **não muda** — ele já renderiza todas essas seções.

---

## Parte 2 — Correção de imagens quebradas + WebP

**Diagnóstico:** hoje o site usa URLs remotas (Unsplash e culinariafitness.com). No primeiro acesso essas imagens ainda estão sendo baixadas → aparecem quebradas por 1-2 s. Além disso, algumas URLs remotas podem falhar (CORS/hotlink).

**Correções aplicadas em todo o site:**

1. **Download local + conversão para WebP** de todas as imagens de receitas (34 imagens hero) e categorias:
   - Script Python baixa cada imagem do XML.
   - Converte para WebP (qualidade 82, largura máx 1200 px) usando `Pillow`.
   - Envia via `lovable-assets create` → armazena no CDN Lovable.
   - Substitui todas as URLs remotas por `.asset.json` do CDN.

2. **Componente `<SmartImage>`** que:
   - Renderiza `<img loading="eager" fetchpriority="high">` para imagens above-the-fold (hero, primeiros cards).
   - Usa `loading="lazy" decoding="async"` para as demais.
   - Mostra um placeholder blur/skeleton (`bg-tasty-peach/40` com pulse) enquanto carrega — nunca aparece "quebrada".
   - `onError` fallback para uma imagem WebP local padrão.

3. **Preload da imagem LCP** em `index.html`: `<link rel="preload" as="image" href="/__l5e/.../hero.webp" fetchpriority="high">` para a primeira imagem visível da home.

4. Substituir todos os `<img>` diretos em `RecipeCard`, `RecipePost`, `CategoryCircles`, `SiteFooter` (trending), banners e Chefs pelo `<SmartImage>`.

---

## Arquivos afetados

- `src/data/recipes.ts` — reescrito com as 34 receitas + `.asset.json` imports
- `src/components/SmartImage.tsx` — novo
- `src/components/RecipeCard.tsx`, `RecipePost.tsx`, `CategoryCircles.tsx`, `SiteFooter.tsx`, `Layout.tsx`, `pages/Index.tsx`, `pages/About.tsx` — trocar `<img>` por `<SmartImage>`
- `index.html` — preload LCP + `<meta>` tuning
- `src/assets/recipes/*.webp.asset.json` — 34 pointers CDN

## Detalhes técnicos

```text
XML → parse.py
 ├─ lxml/BeautifulSoup parseia <content:encoded>
 ├─ mapeia headings PT-BR → campos Recipe
 └─ escreve src/data/recipes.ts (TS literal)

imagens
 ├─ requests.get(url) → PIL.Image → .save(fmt='WEBP', quality=82)
 ├─ lovable-assets create --file /tmp/x.webp
 └─ src/assets/recipes/<slug>.webp.asset.json
```

Se qualquer imagem do WordPress falhar no download (404), uso um fallback WebP genérico da categoria (5 imagens de categoria já geradas).

---

Confirma que posso executar? Vai levar algumas rodadas de tool calls (download + upload das 34 imagens + geração do TS).
