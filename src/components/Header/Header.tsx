import React, { useEffect, useState } from "react";
import { client } from "@/pages/client";
import { Link } from "react-router-dom";

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
        "slug" : slug.current
      }
    }`
      )
      .then((data: any) => {
        setHeaderData(data[0]);
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
          <a href={headerData.slug}>
            <img
              src={headerData.imagePath}
              alt="logo"
              className="max-w-28 max-h-16"
            />
          </a>
        </div>
        <div>
          <ul className="flex">
            {headerData.content.map((item: any, index: number) => {
              console.log("Slug value:", item.slug);
              return (
                <li
                  key={index}
                  className="text-[#333] list-none cursor-default px-8 header pt-[6px] h-9 "
                >
                  {item.slug ? (
                    <a
                      href={item.slug}
                      className="popins cursor-pointer font-medium  no-underline "
                    >
                      {item.role}
                    </a>
                  ) : (
                    <span className="popins font-medium">{item.role}</span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
