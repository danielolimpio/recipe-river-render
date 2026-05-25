import { Link } from 'react-router-dom';
import { Clock, ChevronRight, Apple, Smartphone, Facebook, Twitter, Youtube, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Layout } from '@/components/Layout';
import { SEO } from '@/components/SEO';
import { RecipeCard } from '@/components/RecipeCard';
import { recipes, chefs, categories } from '@/data/recipes';

const heroRecipe = recipes[7]; // panquecas
const weekRecipes = recipes.slice(0, 6);

const categoryFeature = [
  { name: 'Doces', image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&h=600&fit=crop' },
  { name: 'Hambúrgueres', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=600&fit=crop' },
  { name: 'Bebidas', image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&h=600&fit=crop' },
  { name: 'Pizzas', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=600&fit=crop' },
];

const Index = () => {
  return (
    <Layout>
      <SEO
        title="Tasty — Receitas Fáceis e Deliciosas de Chef"
        description="Descubra receitas fáceis e deliciosas dos melhores chefs. Pratos do dia a dia, sobremesas e clássicos da culinária para você cozinhar em casa."
        path="/"
      />
      {/* Hero */}
      <section className="bg-tasty-peach relative overflow-hidden">
        <div className="container-tasty py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-tasty-orange font-bold mb-4">
              Receita do Dia
            </p>
            <h1 className="text-5xl md:text-6xl font-extrabold text-tasty-dark mb-6 leading-[1.05]">
              Tasty — Receitas de Chef para Sua Cozinha
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-tasty-dark/90 mb-4">
              Em destaque: Panquecas Fofas com Mirtilos
            </h2>
            <div className="flex flex-wrap items-center gap-6 mb-6 text-sm text-tasty-gray">
              <div className="flex items-center gap-2">
                <img src={heroRecipe.authorAvatar} alt={`Foto do autor ${heroRecipe.author}`} className="w-8 h-8 rounded-full" />
                <span>Por <span className="text-tasty-dark font-semibold">Rafael Macedo</span></span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>1 hora e 20 minutos</span>
              </div>
            </div>
            <p className="text-tasty-gray mb-8 max-w-md">
              Comece o seu dia com panquecas leves, fofinhas e cheias de mirtilos suculentos.
              Uma receita irresistível para toda a família.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="rounded-full bg-tasty-orange hover:bg-tasty-orange-hover text-white px-6 h-11 font-semibold">
                <Link to={`/receita/${heroRecipe.slug}`}>Ler Mais</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full border-tasty-dark/20 hover:bg-tasty-dark hover:text-white px-6 h-11 font-semibold">
                <Link to="/receitas">Explorar Receitas</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=900&h=900&fit=crop"
              alt="Pilha de panquecas fofas com mirtilos frescos e calda"
              className="w-full aspect-square object-cover rounded-md shadow-card"
            />
          </div>
        </div>
      </section>

      {/* Recipes of the Week */}
      <section className="py-20">
        <div className="container-tasty">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-tasty-dark">Receitas da Semana</h2>
            <p className="text-tasty-gray max-w-xl mx-auto text-sm">
              Selecionamos as receitas favoritas da semana. Sabor, praticidade e inspiração na sua cozinha.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {weekRecipes.map((r) => (
              <RecipeCard key={r.id} recipe={r} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild className="rounded-full bg-tasty-orange hover:bg-tasty-orange-hover text-white px-7 h-11 font-semibold">
              <Link to="/receitas">Mais Receitas</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Recipes by Category */}
      <section className="py-20 bg-muted/40">
        <div className="container-tasty">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-tasty-dark">Receitas por Categoria</h2>
            <p className="text-tasty-gray max-w-xl mx-auto text-sm">
              Explore as nossas categorias e encontre a inspiração ideal para a sua próxima refeição.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {categoryFeature.map((cat) => (
              <Link
                to={`/receitas?categoria=${encodeURIComponent(cat.name)}`}
                key={cat.name}
                className="group relative aspect-square rounded-md overflow-hidden"
                aria-label={`Ver receitas da categoria ${cat.name}`}
              >
                <img src={cat.image} alt={`Categoria ${cat.name}`} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <span className="absolute bottom-4 left-4 text-white font-extrabold text-lg">{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Download App */}
      <section className="py-0">
        <div className="grid md:grid-cols-2 items-stretch">
          <div className="bg-tasty-light">
            <img
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=900&fit=crop"
              alt="Pessoa cozinhando usando o app Tasty no celular"
              className="w-full h-full object-cover min-h-[320px]"
            />
          </div>
          <div className="bg-tasty-peach flex items-center">
            <div className="px-8 md:px-16 py-16">
              <p className="text-[11px] tracking-[0.2em] uppercase text-tasty-orange font-bold mb-3">
                Pra Você
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-tasty-dark mb-5">Baixe Nosso App</h2>
              <p className="text-tasty-gray mb-8 max-w-md text-sm">
                Tenha todas as receitas favoritas no seu bolso. Disponível para iOS e Android,
                sempre prático para usar quando estiver na cozinha.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#" className="flex items-center gap-2 bg-tasty-dark text-white rounded-md px-4 py-2.5 hover:opacity-90 transition-opacity">
                  <Apple className="h-6 w-6" />
                  <div className="leading-tight text-left">
                    <div className="text-[10px]">Baixe na</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-2 bg-tasty-dark text-white rounded-md px-4 py-2.5 hover:opacity-90 transition-opacity">
                  <Smartphone className="h-6 w-6" />
                  <div className="leading-tight text-left">
                    <div className="text-[10px]">Disponível no</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chefs */}
      <section className="py-20 bg-tasty-peach/60 relative overflow-hidden">
        <div className="container-tasty relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-tasty-dark">Nossos Chefs Qualificados</h2>
            <p className="text-tasty-gray max-w-xl mx-auto text-sm">
              Conheça a equipe de chefs apaixonados pela arte da culinária, prontos para inspirar você.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto">
            {chefs.map((c) => {
              const socials = [
                { Icon: Facebook, label: 'Facebook' },
                { Icon: Twitter, label: 'Twitter' },
                { Icon: Youtube, label: 'YouTube' },
              ];
              return (
                <div key={c.name} className="text-center">
                  <img src={c.avatar} alt={`Chef ${c.name}`} className="w-36 h-36 rounded-full object-cover mx-auto mb-5 shadow-soft" />
                  <h3 className="font-extrabold text-tasty-dark text-lg">{c.name}</h3>
                  <p className="text-tasty-gray text-sm mb-4">{c.role}</p>
                  <div className="flex items-center justify-center gap-2">
                    {socials.map(({ Icon, label }) => (
                      <a key={label} href="#" aria-label={`${label} de ${c.name}`} className="w-8 h-8 rounded-full bg-tasty-orange text-white flex items-center justify-center hover:bg-tasty-orange-hover">
                        <Icon className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Community stats */}
      <section className="relative py-20 bg-tasty-dark text-white">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&h=900&fit=crop')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container-tasty relative z-10 text-center">
          <p className="text-[11px] tracking-[0.2em] uppercase text-tasty-orange font-bold mb-3 flex items-center justify-center gap-2">
            <Award className="h-4 w-4" /> Site Premiado
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-10 max-w-2xl mx-auto">
            Junte-se a uma comunidade global de pessoas como você
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-3xl mx-auto">
            {[
              { v: '2.000+', l: 'Receitas Publicadas' },
              { v: '3.000+', l: 'Membros Ativos' },
              { v: '100%', l: 'Avaliações Positivas' },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-4xl font-extrabold text-tasty-orange mb-2">{s.v}</div>
                <div className="text-sm text-white/80 uppercase tracking-wider">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-tasty-peach/60">
        <div className="container-tasty max-w-2xl">
          <div className="bg-white rounded-lg shadow-card p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-3 text-tasty-dark">Receba Nossa Newsletter</h2>
            <p className="text-tasty-gray text-sm mb-6">
              Informe seu e-mail abaixo para receber receitas e dicas semanais.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <label htmlFor="newsletter-email" className="sr-only">E-mail para newsletter</label>
              <Input id="newsletter-email" type="email" placeholder="Seu melhor e-mail" aria-label="E-mail para newsletter" className="rounded-full h-11" />
              <Button className="rounded-full bg-tasty-orange hover:bg-tasty-orange-hover text-white px-6 h-11 font-semibold">
                Inscrever-se
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
