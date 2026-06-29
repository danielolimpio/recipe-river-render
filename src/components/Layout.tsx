import { ReactNode } from 'react';
import { SiteHeader } from './SiteHeader';
import { SiteFooter } from './SiteFooter';
import { CategoryCircles } from './CategoryCircles';

export const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col bg-background">
    <SiteHeader />
    <CategoryCircles />
    <main className="flex-1">{children}</main>
    <SiteFooter />
  </div>
);
