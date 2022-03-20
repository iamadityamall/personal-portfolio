import React from "react";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="h-auto bg-primary flex items-center justify-between border-t-2 border-ternary xl:justify-center xl:space-x-20">
      {/* footer title */}
      <div className="text-md py-6 font-Poppins font-semibold">
        <p>designed with 🛠️, 💻 and ☕ by Aditya | ©️ {new Date().getFullYear()}</p>
      </div>

      {/* social icons */}
      <a
        href="https://www.linkedin.com/in/adityaharendramall/"
        className="text-2xl py-6"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>
    </footer>
  );
};

export default Footer;
