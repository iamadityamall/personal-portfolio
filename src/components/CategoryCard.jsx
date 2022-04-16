import React from "react";
import SecondaryButton from "./SecondaryButton";

const CategoryCard = ({ icon, title, info, addInfo, liveLink, githubLink}) => {
  return (
    <article
      href="#projects"
      target="_blank"
      rel="noreferrer"
      className="bg-secondary rounded-3xl h-[250px] text-left p-6 flex flex-col justify-between font-Poppins border-2 border-darkPurple text-darkPurple w-full"
    >
      {/* category icon */}
      <div>
        <img src={icon} alt="" className="w-10 h-10 rounded-full"/>
      </div>

      {/* category info */}
      <div className="space-y-4">
        <h1 className="text-xl border-b-2 border-darkPurple">{title}</h1>
        <p className="text-black/70">
          {info}
        </p>
      </div>

      {/* category footer */}
      <div className="flex flex-row justify-between items-center">
        <div>{addInfo}</div>
        <div className="space-x-4 ">
          <SecondaryButton name="github" link={githubLink}/>
          <SecondaryButton name="live" link={liveLink}/>
        </div>
      </div>
      
    </article>
  );
};

export default CategoryCard;
