import { useContext } from "react";
import { FiltersContext } from "../context/filters";

export function useFilters() {
  const { filters } = useContext(FiltersContext);

  const filterProducts = (products) => {
    return products.filter(
      (product) =>
        (filters.title === "" ||
          product.title.toLowerCase().startsWith(filters.title.toLowerCase())) &&
        (filters.category === "all" || product.category === filters.category)
    );
  };

  return { filterProducts };
}
