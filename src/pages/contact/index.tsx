import FlareCursor from "@/FlareCursor/FlareCursor";
import Header from "@/Header/Header";
import React, { useEffect, useState } from "react";
import Main from "../home/Main";
import Footer from "@/Footer/Footer";
import { client } from "../client";

const Contact = () => {
  const [contactSection, setContactSection] = useState<any>(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "contact"] {
          _id,
          title,
          "contactItems": content.contactItem[]{
            "image": image.asset->url,
            name,
          },
          button
        }`
      )
      .then((data: any) => {
        setContactSection(data[0]);
      })
      .catch((error: any) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (!contactSection) {
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
            <div>
              <span className=" popins text-[#333] font-bold tracking-[8px] relative span-abt2">
                {contactSection.title}
              </span>
              <div className="mt-[62px]">
                <ul className="ml-[-30px] flex flex-wrap">
                  {contactSection.contactItems.map((item: any) => (
                    <li className="mb-[30px] w-1/3 pl-[30px]">
                      <div className="border-solid border-[rgba(0,0,0,.07)] border text-center py-[32px] px-[25px]">
                        <div className="flex justify-center mb-3">
                          <img
                            src={item.image}
                            alt="img"
                            className="w-[18px] h-[18px]"
                          />
                        </div>
                        <span className="popins text-[#333] opacity-70">
                          {item.name}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative text-right w-[452px] h-[431px]">
                <div className="overflow-hidden !bg-none w-[452px] h-[431px]">
                  <iframe
                    className="!w-[352px] !h-[331px]"
                    frameBorder="0"
                    scrolling="no"
                    src="https://maps.google.com/maps?width=352&amp;height=350&amp;hl=en&amp;q=2880 Broadway 
                    &amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
