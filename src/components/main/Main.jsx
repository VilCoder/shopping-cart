import styles from "./Main.module.css";

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
import { UserReview } from "../reviews/UseReview";

export function Main() {
  return (
    <main className={styles.content}>
      <section className={styles.container}>
        <h2>Category</h2>

        <div className={styles.links}>
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

      <section className={styles.container}>
        <h2>Featured Products</h2>
        <div className={styles.products}>
          <ProductCard title="Image" price="127" />
        </div>
      </section>

      <section className={`${styles.container} ${styles.reviews}`}>
        <h2>What our customers say</h2>
        <UserReview
          score={5}
          name="Ana Pérez"
          description="Me encanta esta aplicacion! Tienen una gran seleccion y el envio es super rapido. Definitavamente mi tienda favorita!"
        />

        <UserReview
        score={4}
          name="Carlos Gómez"
          description='"La Calidad de los productos es increible. He comprado varias veces y nunca me ha decepcionado. Muy recomendable."'
        />
      </section>
    </main>
  );
}
