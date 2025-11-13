import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { FiltersContext } from "../context/filters";
import { FilterProducts } from "../components/filters/FilterProducts";
import userEvent from "@testing-library/user-event";

describe("FilterProducts component", () => {
  const renderWithContext = (filters, setFilters = vi.fn()) => {
    return render(
      <FiltersContext.Provider value={{ filters, setFilters }}>
        <FilterProducts />
      </FiltersContext.Provider>
    );
  };

  it("renders search input and category select", () => {
    const filters = { title: "", category: "all" };

    renderWithContext(filters);

    expect(screen.getByPlaceholderText(/search for products/i)).toBeInTheDocument();
    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });

  it("calls setFilters when typing in the search input", async () => {
    const user = userEvent.setup();

    const filters = { title: "", category: "all" };
    const setFilters = vi.fn();

    renderWithContext(filters, setFilters);

    const searchInput = screen.getByPlaceholderText(/search for products/i);
    await user.type(searchInput, "s");

    expect(setFilters).toHaveBeenCalledWith({
      ...filters,
      title: "s"
    });
  });

  it("calls setFilters when changing category", async () => {
    const user = userEvent.setup();

    const filters = { title: "", category: "all" };
    const setFilters = vi.fn();

    renderWithContext(filters, setFilters);

    const selectFilter = screen.getByRole("combobox");
    await user.selectOptions(selectFilter, "Electronics");

    expect(setFilters).toHaveBeenCalledWith({
      ...filters,
      category: "electronics",
    });
  });
});
