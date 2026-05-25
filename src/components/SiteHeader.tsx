import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Search, User, Facebook, Twitter, Instagram, Menu, X, UtensilsCrossed } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

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
    <header className="bg-background border-b border-border sticky top-0 z-50">
      {/* Top bar */}
      <div className="container-tasty">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="text-foreground/70 hover:text-tasty-orange transition-colors"
            aria-label="Buscar"
          >
            <Search className="h-[18px] w-[18px]" />
          </button>

          <Link to="/" className="flex items-center gap-2">
            <UtensilsCrossed className="h-7 w-7 text-tasty-orange" />
            <span className="text-2xl font-extrabold tracking-tight">Tasty</span>
          </Link>

          <button className="text-foreground/70 hover:text-tasty-orange transition-colors" aria-label="Conta">
            <User className="h-[18px] w-[18px]" />
          </button>
        </div>

        {searchOpen && (
          <div className="pb-4">
            <label htmlFor="site-search" className="sr-only">Buscar receitas</label>
            <Input id="site-search" placeholder="Buscar receitas..." aria-label="Buscar receitas" className="rounded-full" autoFocus />
          </div>
        )}
      </div>

      {/* Nav bar */}
      <div className="border-t border-border">
        <div className="container-tasty">
          <div className="flex items-center justify-between h-14">
            <div className="hidden md:flex items-center gap-4 text-foreground/60">
              <a href="#" aria-label="Facebook" className="hover:text-tasty-orange transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-tasty-orange transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-tasty-orange transition-colors">
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
                      isActive ? 'text-tasty-orange' : 'text-foreground hover:text-tasty-orange'
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
              className="md:hidden text-foreground"
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
                    `text-sm font-medium ${isActive ? 'text-tasty-orange' : 'text-foreground'}`
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
