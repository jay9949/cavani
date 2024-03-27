import React, { useEffect, useState } from "react";
import { client } from "../client";
import FlareCursor from "@/FlareCursor/FlareCursor";
import Header from "@/Header/Header";
import Main from "../home/Main";
import Footer from "@/Footer/Footer";

const Projects = () => {
  const [projectSection, setProjectSection] = useState<any>(null);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "projects"] {
          _id,title,
          "projectItems": content.projectItem[]{
            number,date,brand,comment,tag,
            "image": image.asset->url,
            span,
            heading,
            par
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

  const openModal = (project: any) => {
    setSelectedProject(project);
    const modal = document.getElementById("myModal");
    if (modal) {
      modal.style.display = "block";
    }
  };

  const closeModal = () => {
    setSelectedProject(null);
    const modal = document.getElementById("myModal");
    if (modal) {
      modal.style.display = "none";
    }
  };

  return (
    <>
      <FlareCursor />
      <Header />
      <div className="lg:mx-[70px] mx-[25px] grid gridrows-[1fr]">
        <div className="glitch flex">
          <Main />
          <div className="pl-0 lg:pl-56 lg:pt-8 !pt-4 scroll-container">
            {projectSection && (
              <>
                <span className="popins text-[#333] font-bold tracking-[8px] relative span-prt">
                  {projectSection.title}
                </span>

                <div className="mt-[60px]">
                  <ul>
                    {projectSection.projectItems.map((item: any) => (
                      <li className="py-[29px]" key={item._id}>
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
                            <div className="pt-[18px]">
                              <h3
                                className="m-0 p-0 leading-[1px] font-semibold popins text-[24px] text-[#333] cursor-pointer relative h-3"
                                onClick={() => openModal(item)}
                              >
                                {item.tag}
                                <img
                                  src={item.image}
                                  alt="project"
                                  className="img absolute w-[22rem] left-[21rem] top-[-6rem] lg:invisible invisible opacity-90"
                                />
                              </h3>
                            </div>

                            <div id="myModal" className="modal">
                              <div className="relative">
                                <div
                                  className="close"
                                  onClick={() => closeModal()}
                                >
                                  &times;
                                </div>
                                <div className="modal-content">
                                  {selectedProject && (
                                    <>
                                      <img
                                        src={selectedProject.image}
                                        alt="modal"
                                        className="mb-8"
                                      />
                                      <div>
                                        <div>
                                          <ul className="flex items-center flex-wrap mb-8 popins">
                                            <li className="mr-[10px]">
                                              <span className="text-[15px] text-[#777]">
                                                {selectedProject.date}
                                              </span>
                                            </li>
                                            <li className="mr-[10px] relative list-spn">
                                              <span className="text-[15px] text-[#777] pl-[10px]">
                                                {selectedProject.brand}
                                              </span>
                                            </li>
                                            <li className="mr-[10px] relative list-spn">
                                              <span className="text-[15px] text-[#777] pl-[10px]">
                                                {selectedProject.comment}
                                              </span>
                                            </li>
                                          </ul>
                                        </div>
                                        <h3 className="mb-8 p-0 leading-[1px] font-semibold popins text-[24px] text-[#333] cursor-pointer relative h-3">
                                          {selectedProject.tag}
                                        </h3>

                                        <div className="pb-6 text-[#333] opacity-70 popins">
                                          <span>{item.span}</span>
                                        </div>
                                        <div className="pb-6 text-[#333] opacity-70 popins">
                                          <span>{item.heading}</span>
                                        </div>
                                        <div className="pb-6 text-[#333] opacity-70 popins">
                                          <span>{item.par}</span>
                                        </div>
                                      </div>
                                    </>
                                  )}
                                </div>
                              </div>
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
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Projects;
