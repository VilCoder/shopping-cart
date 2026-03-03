import { useState } from "react";
import { FiltersContext } from "./FiltersContext.js";
import { useSearchParams } from "react-router";

export function FiltersProvider({ children }) {
  const [searchParams] = useSearchParams();

  const [filters, setFilters] = useState(() => {
    return {
      category: searchParams.get("category") || "all",
      title: searchParams.get("text") || "",
    };
  });

  const value = {
    filters,
    setFilters,
  };

  return (
    <FiltersContext.Provider value={value}>{children}</FiltersContext.Provider>
  );
}
