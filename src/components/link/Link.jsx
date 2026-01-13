import { useContext } from "react";
import { useRouter } from "../../hooks/useRouter.js";
import { FiltersContext } from "../../context/filters/FiltersContext.js";

export function Link({ to, children, linkCategory = "all", ...restOfProps }) {
  const { navigateTo } = useRouter();
  const { filters, setFilters } = useContext(FiltersContext);

  const handleClick = (event) => {
    event.preventDefault();

    if (filters.category !== linkCategory) {
      setFilters({ ...filters, category: linkCategory });
    }

    navigateTo(to);
  };

  return (
    <a href={to} {...restOfProps} onClick={handleClick}>
      {children}
    </a>
  );
}
