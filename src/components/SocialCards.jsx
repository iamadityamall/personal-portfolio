import React from 'react'

const SocialCards = ({name, info, image, url}) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="flex p-8 justify-between items-center rounded-2xl bg-secondary text-darkPurple font-Poppins hover:bg-darkPurple/60 hover:text-white xl:h-[20vh] border-2 border-darkPurple md:space-x-2"
    >
      <div className="flex flex-col ">
        <h1 className="border-b-2 border-darkPurple">{name}</h1>
        <p>{info}</p>
      </div>
      <div>
        <img src={image} alt="" className="h-8 w-8 rounded-full" />
      </div>
    </a>
  );
}

export default SocialCards