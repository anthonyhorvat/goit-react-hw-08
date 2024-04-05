import { useState, useEffect } from "react";
import { LoaderText } from "./Loader.styled";

export default function Loader({ children }) {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((dots) => (dots.length < 3 ? dots + "." : ""));
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <LoaderText>
      <b>
        {children}
        {dots}
      </b>
    </LoaderText>
  );
}
