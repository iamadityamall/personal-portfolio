import React from "react";
import ProfilePicture from "../images/portfolio-website.png";
import { VscGithubInverted } from "react-icons/vsc";
import { BiCodeAlt } from "react-icons/bi";

const ProjectsCard = () => {
  return (
    <article className="bg-secondary flex flex-col rounded-3xl overflow-auto lg:flex-row lg:items-center">
      {/* image container */}
      <header className="w-full h-[300px] p-2 lg:h-full lg:p-3">
        <img
          src={ProfilePicture}
          alt=""
          className="w-full h-full object-cover rounded-3xl"
        />
      </header>
      {/* project info */}
      <div className="text-left flex flex-col space-y-4 font-Poppins p-4">
        <div className="flex flex-col space-y-2">
          <h1 className="py-2 text-xl text-darkPurple lg:text-2xl border-b-2 border-darkPurple">
            Portfolio Page
          </h1>
          <p className="text-black/70 text-sm lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            voluptatibus consectetur ea at temporibus aut veniam architecto
            consequatur quam ratione.
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          <h1 className="py-2 text-xl text-darkPurple lg:text-2xl">
            What Problem it solves?
          </h1>
          <p className="text-black/70 text-sm lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            possimus cupiditate fugiat voluptatum? Voluptatem possimus
            architecto perspiciatis, voluptatibus ratione repellendus?
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          <h1 className="py-2 text-xl text-darkPurple lg:text-2xl">Features:</h1>
          <p className="text-black/70 text-sm lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            possimus cupiditate fugiat voluptatum? Voluptatem possimus
            architecto perspiciatis, voluptatibus ratione repellendus?
          </p>
        </div>
        <div className="flex flex-col justify-between bg-darkPurple/10 items-center rounded-xl">
          <div className="px-6 text-sm flex space-x-6 w-full justify-center items-center p-2 lg:text-lg lg:justify-start">
            <div>html css tailwind</div>
            <div className="flex items-center text-sm space-x-4 lg:text-lg">
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
