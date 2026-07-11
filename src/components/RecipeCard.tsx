import { Link } from 'react-router-dom';
import type { Recipe } from '@/data/recipes';
import { SmartImage } from '@/components/SmartImage';

interface RecipeCardProps {
  recipe: Recipe;
  eager?: boolean;
}

export const RecipeCard = ({ recipe, eager = false }: RecipeCardProps) => {
  return (
    <article className="group">
      <Link to={`/receita/${recipe.slug}`} className="block overflow-hidden rounded-sm mb-5">
        <SmartImage
          src={recipe.image}
          alt={recipe.title}
          eager={eager}
          wrapperClassName="aspect-[4/3] w-full"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <Link
        to={`/receitas?categoria=${encodeURIComponent(recipe.category)}`}
        className="inline-block text-[11px] font-bold tracking-wider uppercase text-tasty-orange mb-2 hover:underline"
      >
        {recipe.category}
      </Link>
      <h3 className="text-lg md:text-xl font-extrabold leading-tight mb-4 text-tasty-dark group-hover:text-tasty-orange transition-colors">
        <Link to={`/receita/${recipe.slug}`}>{recipe.title}</Link>
      </h3>
      <div className="flex items-center gap-3 text-xs text-tasty-gray">
        <img src={recipe.authorAvatar} alt={recipe.author} loading="lazy" className="w-7 h-7 rounded-full object-cover" />
        <span className="font-semibold uppercase tracking-wider text-tasty-dark">{recipe.author}</span>
        <span className="text-tasty-gray/50">/</span>
        <span className="uppercase tracking-wider">{recipe.date}</span>
      </div>
    </article>
  );
};
