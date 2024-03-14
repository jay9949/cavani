import { client } from "@/pages/client";
import React, { useEffect, useState } from "react";

const Education = () => {
  const [aboutSection, setAboutSection] = useState<any>(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "about"] {
        _id,education,experience,
        "aboutItems5": content.aboutItem5[]{
          year,university,degree
        },
        "aboutItems6": content.aboutItem6[]{
            exp,company,job
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
    <div className="mb-[87px]">
      <div className="flex justify-between">
        <div className="w-[40%]">
          <div>
            <span className="popins text-[#333] font-bold tracking-[8px] relative span">
              {aboutSection.education}
            </span>
          </div>
          <div className="mt-[55px]">
            <ul className="uni relative">
              {aboutSection.aboutItems5.map((item: any) => (
                <li className="mb-[0.9rem]  li relative pl-4" key={item._id}>
                  <div className="w-full flex items-center">
                    <div className="pr-5 pl-6 w-1/2">
                      <span className=" text-[#333333e6] font-normal opacity-55 py-1 px-3 bg-[#0000000d] rounded-[50px] text-[14px] popins">
                        {item.year}
                      </span>
                    </div>
                    <div className="pl-5 w-1/2">
                      <div>
                        <h3 className="mb-[2px] text-[16px] font-semibold popins text-[#333]">
                          {item.university}
                        </h3>
                        <span className="text-[14px] popins opacity-65 text-[#333]">
                          {item.degree}
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/*  */}
        <div className="w-[50%]">
          <div>
            <span className="popins text-[#333] font-bold tracking-[8px] relative span">
              {aboutSection.experience}
            </span>
          </div>
          <div className="mt-[55px]">
            <ul className="uni relative">
              {aboutSection.aboutItems6.map((item: any) => (
                <li className="mb-[0.9rem]  li relative pl-4" key={item._id}>
                  <div className="w-full flex items-center">
                    <div className="pr-5 pl-6 w-1/2">
                      <span className=" text-[#333333e6] font-normal opacity-55 py-1 px-3 bg-[#0000000d] rounded-[50px] text-[14px] popins">
                        {item.exp}
                      </span>
                    </div>
                    <div className="pl-5 w-1/2">
                      <div>
                        <h3 className="mb-[2px] text-[16px] font-semibold popins text-[#333]">
                          {item.company}
                        </h3>
                        <span className="text-[14px] popins opacity-65 text-[#333]">
                          {item.job}
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
