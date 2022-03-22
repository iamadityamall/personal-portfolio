import React from "react";

const SecondaryButton = ({ name, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="py-2 px-3 border-2 border-darkPurple text-sm hover:bg-darkPurple/25 rounded-md"
    >
      {name}
    </a>
  );
};

export default SecondaryButton;
