import styles from "./UserReview.module.css";
import { StarIcon } from "../Icons.jsx";

export function Score({ score }) {
  const stars = 5;
  return (
    <div>
      {Array.from({ length: stars }).map((_, index) => (
        <StarIcon key={index} className={index < score ? styles.filled : ""} />
      ))}
    </div>
  );
}

export function UserReview({ avatar, name, description, score = 0 }) {
  return (
    <article className={styles.review}>
      <div>
        <img src={avatar} alt={name} />
      </div>
      <div>
        <h3 className={styles.name}>{name}</h3>
        <Score score={score} />
        <p className={styles.description}>{description}</p>
      </div>
    </article>
  );
}
