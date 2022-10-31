import React from 'react'
import {motion} from 'framer-motion';

type Props = {}

const Contact = (props: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity : 1 }}
            transition={{ duration : 1.5 }}
            className='h-screen relative flex overflow-hidden flex-col md:flex-row text-left max-w-full justify-evenly mx-auto items-center z-0'
        >
        <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-xl font-semibold'>
        Contact Me
        </h3>
        <div className='flex flex-col space-y-10'>
            <h4 className='text-2xl font-semibold text-center'>
                I have got just what you need.<span className='underline decoration-[#F7AB0A]/50'> Lets Talk.</span>
            </h4>
            <div>
                
            </div>
        </div>

        </motion.div>
    )
}

export default Contact