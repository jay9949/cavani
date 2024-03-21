import { client } from "@/pages/client";
import React, { useEffect, useState } from "react";

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
                            className="absolute w-[22rem] left-[21rem] top-[-6rem] invisible opacity-80"
                          />
                        </h3>
                      </div>

                      <div id="myModal" className="modal">
                        <div className="modal-content">
                          <span className="close" onClick={() => closeModal()}>
                            &times;
                          </span>
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
                              </div>
                            </>
                          )}
                          {item.richText.map(
                            (richTextBlock: any, index: number) => (
                              <React.Fragment key={index}>
                                {richTextBlock._type === "block" && (
                                  <div>
                                    {richTextBlock.children.map(
                                      (child: any, childIndex: number) => (
                                        <React.Fragment key={childIndex}>
                                          {child._type === "span" && (
                                            <span className="opacity-60 text-[#333]">
                                              {child.text}
                                            </span>
                                          )}
                                        </React.Fragment>
                                      )
                                    )}
                                  </div>
                                )}
                                {richTextBlock._type === "image" && (
                                  <img
                                    src={richTextBlock.imageUrl}
                                    alt={richTextBlock.caption}
                                  />
                                )}
                              </React.Fragment>
                            )
                          )}
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
  );
};

export default Projects;
