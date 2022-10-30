import React from 'react';
import {motion} from 'framer-motion';

type Props = {
    directionLeft?:boolean
}

const Skill = ({directionLeft}: Props) => {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img
            src="https://cdn.sanity.io/images/xcmw07kx/production/d8c8025b1695a3f14f849b99afc71d917ef40813-480x480.png"
            initial={{ x: directionLeft ? -100 : 100 , opacity :0 }}
            transition={{duration:1}}
            whileInView={{ opacity: 1, x: 0 }}
            className="h-20 w-20 rounded-full border border-gray-600 object-cover filter group-hover:grayscale transition duration-300 ease-in-out"
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 z-0 rounded-full'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-xl font-bold text-gray-800 opacity-100'>75%</p>
            </div>
        </div>
    </div>
  )
}

export default Skill