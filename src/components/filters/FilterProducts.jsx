import { useContext } from "react";
import styles from "./FilterProducts.module.css";
import { FiltersContext } from "../../context/filters";
import { SearchIcon } from "../Icons";

export function FilterProducts() {
  const { filters, setFilters } = useContext(FiltersContext);

  const handleChange = (event) => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <main style={{ padding: "0.7rem" }}>
      <form onChange={handleChange} className={styles.searchForm} role="search">
        <div className={styles.searchBar}>
          <SearchIcon />

          <input
            name="title"
            className={styles.searchInput}
            type="search"
            placeholder="Search for products"
            value={filters.title}
          />
        </div>

        <div>
          <select
            className={styles.searchFilters}
            name="category"
          >
            <option value="all">All</option>
            <option value="women clothing">Women's clothing</option>
            <option value="men clothing">Men's clothing</option>
            <option value="jewelery">Jewelery</option>
            <option value="electronics">Electronics</option>
          </select>
        </div>
      </form>
    </main>
  );
}
