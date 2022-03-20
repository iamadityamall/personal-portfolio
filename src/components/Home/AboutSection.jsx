import React from "react";

const About = () => {
  return (
    <main
      className="h-screen bg-primary flex flex-col text-center justify-center space-y-6"
      id="about"
    >
      {/* About Me */}
      <section className="flex flex-col space-y-5 font-Poppins w-[80vw] mx-auto">
        <h1 className="text-2xl">About me</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, incidunt.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
          voluptatem tempore qui necessitatibus placeat ipsam sint quisquam in a
          nulla?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores vel
          impedit numquam quia recusandae consectetur delectus velit sint ipsam
          enim?
        </p>
      </section>
      
      {/* Skill Section */}
      <section className="flex flex-col space-y-5 w-[80vw] mx-auto">
        <h1 className="text-2xl">Current Skill Sets</h1>
        <div className="flex space-x-5 items-center justify-between">
          <h3>Language</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
            autem?
          </p>
        </div>
        <div className="flex  items-center justify-between">
          <h3>Framework</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
            autem?
          </p>
        </div>
        <div className="flex space-x-5 items-center justify-between">
          <h3>design</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing</p>
        </div>
      </section>
    </main>
  );
};

export default About;
