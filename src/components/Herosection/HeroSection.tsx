import React, { useEffect, useState } from "react";
import About from "../About/About";
import { client } from "@/pages/client";

const HeroSection = () => {
  const [heroSection, setHeroSection] = useState<any>(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "herosection"] {
            "Image": image.asset->url,
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
    <div className="mx-[70px] cont">
      <div className="glitch flex ">
        <img src={heroSection.Image} alt="main" className="w-[37%] h-[34rem]" />
        <div className="glitch__layers">
          <div className="glitch__layer"></div>
          <div className="glitch__layer"></div>
          <div className="glitch__layer"></div>
        </div>

        {/* <div className="z-[99999] flex items-center scroll-container">
          <div className="popins pl-20">
            <h3 className="text-[60px] font-bold mb-8 text-[#333]">
              {heroSection.Title}
            </h3>
            <div className="w-[70px] h-[5px] bg-[#333] mb-[30px]"></div>
            <h3 className="text-[#333] mb-[42px] font-light text-[25px] opacity-80">
              {heroSection.Span}{" "}
              <span className="font-semibold text-[#333] opacity-100">
                Web Designer
              </span>
            </h3>
            <div>
              <a
                href="/contact"
                className="py-[13px] px-8 bg-[#333] text-white font-medium hover:border-2 hover:border-[#333] hover:bg-transparent hover:text-[#333] duration-300"
              >
                {heroSection.ButtonText}
              </a>
            </div>
          </div>
        </div> */}
        <About />
      </div>
    </div>
  );
};

export default HeroSection;
