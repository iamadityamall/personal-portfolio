import React from "react";

const About = () => {
  return (
    <main
      className="h-screen bg-primary flex flex-col text-center justify-evenly space-y-6 md:flex-row md:items-center md:space-x-5 xl:px-12"
      id="about"
    >
      {/* About Me */}
      <section className="flex flex-col space-y-5 font-Poppins w-[80vw] mx-auto justify-center md:items-start md:text-left xl:space-y-8 xl:leading-relaxed">
        <h1 className="text-2xl xl:text-5xl">about-👦</h1>
        <p className="xl:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, incidunt.
        </p>
        <p className="xl:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
          voluptatem tempore qui necessitatibus placeat ipsam sint quisquam in a
          nulla?
        </p>
        <p className="xl:text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores vel
          impedit numquam quia recusandae consectetur delectus velit sint ipsam
          enim?
        </p>
      </section>

      {/* Skill Section */}
      <section className="flex flex-col space-y-5 w-[80vw] mx-auto md:items-end xl:text-xl font-Poppins xl:space-y-8">
        <h1 className="text-2xl xl:text-5xl">current-skill-sets💻</h1>
        <div className="flex space-x-4 items-center justify-center">
          <h3>Language :</h3>
          <p>Lorem, ipsum dolor sit amet</p>
        </div>
        <div className="flex  items-center space-x-4 justify-center">
          <h3>Framework :</h3>
          <p>Lorem, ipsum dolor sit amet</p>
        </div>
        <div className="flex space-x-4 items-center justify-center">
          <h3>design :</h3>
          <p>Lorem, ipsum dolor sit amet</p>
        </div>
      </section>
    </main>
  );
};

export default About;
