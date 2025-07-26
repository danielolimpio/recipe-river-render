import { useState, useEffect, useCallback } from 'react';
import { RecipeCard, Recipe } from './RecipeCard';
import { Button } from '@/components/ui/button';
import { Loader2, ChefHat } from 'lucide-react';

interface RecipeGridProps {
  searchQuery: string;
  selectedCategory: string;
}

// Mock data para demonstração
const mockRecipes: Recipe[] = [
  {
    id: 1,
    title: "Risotto de Cogumelos Selvagens",
    description: "Um risotto cremoso com mix de cogumelos frescos, parmesão e ervas aromáticas",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
    prepTime: 15,
    cookTime: 25,
    servings: 4,
    difficulty: 'Médio',
    category: 'Pratos Principais',
    rating: 4.8,
    tags: ['Vegetariano', 'Italiano', 'Cremoso'],
    author: 'Chef Maria Silva',
    isFavorite: false
  },
  {
    id: 2,
    title: "Tiramisu Tradicional",
    description: "A sobremesa italiana clássica com camadas de café, mascarpone e cacau",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop",
    prepTime: 30,
    cookTime: 0,
    servings: 8,
    difficulty: 'Fácil',
    category: 'Sobremesas',
    rating: 4.9,
    tags: ['Sobremesa', 'Italiano', 'Café'],
    author: 'Chef João Santos',
    isFavorite: true
  },
  {
    id: 3,
    title: "Salmão Grelhado com Legumes",
    description: "Salmão perfeitamente grelhado acompanhado de legumes da estação",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop",
    prepTime: 10,
    cookTime: 20,
    servings: 2,
    difficulty: 'Fácil',
    category: 'Pratos Principais',
    rating: 4.7,
    tags: ['Saudável', 'Proteína', 'Grelhado'],
    author: 'Chef Ana Costa',
    isFavorite: false
  },
  {
    id: 4,
    title: "Salada Caesar Gourmet",
    description: "A clássica salada caesar com molho caseiro e croutons artesanais",
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop",
    prepTime: 20,
    cookTime: 5,
    servings: 4,
    difficulty: 'Fácil',
    category: 'Saladas',
    rating: 4.5,
    tags: ['Salada', 'Clássico', 'Rápido'],
    author: 'Chef Pedro Lima',
    isFavorite: false
  },
  {
    id: 5,
    title: "Pasta Carbonara Autêntica",
    description: "A verdadeira carbonara italiana com ovos, queijo pecorino e guanciale",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=300&fit=crop",
    prepTime: 5,
    cookTime: 15,
    servings: 4,
    difficulty: 'Médio',
    category: 'Massas',
    rating: 4.9,
    tags: ['Massa', 'Italiano', 'Tradicional'],
    author: 'Chef Marco Rossi',
    isFavorite: true
  },
  {
    id: 6,
    title: "Smoothie Verde Detox",
    description: "Bebida nutritiva com espinafre, maçã, banana e gengibre",
    image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=400&h=300&fit=crop",
    prepTime: 5,
    cookTime: 0,
    servings: 2,
    difficulty: 'Fácil',
    category: 'Bebidas',
    rating: 4.3,
    tags: ['Saudável', 'Detox', 'Vegetariano'],
    author: 'Chef Carla Mendes',
    isFavorite: false
  }
];

// Função para gerar mais receitas (simulando API)
const generateMoreRecipes = (offset: number): Recipe[] => {
  const titles = [
    "Paella Valenciana",
    "Brownie de Chocolate",
    "Ceviche Peruano",
    "Lasanha Vegetariana",
    "Mousse de Maracujá",
    "Hambúrguer Gourmet",
    "Sopa de Abóbora",
    "Tacos Mexicanos"
  ];
  
  const categories = ['Pratos Principais', 'Sobremesas', 'Entradas', 'Bebidas', 'Vegetariano', 'Massas', 'Saladas'];
  const difficulties: Array<'Fácil' | 'Médio' | 'Difícil'> = ['Fácil', 'Médio', 'Difícil'];
  
  return Array.from({ length: 6 }, (_, index) => ({
    id: offset + index + 1,
    title: titles[index % titles.length],
    description: "Uma receita deliciosa e fácil de preparar para toda a família",
    image: `https://images.unsplash.com/photo-${1565000000000 + (offset + index)}?w=400&h=300&fit=crop`,
    prepTime: Math.floor(Math.random() * 30) + 10,
    cookTime: Math.floor(Math.random() * 60) + 15,
    servings: Math.floor(Math.random() * 6) + 2,
    difficulty: difficulties[Math.floor(Math.random() * difficulties.length)],
    category: categories[Math.floor(Math.random() * categories.length)],
    rating: Math.round((Math.random() * 2 + 3) * 10) / 10,
    tags: ['Tag1', 'Tag2', 'Tag3'],
    author: `Chef ${Math.floor(Math.random() * 100)}`,
    isFavorite: Math.random() > 0.7
  }));
};

