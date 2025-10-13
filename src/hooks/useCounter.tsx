import { useState } from "react";

export const useCounter = (initialValue: number = 1) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount((prev) => prev + 1)
  }

  const decrement = () => {
    if (count <= 1) return;
    setCount((prev) => prev -1)
  }

  return {
    count,
    increment,
    decrement
  };
};
