import React from "react";
import ProjectsCard from "../ProjectsCard";
import CategoryCard from "../CategoryCard";
import { otherProjectData } from "../../projectData";
import { projectData } from "../../projectData";

const ProjectsSection = () => {
  
  return (
    <section
      className="min-h-screen bg-primary flex flex-col items-center text-center space-y-12 p-2 xl:p-12 xl:space-y-12 border-t-2 border-darkPurple py-12"
      id="projects"
    >
      <div className="font-Poppins flex flex-col xl:flex-row xl:space-x-10 xl:items-center xl:justify-center xl:w-full xl:py-4">
        <h1 className="text-2xl p-3 xl:text-5xl">projects-📝</h1>
        <p className="p-4 xl:text-2xl">
          "It takes half your life before you discover life is a do-it-yourself
          project"
        </p>
      </div>

      {/* Portfolio projects */}
      <div className="flex flex-col space-y-12 ">
        {projectData.map((singleProject) => {
          const {id} = singleProject;
          return <ProjectsCard key={id} {...singleProject}/>
        })}
      </div>

      {/* some more projects */}
      <div className="flex flex-col space-y-12 py-12">
        <div className="font-Poppins flex flex-col xl:flex-row-reverse xl:justify-end xl:items-center">
          <h1 className="text-2xl p-6 xl:text-3xl xl:py-8 xl:w-96">Other Projects</h1>
          <p className="p-6 xl:text-2xl xl:text-center">
            "Every project is an opportunity to learn, to figure out problems
            and challenges, to invent and reinvent"
          </p>
        </div>
        <div className="flex flex-col space-y-4 xl:flex-row xl:space-y-0 xl:space-x-8">
          {otherProjectData.map((singleProject) => {
            const {id} = singleProject;
            return <CategoryCard key={id} {...singleProject} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
