import { Navigation } from "./components/navigation/Navigation";
import { Home } from "./components/home/Home";
import { CartProvider } from "./context/cart";
import { FilterProducts } from "./components/filters/FilterProducts";
import { FiltersProvider } from "./context/filters";

export function App() {
  return (
    <CartProvider>
      <Navigation />
      {/* <Home /> */}
      <FiltersProvider>
        <FilterProducts />
      </FiltersProvider>
    </CartProvider>
  );
}
