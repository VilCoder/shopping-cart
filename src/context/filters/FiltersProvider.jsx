import { useState } from "react";
import { FiltersContext } from "./FiltersContext.js";

export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState(() => {
    const params = new URLSearchParams(window.location.search);

    return {
      category: params.get("category") || "all",
      title: params.get("text") || "",
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
