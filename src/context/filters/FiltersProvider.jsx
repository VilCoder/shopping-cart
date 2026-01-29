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

  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}
