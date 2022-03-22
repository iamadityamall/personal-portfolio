import React from "react";
import ProfilePicture from "../images/portfolio-website.png";
import { VscGithubInverted } from "react-icons/vsc";
import { BiCodeAlt } from "react-icons/bi";

const ProjectsCard = () => {
  return (
    <article className="bg-secondary flex flex-col rounded-xl overflow-auto xl:flex-row xl:items-center shadow-xl p-2 xl:h-[75vh] xl:w-auto">

      {/* image container */}
      <div className="w-full h-[300px] xl:h-full p-2">
        <img
          src={ProfilePicture}
          alt=""
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      {/* project info */}
      <div className="text-left flex flex-col space-y-4 font-Poppins p-4 xl:w-3/4 xl:h-full xl:justify-center">
        <div className="flex flex-col">
          <h1 className="py-2 text-xl text-darkPurple xl:text-lg border-b-2 border-darkPurple">
            Portfolio Page
          </h1>
          <p className="text-black/70 text-sm xl:text-sm py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            voluptatibus consectetur ea at temporibus aut veniam architecto
            consequatur quam ratione.
          </p>
        </div>
        <div className="flex flex-col">
          <h1 className="py-2 text-xl text-darkPurple xl:text-lg">
            What Problem it solves?
          </h1>
          <p className="text-black/70 text-sm xl:text-sm py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            possimus cupiditate fugiat voluptatum? Voluptatem possimus
            architecto perspiciatis, voluptatibus ratione repellendus?
          </p>
        </div>
        <div className="flex flex-col">
          <h1 className="py-2 text-xl text-darkPurple xl:text-lg">Features:</h1>
          <p className="text-black/70 text-sm xl:text-sm py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            possimus cupiditate fugiat voluptatum? Voluptatem possimus
            architecto perspiciatis, voluptatibus ratione repellendus?
          </p>
        </div>
        <div className="flex flex-col justify-between bg-darkPurple/10 items-center rounded-xl xl:w-4/6">
          <div className="px-6 text-xs flex space-x-6 w-full justify-center items-center p-2 xl:justify-start xl:w-full">
            <div>html css tailwind</div>
            <div className="flex items-center text-sm space-x-4 xl:text-lg">
              <VscGithubInverted className="cursor-pointer" />
              <BiCodeAlt className="cursor-pointer" />
            </div>
            <div className="">2020</div>
          </div>
        </div>
      </div>

      {/* footer */}
    </article>
  );
};

export default ProjectsCard;
