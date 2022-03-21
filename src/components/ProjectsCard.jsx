import React from "react";
import ProfilePicture from "../images/portfolio-website.png";
import { VscGithubInverted } from "react-icons/vsc";
import { BiCodeAlt } from "react-icons/bi";

const ProjectsCard = () => {
  return (
    <article className="bg-secondary flex flex-col rounded-3xl overflow-auto">
      {/* image container */}
      <header className="w-full h-[300px] p-2">
        <img
          src={ProfilePicture}
          alt=""
          className="w-full h-full object-cover rounded-3xl"
        />
      </header>
      {/* project info */}
      <div className="text-left flex flex-col space-y-4 font-Poppins p-6">
        <div className="flex flex-col space-y-2">
          <h1 className="py-2 text-xl text-darkPurple">Portfolio Page</h1>
          <p className="text-black/70 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            voluptatibus consectetur ea at temporibus aut veniam architecto
            consequatur quam ratione.
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          <h1 className="py-2 text-xl text-darkPurple">
            What Problem it solves
          </h1>
          <p className="text-black/70 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            possimus cupiditate fugiat voluptatum? Voluptatem possimus
            architecto perspiciatis, voluptatibus ratione repellendus?
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          <h1 className="py-2 text-xl text-darkPurple">Features</h1>
          <p className="text-black/70 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            possimus cupiditate fugiat voluptatum? Voluptatem possimus
            architecto perspiciatis, voluptatibus ratione repellendus?
          </p>
        </div>
      </div>
      {/* footer */}
      <div className="flex flex-col justify-between bg-darkPurple/10 items-center">
        <div className="px-6 text-xl flex space-x-2 w-full justify-between">
          <div className="flex items-center space-x-4">
            <VscGithubInverted />
            <BiCodeAlt />
          </div>
          <div className="px-3 py-2">2020</div>
        </div>
      </div>
    </article>
  );
};

export default ProjectsCard;
