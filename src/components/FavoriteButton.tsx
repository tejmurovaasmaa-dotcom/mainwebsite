'use client';

import { Heart } from 'lucide-react';
import { useFavoritesStore } from '../hooks/useFavoritesStore';

interface FavoriteButtonProps {
  id: string;
  className?: string;
}

export default function FavoriteButton({ id, className }: FavoriteButtonProps) {
  const isFavorite = useFavoritesStore((state) => state.isFavorite(id));
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(id);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-pressed={isFavorite}
      aria-label={isFavorite ? 'Remove from favourites' : 'Add to favourites'}
      className={`flex items-center justify-center rounded-full border border-primary/30 bg-white/60 backdrop-blur px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] shadow-sm hover:bg-primary hover:text-white transition-colors min-h-[32px] min-w-[32px] ${className || ''}`}
    >
      <Heart
        size={16}
        className={isFavorite ? 'fill-current text-red-500' : 'text-white'}
        aria-hidden="true"
      />
      <span className="ml-1 hidden sm:inline">
        {isFavorite ? 'Saved' : 'Favourite'}
      </span>
    </button>
  );
}


