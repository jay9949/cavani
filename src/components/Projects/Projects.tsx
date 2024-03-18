import { client } from "@/pages/client";
import React, { useEffect, useState } from "react";

const Projects = () => {
  const [projectSection, setProjectSection] = useState<any>(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "projects"] {
          _id,title,
          "projectItems": content.projectItem[]{
            number,date,brand,comment,tag,
            "image": image.asset->url,
            "richText": richText[]{
              ...,
              _type == "block" => {
                "text": children[]{
                  ...,
                  _type == "span" => {
                    "text": text,
                  },
                },
              },
              _type == "image" => {
                "imageUrl": @.asset->url,
                "caption": @.caption,
              },
            },
          },
            }`
      )
      .then((data: any) => {
        setProjectSection(data[0]);
      })
      .catch((error: any) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (!projectSection) {
    return <div>Loading...</div>;
  }
  return (
    <div className="pl-20 pt-8 scroll-container">
      {projectSection && (
        <>
          <span className="popins text-[#333] font-bold tracking-[8px] relative span-prt">
            {projectSection.title}
          </span>

          <div className="mt-[60px]">
            <ul>
              {projectSection.projectItems.map((item: any) => (
                <li className="py-[29px]">
                  <div className="flex items-center">
                    <span className="w-[50px] h-[50px] text-center leading-[50px] rounded-full bg-[#b9b8c3] text-[#333] text-[16px] font-semibold popins">
                      {item.number}
                    </span>
                    <div className="pl-[30px] ml-[29px] relative div-bfr">
                      <div>
                        <ul className="flex items-center flex-wrap mb-[2px] popins">
                          <li className="mr-[10px]">
                            <span className="text-[15px] text-[#777]">
                              {item.date}
                            </span>
                          </li>
                          <li className="mr-[10px] relative list-spn">
                            <span className="text-[15px] text-[#777] pl-[10px]">
                              {item.brand}
                            </span>
                          </li>
                          <li className="mr-[10px] relative list-spn">
                            <span className="text-[15px] text-[#777] pl-[10px]">
                              {item.comment}
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="pt-[18px] relative">
                        <h3 className="m-0 p-0 leading-[1px] font-semibold popins text-[24px] text-[#333] cursor-pointer">
                          {item.tag}
                        </h3>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Projects;
