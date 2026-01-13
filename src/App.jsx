import { Navigation } from "./components/navigation/Navigation.jsx";
import { Home } from "./components/pages/home/Home.jsx";
import { CartProvider } from "./context/cart/CartProvider.jsx";
import { Store } from "./components/pages/store/Store.jsx";
import { Route } from "./components/Route.jsx";
import { FiltersProvider } from "./context/filters/FiltersProvider.jsx";
import { Cart } from "./components/pages/cart/Cart.jsx";

export function App() {
  return (
    <CartProvider>
      <FiltersProvider>
        <Navigation />
        <Route path="/" component={<Home />} />
        <Route path="/store" component={<Store />} />
        <Route path="/cart" component={<Cart />} />
      </FiltersProvider>
    </CartProvider>
  );
}