export const RecipeGrid = ({ searchQuery, selectedCategory }: RecipeGridProps) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);

  // Função para filtrar receitas
  const filterRecipes = useCallback((recipesList: Recipe[]) => {
    let filtered = recipesList;

    // Filtrar por categoria
    if (selectedCategory && selectedCategory !== 'Todas') {
      filtered = filtered.filter(recipe => recipe.category === selectedCategory);
    }

    // Filtrar por busca
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(recipe =>
        recipe.title.toLowerCase().includes(query) ||
        recipe.description.toLowerCase().includes(query) ||
        recipe.tags.some(tag => tag.toLowerCase().includes(query)) ||
        recipe.author.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [searchQuery, selectedCategory]);

  // Carregar receitas iniciais
  useEffect(() => {
    setRecipes(mockRecipes);
    setPage(1);
  }, []);

  // Resetar quando filtros mudarem
  useEffect(() => {
    setRecipes(mockRecipes);
    setPage(1);
    setHasMore(true);
  }, [searchQuery, selectedCategory]);

  // Carregar mais receitas
  const loadMoreRecipes = async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    
    // Simular delay da API
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const newRecipes = generateMoreRecipes(recipes.length);
    setRecipes(prev => [...prev, ...newRecipes]);
    setPage(prev => prev + 1);
    
    // Simular limite de páginas
    if (page >= 3) {
      setHasMore(false);
    }
    
    setLoading(false);
  };

  // Infinite scroll
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop
        >= document.documentElement.offsetHeight - 1000
      ) {
        loadMoreRecipes();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, hasMore, page, recipes.length]);

  // Toggle favorito
  const handleFavoriteToggle = (id: number) => {
    setRecipes(prev =>
      prev.map(recipe =>
        recipe.id === id
          ? { ...recipe, isFavorite: !recipe.isFavorite }
          : recipe
      )
    );
  };

  const filteredRecipes = filterRecipes(recipes);

  return (
    <section id="recipes-section" className="py-12">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Receitas em Destaque
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Descubra sabores únicos e aprenda com nossos chefs especialistas
          </p>
        </div>

        {/* Results Info */}
        {(searchQuery || selectedCategory !== 'Todas') && (
          <div className="mb-8">
            <p className="text-muted-foreground">
              {filteredRecipes.length} receita{filteredRecipes.length !== 1 ? 's' : ''} encontrada
              {filteredRecipes.length !== 1 ? 's' : ''}
              {searchQuery && ` para "${searchQuery}"`}
              {selectedCategory && selectedCategory !== 'Todas' && ` na categoria "${selectedCategory}"`}
            </p>
          </div>
        )}

        {/* Recipe Grid */}
        {filteredRecipes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRecipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                onFavoriteToggle={handleFavoriteToggle}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <ChefHat className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Nenhuma receita encontrada</h3>
            <p className="text-muted-foreground">
              Tente ajustar os filtros ou buscar por outros termos
            </p>
          </div>
        )}

        {/* Loading More */}
        {loading && (
          <div className="flex justify-center items-center py-8">
            <Loader2 className="h-8 w-8 animate-spin text-primary mr-2" />
            <span className="text-muted-foreground">Carregando mais receitas...</span>
          </div>
        )}

        {/* Load More Button (Fallback) */}
        {!loading && hasMore && filteredRecipes.length > 0 && (
          <div className="text-center py-8">
            <Button
              onClick={loadMoreRecipes}
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Carregar Mais Receitas
            </Button>
          </div>
        )}

        {/* End Message */}
        {!hasMore && filteredRecipes.length > 0 && (
          <div className="text-center py-8">
            <p className="text-muted-foreground">
              Você viu todas as nossas receitas! 🎉
            </p>
          </div>
        )}
      </div>
    </section>
  );
};