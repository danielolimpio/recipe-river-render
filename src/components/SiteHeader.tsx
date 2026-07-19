import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Search, Facebook, Twitter, Instagram, Menu, X } from 'lucide-react';
import { Input } from '@/components/ui/input';

const logo = '/images/site/logo-culinaria-fitness.webp';

const navItems = [
  { label: 'Início', to: '/' },
  { label: 'Receitas', to: '/receitas' },
  { label: 'Sobre', to: '/sobre' },
  { label: 'Contato', to: '/contato' },
];

export const SiteHeader = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white text-tasty-dark border-b border-border sticky top-0 z-50">
      {/* Mobile top bar - green */}
      <div className="md:hidden bg-header-gradient text-white">
        <div className="container-tasty">
          <div className="flex items-center justify-between h-20">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-white/90 hover:text-white transition-colors"
              aria-label="Buscar"
            >
              <Search className="h-[20px] w-[20px]" />
            </button>

            <Link to="/" aria-label="Culinária Fitness — Início" className="flex items-center">
              <img src={logo} alt="Culinária Fitness" className="h-12 w-auto" />
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-white/90 hover:text-white transition-colors"
              aria-label="Menu"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {searchOpen && (
            <div className="pb-4">
              <label htmlFor="site-search-m" className="sr-only">Buscar receitas</label>
              <Input id="site-search-m" placeholder="Buscar receitas..." aria-label="Buscar receitas" className="rounded-full bg-white text-foreground" autoFocus />
            </div>
          )}

          {mobileOpen && (
            <nav className="pb-4 flex flex-col gap-3">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `text-sm font-medium ${isActive ? 'text-header-accent' : 'text-white/90 hover:text-white'}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="flex items-center gap-4 pt-2 text-white/80">
                <a href="#" aria-label="Facebook" className="hover:text-white"><Facebook className="h-4 w-4" /></a>
                <a href="#" aria-label="Twitter" className="hover:text-white"><Twitter className="h-4 w-4" /></a>
                <a href="#" aria-label="Instagram" className="hover:text-white"><Instagram className="h-4 w-4" /></a>
              </div>
            </nav>
          )}
        </div>
      </div>

      {/* Desktop bar - green gradient */}
      <div className="hidden md:block bg-header-gradient text-white">
        <div className="container-tasty">
          <div className="flex items-center h-20 gap-8">
            <Link to="/" aria-label="Culinária Fitness — Início" className="flex items-center shrink-0">
              <img src={logo} alt="Culinária Fitness" className="h-14 w-auto" />
            </Link>

            <nav className="flex-1 flex items-center justify-center gap-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `text-sm font-semibold transition-colors ${
                      isActive ? 'text-white underline underline-offset-4 decoration-2' : 'text-white/90 hover:text-white'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="flex items-center gap-5 text-white/90 shrink-0">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="hover:text-white transition-colors"
                aria-label="Buscar"
              >
                <Search className="h-[18px] w-[18px]" />
              </button>
              <a href="#" aria-label="Facebook" className="hover:text-white transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-white transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-white transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {searchOpen && (
            <div className="pb-4">
              <label htmlFor="site-search-d" className="sr-only">Buscar receitas</label>
              <Input id="site-search-d" placeholder="Buscar receitas..." aria-label="Buscar receitas" className="rounded-full bg-white text-foreground" autoFocus />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
