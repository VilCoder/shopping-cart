import { beforeEach, describe, expect, it } from "vitest";
import { CartContext, CartProvider } from "../context/cart";
import { renderHook } from "@testing-library/react";
import { act, useContext } from "react";

describe("CartProvider function", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = ({ children }) => <CartProvider>{children}</CartProvider>;
  });

  it("should provide an empty cart initially", () => {
    const { result } = renderHook(() => useContext(CartContext), { wrapper });
    expect(result.current.cart).toEqual([]);
  });

  it("should add a new product to the cart", () => {
    const { result } = renderHook(() => useContext(CartContext), { wrapper });
    const product = { id: 1, name: "Product 1", price: 49 };

    act(() => result.current.addToCart(product));

    expect(result.current.cart).toHaveLength(1);
    expect(result.current.cart[0]).toMatchObject({
      id: 1,
      name: "Product 1",
      price: 49,
      quantity: 1,
    });
  });

  it("should increase quantity if the product already exists", () => {
    const { result } = renderHook(() => useContext(CartContext), { wrapper });
    const product = { id: 1, name: "Product 1", price: 49 };

    act(() => result.current.addToCart(product));
    act(() => result.current.addToCart(product));

    expect(result.current.cart).toHaveLength(1);
    expect(result.current.cart[0].quantity).toBe(2);
  });

  it("should clear the cart", () => {
    const { result } = renderHook(() => useContext(CartContext), { wrapper });
    const product = { id: 1, name: "Product 1", price: 49};

    act(() => result.current.addToCart(product));
    act(() => result.current.clearCart());

    expect(result.current.cart).toEqual([]);
  });
});
