import React from "react";

const SkillCard = ({title,info}) => {
  return (
    <div className="flex space-x-4 items-center justify-center">
      <h3>{`${title} :`}</h3>
      <p>{info}</p>
    </div>
  );
};

export default SkillCard;
