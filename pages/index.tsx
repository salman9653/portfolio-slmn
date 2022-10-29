import Head from 'next/head';

import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';


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

      {/* Skill */}

      {/* Projects  */}

      {/* Contact Me  */}

    </div>
  )
}
