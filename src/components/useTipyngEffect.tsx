import { useEffect, useState } from "react";

const useTypingEffect = (text: string, speed: number) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const type = () => {
      if (index <= text.length) {
        setDisplayedText(text.slice(0, index)); 
        index++;
        setTimeout(type, speed);
      }
    };
    setDisplayedText(""); 
    type();
    return () => setDisplayedText("");
  }, [text, speed]);

  return displayedText;
};

export default useTypingEffect;

