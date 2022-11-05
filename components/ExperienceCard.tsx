import React from 'react';
import {motion} from 'framer-motion';
import Image from "next/image";

import { Experience } from '../typings';
import { urlFor } from '../sanity';

type Props = {
  experience: Experience
}

const ExperienceCard = ({experience}: Props) => {
  return (
   <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] md:w-[450px] xl:w-[540px] snap-center bg-[#292929] opacity-70 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden'>
    <motion.img
      initial={{ y : -100, opacity : 0 }}
      transition={{duration : 1.2}}
      whileInView={{ y:0, opacity:1 }}
      viewport={{once : true}}
      className='h-32 w-32 rounded-full xl:w-[140px] xl:h-[140px] object-cover object-center'
      src={urlFor(experience?.companyImage).url()}
      alt="company Image" 
    />
    <div className='px-0 md:px-10'>
      <h4 className='text-2xl font-light'>{experience?.jobTitle}</h4>
      <p className='font-bold text-lg mt-1'>{experience?.company}</p>
      <div className='flex space-x-2 my-2'>
        {experience?.technologies?.map((technology) => (
           <Image
            key={technology?._id}
            className='h-8 w-8 rounded-full'
            src={urlFor(technology?.image).url()}
            alt={technology?.title}
          />
        ))}
       
        
      </div>
      <p className='uppercase py4 text-gray-300'>
        {new Date(experience?.dateStarted).toDateString()} - {experience?.isCurrentlyWorkingHere ? 'Present' : new Date(experience?.dateEnded).toDateString()}
      </p>
      <ul className='list-disc space-y-4 ml-5 text-sm h-24 overflow-y-scroll scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin'>
      {experience?.points?.map((point,i) => (
        <li key={i}>
         {point}
        </li>
        ))}
      </ul>
    </div>
   </article>
  )
}

export default ExperienceCard