import React from "react";
import PrimaryButton from "../PrimaryButton";
import ProfilePicture from "../../images/profile-pic-nobackground-silver.png";
import { heroData } from "../../heroData";

const HeroSection = () => {
  const {title_1, title_2, title_3, info_1, info_2} = heroData[0];
  return (
    <section
      id="home"
      className="h-screen bg-primary flex flex-col justify-center items-center space-y-5 md:flex-row md:justify-between xl:px-10 mt-[-20px]"
    >
      {/* hero image */}
      <div className=" bg-secondary h-[100px] w-[100px] mt-6 rounded-full  overflow-hidden ring-2  ring-darkPurple ring-offset-2 border-2 border-lightPurple z-1 md:h-[250px] md:w-[250px] xl:h-[400px] xl:w-[400px] xl:ring-offset-4 xl:ring-4 xl:border-4">
        <img
          src={ProfilePicture}
          alt="profile-img"
          className="h-[150px] w-full mt-[-5px] object-cover md:h-[360px] xl:h-[600px]"
        />
      </div>

      {/* hero information */}
      <div className="flex flex-col justify-center space-y-10">
        {/* hero title */}
        <div className="font-Poppins flex flex-col items-center space-y-6 md:items-start">
          <div className="flex items-center space-x-4">
            <h4 className="font-bold py-2 xl:text-xl">{title_1}</h4>
            <div className="w-20 h-[4px] bg-darkPurple"></div>
          </div>

          <h1 className="text-2xl text-center md:text-left xl:text-5xl xl:leading-relaxed">
            {title_2} <br /> {title_3}{" "}
          </h1>

          <div className="text-md flex flex-col space-y-6 justify-center font-Lato text-center w-[80vw] md:items-start md:w-[50vw] md:text-left xl:text-xl">
            <p>
              {info_1}
            </p>
            <p>
              {info_2}
            </p>
          </div>
        </div>

        {/* call to action */}
        <div className="flex space-x-10 justify-center md:justify-start">
          <PrimaryButton name="connect" url="contact" />
          <PrimaryButton
            name="resume"
            url="https://resume-adityamall.netlify.app/"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
