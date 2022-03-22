import React from 'react'

const SubmitButton = ({name}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e)
    }

  return (
    <button type='submit' className='bg-secondary p-2 rounded-lg text-darkPurple border-2 border-darkPurple' onSubmit={handleSubmit}>{name}</button>
  )
}

export default SubmitButton