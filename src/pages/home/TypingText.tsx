import { useEffect, useState } from "react";

const TypingText = () => {
  const texts = ["Developer", "Web Designer", "Freelancer"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState(texts[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    setCurrentText(texts[currentTextIndex]);
  }, [currentTextIndex]);

  return (
    <div className="typing-text lg:mt-0 mt-[18px]">
      {currentText}
      <style jsx>{`
        .typing-text {
          white-space: nowrap;
          overflow: hidden;
          animation: typing 2s steps(20) infinite;
          font-family: Poppins, sans-serif;
          background-color: transparent;
          display: flex;
          justify-content: center;
          height: 10vh;
        }

        @keyframes typing {
          0% {
            width: 0;
          }
          10% {
            width: 0;
          }
          30% {
            width: 100%;
          }
          40% {
            width: 100%;
          }
          60% {
            width: 100%;
          }
          70% {
            width: 100%;
          }
          90% {
            width: 100%;
          }
          100% {
            width: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default TypingText;
