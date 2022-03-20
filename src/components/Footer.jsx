import React from "react";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="h-auto bg-primary flex items-center justify-between border-t-2 border-ternary xl:justify-center xl:space-x-20">
      {/* footer title */}
      <div className="text-xs py-6 font-Poppins font-semibold lg:text-lg">
        <p>designed with 🛠️, 💻 and ☕ by Aditya | ©️ {new Date().getFullYear()}</p>
      </div>

      {/* social icons */}
      <a
        href="https://www.linkedin.com/in/adityaharendramall/"
        className="text-xl py-6 lg:text-2xl"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>
    </footer>
  );
};

export default Footer;
