import styles from "./Link.module.css";
import { useContext } from "react";
import { useRouter } from "../../hooks/useRouter.js";
import { FiltersContext } from "../../context/filters/FiltersContext.js";

export function Link({
  to,
  children,
  className = "",
  linkCategory = "",
  ...restOfProps
}) {
  const { currentPath, navigateTo } = useRouter();
  const { filters, setFilters } = useContext(FiltersContext);

  const handleClick = (event) => {
    event.preventDefault();

    if (linkCategory && filters.category !== linkCategory) {
      setFilters((prev) => ({
        ...prev,
        category: linkCategory,
      }));
    }

    navigateTo(to);
  };

  const linkClasses =
    currentPath === to ? `${styles.active} ${className}` : className;

  return (
    <a href={to} className={linkClasses} {...restOfProps} onClick={handleClick}>
      {children}
    </a>
  );
}
