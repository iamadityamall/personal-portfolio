import React from "react";
import ProjectsCard from "../ProjectsCard";
import CategoryCard from "../CategoryCard";


const ProjectsSection = () => {
  return (
    <section
      className="min-h-screen bg-primary flex flex-col items-center text-center space-y-8 p-2"
      id="projects"
    >
      <div className="font-Poppins flex flex-col space-y-2">
        <h1 className="text-2xl p-3">Projects</h1>
        <p className="p-4 ">
          "It takes half your life before you discover life is a do-it-yourself
          project"
        </p>
      </div>
      {/* Portfolio projects */}
      <div className="flex flex-col space-y-3">
        <ProjectsCard />
      </div>

      {/* some more projects */}
      <div className="flex flex-col space-y-3">
        <div className="font-Poppins flex flex-col space-y-2">
          <h1 className="text-2xl p-3">Other Projects</h1>
          <p className="p-4 ">
            "Every project is an opportunity to learn, to figure out problems
            and challenges, to invent and reinvent"
          </p>
        </div>
        <CategoryCard />
      </div>
    </section>
  );
};

export default ProjectsSection;
