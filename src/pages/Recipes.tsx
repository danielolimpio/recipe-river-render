import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { PageBanner } from '@/components/PageBanner';
import { RecipeCard } from '@/components/RecipeCard';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { recipes } from '@/data/recipes';

const PER_PAGE = 9;

const Recipes = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('categoria');
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    if (!category) return recipes;
    return recipes.filter((r) => r.category === category);
  }, [category]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const pageRecipes = filtered.slice(0, page * PER_PAGE);
  const hasMore = page < totalPages;

  return (
    <Layout>
      <PageBanner
        title="Receitas"
        description="Explore nossa coleção completa de receitas: do café da manhã ao jantar, opções para todos os gostos e ocasiões."
        current="Receitas"
      />

      <section className="py-20" aria-labelledby="recipes-heading">
        <div className="container-tasty">
          <h2 id="recipes-heading" className="sr-only">
            {category ? `Receitas na categoria ${category}` : 'Todas as receitas'}
          </h2>
          {category && (
            <p className="text-center text-sm text-tasty-gray mb-8">
              Mostrando receitas em <span className="text-tasty-orange font-semibold">{category}</span>
            </p>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {pageRecipes.map((r) => (
              <RecipeCard key={r.id} recipe={r} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-tasty-gray py-16">Nenhuma receita encontrada.</p>
          )}

          {hasMore && (
            <div className="flex items-center justify-center gap-2 mt-14">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i + 1)}
                  className={`w-9 h-9 rounded-md text-sm font-semibold flex items-center justify-center ${
                    page === i + 1
                      ? 'bg-tasty-orange text-white'
                      : 'bg-transparent text-tasty-dark hover:bg-muted'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              <Button
                variant="outline"
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                className="rounded-md ml-4 h-9 px-4 border-border text-tasty-dark"
              >
                Próxima <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Recipes;
