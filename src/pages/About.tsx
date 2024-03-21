import Education from "@/components/About/Education";
import Programming from "@/components/About/Programming";
import Services from "@/components/About/Services";
import { client } from "@/pages/client";
import React, { useEffect, useState } from "react";

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
    <div className="pl-0 lg:pl-56 lg:pt-8 !pt-4 scroll-container">
      {aboutSection && (
        <div key={aboutSection._id}>
          <span className="popins text-[#333] font-bold tracking-[8px] relative span-abt">
            {aboutSection.title}
          </span>
          <div className="pt-14 flex mb-[87px]">
            <div className="w-[40%] text-[#333] popins opacity-60 text-base font-normal">
              <p className="mb-4">{aboutSection.personal}</p>
              <p className="">{aboutSection.paragraph}</p>
            </div>
            <div className="pl-[5.5rem] popins">
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
  );
};

export default About;
