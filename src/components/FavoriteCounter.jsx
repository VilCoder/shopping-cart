import { useFavoritesStore } from "../store/favoritesStore";

export function FavoriteCounter() {
  const favoritesCount = useFavoritesStore((state) => state.favorites.length);
  return favoritesCount;
}
