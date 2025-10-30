import { useEffect, useState } from "react";

export function useCarrousel() {
  const [activeElement, setActiveElement] = useState(0);
  const messagesIndex = [0, 1, 2];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveElement((prevIndex) => (prevIndex + 1) % messagesIndex.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [messagesIndex.length]);

  return {
    activeElement
  };
}
