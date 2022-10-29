import React from 'react';
import {motion} from 'framer-motion';


type Props = {}

const About = (props: Props) => {
  return (
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity : 1 }}
        transition={{ duration : 1.5 }}
        className='h-screen flex flex-col md:flex-row relative text-center md:text-left max-w-7xl px-10 justify-evenly mx-auto items-center'
    >
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-xl font-semibold'>
            About
        </h3>
        <motion.img
            className='-mb-32 md:mb-0 flex-shrink-0 w-40 h-40 rounded-full object-cover md:rounded-lg md:w-64 md:h-64'
            initial={{ x : -200, opacity : 0}}
            whileInView={{ x : 0, opacity : 1 }}
            viewport={{ once : true }}
            transition={{ duration : 1.2 }}
            src='https://salman9653.github.io/portfolio-responsive/assets/img/about.jpg'
        />
        <div className='space-y-7 px-0 md:px-10'>
            <h4 className='text-3xl font-semibold'>
                Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span> background
            </h4>
            <p className='text-base'>
                <span className='text-[#F7AB0A]/70 text-lg font-semibold'>An Expert Website Developer.</span> <br /><br />
                I am your source for creative design solutions. <br />
                I can also be of great help when it comes to ideate and showing creativity. <br />
                Am always excited to explore, learn and understand newer technologies. <br /><br />
                My passion is my work, and I’m committed to bringing visions to life.
            </p>
        </div>
    </motion.div>
  )
}

export default About