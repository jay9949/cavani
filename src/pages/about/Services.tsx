import React, { useEffect, useState } from "react";
import { client } from "../client";

const Services = () => {
  const [aboutSection, setAboutSection] = useState<any>(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "about"] {
            _id,services,interests,
            "aboutItems2":content.aboutItem2[]{
              service,interest
            },
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
      <div className="flex justify-between items-center">
        <div className="w-[40%]">
          <div>
            <span className="popins text-[#333] font-bold tracking-[8px] relative span">
              {aboutSection.services}
            </span>
          </div>
          <div className="mt-[55px]">
            <ul>
              {aboutSection.aboutItems2.map((item: any) => (
                <li className="list mb-[0.9rem]" key={item._id}>
                  <span className="pl-6 text-[#333] font-normal opacity-55">
                    {item.service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-[50%]">
          <div>
            <span className="popins text-[#333] font-bold tracking-[8px] relative span">
              {aboutSection.interests}
            </span>
          </div>
          <div className="mt-[55px]">
            <ul>
              {aboutSection.aboutItems2.map((item: any) => (
                <li className="list mb-[0.9rem]" key={item._id}>
                  <span className="pl-6 text-[#333] font-normal opacity-55">
                    {item.interest}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
