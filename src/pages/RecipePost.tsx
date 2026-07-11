import { useParams, Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Printer, Clock, Users, Flame, ChefHat, Leaf, Sparkles, TrendingUp, BookOpen, Apple, Award, Heart, Zap } from 'lucide-react';
import { recipes } from '@/data/recipes';
import { SmartImage } from '@/components/SmartImage';

const RecipePost = () => {
  const { slug } = useParams();
  const recipe = recipes.find((r) => r.slug === slug);

  if (!recipe) {
    return (
      <Layout>
        <div className="container-tasty py-32 text-center">
          <h1 className="text-3xl font-extrabold mb-4">Receita não encontrada</h1>
          <Link to="/receitas" className="text-tasty-orange font-semibold">Ver todas as receitas</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO
        title={`${recipe.title} — Receita Culinária Fitness`}
        description={`${recipe.title}: aprenda o passo a passo desta receita de ${recipe.category.toLowerCase()} por ${recipe.author}. Ingredientes, modo de preparo e dicas no Culinária Fitness.`}
        path={`/receita/${recipe.slug}`}
        type="article"
        image={recipe.image}
      />
      {/* Header banner */}
      <section className="page-banner py-20">
        <div className="container-tasty relative z-10 text-center max-w-3xl">
          <Link
            to={`/receitas?categoria=${encodeURIComponent(recipe.category)}`}
            className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-tasty-orange mb-5 bg-white px-3 py-1 rounded-full"
          >
            {recipe.category}
          </Link>
          <h1 className="text-4xl md:text-5xl font-extrabold text-tasty-dark mb-6 leading-tight">
            {recipe.title}
          </h1>
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-wider text-tasty-gray">
            <img src={recipe.authorAvatar} alt={recipe.author} className="w-6 h-6 rounded-full" />
            <span className="text-tasty-dark font-semibold">{recipe.author}</span>
            <span className="text-tasty-gray/50">/</span>
            <span>{recipe.date}</span>
            <span className="text-tasty-gray/50">/</span>
            <span>{recipe.comments} {recipe.comments === 1 ? 'comentário' : 'comentários'}</span>
          </div>
        </div>
      </section>

      {/* Article */}
      <section className="py-16">
        <div className="container-tasty max-w-3xl">
          <p className="text-tasty-orange text-base leading-relaxed mb-10">
            {recipe.excerpt} Uma combinação irresistível para qualquer ocasião, do brunch ao jantar especial.
          </p>

          {/* Hero image with print badge */}
          <div className="relative rounded-md overflow-hidden mb-10">
            <SmartImage
              src={recipe.image}
              alt={recipe.title}
              eager
              wrapperClassName="w-full aspect-[4/3]"
              className="w-full h-full object-cover"
            />
            <button className="absolute bottom-4 right-4 bg-tasty-dark text-white text-xs font-semibold rounded-md px-3 py-2 flex items-center gap-2 hover:bg-tasty-darker z-10">
              <Printer className="h-4 w-4" /> Imprimir
            </button>
          </div>

          {/* Recipe card */}
          <div className="border border-border rounded-md overflow-hidden mb-12">
            <div className="p-6 border-b border-border">
              <h2 className="text-2xl font-extrabold text-tasty-dark">{recipe.title}</h2>
              <p className="text-sm text-tasty-gray mt-1">Receita por {recipe.author}</p>
            </div>

            <div className="px-6 py-4 border-b border-border text-sm flex flex-wrap gap-x-6 gap-y-2">
              <div>Curso: <span className="text-tasty-orange font-semibold">{recipe.course}</span></div>
              <div>Cozinha: <span className="text-tasty-orange font-semibold">{recipe.cuisine}</span></div>
              <div>Dificuldade: <span className="text-tasty-orange font-semibold">{recipe.difficulty}</span></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 border-b border-border">
              {[
                { icon: Users, label: 'Porções', value: `${recipe.servings}` },
                { icon: Clock, label: 'Preparo', value: `${recipe.prepTime} min` },
                { icon: ChefHat, label: 'Cozimento', value: `${recipe.cookTime} min` },
                { icon: Flame, label: 'Calorias', value: `${recipe.calories} kcal` },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="p-5 text-center border-r last:border-r-0 border-border">
                  <Icon className="h-5 w-5 text-tasty-gray mx-auto mb-2" />
                  <div className="text-xs uppercase tracking-wider text-tasty-gray mb-1">{label}</div>
                  <div className="font-extrabold text-tasty-dark text-sm">{value}</div>
                </div>
              ))}
            </div>

            {/* Ingredients */}
            <div className="bg-tasty-peach/50 p-6">
              <h3 className="font-extrabold text-tasty-dark text-lg mb-4">Ingredientes</h3>
              <ul className="space-y-3">
                {recipe.ingredients.map((ing, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-tasty-dark">
                    <Checkbox id={`ing-${i}`} />
                    <label htmlFor={`ing-${i}`} className="cursor-pointer">{ing}</label>
                  </li>
                ))}
              </ul>
            </div>

            {/* Directions */}
            <div className="p-6 border-t border-border">
              <h3 className="font-extrabold text-tasty-dark text-lg mb-4">Modo de Preparo</h3>
              <ol className="space-y-3">
                {recipe.directions.map((d, i) => (
                  <li key={i} className="flex gap-4 text-sm text-tasty-dark border-b border-border pb-3 last:border-0">
                    <span className="font-extrabold text-tasty-orange">{i + 1}</span>
                    <span className="flex-1">{d}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Notes */}
            <div className="p-6 border-t border-border">
              <h3 className="font-extrabold text-tasty-dark text-lg mb-4">Notas</h3>
              <div className="space-y-3">
                {recipe.notes.map((n, i) => (
                  <div key={i} className="bg-tasty-peach/50 rounded-md p-4 flex gap-3 text-sm text-tasty-dark">
                    <span className="w-5 h-5 rounded-full bg-tasty-dark text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">i</span>
                    <span>{n}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SectionHeading helper (inline component) */}
          {(() => null)()}

          {/* Benefícios Nutricionais por Ingrediente */}
          {recipe.nutritionalBenefits && recipe.nutritionalBenefits.length > 0 && (
            <section className="mb-14">
              <div className="flex items-center gap-3 mb-2">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-premium text-white shadow-md">
                  <Leaf className="h-5 w-5" />
                </span>
                <Badge className="bg-tasty-peach/70 text-tasty-dark hover:bg-tasty-peach/70 border-0 uppercase tracking-wider text-[10px] font-bold">Nutrição Inteligente</Badge>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-tasty-dark mb-1">
                Resumo de Benefícios Nutricionais por Ingrediente
              </h2>
              <div className="h-1 w-16 bg-gradient-premium rounded-full mb-6" />
              <div className="grid sm:grid-cols-2 gap-4">
                {recipe.nutritionalBenefits.map((b, i) => (
                  <div
                    key={i}
                    className="group relative border-2 border-border hover:border-primary/40 rounded-xl p-5 bg-card transition-all hover:shadow-lg"
                  >
                    <div className="absolute -top-3 -left-3 w-9 h-9 rounded-full bg-gradient-premium text-white flex items-center justify-center shadow-md">
                      <Apple className="h-4 w-4" />
                    </div>
                    <div className="pl-6">
                      <h4 className="font-extrabold text-tasty-dark mb-1 text-base">{b.ingredient}</h4>
                      <p className="text-sm text-tasty-gray leading-relaxed">{b.benefit}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Tabela Nutricional */}
          {recipe.nutritionalTable && recipe.nutritionalTable.length > 0 && (
            <section className="mb-14">
              <div className="flex items-center gap-3 mb-2">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-premium text-white shadow-md">
                  <Flame className="h-5 w-5" />
                </span>
                <Badge className="bg-tasty-peach/70 text-tasty-dark hover:bg-tasty-peach/70 border-0 uppercase tracking-wider text-[10px] font-bold">Informação Nutricional</Badge>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-tasty-dark mb-1">
                Tabela Nutricional
              </h2>
              <div className="h-1 w-16 bg-gradient-premium rounded-full mb-6" />
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {recipe.nutritionalTable.map((n, i) => (
                  <div
                    key={i}
                    className="text-center border-2 border-border rounded-xl p-4 bg-gradient-to-b from-tasty-peach/20 to-card hover:shadow-md transition-shadow"
                  >
                    <div className="text-[10px] uppercase tracking-wider text-tasty-gray font-bold mb-1">{n.nutrient}</div>
                    <div className="text-lg font-extrabold text-tasty-dark">{n.quantity}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Diferenciação */}
          {recipe.differentiation && recipe.differentiation.length > 0 && (
            <section className="mb-14">
              <div className="flex items-center gap-3 mb-2">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-premium text-white shadow-md">
                  <Sparkles className="h-5 w-5" />
                </span>
                <Badge className="bg-tasty-peach/70 text-tasty-dark hover:bg-tasty-peach/70 border-0 uppercase tracking-wider text-[10px] font-bold">Exclusivo Fitness</Badge>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-tasty-dark mb-1">Diferenciação da Receita Fitness</h2>
              <div className="h-1 w-16 bg-gradient-premium rounded-full mb-6" />
              <div className="relative border-2 border-border rounded-xl p-6 bg-card">
                <span className="absolute -top-3 left-6 bg-card px-2 text-primary"><Award className="h-5 w-5" /></span>
                <div className="space-y-3 text-sm text-tasty-dark leading-relaxed">
                  {recipe.differentiation.map((p, i) => {
                    const isHeading = p.startsWith('**') && p.endsWith('**');
                    if (isHeading) return (
                      <h3 key={i} className="font-extrabold text-tasty-dark mt-4 text-base flex items-center gap-2">
                        <Zap className="h-4 w-4 text-primary" />
                        {p.slice(2,-2)}
                      </h3>
                    );
                    if (p.startsWith('•')) return (
                      <p key={i} className="flex gap-2 pl-2">
                        <span className="text-primary font-bold shrink-0">›</span>
                        <span>{p.replace(/^•\s*/, '')}</span>
                      </p>
                    );
                    return <p key={i}>{p}</p>;
                  })}
                </div>
              </div>
            </section>
          )}

          {/* Empreendendo */}
          {recipe.entrepreneurship && recipe.entrepreneurship.length > 0 && (
            <section className="mb-14">
              <div className="flex items-center gap-3 mb-2">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-premium text-white shadow-md">
                  <TrendingUp className="h-5 w-5" />
                </span>
                <Badge className="bg-tasty-peach/70 text-tasty-dark hover:bg-tasty-peach/70 border-0 uppercase tracking-wider text-[10px] font-bold">Negócio Fitness</Badge>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-tasty-dark mb-1">Empreendendo com Esta Receita</h2>
              <div className="h-1 w-16 bg-gradient-premium rounded-full mb-6" />
              <div className="rounded-xl border-2 border-primary/20 bg-gradient-to-br from-tasty-peach/40 via-card to-card p-6 shadow-sm">
                <div className="space-y-2 text-sm text-tasty-dark leading-relaxed">
                  {recipe.entrepreneurship.map((p, i) => {
                    const isHeading = p.startsWith('**') && p.endsWith('**');
                    if (isHeading) return (
                      <div key={i} className="mt-5 first:mt-0">
                        <h3 className="font-extrabold text-tasty-dark text-base flex items-center gap-2">
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-gradient-premium text-white">
                            <Sparkles className="h-3.5 w-3.5" />
                          </span>
                          {p.slice(2,-2)}
                        </h3>
                        <div className="h-px bg-border mt-2" />
                      </div>
                    );
                    if (p.startsWith('•')) return (
                      <p key={i} className="flex gap-2 pl-2">
                        <Heart className="h-3.5 w-3.5 text-primary shrink-0 mt-1" />
                        <span>{p.replace(/^•\s*/, '')}</span>
                      </p>
                    );
                    return <p key={i}>{p}</p>;
                  })}
                </div>
              </div>
            </section>
          )}

          {/* História */}
          {recipe.history && recipe.history.length > 0 && (
            <section className="mb-14">
              <div className="flex items-center gap-3 mb-2">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-premium text-white shadow-md">
                  <BookOpen className="h-5 w-5" />
                </span>
                <Badge className="bg-tasty-peach/70 text-tasty-dark hover:bg-tasty-peach/70 border-0 uppercase tracking-wider text-[10px] font-bold">Origem & Tradição</Badge>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-tasty-dark mb-1">Resumo Histórico</h2>
              <div className="h-1 w-16 bg-gradient-premium rounded-full mb-6" />
              <div className="relative border-l-4 border-primary pl-6 py-2 space-y-3 text-sm text-tasty-dark leading-relaxed bg-tasty-peach/20 rounded-r-xl pr-4">
                {recipe.history.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </section>
          )}


          <p className="text-tasty-orange text-sm leading-relaxed mb-12">
            Sirva acompanhada de uma bebida refrescante e desfrute deste prato em boa companhia.
            Não esqueça de compartilhar a sua versão com a gente nas redes sociais usando #Culinária FitnessBrasil.
          </p>

          {/* Comments */}
          <div className="mb-10">
            <h3 className="text-xl font-extrabold text-tasty-dark mb-6">
              {recipe.comments} {recipe.comments === 1 ? 'comentário' : 'comentários'}
            </h3>
            {recipe.comments > 0 && (
              <div className="border-t border-b border-border py-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold shrink-0">T</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2 text-xs text-tasty-gray">
                      <span className="font-bold text-tasty-dark">Culinária Fitness</span>
                      <div className="flex items-center gap-3">
                        <span>{recipe.date}</span>
                        <button className="text-tasty-orange font-semibold hover:underline">Responder</button>
                      </div>
                    </div>
                    <p className="text-sm text-tasty-gray mb-2">
                      Receita incrível! Fiz no fim de semana e toda a família adorou. Vou repetir com certeza.
                    </p>
                    <p className="text-sm text-tasty-gray">
                      A combinação de sabores ficou perfeita e foi muito fácil de preparar.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Comment form */}
          <div>
            <h3 className="text-xl font-extrabold text-tasty-dark mb-2">Deixe uma Resposta</h3>
            <p className="text-xs text-tasty-gray mb-6">
              Seu e-mail não será publicado. Campos obrigatórios marcados com *
            </p>
            <form className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <Input placeholder="Nome *" />
                <Input type="email" placeholder="E-mail *" />
                <Input placeholder="Site" />
              </div>
              <Textarea placeholder="Adicione um comentário *" rows={5} />
              <label className="flex items-center gap-2 text-sm text-tasty-gray">
                <Checkbox id="save" />
                <span>Salvar meu nome, e-mail e site neste navegador para a próxima vez que comentar.</span>
              </label>
              <Button className="rounded-full bg-gradient-premium text-white px-6 h-11 font-semibold">
                Publicar Comentário
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RecipePost;
