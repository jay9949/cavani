import React, { useEffect, useState } from "react";
import { client } from "../client";
import Services from "./Services";
import Programming from "./Programming";
import Education from "./Education";
import Footer from "@/Footer/Footer";
import Main from "../home/Main";
import Header from "@/Header/Header";
import FlareCursor from "@/FlareCursor/FlareCursor";

const About = () => {
  const [aboutSection, setAboutSection] = useState<any>(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "about"] {
          _id,title,personal,paragraph,
          "aboutItems": content.aboutItem[]{
            name,detail
          }
        }`
      )
      .then((data: any) => {
        setAboutSection(data[0]);
      })
      .catch((error: any) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (!aboutSection) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <FlareCursor />
      <Header />
      <div className="lg:mx-[70px] mx-[25px] grid gridrows-[1fr]">
        <div className="glitch flex">
          <Main />

          <div className="pl-0 lg:pl-56 lg:pt-8 !pt-4 scroll-container">
            {aboutSection && (
              <div key={aboutSection._id}>
                <span className="popins text-[#333] font-bold tracking-[8px] relative span-abt">
                  {aboutSection.title}
                </span>
                <div className="pt-14 lg:flex block mb-[87px]">
                  <div className="lg:w-[40%] w-full text-[#333] popins opacity-60 text-[15px] font-normal">
                    <p className="mb-4">{aboutSection.personal}</p>
                    <p className="">{aboutSection.paragraph}</p>
                  </div>
                  <div className="lg:pl-[5.5rem] pl-0 mt-[3rem] lg:mt-0 popins">
                    <ul>
                      {aboutSection.aboutItems.map((item: any) => (
                        <li className="mb-3" key={item._id}>
                          <span className="text-[#333] opacity-55 font-bold">
                            {item.name} :
                          </span>
                          <span className="pl-[2.66rem] text-[#333] font-normal opacity-55">
                            {item.detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Services />
                <Programming />
                <Education />
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
