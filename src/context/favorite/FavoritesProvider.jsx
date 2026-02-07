import { useState } from "react";
import { FavoritesContext } from "./FavoritesContext";

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (product) => {
    setFavorites((prevState) => [
      ...prevState,
      {
        ...product,
        isFavorite: true,
      },
    ]);
  };

  const removeToFavorites = (id) => {
    const newFavorites = favorites.filter((favorite) => favorite.id !== id);
    setFavorites(newFavorites);
  };

  const toggleFavorites = (product) => {
    const index = favorites.findIndex((favorite) => favorite.id === product.id);

    if (index >= 0) {
      removeToFavorites(product.id);
      return;
    }

    addToFavorites(product);
  };

  return (
    <FavoritesContext value={{
      favorites,
      toggleFavorites,
    }}>
      {children}
    </FavoritesContext>
  );
}
