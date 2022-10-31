import React from 'react'
import {motion} from 'framer-motion';
import {PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'

type Props = {}

const Contact = (props: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity : 1 }}
            transition={{ duration : 1.5 }}
            className='h-screen relative flex overflow-hidden flex-col md:flex-row text-left max-w-full justify-evenly mx-auto items-center z-0'
        >
        <h3 className='absolute top-20 uppercase tracking-[10px] md:tracking-[20px] text-gray-500 text-xl font-semibold'>
        Contact Me
        </h3>
        <div className='flex flex-col space-y-7'>
            <h4 className='text-2xl font-semibold text-center'>
                I have got just what you need. <span className='underline decoration-[#F7AB0A]/50'>Lets Talk.</span>
            </h4>
            <div className='space-y-4'>
                <div className='flex items-center space-x-5 justify-center'>
                    <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                    <p className='text-xl'>+91-9876543210</p>
                </div>
                <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                    <p className='text-xl'>slmn634@gmail.com</p>
                </div>
                <div className='flex items-center space-x-5 justify-center'>
                    <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                    <p className='text-xl'>#123 Developer Street</p>
                </div>
                <form className='flex flex-col space-y-2 w-fit mx-auto'>
                    <div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2'>
                        <input className='contactInput' placeholder='Name' type="text" />
                        <input className='contactInput' placeholder='Email' type="email" />
                    </div>
                    <input className='contactInput' placeholder='Subject' type="text" />
                    <textarea className='contactInput' placeholder='Message' />
                    <button type='submit' className='bg-[#F7AB0A] px-10 py-3 rounded-md text-black font-bold text-lg'>
                        Submit
                    </button>
                </form>
            </div>
        </div>

        </motion.div>
    )
}

export default Contact