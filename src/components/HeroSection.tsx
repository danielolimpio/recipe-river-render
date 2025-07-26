import { Button } from '@/components/ui/button';
import { ArrowDown, ChefHat, Users, Clock } from 'lucide-react';
import heroImage from '@/assets/hero-culinary.jpg';

export const HeroSection = () => {
  const scrollToRecipes = () => {
    const recipesSection = document.getElementById('recipes-section');
    if (recipesSection) {
      recipesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Culinária Artesanal"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <ChefHat className="h-12 w-12 text-primary mr-3" />
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              Sabores & Aromas
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Descubra receitas incríveis, dicas culinárias e inspire-se na cozinha com nosso blog gastronômico
          </p>

          {/* Stats */}
          <div className="flex items-center justify-center space-x-8 mb-8 text-foreground/80">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-1">
                <Users className="h-5 w-5" />
                <span className="font-semibold">500+</span>
              </div>
              <p className="text-sm">Receitas</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-1">
                <ChefHat className="h-5 w-5" />
                <span className="font-semibold">50+</span>
              </div>
              <p className="text-sm">Chefs</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-1">
                <Clock className="h-5 w-5" />
                <span className="font-semibold">5min</span>
              </div>
              <p className="text-sm">Tempo médio</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-hero text-primary-foreground hover:opacity-90 transition-opacity shadow-warm text-lg px-8 py-3"
              onClick={scrollToRecipes}
            >
              Explorar Receitas
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors text-lg px-8 py-3"
            >
              Compartilhar Receita
            </Button>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={scrollToRecipes}
            className="animate-bounce text-primary hover:text-culinary-spice transition-colors"
            aria-label="Rolar para receitas"
          >
            <ArrowDown className="h-8 w-8" />
          </button>
        </div>
      </div>
    </section>
  );
};