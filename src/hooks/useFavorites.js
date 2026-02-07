import { useContext } from "react";
import { FavoritesContext } from "../context/favorite/FavoritesContext.js";

export function useFavorites() {
  const favoritesContext = useContext(FavoritesContext);

  if (favoritesContext === undefined) {
    throw new Error("useFavorites must be used within a provider");
  }

  return favoritesContext;
}