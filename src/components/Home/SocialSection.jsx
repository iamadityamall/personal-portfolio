import React from 'react'
import { socialLinks } from '../../socialData'
import SocialCards from '../SocialCards'

const SocialSection = () => {
  return (
    <section id="social" className='border-t-2 border-darkPurple space-y-10 flex flex-col h-screen justify-center'>

        {/* heading and info */}
        <div className='flex flex-col items-center text-center font-Poppins p-4'>
            <h1 className='text-xl p-2 xl:text-5xl border-b-2 border-darkPurple'>code and design presence</h1>
            <p className='xl:text-xl xl:p-5'>"look at my work on other platforms. caution: you might not find many, since started recently."</p>
        </div>

        {/* map through links */}
        <div className='grid grid-col-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid lg:grid-cols-4'>
            {socialLinks.map((socialLink) => {
                const {id} = socialLink;
                return <SocialCards key={id} {...socialLink}/>
            })}
        </div>
    </section>
  )
}

export default SocialSection