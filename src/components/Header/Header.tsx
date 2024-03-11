import React, { useEffect, useState } from "react";
import { createClient } from "next-sanity";

const client = createClient({
  projectId: "tl8h1ybg",
  dataset: "production",
  useCdn: false,
  apiVersion: "2021-08-31",
});

const Header: React.FC = () => {
  const [headerData, setHeaderData] = useState<any>(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "header"] {
      _id,
      "imagePath": image.asset->url,
      "content": content[] {
        role,
        link
      }
    }`
      )
      .then((data: any) => {
        setHeaderData(data[0]); // Assuming there's only one header document
      })
      .catch((error: any) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (!headerData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className=" top-0 left-0 right-0 z-10 h-[70px] flex items-center justify-between px-[70px]">
        <div>
          <a href="/">
            <img
              src={headerData.imagePath}
              alt="logo"
              className="max-w-28 max-h-16"
            />
          </a>
        </div>
        <div>
          <ul className="flex">
            {headerData.content.map((item: any, index: number) => (
              <li
                key={index}
                className="text-[#333] list-none cursor-default px-8 header pt-[6px] h-9 "
              >
                <a
                  href={item.link}
                  className="popins cursor-pointer font-medium  no-underline "
                >
                  {item.role}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
