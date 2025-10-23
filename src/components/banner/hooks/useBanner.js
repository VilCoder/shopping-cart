import { useEffect, useState } from "react";

export function useBanner() {
  const [index, setIdex] = useState(0);

  const messages = [
    {
      imageUrl: "/image1.png",
      title: "Up to 50% off electronics",
      text: "Limited-times offers",
    },
    {
      imageUrl: "/image2.png",
      title: "Free shipping on your first purchase",
      text: "Applies to all products",
    },
    {
      imageUrl: "/image3.jpg",
      title: "Summer Sale!",
      text: "Up to 50% off select collections. Don't miss out!",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIdex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [messages.length]);

  const { imageUrl, title, text } = messages[index];

  return {
    imageUrl,
    title,
    text,
  };
}
