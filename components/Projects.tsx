import React from 'react';
import {motion} from 'framer-motion';

type Props = {}

const Projects = (props: Props) => {
    const Projects = [1, 2, 3, 4, 5]
  return (
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity : 1 }}
        transition={{ duration : 1.5 }}
        className='h-screen relative flex overflow-hidden flex-col md:flex-row text-left max-w-full justify-evenly mx-auto items-center z-0'
    >
    <h3 className='absolute top-20 uppercase tracking-[10px] md:tracking-[20px] text-gray-500 text-xl font-semibold'>
        Projects
    </h3>

    <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
        {/* {Projects.map((project,i )=> ( */}
            <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-14 md:p-44  h-screen'>
                <motion.img
                    initial={{ y:-300, opacity: 0 }}
                    whileInView={{ y: 0, opacity : 1 }}
                    transition={{ duration : 1 }}
                    viewport={{once:true}}
                    src="https://images.unsplash.com/photo-1481487196290-c152efe083f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=962&q=80"
                    className='w-auto md:w-72'
                    alt="" 
                />
                <div className='space-y-6 px-0 md:px-10 max-w-6xl'>
                    <h4 className='text-2xl font-semibold text-center'>
                        <span className='underline decoration-[#F7AB0A]/50'>Project 1 of 5 :</span> Music App
                    </h4>
                    <p className='text-lg text-center md:text-left'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Provident error, placeat quia a nemo itaque ab voluptatibus
                        architecto pariatur tempore cum possimus dolor eaque molestias.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Provident error, placeat quia a nemo itaque ab voluptatibus
                    </p>
                </div>
            </div>
        {/* ))} */}
    </div>

    <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[360px] -skew-y-12' />

</motion.div>
  )
}

export default Projects