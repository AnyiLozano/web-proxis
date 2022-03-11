import { useEffect, useState } from "react";
import useHeridas from "./Heridas";

const useTerapeuticNumber = () => {
    /** States */
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    // eslint-disable-next-line
  }, []);

  return {
    width,
    useHeridas,
  };
};

export default useTerapeuticNumber;
