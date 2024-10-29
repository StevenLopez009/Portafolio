import { useEffect, useState } from "react";

const useTypingEffect = (text: string, speed: number) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = -1;

    const type = () => {
      index++;
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        setTimeout(type, speed);
      }
    };

    type();

    return () => {
      setDisplayedText("");
    };
  }, [text]);

  return displayedText;
};

export default useTypingEffect;
