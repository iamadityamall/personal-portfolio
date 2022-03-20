import React from "react";
import PrimaryButton from "../PrimaryButton";
import ProfilePicture from "../../images/profile-pic-nobackground-silver.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-primary flex flex-col justify-start items-center space-y-5"
    >
      {/* hero image */}
      <div className="relative bg-secondary h-[100px] w-[100px] mt-6 rounded-full overflow-hidden  ring-2  ring-darkPurple ring-offset-2 border-2 border-lightPurple">
        <img
          src={ProfilePicture}
          alt="profile-img"
          className="absolute mx-auto top-[-14px] object-cover z-1"
        />
      </div>

      {/* hero information */}
      <div className="flex flex-col justify-center space-y-8">
        {/* hero title */}
        <div className="font-Poppins flex flex-col items-center space-y-6">
          <div className="flex items-center space-x-4">
            <h4 className="font-bold py-2">Hello, 👋 I am</h4>
            <div className="w-20 h-[4px] bg-darkPurple"></div>
          </div>

          <h1 className="text-2xl text-center">
            Aditya Mall <br /> {` <frontend developer />`}{" "}
          </h1>

          <div className="text-md flex flex-col space-y-6 justify-center font-Lato text-center w-auto">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
              totam omnis aliquam, recusandae accusantium ad, officia soluta
              hic, sunt veritatis fugiat nostrum nesciunt? Voluptas dignissimos
              magni illo vero esse obcaecati?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
              illo numquam voluptatum, sapiente vitae suscipit nihil cum ipsum
              libero consequatur ad, odio quidem ipsa nam id aliquid eius vero
              earum!
            </p>
          </div>
        </div>

        {/* call to action */}
        <div className="flex space-x-10 justify-center">
          <PrimaryButton name="connect" />
          <PrimaryButton name="resume" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
