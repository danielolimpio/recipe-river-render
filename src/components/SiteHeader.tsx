import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Search, User, Facebook, Twitter, Instagram, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import logo from '@/assets/logo-culinaria-fitness.png';

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
    <header className="bg-header-gradient text-white border-b border-white/10 sticky top-0 z-50">
      {/* Top bar */}
      <div className="container-tasty">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="text-white/80 hover:text-white transition-colors"
            aria-label="Buscar"
          >
            <Search className="h-[18px] w-[18px]" />
          </button>

          <Link to="/" aria-label="Culinária Fitness — Início" className="flex items-center">
            <img src={logo} alt="Culinária Fitness" className="h-12 md:h-14 w-auto" />
          </Link>

          <button className="text-white/80 hover:text-white transition-colors" aria-label="Conta">
            <User className="h-[18px] w-[18px]" />
          </button>
        </div>

        {searchOpen && (
          <div className="pb-4">
            <label htmlFor="site-search" className="sr-only">Buscar receitas</label>
            <Input id="site-search" placeholder="Buscar receitas..." aria-label="Buscar receitas" className="rounded-full bg-white text-foreground" autoFocus />
          </div>
        )}
      </div>

      {/* Nav bar */}
      <div className="border-t border-white/10">
        <div className="container-tasty">
          <div className="flex items-center justify-between h-14 relative">
            <div className="hidden md:flex items-center gap-4 text-white/70">
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

            <nav className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors ${
                      isActive ? 'text-header-accent' : 'text-white/90 hover:text-white'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <Button asChild className="hidden md:inline-flex rounded-full bg-tasty-orange hover:bg-tasty-orange-hover text-white px-6 h-10 font-semibold">
              <Link to="/contato">Enviar Receita</Link>
            </Button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-white"
              aria-label="Menu"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {mobileOpen && (
            <nav className="md:hidden pb-4 flex flex-col gap-3">
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
              <Button asChild className="rounded-full bg-tasty-orange hover:bg-tasty-orange-hover text-white mt-2 w-fit">
                <Link to="/contato">Enviar Receita</Link>
              </Button>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};
