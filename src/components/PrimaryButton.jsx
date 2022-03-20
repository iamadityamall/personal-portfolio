import React from 'react';
import { Link } from 'react-scroll/modules';

const PrimaryButton = ({name,url}) => {
  return (
    <div className="">
      <Link
        to={url}
        spy={true}
        smooth={true}
        offset={-64}
        duration={600}
        className="text-md  text-darkPurple p-3 font-Poppins bg-secondary font-bold border-2 border-darkPurple cursor-pointer"
      >{`< ${name} />`}</Link>
    </div>
  );
}

export default PrimaryButton