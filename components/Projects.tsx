import React from 'react';
import {motion} from 'framer-motion';
import { Project } from '../typings';
import { urlFor } from '../sanity';
import Link from 'next/link';

type Props = {
    projects: Project[]
}

const Projects = ({projects}: Props) => {
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

    <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin'>
        {projects?.map((project,i) => (
            <div key={project?._id} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-4 items-center justify-center p-14 md:p-44  h-screen'>
                <motion.img
                    initial={{ y:-150, opacity: 0 }}
                    whileInView={{ y: 0, opacity : 1 }}
                    transition={{ duration : 1 }}
                    viewport={{once:true}}
                    src={urlFor(project?.image).url()}
                    className='w-auto md:w-72'
                    alt="" 
                />
                <div className='space-y-6 px-0 md:px-10 max-w-6xl'>
                    <h4 className='text-2xl font-semibold text-center'>
                       Project {i+1} of {projects?.length} : 
                        <Link href={project?.linkToBuild} target="_blank"><span className='text-[#F7AB0A]/90 underline decoration-[#F7AB0A]/30'> {project?.title}</span> </Link>
                    </h4>

                    <div className='flex items-center space-x-2 justify-center'>
                        {project?.technologies.map((technology) => (
                            <img
                                key={technology?._id}
                                src={urlFor(technology?.image).url()}
                                className="h-8 w-auto"
                                alt={technology?.title} />
                        ))}
                    </div>

                    <p className='text-lg text-center md:text-left'>
                       {project?.summary}
                    </p>
                </div>
            </div>            
        ))}
    </div>

    <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[360px] -skew-y-12' />

</motion.div>
  )
}

export default Projects