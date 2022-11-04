import React from 'react';
import {motion} from 'framer-motion';
import Link from 'next/link';

type Props = {}

const GitHubProfile = (props: Props) => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity : 1 }}
    transition={{ duration : 1.5 }}
    className='h-screen flex flex-col md:flex-row relative text-center md:text-left max-w-7xl px-10 justify-evenly mx-auto items-center'
>
    <h3 className='absolute top-20 uppercase tracking-[10px] md:tracking-[20px] text-gray-500 text-xl font-semibold'>
      GitHub - Profile
    </h3>
    <div className='flex flex-col md:flex-row space-x-4 space-y-4 md:space-y-0 items-center justify-evenly border p-6 rounded-xl border-[#F7AB0A]/60'>
      <div className='flex flex-col space-y-4'>
        <Link href="http://www.github.com/salman9653">
          <img src="https://github-readme-stats.vercel.app/api?username=salman9653&show_icons=true&hide=issues,&title_color=10b981&text_color=ffffff&icon_color=ffffff&bg_color=22272e&hide_border=true&show_icons=true" alt="salman9653's GitHub stats" />
        </Link>

        <Link href="http://www.github.com/salman9653">
            <img src="https://github-readme-streak-stats.herokuapp.com/?user=salman9653&stroke=ffffff&background=22272e&ring=10b981&fire=10b981&currStreakNum=ffffff&currStreakLabel=10b981&sideNums=ffffff&sideLabels=ffffff&dates=ffffff&hide_border=true" />
        </Link>
      </div>
      <div>
        <Link href="https://github.com/salman9653">
            <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=salman9653&langs_count=10&title_color=10b981&text_color=ffffff&icon_color=0891b2&bg_color=22272e&hide_border=true&locale=en&custom_title=Top%20%Languages" alt="Top Languages" />
        </Link>
      </div>
    </div>
    
    
    </motion.div>
  )
}

export default GitHubProfile