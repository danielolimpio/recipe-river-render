import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Apple, Smartphone } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { trendingRecipes } from '@/data/recipes';

export const SiteFooter = () => {
  return (
    <footer className="bg-tasty-dark text-white">
      {/* Trending bar */}
      <div className="border-b border-white/10">
        <div className="container-tasty py-5">
          <div className="flex items-center gap-6 overflow-x-auto">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-white/50 shrink-0">
              <span>Em alta agora</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </div>
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {trendingRecipes.map((r) => (
                <div key={r.title} className="flex items-center gap-3 min-w-0">
                  <img src={r.image} alt={r.title} className="w-10 h-10 rounded-full object-cover shrink-0" />
                  <p className="text-sm font-medium line-clamp-2">{r.title}</p>
                </div>
              ))}
            </div>
            <div className="hidden lg:flex items-center gap-2 shrink-0">
              <button aria-label="Receitas anteriores" className="w-8 h-8 rounded border border-white/20 flex items-center justify-center hover:bg-white/5">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button aria-label="Próximas receitas" className="w-8 h-8 rounded border border-white/20 flex items-center justify-center hover:bg-white/5">
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main columns */}
      <div className="container-tasty py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <img src="/logo-culinaria-fitness.png" alt="Culinária Fitness" className="h-12 w-auto mb-5 brightness-0 invert" />
          <h4 className="font-extrabold text-base mb-5">Conheça a Culinária Fitness</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li><Link to="/sobre" className="hover:text-tasty-orange">Introdução</Link></li>
            <li><Link to="/receitas" className="hover:text-tasty-orange">Receitas</Link></li>
            <li><Link to="/sobre" className="hover:text-tasty-orange">Nossos Chefs</Link></li>
            <li><a href="#" className="hover:text-tasty-orange">Planos</a></li>
            <li><a href="#" className="hover:text-tasty-orange">Roadmap</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-extrabold text-base mb-5">Links Úteis</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li><Link to="/sobre" className="hover:text-tasty-orange">Introdução</Link></li>
            <li><Link to="/sobre" className="hover:text-tasty-orange">Sobre Nós</Link></li>
            <li><a href="#" className="hover:text-tasty-orange">Funcionalidades</a></li>
            <li><a href="#" className="hover:text-tasty-orange">Política de Cookies</a></li>
            <li><a href="#" className="hover:text-tasty-orange">Política de Privacidade</a></li>
            <li><a href="#" className="hover:text-tasty-orange">Termos e Condições</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-extrabold text-base mb-5">Fale Conosco</h4>
          <p className="text-sm text-white/70 mb-4">Rua das Flores, 123<br />São Paulo - SP, Brasil</p>
          <p className="text-sm text-white/70">Telefone: (+55) 11 5555-1212</p>
          <p className="text-sm text-white/70 mb-4">Fax: (+55) 11 5555-0100</p>
          <p className="text-sm text-white/70">Precisa de ajuda?</p>
          <p className="text-sm">
            Fale com: <a href="mailto:contato@culinariafitness.com" className="text-tasty-orange hover:underline">contato@culinariafitness.com</a>
          </p>
        </div>

        <div>
          <h4 className="font-extrabold text-base mb-5">Baixe Nosso App</h4>
          <p className="text-sm text-white/70 mb-4">
            Tenha todas as receitas no seu bolso, de onde estiver.
          </p>
          <p className="text-sm text-white/70 mb-5">
            Aproveite o conteúdo exclusivo direto no seu celular.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#" className="flex items-center gap-2 bg-white text-tasty-dark rounded-md px-3 py-2 hover:bg-white/90 transition-colors">
              <Apple className="h-6 w-6" />
              <div className="text-left leading-tight">
                <div className="text-[10px]">Baixe na</div>
                <div className="text-sm font-semibold">App Store</div>
              </div>
            </a>
            <a href="#" className="flex items-center gap-2 bg-white text-tasty-dark rounded-md px-3 py-2 hover:bg-white/90 transition-colors">
              <Smartphone className="h-6 w-6" />
              <div className="text-left leading-tight">
                <div className="text-[10px]">Disponível no</div>
                <div className="text-sm font-semibold">Google Play</div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-tasty py-5 text-xs text-white/50">
          Copyright © 2026 — Culinária Fitness. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};
