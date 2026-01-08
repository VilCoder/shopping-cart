import { useState } from "react";
import { FiltersContext } from "./FiltersContext.js";

export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({
    category: "all",
    title: "",
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
