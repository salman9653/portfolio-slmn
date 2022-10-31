import Head from 'next/head';

import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';


export default function Home() {
  return (
    <div className='bg-[#222] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>

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

    </div>
  )
}
