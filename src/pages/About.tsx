import { Layout } from '@/components/Layout';
import { SEO } from '@/components/SEO';
import { PageBanner } from '@/components/PageBanner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Twitter, Youtube, Play, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { chefs } from '@/data/recipes';

const testimonials = [
  { name: 'Ethan Lucas', text: 'As receitas são incríveis e fáceis de seguir. Mudou minha forma de cozinhar em casa.', avatar: '/images/people/depoimento-ethan.webp' },
  { name: 'Sara Fonseca', text: 'Adoro a variedade de pratos. Cada semana uma nova descoberta na cozinha.', avatar: '/images/people/depoimento-sara.webp' },
  { name: 'Kelly Carpenter', text: 'A apresentação e a clareza das receitas são excelentes. Recomendo demais!', avatar: '/images/people/depoimento-kelly.webp' },
];

const About = () => {
  return (
    <Layout>
      <SEO
        title="Sobre a Culinária Fitness — Nossa História e Chefs"
        description="Conheça a história da Culinária Fitness, nossa paixão pela culinária e os chefs por trás das receitas que reúnem famílias e despertam memórias."
        path="/sobre"
      />
      <PageBanner
        title="Sobre"
        description="Conheça a história da Culinária Fitness, nossa paixão pela culinária e os chefs que tornam tudo isso possível."
        current="Sobre"
      />

      {/* Story */}
      <section className="py-20">
        <div className="container-tasty grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-tasty-orange font-bold mb-4">
              Nossa História
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-tasty-dark mb-6 leading-tight">
              Sabores que reúnem famílias e despertam memórias.
            </h2>
            <p className="text-tasty-gray text-sm mb-4 leading-relaxed">
              A Culinária Fitness nasceu da paixão por compartilhar receitas autênticas e experiências
              gastronômicas únicas. Cada prato conta uma história, cada ingrediente carrega
              uma memória.
            </p>
            <p className="text-tasty-gray text-sm mb-6 leading-relaxed">
              Acreditamos que cozinhar é um ato de amor — e queremos inspirar você a redescobrir
              o prazer de preparar refeições especiais todos os dias.
            </p>
            <p className="font-serif italic text-2xl text-tasty-dark">Bruno Tavares</p>
          </div>
          <div>
            <img
              src="/images/about/chef-bruno.webp"
              alt="Chef Bruno Tavares preparando prato na cozinha"
              loading="eager"
              decoding="async"
              className="w-full rounded-md object-cover aspect-square"
            />
          </div>
        </div>
      </section>

      {/* Video block */}
      <section className="pb-20">
        <div className="container-tasty grid md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-md overflow-hidden aspect-[4/3]">
            <img
              src="/images/about/aula-culinaria.webp"
              alt="Aula de culinária"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <button aria-label="Reproduzir vídeo da aula de culinária" className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors">
              <span className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                <Play className="h-6 w-6 text-tasty-orange ml-1" fill="currentColor" />
              </span>
            </button>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-tasty-dark mb-5 leading-tight">
              Diversos lugares onde você pode vivenciar uma aula de culinária
            </h2>
            <p className="text-tasty-gray text-sm mb-4 leading-relaxed">
              Oferecemos experiências presenciais e online para todos os níveis. Aprenda
              técnicas com nossos chefs e leve sua cozinha para o próximo nível.
            </p>
            <p className="text-tasty-gray text-sm mb-7 leading-relaxed">
              Workshops temáticos, jantares ao vivo e cursos completos disponíveis durante o ano todo.
            </p>
            <Button asChild className="rounded-full bg-gradient-premium text-white px-6 h-11 font-semibold">
              <Link to="/receitas">Explorar Receitas</Link>
            </Button>
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
                  <img src={c.avatar} alt={`Chef ${c.name}`} className="w-36 h-36 rounded-full object-cover mx-auto mb-5" />
                  <h3 className="font-extrabold text-tasty-dark text-lg">{c.name}</h3>
                  <p className="text-tasty-gray text-sm mb-4">{c.role}</p>
                  <div className="flex items-center justify-center gap-2">
                    {socials.map(({ Icon, label }) => (
                      <a key={label} href="#" aria-label={`${label} de ${c.name}`} className="w-8 h-8 rounded-full bg-gradient-premium text-white flex items-center justify-center">
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

      {/* Grandma's Recipes banner */}
      <section className="py-20">
        <div className="container-tasty">
          <div className="relative rounded-lg overflow-hidden aspect-[16/6] min-h-[260px]">
            <img
              src="/images/about/banner-receitas.webp"
              alt="Receitas da Vovó"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative z-10 h-full flex items-center justify-between gap-6 p-8 md:p-12 text-white">
              <div>
                <div className="flex items-center gap-2 mb-3 text-xs uppercase tracking-wider">
                  <img src="/images/people/autor-fitness.webp" alt="Foto de Dorothy Valdez" loading="lazy" decoding="async" className="w-7 h-7 rounded-full" />
                  Por Dorothy Valdez
                </div>
                <h3 className="text-3xl md:text-5xl font-extrabold mb-2">Receitas da Vovó</h3>
                <p className="text-white/80 text-sm max-w-md">Reviva a tradição com receitas trazidas direto da cozinha dela.</p>
              </div>
              <Button className="rounded-full bg-gradient-premium text-white px-6 h-11 font-semibold shrink-0">
                Ver Todas as Receitas
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="pb-20">
        <div className="container-tasty">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-tasty-dark">Depoimentos</h2>
            <p className="text-tasty-gray max-w-xl mx-auto text-sm">
              O que nossa comunidade tem a dizer sobre as receitas e experiências Culinária Fitness.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-muted/40 rounded-md p-8 text-center">
                <p className="text-tasty-gray text-sm mb-6 italic">"{t.text}"</p>
                <img src={t.avatar} alt={`Foto de ${t.name}`} className="w-14 h-14 rounded-full object-cover mx-auto mb-3" />
                <p className="font-extrabold text-tasty-dark text-sm">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="pb-24">
        <div className="container-tasty max-w-2xl">
          <div className="bg-white rounded-lg shadow-card p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-3 text-tasty-dark">Receba Nossa Newsletter</h2>
            <p className="text-tasty-gray text-sm mb-6">
              Informe seu e-mail abaixo para receber receitas e dicas semanais.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <label htmlFor="about-newsletter-email" className="sr-only">E-mail para newsletter</label>
              <Input id="about-newsletter-email" type="email" placeholder="Seu melhor e-mail" aria-label="E-mail para newsletter" className="rounded-full h-11" />
              <Button className="rounded-full bg-gradient-premium text-white px-6 h-11 font-semibold">
                Inscrever-se
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
