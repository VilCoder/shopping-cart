import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Link } from "../components/link/Link";
import styles from "../components/link/Link.module.css";

describe("Link component", () => {
  it("renders correctly with minimum props", () => {
    render(<Link title="Home" />);

    const linkElement = screen.getByRole("link", { name: /home/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "#");
    expect(linkElement).toHaveClass(styles.link);
  });

  it("use the 'to' prop as href", () => {
    render(<Link to="/store" title="Home" />);

    const linkElement = screen.getByRole("link", { name: /home/i });
    expect(linkElement).toHaveAttribute("href", "/store");
  });

  it("shows the content inside the icon if there are children", () => {
    render(
      <Link title="Toys">
        <svg data-testid="icon" />
      </Link>
    );

    const iconElement = screen.getByTestId("icon");
    expect(iconElement).toBeInTheDocument();
  });

  it("Does not render the icon if there is not children", () => {
    render(<Link title="Sports" />);
    
    const iconElement = screen.queryByRole("img");
    expect(iconElement).not.toBeInTheDocument();
  });

  it("applies the class passed by props instead of the default class", () => {
    const customClass = "custom-class";

    render(<Link title="Electronics" className={customClass} />);

    const linkElement = screen.getByRole("link", { name: /electronics/i });
    expect(linkElement).toHaveClass(customClass);
    expect(linkElement).not.toHaveClass(styles.link);
  });
});
