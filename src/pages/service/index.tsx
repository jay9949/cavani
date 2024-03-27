import React, { useEffect, useState } from "react";
import { client } from "../client";
import Footer from "@/Footer/Footer";
import Main from "../home/Main";
import Header from "@/Header/Header";
import FlareCursor from "@/FlareCursor/FlareCursor";

const Services = () => {
  const [serviceSection, setServiceSection] = useState<any>(null);

  useEffect(() => {
    client
      .fetch(
        `*[ _type == "service" ] {
          _id,
          title,
          "serviceItems": content.servicesItem[]{
            head,
            desc,
            "image": image.asset->url
          }
        }`
      )
      .then((data: any) => {
        setServiceSection(data[0]);
      })
      .catch((error: any) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (!serviceSection) {
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
            {serviceSection && (
              <div key={serviceSection._id}>
                <span className="popins text-[#333] font-bold tracking-[8px] relative span-abt">
                  {serviceSection.title}
                </span>

                <ul className="flex flex-wrap mt-[60px] ml-[-50px]">
                  {serviceSection.serviceItems.map((item: any) => (
                    <li className="mb-[50px] w-1/2 pl-[50px] " key={item._id}>
                      <div className="text-[#333] border-2 border-[#b9b8c3] cursor-pointer hover:bg-[#333] hover:text-white py-[70px] px-[40px] text-center transition-all duration-500">
                        <img
                          src={item.image}
                          alt="icon"
                          className="w-[60px] h-[60px] mb-[27px] left-[7.4rem]"
                        />
                        <h3 className="font-medium text-[24px]  mb-[15px] ">
                          {item.head}
                        </h3>
                        <span className=" font-normal opacity-70">
                          {item.desc}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
