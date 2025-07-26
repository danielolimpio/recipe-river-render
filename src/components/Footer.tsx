import { ChefHat, Heart, Mail, Instagram, Facebook, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const Footer = () => {
  return (
    <footer className="bg-culinary-earth text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <ChefHat className="h-8 w-8 text-culinary-warm" />
              <h3 className="text-xl font-bold text-white">Sabores & Aromas</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Compartilhando paixão pela culinária através de receitas autênticas, 
              dicas profissionais e inspiração gastronômica.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-culinary-warm hover:bg-white/10 p-2">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-culinary-warm hover:bg-white/10 p-2">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-culinary-warm hover:bg-white/10 p-2">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Links Rápidos</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-gray-300 hover:text-culinary-warm transition-colors text-sm">
                Todas as Receitas
              </a>
              <a href="#" className="text-gray-300 hover:text-culinary-warm transition-colors text-sm">
                Receitas Populares
              </a>
              <a href="#" className="text-gray-300 hover:text-culinary-warm transition-colors text-sm">
                Chefs Parceiros
              </a>
              <a href="#" className="text-gray-300 hover:text-culinary-warm transition-colors text-sm">
                Dicas Culinárias
              </a>
              <a href="#" className="text-gray-300 hover:text-culinary-warm transition-colors text-sm">
                Sobre Nós
              </a>
            </nav>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Categorias</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-gray-300 hover:text-culinary-warm transition-colors text-sm">
                Pratos Principais
              </a>
              <a href="#" className="text-gray-300 hover:text-culinary-warm transition-colors text-sm">
                Sobremesas
              </a>
              <a href="#" className="text-gray-300 hover:text-culinary-warm transition-colors text-sm">
                Entradas
              </a>
              <a href="#" className="text-gray-300 hover:text-culinary-warm transition-colors text-sm">
                Bebidas
              </a>
              <a href="#" className="text-gray-300 hover:text-culinary-warm transition-colors text-sm">
                Vegetariano
              </a>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Newsletter</h4>
            <p className="text-gray-300 text-sm">
              Receba as melhores receitas direto no seu email
            </p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Seu melhor email"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-culinary-warm"
              />
              <Button className="w-full bg-culinary-warm hover:bg-culinary-spice text-white">
                <Mail className="h-4 w-4 mr-2" />
                Inscrever-se
              </Button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-gray-300 text-sm">
              © 2024 Sabores & Aromas. Todos os direitos reservados.
            </p>

            {/* Made with Love */}
            <div className="flex items-center space-x-1 text-gray-300 text-sm">
              <span>Feito com</span>
              <Heart className="h-4 w-4 text-red-400 fill-current" />
              <span>para amantes da culinária</span>
            </div>

            {/* Legal Links */}
            <div className="flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-culinary-warm transition-colors text-sm">
                Privacidade
              </a>
              <a href="#" className="text-gray-300 hover:text-culinary-warm transition-colors text-sm">
                Termos
              </a>
              <a href="#" className="text-gray-300 hover:text-culinary-warm transition-colors text-sm">
                Contato
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};