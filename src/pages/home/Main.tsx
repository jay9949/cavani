import React, { useEffect, useState } from "react";
import { client } from "../client";

const Main = () => {
  const [heroSection, setHeroSection] = useState<any>(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "herosection"] {
              "Image": image.asset->url,
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
    <div>
      <div className="lg:w-[140%] w-full glitch__image-container">
        <img
          src={heroSection.Image}
          alt="main"
          className="lg:w-[100%] w-0 lg:h-[34rem] h-0"
        />
      </div>
      <div className="glitch__layers lg:flex hidden">
        <div className="glitch__layer"></div>
        <div className="glitch__layer"></div>
        <div className="glitch__layer"></div>
      </div>
    </div>
  );
};

export default Main;
