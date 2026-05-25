import { useParams, Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Printer, Clock, Users, Flame, ChefHat } from 'lucide-react';
import { recipes } from '@/data/recipes';

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
        title={`${recipe.title} — Receita Tasty`}
        description={`${recipe.title}: aprenda o passo a passo desta receita de ${recipe.category.toLowerCase()} por ${recipe.author}. Ingredientes, modo de preparo e dicas no Tasty.`}
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
            <img src={recipe.image} alt={recipe.title} className="w-full aspect-[4/3] object-cover" />
            <button className="absolute bottom-4 right-4 bg-tasty-dark text-white text-xs font-semibold rounded-md px-3 py-2 flex items-center gap-2 hover:bg-tasty-darker">
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

          <p className="text-tasty-orange text-sm leading-relaxed mb-12">
            Sirva acompanhada de uma bebida refrescante e desfrute deste prato em boa companhia.
            Não esqueça de compartilhar a sua versão com a gente nas redes sociais usando #TastyBrasil.
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
                      <span className="font-bold text-tasty-dark">Tasty</span>
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
              <Button className="rounded-full bg-tasty-orange hover:bg-tasty-orange-hover text-white px-6 h-11 font-semibold">
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
