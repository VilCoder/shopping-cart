import { useContext } from "react";
import { Link as NavLink } from "react-router";
import { FiltersContext } from "../../context/filters/FiltersContext.js";

export function Link({
  to,
  title,
  children,
  linkCategory = "",
  ...restOfProps
}) {
  const { filters, setFilters } = useContext(FiltersContext);

  const handleClick = () => {
    if (!linkCategory || linkCategory.toLowerCase() === filters.category)
      return;

    setFilters((prevFilters) => ({
      ...prevFilters,
      category: linkCategory.toLowerCase(),
    }));
  };

  return (
    <NavLink
      to={to}
      onClick={handleClick}
      {...restOfProps}
    >
      {children && <i className="icon">{children}</i>}
      <span>{title}</span>
    </NavLink>
  );
}
