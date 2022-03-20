import React from 'react'

const PrimaryButton = ({name}) => {
  return (
    <div className=''>
      <button className='text-md  text-darkPurple p-3 font-Poppins bg-secondary font-bold border-2 border-darkPurple'>{`< ${name} />`}</button>
    </div>
  );
}

export default PrimaryButton