import { Navigation } from "./components/navigation/Navigation.jsx";
import { Home } from "./components/home/Home.jsx";
import { CartProvider } from "./context/cart.jsx";
import { FiltersProvider } from "./context/filters.jsx";
import { Store } from "./components/store/Store.jsx";
import { Route } from "./components/Route.jsx";

export function App() {

  return (
    <CartProvider>
      <Navigation />
      <Route path='/' component={<Home />} />
      <FiltersProvider>
        <Route path="/store" component={<Store />} />
      </FiltersProvider>
    </CartProvider>
  );
}
