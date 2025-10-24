import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, serCart] = useState([]);

  const addToCart = (product) => {
    const index = cart.findIndex((item) => item.id === product.id);

    if (index >= 0) {
      const newCart = structuredClone(cart);
      newCart[index].quantity += 1;

      return serCart(newCart);
    }

    serCart((prevState) => [
      ...prevState,
      {
        ...product,
        quantity: 1,
      },
    ]);
  };

  const clearCart = () => {
    serCart([]);
  }

  return (
    <CartContext value={{
      cart,
      addToCart,
      clearCart
    }}>
      {children}
    </CartContext>
  )
}
