import { Clock, Users, Star, Heart, ChefHat } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';

export interface Recipe {
  id: number;
  title: string;
  description: string;
  image: string;
  prepTime: number;
  cookTime: number;
  servings: number;
  difficulty: 'Fácil' | 'Médio' | 'Difícil';
  category: string;
  rating: number;
  tags: string[];
  author: string;
  isFavorite?: boolean;
}

interface RecipeCardProps {
  recipe: Recipe;
  onFavoriteToggle: (id: number) => void;
}

export const RecipeCard = ({ recipe, onFavoriteToggle }: RecipeCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(recipe.isFavorite || false);

  const totalTime = recipe.prepTime + recipe.cookTime;

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
    onFavoriteToggle(recipe.id);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Fácil':
        return 'bg-culinary-herb text-white';
      case 'Médio':
        return 'bg-culinary-warm text-white';
      case 'Difícil':
        return 'bg-culinary-spice text-white';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-elegant hover:-translate-y-1 bg-gradient-card border-border animate-fade-in">
      {/* Image Container */}
      <div className="relative overflow-hidden h-48">
        <img
          src={recipe.image}
          alt={recipe.title}
          className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        {!imageLoaded && (
          <div className="absolute inset-0 bg-muted animate-pulse flex items-center justify-center">
            <ChefHat className="h-8 w-8 text-muted-foreground" />
          </div>
        )}
        
        {/* Favorite Button */}
        <Button
          variant="ghost"
          size="sm"
          className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-200 ${
            isFavorite
              ? 'bg-primary text-primary-foreground hover:bg-culinary-spice'
              : 'bg-background/80 text-foreground hover:bg-background'
          }`}
          onClick={handleFavoriteClick}
        >
          <Heart className={`h-4 w-4 ${isFavorite ? 'fill-current' : ''}`} />
        </Button>

        {/* Difficulty Badge */}
        <Badge className={`absolute top-3 left-3 ${getDifficultyColor(recipe.difficulty)}`}>
          {recipe.difficulty}
        </Badge>

        {/* Category Badge */}
        <Badge variant="secondary" className="absolute bottom-3 left-3 bg-background/90 text-foreground">
          {recipe.category}
        </Badge>
      </div>

      <CardContent className="p-4">
        {/* Title */}
        <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {recipe.title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
          {recipe.description}
        </p>

        {/* Recipe Stats */}
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{totalTime}min</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="h-4 w-4" />
            <span>{recipe.servings} porções</span>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-current text-culinary-warm" />
            <span>{recipe.rating.toFixed(1)}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-3">
          {recipe.tags.slice(0, 3).map((tag, index) => (
            <Badge key={index} variant="outline" className="text-xs border-border text-muted-foreground">
              {tag}
            </Badge>
          ))}
          {recipe.tags.length > 3 && (
            <Badge variant="outline" className="text-xs border-border text-muted-foreground">
              +{recipe.tags.length - 3}
            </Badge>
          )}
        </div>

        {/* Author */}
        <p className="text-xs text-muted-foreground">
          Por <span className="font-medium text-culinary-earth">{recipe.author}</span>
        </p>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button className="w-full bg-gradient-hero text-primary-foreground hover:opacity-90 transition-opacity">
          Ver Receita
        </Button>
      </CardFooter>
    </Card>
  );
};