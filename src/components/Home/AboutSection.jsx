import React from "react";
import { aboutData, skillsData } from "../../aboutData";
import SkillCard from "../SkillCard";

const About = () => {
  const {info_0, info_1, info_2, info_3} = aboutData[0];

  return (
    <main
      className="h-screen bg-primary flex flex-col text-center justify-evenly space-y-6 md:flex-row md:items-center md:space-x-5 xl:px-12 xl:items-center border-darkPurple border-t-2"
      id="about"
    >
      {/* About Me */}
      <section className="flex flex-col space-y-5 font-Poppins w-[80vw] mx-auto justify-center md:items-start md:text-left xl:space-y-8 xl:leading-relaxed">
        <h1 className="text-2xl xl:text-5xl">about- 👨‍💻</h1>
        <p className="xl:text-xl indent-10">{info_0}</p>
        <p className="xl:text-xl indent-10">{info_1}</p>
        <p className="xl:text-xl indent-10">{info_2}</p>
        <p className="xl:text-xl indent-10">{info_3}</p>
      </section>

      {/* Skill Section */}
      <section className="flex flex-col space-y-8 w-[80vw] mx-auto md:items-end xl:text-xl font-Poppins xl:space-y-5">
        <h1 className="text-2xl xl:text-5xl">current-skill-sets-💻</h1>
        <div className="font-Poppins flex flex-col space-y-3 justify-between">
          {skillsData.map((skill) => {
            const { id } = skill;
            return <SkillCard key={id} {...skill} />;
          })}
        </div>
      </section>
    </main>
  );
};

export default About;
