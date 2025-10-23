import styles from "./Banner.module.css";
import { useBanner } from "./hooks/useBanner";

export function Banner() {
  const { imageUrl, title, text } = useBanner();

  return (
    <div className={styles.banner}>
      {imageUrl && <img src={imageUrl} alt="" />}
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}
