import { useContext } from "react";
import { FiltersContext } from "../context/filters";

export function useFilters() {
  const { filters } = useContext(FiltersContext);

  const filterProducts = (products) => {
    products.filter(
      (product) =>
        product.title.startsWith(filters.title) ||
        (filters.category === "all" || product.category === filters.category)
    );
  };

  return { filterProducts };
}
