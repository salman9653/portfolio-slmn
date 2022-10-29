import React from 'react';
import {motion} from 'framer-motion';


type Props = {}

const About = (props: Props) => {
  return (
    <div className='h-screen flex flex-col md:flex-row relative text-center md:text-left max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl font-semibold'>
            About
        </h3>
        <motion.img
            className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-64'
            initial={{ x : -200, opacity : 0}}
            whileInView={{ x : 0, opacity : 1 }}
            viewport={{ once : true }}
            transition={{ duration : 1.2 }}
            src='https://salman9653.github.io/portfolio-responsive/assets/img/about.jpg'
        />
    </div>
  )
}

export default About