import React from 'react'
import {motion} from 'framer-motion';
import {PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from '../typings';

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
    
  };
type Props = {
    pageInfo: PageInfo
}

const Contact = ({pageInfo}: Props) => {

    const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = formData => {
    window.location.href = `mailto:slmn.k634@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`
  }

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
                    <p className='text-xl'>{pageInfo?.phoneNumber}</p>
                </div>
                <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                    <p className='text-xl'>{pageInfo?.email}</p>
                </div>
                {/* <div className='flex items-center space-x-5 justify-center'>
                    <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                    <p className='text-xl'>{pageInfo?.address}</p>
                </div> */}
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                    <div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2'>
                        <input {...register('name')} className='contactInput' placeholder='Name' type="text" />
                        <input {...register('email')} className='contactInput' placeholder='Email' type="email" />
                    </div>
                    <input {...register('subject')} className='contactInput' placeholder='Subject' type="text" />
                    <textarea {...register('message')} className='contactInput' placeholder='Message' />
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