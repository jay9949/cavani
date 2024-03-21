import React, { useEffect, useState } from "react";
import { client } from "@/pages/client";
import TypingText from "@/components/Herosection/TypingText";

const HeroSection = () => {
  const [heroSection, setHeroSection] = useState<any>(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "herosection"] {
            "Title": content.title,
            "Span": content.span,
            "ButtonText": content.buttonText
          }`
      )
      .then((data: any) => {
        setHeroSection(data[0]);
      })
      .catch((error: any) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (!heroSection) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="flex items-center scroll-container">
        <div className="popins pl-0 lg:pl-56">
          <h3 className="text-[60px] font-bold mb-8 text-[#333]">
            {heroSection.Title}
          </h3>
          <div className="w-[70px] h-[5px] bg-[#333] mb-[30px]"></div>
          <div className="flex ">
            <h3 className="text-[#333] mb-[42px] font-light text-[25px] opacity-80 pt-[20px] lg:pt-[3px] ">
              {heroSection.Span}{" "}
            </h3>
            <span className="font-semibold text-[#333] ml-4 text-[30px] ">
              <TypingText />
            </span>
          </div>
          <div>
            <a
              href="/contact"
              className="py-[13px] px-8 bg-[#333] text-white font-medium hover:border-2 hover:border-[#333] hover:bg-transparent hover:text-[#333] duration-300"
            >
              {heroSection.ButtonText}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
