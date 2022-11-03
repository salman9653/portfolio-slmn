import React from 'react';
import {motion} from 'framer-motion';
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';


type Props = {
    pageInfo: PageInfo
}

const About = ({pageInfo}: Props) => {
  return (
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity : 1 }}
        transition={{ duration : 1.5 }}
        className='h-screen flex flex-col md:flex-row relative text-center md:text-left max-w-7xl px-10 justify-evenly mx-auto items-center'
    >
        <h3 className='absolute top-20 uppercase tracking-[10px] md:tracking-[20px] text-gray-500 text-xl font-semibold'>
            About
        </h3>
        <motion.img
            className='-mb-32 md:mb-0 flex-shrink-0 w-40 h-40 rounded-full object-cover md:rounded-lg md:w-72 md:h-80'
            initial={{ x : -200, opacity : 0}}
            whileInView={{ x : 0, opacity : 1 }}
            viewport={{ once : true }}
            transition={{ duration : 1.2 }}
            src={urlFor(pageInfo?.profilePic).url()}
        />
        <div className='space-y-7 px-0 md:px-20'>
            <h4 className='text-3xl font-semibold'>
                Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span> background
            </h4>
            <p className='text-base'>
                <span className='text-[#F7AB0A]/70 text-lg font-semibold'>An Expert Website Developer.</span> <br /><br />
                {pageInfo?.backgroundInformation}
            </p>
        </div>
    </motion.div>
  )
}

export default About