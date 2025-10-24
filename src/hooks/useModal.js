import { useEffect, useState } from "react";

export function useModal() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timeOut = setTimeout(() => setShowModal(false), 3000);

    return () => clearTimeout(timeOut);
  }, [showModal])

  return {
    showModal,
    setShowModal,
  }
}