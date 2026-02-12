'use client';

import { useFavoritesStore } from '../hooks/useFavoritesStore';

interface FavoritesCountProps {
  className?: string;
}

export default function FavoritesCount({ className }: FavoritesCountProps) {
  const count = useFavoritesStore((state) => state.favorites.length);

  if (count === 0) return null;

  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full bg-primary/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary ${className || ''}`}
      aria-label={`You have ${count} favourite properties`}
    >
      <span className="w-2 h-2 rounded-full bg-primary" />
      <span>{count} FAVOURITES</span>
    </div>
  );
}


