import React, { useEffect, useState } from "react";
import { client } from "../client";

const Programming = () => {
  const [aboutSection, setAboutSection] = useState<any>(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "about"] {
            _id,languages,programming,
            "aboutItems3":content.aboutItem3[]{
              program,percentage
            },
            "aboutItems4": content.aboutItem4[]{
              language,marks
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
            <span className="popins text-[#333] font-bold tracking-[8px] relative span uppercase lg:after:!w-[134px] after:!w-[175px]">
              {aboutSection.programming}
            </span>
          </div>
          <div className="mt-[32px]">
            <ul className="">
              {aboutSection.aboutItems3.map((item: any) => (
                <div className="mt-14 ">
                  <div className="h-[3px] w-full bg-[#00000012] rounded-[50px] mb-[55px]">
                    <div className="h-full w-[60%] bg-[#7d7789] rounded-2xl relative [&>*:nth-child()]:bg-[red]">
                      <li className="mb-6 absolute top-[-30px]" key={item._id}>
                        <span className=" popins text-[#333] font-medium opacity-65">
                          {item.program}
                        </span>
                        <span className="pl-8 popins text-[#333] font-medium opacity-65">
                          {item.percentage}
                        </span>
                      </li>
                    </div>
                  </div>
                </div>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-[50%]">
          <div>
            <span className="popins text-[#333] font-bold tracking-[8px] relative span uppercase lg:after:!w-[185px] after:!w-[235px]">
              {aboutSection.languages}
            </span>
          </div>
          <div className="mt-[32px]">
            <ul className="flex justify-evenly ">
              {aboutSection.aboutItems4.map((item: any) => (
                <li className="" key={item._id}>
                  <div className="">
                    <div>
                      <span className=" popins text-[#333] font-medium opacity-65 w-[120px] h-[120px]">
                        <svg
                          className="CircularProgressbar"
                          width="100%"
                          height="100%"
                          viewBox="0 0 110 110"
                          data-test-id="CircularProgressbar"
                        >
                          <path
                            className="CircularProgressbar-trail"
                            d="  M 50,50  m 0,-48.5  a 48.5,48.5 0 1 1 0,97  a 48.5,48.5 0 1 1 0,-97"
                            strokeWidth="2.5"
                            fillOpacity="0"
                          ></path>
                          <path
                            className="CircularProgressbar-path"
                            d="
                                     M 50,50
                                     m 0,-48.5
                                     a 48.5,48.5 0 1 1 0,97
                                     a 48.5,48.5 0 1 1 0,-97
                                   "
                            strokeWidth="2.5"
                            fillOpacity="0"
                          ></path>
                          <text
                            x="47%"
                            y="47%"
                            dominantBaseline="middle"
                            textAnchor="middle"
                            fill="#333"
                            className="text-[14px] popins font-light"
                          >
                            {item.marks}
                          </text>
                        </svg>
                      </span>
                    </div>
                    <div className="flex justify-center first:!bg-[#333]">
                      <span className="popins text-[#333] font-light opacity-65 text-[20px]">
                        {" "}
                        {item.language}
                      </span>
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

export default Programming;
