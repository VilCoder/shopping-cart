import { create } from "zustand";

export const useFavoritesStore = create((set) => ({
  favorites: [],

  toggleFavorite: (productId) => {
    set((state) => ({
      favorites: state.favorites.includes(productId)
        ? state.favorites.filter((id) => id !== productId)
        : [...state.favorites, productId],
    }));
  },
}));
