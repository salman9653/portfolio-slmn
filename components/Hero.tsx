import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import Link from 'next/link';

import BackgroundCircles from './BackgroundCircles';
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    pageInfo: PageInfo
}

const Hero = ({pageInfo}: Props) => {
    const [text, count] = useTypewriter({
        words: [
            `Hi ! Am ${pageInfo.name}`,
            "Guy_who_Loves_Coffee.tsx",
            "<ButLovesToCodeMore/>"
        ],
        loop: true,
        delaySpeed:2000,
    })
    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles/>
            <img
                src={urlFor(pageInfo?.heroImage).url()}
                alt="My picture"
                className='relative rounded-full h-32 w-32 mx-auto object-cover'
            />
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-400 pb-2 tracking-[15px]'>
                    {pageInfo?.role}
                </h2>
                <h1 className='text-2xl lg:text-4xl  text-gray-300 font-semibold px-10'>
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
                    <Link href="#skills">
                        <button className='heroButton m-1 md:mx-4'>Skills</button>
                    </Link>
                    <Link href="#projects">
                     <button className='heroButton m-1 md:mx-4'>Projects</button>
                    </Link>                   
                   
                </div>
            </div>            
        </div>
  )
}

export default Hero