import { useState, ImgHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface SmartImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  eager?: boolean;
  wrapperClassName?: string;
}

/**
 * SmartImage: renders a WebP-friendly <img> with a soft skeleton
 * placeholder so images never appear "broken" on first load.
 * Use `eager` for above-the-fold images (hero, first cards).
 */
export const SmartImage = ({
  src,
  alt,
  eager = false,
  className,
  wrapperClassName,
  ...rest
}: SmartImageProps) => {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <span
      className={cn(
        'relative block overflow-hidden bg-tasty-peach/40',
        wrapperClassName,
      )}
    >
      {!loaded && !failed && (
        <span
          aria-hidden
          className="absolute inset-0 animate-pulse bg-gradient-to-br from-tasty-peach/60 via-muted to-tasty-peach/40"
        />
      )}
      <img
        {...rest}
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding={eager ? 'sync' : 'async'}
        // @ts-expect-error fetchpriority is valid HTML attr
        fetchpriority={eager ? 'high' : 'auto'}
        onLoad={() => setLoaded(true)}
        onError={() => {
          setFailed(true);
          setLoaded(true);
        }}
        className={cn(
          'transition-opacity duration-500',
          loaded ? 'opacity-100' : 'opacity-0',
          className,
        )}
      />
    </span>
  );
};
