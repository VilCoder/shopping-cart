import { useState } from "react";
import { CartContext } from "./CartContext.js";

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const index = cart.findIndex((item) => item.id === product.id);

    if (index >= 0) {
      const newCart = structuredClone(cart);
      newCart[index].quantity += 1;

      return setCart(newCart);
    }

    setCart((prevState) => [
      ...prevState,
      {
        ...product,
        quantity: 1,
      },
    ]);
  };

  const removeQuantityToCart = (product) => {
    const index = cart.findIndex(item => item.id === product.id);

    if (product.quantity === 1) {
      removeToCart(product.id);
      return;
    }

    if (index < 0) {
      return;
    }

    const newCart = structuredClone(cart);
    newCart[index].quantity -= 1;
    setCart(newCart);
  };

  const removeToCart = (id) => {
    const newCart = cart.filter(item => item.id !== id);
    setCart(newCart);
  };
  
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeQuantityToCart,
      removeToCart,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  )
}
