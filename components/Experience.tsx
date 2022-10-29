import React from 'react';
import {motion} from 'framer-motion';


type Props = {}

const Experience = (props: Props) => {
  return (
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity : 1 }}
        transition={{ duration : 1.5 }}
        className='h-screen flex flex-col md:flex-row relative text-left max-w-full px-10 justify-evenly mx-auto items-center overflow-hidden'
    >
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-xl font-semibold'>
        Experience
        </h3>
       <div>
        {/* Experiance Cards  */}
       </div>
    </motion.div>
  )
}

export default Experience