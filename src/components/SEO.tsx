import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://culinariafitness.com';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-culinaria-fitness.jpg`;

interface SEOProps {
  title: string;
  description: string;
  path: string;
  type?: 'website' | 'article';
  image?: string;
}

export const SEO = ({ title, description, path, type = 'website', image }: SEOProps) => {
  const url = `${SITE_URL}${path}`;
  const ogImage = image
    ? (image.startsWith('http') ? image : `${SITE_URL}${image}`)
    : DEFAULT_OG_IMAGE;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};
