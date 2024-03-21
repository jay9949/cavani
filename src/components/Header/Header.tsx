import React, { useEffect, useState } from "react";
import { client } from "@/pages/client";
import { HiBars3BottomRight } from "react-icons/hi2";
import { HiX } from "react-icons/hi";
import Link from "next/link";

const Header: React.FC = () => {
  const [headerData, setHeaderData] = useState<any>(null);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "header"] {
      _id,
      "imagePath": image.asset->url,
      "content": content[] {
        title,
       "slug" : slug.current
      },
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
      <div className=" top-0 left-0 right-0 z-10 h-[70px] flex items-center justify-between lg:px-[70px] px-[25px]">
        <div>
          <img
            src={headerData.imagePath}
            alt="logo"
            className="max-w-28 max-h-16"
          />
        </div>
        <div className="relative">
          <ul className="hidden lg:flex">
            {headerData.content.map((item: any, index: number) => {
              return (
                <li
                  key={index}
                  className="text-[#333] list-none cursor-default px-8 header pt-[6px] h-9 "
                >
                  <Link
                    href={item.slug}
                    className="popins cursor-pointer font-medium no-underline"
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="lg:hidden flex relative">
            {openModal ? (
              <>
                <div className="fixed top-0 right-0 h-full bg-[#f6fbff] w-64 z-[999999]">
                  <div className="p-4 pt-[5rem]">
                    {headerData.content.map((item2: any) => (
                      <a
                        href={item2.slug}
                        className="py-3 pl-16 block header text-[20px] text-[#333] popins"
                      >
                        {item2.title}
                      </a>
                    ))}
                  </div>
                  <HiX
                    onClick={() => setOpenModal(false)}
                    className="text-5xl text-[#333] absolute top-4 right-4 cursor-pointer"
                  />
                </div>
                <div
                  className="fixed top-0 left-0 h-full w-full opacity-50 z-40"
                  onClick={() => setOpenModal(false)}
                ></div>
              </>
            ) : (
              <HiBars3BottomRight
                onClick={() => setOpenModal(true)}
                className="text-5xl text-[#333] opacity-85 cursor-pointer"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
