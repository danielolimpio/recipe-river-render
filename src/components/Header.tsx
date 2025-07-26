import { useState } from 'react';
import { Search, Heart, Menu, X, ChefHat } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface HeaderProps {
  onSearch: (query: string) => void;
  onCategorySelect: (category: string) => void;
  selectedCategory: string;
}

const categories = [
  'Todas',
  'Pratos Principais',
  'Sobremesas',
  'Entradas',
  'Bebidas',
  'Vegetariano',
  'Massas',
  'Saladas'
];

export const Header = ({ onSearch, onCategorySelect, selectedCategory }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border shadow-card">
      <div className="container mx-auto px-4">
        {/* Main Header */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <ChefHat className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              Sabores & Aromas
            </h1>
          </div>

          {/* Desktop Search */}
          <form onSubmit={handleSearch} className="hidden md:flex items-center space-x-2 flex-1 max-w-md mx-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Buscar receitas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-culinary-cream border-border focus:ring-primary"
              />
            </div>
            <Button type="submit" size="sm" className="bg-primary hover:bg-culinary-spice text-primary-foreground">
              <Search className="h-4 w-4" />
            </Button>
          </form>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-foreground hover:text-primary">
              <Heart className="h-5 w-5 mr-2" />
              Favoritos
            </Button>
            <Button size="sm" className="bg-gradient-hero text-primary-foreground hover:opacity-90">
              Nova Receita
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Categories Navigation */}
        <nav className="hidden md:flex py-3 space-x-1 overflow-x-auto">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "ghost"}
              size="sm"
              onClick={() => onCategorySelect(category)}
              className={
                selectedCategory === category
                  ? "bg-primary text-primary-foreground hover:bg-culinary-spice whitespace-nowrap"
                  : "text-muted-foreground hover:text-primary hover:bg-accent whitespace-nowrap"
              }
            >
              {category}
            </Button>
          ))}
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-slide-up">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="flex items-center space-x-2 mb-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Buscar receitas..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-culinary-cream border-border focus:ring-primary"
                />
              </div>
              <Button type="submit" size="sm" className="bg-primary hover:bg-culinary-spice text-primary-foreground">
                <Search className="h-4 w-4" />
              </Button>
            </form>

            {/* Mobile Categories */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => {
                    onCategorySelect(category);
                    setIsMenuOpen(false);
                  }}
                  className={
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground hover:bg-culinary-spice"
                      : "text-foreground hover:text-primary hover:bg-accent"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Mobile Actions */}
            <div className="flex flex-col space-y-2">
              <Button variant="outline" size="sm" className="text-foreground hover:text-primary">
                <Heart className="h-4 w-4 mr-2" />
                Favoritos
              </Button>
              <Button size="sm" className="bg-gradient-hero text-primary-foreground hover:opacity-90">
                Nova Receita
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};