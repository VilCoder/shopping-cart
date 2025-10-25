import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Header } from "../components/header/Header";

// We mock the hook that the Header uses
vi.mock("../hooks/useCart", () => ({
  useCart: () => ({
    cart: [{ id: 1, title: "Test product" }],
    addToCart: vi.fn(),
    clearCart: vi.fn(),
  }),
}))

describe("Header component", () => {
  it("renders correct heading", () => {
    render(<Header />);
    expect(screen.getByRole("heading").textContent).not.toBeNull();
  });

  it("shows number of items in the cart", () => {
    render(<Header />);
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  it("renders all links", () => {
    render(<Header />);

    const links = screen.getAllByRole("link");

    expect(links.length).toBe(4);
    expect(links[0].textContent).not.toBeNull();
    expect(links[1].textContent).toMatch(/home/i);
    expect(links[2].textContent).toMatch(/store/i);
    expect(links[3].textContent).toMatch(/cart/i);
  });
});
