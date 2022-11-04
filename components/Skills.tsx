import React from 'react';
import {motion} from 'framer-motion';

import Skill from './Skill';
import {Skill as SkillType} from '../typings'

type Props = {
  skills: SkillType[];
}

const Skills = ({skills}: Props) => {
  return (
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity : 1 }}
        transition={{ duration : 1.5 }}
        className='flex flex-col xl:flex-row relative text-center md:text-left max-w-[2000px] min-h-screen xl:px-10 justify-center mx-auto items-center xl:space-y-0'
    >
    <h3 className='absolute top-20 uppercase tracking-[10px] md:tracking-[20px] text-gray-500 text-xl font-semibold'>
        Skills
    </h3>
    <h3 className='absolute top-32 uppercase tracking-[3px] text-sm text-gray-500'>Hover over a skill for current Proficiency</h3>

    <div className='grid grid-cols-4 md:grid-cols-4 gap-4'>
        {skills?.slice(0, skills.length/2).map((skill) => (
          <Skill key={skill?._id} skill={skill} directionLeft/>
        ))}
        {skills?.slice(skills.length/2,skills.length).map((skill) => (
          <Skill key={skill?._id} skill={skill}/>
        ))}
        
       
    </div>
</motion.div>
  )
}

export default Skills