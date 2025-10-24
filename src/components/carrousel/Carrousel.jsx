import { useCarrousel } from "../../hooks/useCarrousel";
import styles from "./Carrousel.module.css";

function CarrouselItem({ content, isActive }) {
  const { imageUrl, title, text } = content;
  let className = styles.item;

  if (isActive) {
    className += ` ${styles.active}`;
  }

  return (
    <div className={className}>
      {imageUrl && <img src={imageUrl} alt="" />}
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

export function Carrousel() {
  const { activeElement } = useCarrousel();
    const messages = [
      {
        id: 0,
        imageUrl: "/image1.png",
        title: "Up to 50% off electronics",
        text: "Limited-times offers",
      },
      {
        id: 1,
        imageUrl: "/image2.png",
        title: "Free shipping on your first purchase",
        text: "Applies to all products",
      },
      {
        id: 2,
        imageUrl: "/image3.jpg",
        title: "Summer Sale!",
        text: "Up to 50% off select collections. Don't miss out!",
      },
    ];

  return (
    <div className={styles.carrousel}>
      {messages.map((message) => (
        <CarrouselItem
          key={message.id}
          content={message}
          isActive={message.id === activeElement}
        />
      ))}
    </div>
  );
}
