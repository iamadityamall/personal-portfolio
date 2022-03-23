import React from "react";
import { Link } from "react-scroll/modules";


const PrimaryButton = ({ name, url }) => {
  
  if (name === "connect") {
    return (
      <Link
        to={url}
        spy={true}
        smooth={true}
        offset={-64}
        duration={600}
        className="text-md  text-darkPurple p-3 font-Poppins bg-secondary font-bold border-2 border-darkPurple cursor-pointer"
      >{`< ${name} />`}</Link>
    );
  }

  return (
    <a
      href="https://resume-adityamall.netlify.app/"
      target="_blank"
      rel="noreferrer"
      className="text-md  text-darkPurple p-3 font-Poppins bg-secondary font-bold border-2 border-darkPurple cursor-pointer"
    >{`< ${name} />`}</a>
  );
};

export default PrimaryButton;
