import { Link } from 'react-router-dom';

const items = [
  {
    name: 'Café da Manhã',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=300&h=300&fit=crop',
  },
  {
    name: 'Almoço e Jantar',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=300&fit=crop',
  },
  {
    name: 'Lanche da Tarde',
    image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=300&h=300&fit=crop',
  },
  {
    name: 'Sobremesas Fit',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=300&h=300&fit=crop',
  },
  {
    name: 'Bebidas Fitness',
    image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=300&h=300&fit=crop',
  },
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
                      loading="lazy"
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
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
