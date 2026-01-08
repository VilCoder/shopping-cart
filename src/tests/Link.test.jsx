import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Link } from "../components/link/Link.jsx";
import { useRouter } from "../hooks/useRouter.js";

vi.mock("../hooks/useRouter.js", () => ({
  useRouter: () => ({
    navigateTo: vi.fn(),
  }),
}));

describe("Link component", () => {
  it("renders correctly with minimum props", () => {
    render(<Link to="/">Home</Link>);

    const linkElement = screen.getByRole("link", { name: /home/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/");
  });

  it("render children content when provided", () => {
    render(
      <Link to="/test">
        <svg data-testid="icon" />
        Test
      </Link>
    );

    expect(screen.getByTestId("icon")).toBeInTheDocument();
    expect(screen.getByText(/test/i)).toBeInTheDocument();
  });

  it("renders an empty link when no children are provided", () => {
    render(<Link to="/cart" />);

    const linkElement = screen.getByRole("link");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("");
    expect(linkElement).toHaveAttribute("href", "/cart");
  });

  it("applies custom class instead of default", () => {
    const customClass = "custom-class";

    render(
      <Link to="/store" className={customClass}>
        Electronics
      </Link>
    );

    const linkElement = screen.getByRole("link", { name: /electronics/i });
    expect(linkElement).toHaveClass(customClass);
  });

  it("handles click event by preventing default and calling navigateTo", async () => {
    const user = userEvent.setup();

    const mockNavigateTo = vi.fn();
    vi.mocked(useRouter).mockReturnValue({ navigateTo: mockNavigateTo });

    render(<Link to="/home">Home</Link>);
    const linkElement = screen.getByRole("link", { name: /home/i });

    await user.click(linkElement);

    expect(mockNavigateTo).toHaveBeenCalledWith("/home");
    expect(mockNavigateTo).toHaveBeenCalledTimes(1);
  });

  it("passes through additional props like title and data attributes", () => {
    render(
      <Link to="/contact" title="Contact Us" data-testid="contact-link">
        Contact
      </Link>
    );
    const linkElement = screen.getByRole("link", { name: /contact/i });
    expect(linkElement).toHaveAttribute("title", "Contact Us");
    expect(linkElement).toHaveAttribute("data-testid", "contact-link");
  });

  it("renders multiple children correctly", () => {
    render(
      <Link to="/products">
        <span data-testid="arrow-icon" />
        <span>View</span>
      </Link>
    );

    expect(screen.getByRole("link")).toHaveTextContent("View");
    expect(screen.getByTestId("arrow-icon")).toBeInTheDocument();
  });
});
