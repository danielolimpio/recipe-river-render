import { Link } from 'react-router-dom';
import catCafe from '@/assets/recipes/como-fazer-waffles-fit-com-whey-protein.webp.asset.json';
import catAlmoco from '@/assets/recipes/frango-xadrez-fitness-um-classico-oriental-com-um-toque-saudavel.webp.asset.json';
import catLanche from '@/assets/recipes/pao-de-queijo-de-tapioca-leveza-e-sabor-em-cada-mordida.webp.asset.json';
import catSobremesa from '@/assets/recipes/receita-completa-de-bolo-de-chocolate-fitness.webp.asset.json';
import catBebida from '@/assets/recipes/shake-de-acai-com-banana-e-granola.webp.asset.json';

const items = [
  { name: 'Café da Manhã', image: catCafe.url },
  { name: 'Almoço e Jantar', image: catAlmoco.url },
  { name: 'Lanche da Tarde', image: catLanche.url },
  { name: 'Sobremesas Fit', image: catSobremesa.url },
  { name: 'Bebidas Fitness', image: catBebida.url },
];

export const CategoryCircles = () => {
  return (
    <nav
      aria-label="Categorias rápidas"
      className="bg-white border-b border-border"
    >
      <div className="container-tasty py-6">
        <ul className="flex flex-wrap items-start justify-center gap-6 md:gap-10">
          {items.map((cat) => (
            <li key={cat.name}>
              <Link
                to={`/receitas?categoria=${encodeURIComponent(cat.name)}`}
                className="group flex flex-col items-center gap-2 w-16 md:w-20"
              >
                <span className="relative inline-block rounded-full p-[2px] bg-gradient-premium transition-transform duration-300 group-hover:scale-105">
                  <span className="block rounded-full overflow-hidden bg-white p-[1px]">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      loading="eager"
                      decoding="async"
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover bg-tasty-peach/40"
                    />
                  </span>
                </span>
                <span className="text-xs md:text-sm font-semibold text-tasty-dark text-center leading-tight group-hover:text-tasty-orange transition-colors">
                  {cat.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
