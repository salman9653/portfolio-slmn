import React from 'react';
import {motion} from 'framer-motion';
import { Skill } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    directionLeft?:boolean
    skill: Skill
}

const Skill = ({skill,directionLeft}: Props) => {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img
           src={urlFor(skill?.image).url()}
            initial={{ x: directionLeft ? -100 : 100 , opacity :0 }}
            transition={{duration:1}}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once : true }}
            className="h-20 w-20 rounded-full border border-gray-600 object-cover filter group-hover:grayscale transition duration-300 ease-in-out"
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 z-0 rounded-full'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-xl font-bold text-gray-800 opacity-100'>{skill?.progress}%</p>
            </div>
        </div>
    </div>
  )
}

export default Skill