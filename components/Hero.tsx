import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import Image from 'next/image';
import Link from 'next/link';

import profilePic from '../public/my_pic.jpg'
import BackgroundCircles from './BackgroundCircles';

type Props = {}

const Hero = (props: Props) => {
    const [text, count] = useTypewriter({
        words: [
            "Hi ! Am Salman",
            "Guy_who_Loves_Coffee.tsx",
            "<ButLovesToCodeMore/>"
        ],
        loop: true,
        delaySpeed:2000,
    })
    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles/>
            <Image
                src={profilePic}
                alt="My picture"
                className='relative rounded-full h-32 w-32 mx-auto object-cover'
                placeholder="blur"
            />
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-300 pb-4 tracking-[15px]'>
                    Web Developer
                </h2>
                <h1 className='text-2xl lg:text-4xl font-semibold px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor='#F7AB0A'/>
                </h1>
                <div className='pt-10'>
                    <Link href="#about">
                        <button className='heroButton m-1 md:mx-4'>About</button>
                    </Link>
                    <Link href="#experience">
                        <button className='heroButton m-1 md:mx-4'>Experience</button>
                    </Link>
                    <Link href="skills">
                        <button className='heroButton m-1 md:mx-4'>Skills</button>
                    </Link>
                    <Link href="projects">
                     <button className='heroButton m-1 md:mx-4'>Projects</button>
                    </Link>                   
                   
                </div>
            </div>            
        </div>
  )
}

export default Hero