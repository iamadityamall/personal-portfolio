import React from "react";
import SecondaryButton from "./SecondaryButton";

const ProjectsCard = ({image, title_1, title_2, title_3, info_1, info_2, info_3, liveLink}) => {
  return (
    <article className="bg-secondary flex flex-col rounded-xl overflow-auto xl:flex-row xl:items-center shadow-xl p-2 xl:h-[75vh] xl:w-auto">

      {/* image container */}
      <div className="w-full h-[300px] xl:h-full p-2">
        <img
          src={image}
          alt="profile pic"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      {/* project info */}
      <div className="text-left flex flex-col space-y-4 font-Poppins p-4 xl:w-3/4 xl:h-full xl:justify-center">
        <div className="flex flex-col">
          <h1 className="py-2 text-xl text-darkPurple xl:text-lg border-b-2 border-darkPurple">
            {title_1}
          </h1>
          <p className="text-black/70 text-sm xl:text-sm py-2">
            {info_1}
          </p>
        </div>
        <div className="flex flex-col">
          <h1 className="py-2 text-xl text-darkPurple xl:text-lg">
            {title_2}
          </h1>
          <p className="text-black/70 text-sm xl:text-sm py-2">
            {info_2}
          </p>
        </div>
        <div className="flex flex-col">
          <h1 className="py-2 text-xl text-darkPurple xl:text-lg">{title_3}</h1>
          <p className="text-black/70 text-sm xl:text-sm py-2">
            {info_3}
          </p>
        </div>
        <div className="flex justify-start space-x-4 items-center xl:justify-end">
          <SecondaryButton name="github" />
          <SecondaryButton name="live" link={liveLink}/>
        </div>
      </div>

    </article>
  );
};

export default ProjectsCard;
