import React from 'react';
import {motion} from 'framer-motion';

type Props = {}

const ExperienceCard = (props: Props) => {
  return (
   <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[300px] md:w-[360px] xl:w-[540px] snap-center bg-[#292929] opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden'>
    <motion.img
      initial={{ y : -100, opacity : 0 }}
      transition={{duration : 1.2}}
      whileInView={{ y:0, opacity:1 }}
      viewport={{once : true}}
      className='h-32 w-32 rounded-full xl:w-[140px] xl:h-[140px] object-cover object-center'
      src="https://cdn.sanity.io/images/xcmw07kx/production/b62651ef34a9e54c354ee437545acc348fbf0505-1200x900.png"
      alt="" 
    />
    <div className='px-0 md:px-10'>
      <h4 className='text-2xl font-light'>Web Developer</h4>
      <p className='font-bold text-lg mt-1'>FreeLance</p>
      <div className='flex space-x-2 my-2'>
        <img
          className='h-8 w-8 rounded-full'
          src="https://cdn.sanity.io/images/xcmw07kx/production/31f11147f89dbd855a9b948e2ce643ea2f41c0a9-480x480.png"
        />
         <img
          className='h-8 w-8 rounded-full'
          src="https://cdn.sanity.io/images/xcmw07kx/production/107574d887f1c07c9fbea0704de7f293e244a8f3-480x480.png"
        />
         <img
          className='h-8 w-8 rounded-full'
          src="https://cdn.sanity.io/images/xcmw07kx/production/66bbf9242b1ccffebb5d46f376f5036b527fad48-480x480.png"
        />
      </div>
      <p className='uppercase py4 text-gray-300'>Started ... | Ended ... </p>
      <ul className='list-disc space-y-4 ml-5 text-sm'>
        <li>Summary Points Summary Points Summary</li>
        <li>Summary Points Summary Points Summary</li>
        <li>Summary Points Summary Points Summary</li>
      </ul>
    </div>
   </article>
  )
}

export default ExperienceCard