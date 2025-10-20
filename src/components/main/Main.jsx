import {
  DeviceIcon,
  FemaleIcon,
  MaleIcon,
  SofaIcon,
  SportIcon,
  ToyIcon,
} from "../Icons";

import { Link } from "../link/Link";
import { ProductCard } from "../product/ProductCard";

export function Main() {
  return (
    <>
      <section
        style={{
          paddingInline: "0.7rem",
        }}
      >
        <h2>Category</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "1rem",
          }}
        >
          <Link title="Electronics">
            <DeviceIcon />
          </Link>
          <Link title="Women's Fashion">
            <FemaleIcon />
          </Link>
          <Link title="Men's Fashion">
            <MaleIcon />
          </Link>
          <Link title="Home">
            <SofaIcon />
          </Link>
          <Link title="Toys">
            <ToyIcon />
          </Link>
          <Link title="Sports">
            <SportIcon />
          </Link>
        </div>
      </section>

      <section>
        <h2>Featured Products</h2>
        <ProductCard title="Image" price="127" />
      </section>
    </>
  );
}
