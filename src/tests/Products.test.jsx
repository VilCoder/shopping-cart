import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { ProductCard, Products } from "../components/product/Products";
import userEvent from "@testing-library/user-event";

const mockProducts = [
  {
    id: 1,
    image: "/phone.png",
    title: "Smartphone",
    price: 449,
  },
  {
    id: 2,
    image: "/laptop.png",
    title: "Laptop",
    price: 998,
  }
];

describe("Products component", () => {

  it("renders 'Products not found' when no products are provider", () => {
    render(<Products products={[]} onAdd={() => {}} />);

    expect(screen.getByText(/products not found/i)).toBeInTheDocument();
  });

  it("renders a list of products", () => {
    render(<Products products={mockProducts} onAdd={() => {}} />);

    const buttons = screen.getAllByRole("button", { name: /add to cart/i })
    expect(buttons.length).toBe(mockProducts.length);

    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(mockProducts.length);
    expect(screen.getByText("Smartphone")).toBeInTheDocument();
    expect(screen.getByText("Laptop")).toBeInTheDocument();
    expect(screen.getByText("$449")).toBeInTheDocument();
    expect(screen.getByText("$998")).toBeInTheDocument();
  });
});

describe("ProductCard component", () => {
  it("renders product images with correct alt text", () => {
    render(<ProductCard product={mockProducts[0]} onClick={() => {}} />);

    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", "/phone.png");
    expect(image).toHaveAttribute("alt", "Smartphone");
  });

  it("does not render it product has no title or price", () => {
    const incompleteProduct = [
      { id: 2, title: "Tablet", image: "/b.png" }, // Missing price
    ];

    render(<ProductCard product={incompleteProduct} onClick={()=> {}} />);

    expect(screen.queryByText("Tablet")).toBeNull();
    expect(screen.getByText(/product not available/i)).toBeInTheDocument();
  })

  it("calls onClick function when 'Add to Cart' is clicked", async () => {
    const onClick = vi.fn();
    const user = userEvent.setup();

    render(<ProductCard product={mockProducts[1]} onClick={onClick} />);

    const button = screen.getByRole("button", { name: /add to cart/i });

    await user.click(button)
    
    expect(onClick).toHaveBeenCalled();

  });

  it("should not call the onClick function when ins't clicked", async () => {
    const onClick = vi.fn();
    
    render(<ProductCard product={mockProducts[0]} onClick={onclick} />);

    expect(onClick).not.toHaveBeenCalled();
  })
})
