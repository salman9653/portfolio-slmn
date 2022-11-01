import Head from 'next/head';
import Link from 'next/link';
import {ArrowUpCircleIcon} from '@heroicons/react/24/solid';

import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div className='bg-[#222] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin'>

      <Head>
        <title>Salman | Portfolio</title>
      </Head>
      
      {/* Header  */}
      <Header />

      {/* Hero Section  */}
      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      {/* About Section  */}
      <section id='about' className='snap-center'>
        <About/>
      </section>
      
      {/* Experiences  */}
      <section id='experience' className='snap-center'>
        <Experience/>
      </section>

      {/* Skill */}
      <section id='skills' className='snap-start'>
        <Skills/>
      </section>

      {/* Projects  */}
      <section id='projects' className='snap-start'>
        <Projects/>
      </section>

      {/* Contact Me  */}
      <section id='contact' className='snap-start'>
        <Contact/>
      </section>

      <Link href='#hero'>
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <ArrowUpCircleIcon className='h-10 w-10 hover:text-[#F7AB0A]/80 cursor-pointer'/>
          </div>
        </footer>
      </Link>

    </div>
  )
}
