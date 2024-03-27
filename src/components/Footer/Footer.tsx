import React, { useEffect, useState } from "react";
import { client } from "../../pages/client";

const Footer = () => {
  const [footerData, setFooterData] = useState<any>(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "footer"] {
            copywritetext,
            "content": content[]{
              "image": image.asset->url
            }
          }`
      )
      .then((data: any) => {
        setFooterData(data[0]);
      })
      .catch((error: any) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (!footerData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex items-center justify-between lg:px-[70px] px-[25px] h-[70px]">
      <div>
        <p className="text-[#333] popins">{footerData.copywritetext}</p>
      </div>
      <div className="flex">
        {footerData.content &&
          footerData.content.map(
            (
              item: { image: string | undefined },
              index: React.Key | null | undefined
            ) => (
              <img
                key={index}
                src={item.image}
                alt={`Image ${index}`}
                className="w-[20px] h-[20px] ml-4"
              />
            )
          )}
      </div>
    </div>
  );
};

export default Footer;
