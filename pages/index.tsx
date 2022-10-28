import Head from 'next/head';

import Header from '../components/Header';
import Hero from '../components/Hero';


export default function Home() {
  return (
    <div className='bg-[#242424] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Salman | Portfolio</title>
      </Head>
      
      <Header />

      {/* Hero Section  */}
      <section id='hero' className='snap-center'>
        <Hero />
      </section>
      {/* About Section  */}

      {/* Experiences  */}

      {/* Skill */}

      {/* Projects  */}

      {/* Contact Me  */}

    </div>
  )
}
