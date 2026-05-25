import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface PageBannerProps {
  title: string;
  description?: string;
  current: string;
}

export const PageBanner = ({ title, description, current }: PageBannerProps) => {
  return (
    <section className="page-banner py-20 md:py-28">
      <div className="container-tasty relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-tasty-dark mb-4">{title}</h1>
        {description && (
          <p className="text-tasty-gray max-w-2xl mx-auto mb-5 text-sm md:text-base">{description}</p>
        )}
        <nav className="flex items-center justify-center gap-2 text-xs uppercase tracking-wider">
          <Link to="/" className="text-tasty-orange font-semibold hover:underline">Início</Link>
          <ChevronRight className="h-3.5 w-3.5 text-tasty-gray" />
          <span className="text-tasty-gray font-medium">{current}</span>
        </nav>
      </div>
    </section>
  );
};
