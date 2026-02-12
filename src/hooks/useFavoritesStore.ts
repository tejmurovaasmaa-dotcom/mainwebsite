'use client';

import { create } from 'zustand';

type FavoritesState = {
  favorites: string[];
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
};

export const useFavoritesStore = create<FavoritesState>((set, get) => ({
  favorites: [],
  toggleFavorite: (id: string) => {
    const { favorites } = get();
    const exists = favorites.includes(id);
    const updated = exists
      ? favorites.filter((favId) => favId !== id)
      : [...favorites, id];

    set({ favorites: updated });
  },
  isFavorite: (id: string) => {
    return get().favorites.includes(id);
  },
}));



