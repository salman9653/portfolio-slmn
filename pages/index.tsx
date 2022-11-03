import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import {ArrowUpCircleIcon} from '@heroicons/react/24/solid';

import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import WorkExperience from '../components/WorkExperience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import {PageInfo, Experience, Skill, Project, Social} from "../typings";
import { fetchPageInfo } from '../utils/fetchPageInfo';
import { fetchExperiences } from '../utils/fetchExperiences';
import { fetchProjects } from '../utils/fetchProjects';
import { fetchSocial } from '../utils/fetchSocials';
import { fetchSkills } from '../utils/fetchSkills';

type Props = {
  pageInfo : PageInfo;
  experiences : Experience[];
  skills : Skill[];
  projects : Project[];
  socials : Social[];
}

const Home = ({ pageInfo, experiences, projects, socials, skills,} : Props) => {
  return (
    <div className='bg-[#222] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin'>

      <Head>
        <title>Salman | Portfolio</title>
      </Head>
      
      {/* Header  */}
      <Header socials={socials} />

      {/* Hero Section  */}
      <section id='hero' className='snap-start'>
        <Hero pageInfo={pageInfo} />
      </section>

      {/* About Section  */}
      <section id='about' className='snap-center'>
        <About pageInfo={pageInfo} />
      </section>
      
      {/* Experiences  */}
      {/* <section id='experience' className='snap-center'>
        <WorkExperience experiences={experiences} />
      </section> */}

      {/* Skill */}
      <section id='skills' className='snap-start'>
        <Skills skills={skills} />
      </section>

      {/* Projects  */}
      <section id='projects' className='snap-start'>
        <Projects projects={projects} />
      </section>

      {/* Contact Me  */}
      <section id='contact' className='snap-start'>
        <Contact  pageInfo={pageInfo} />
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

export default Home;

export const getStaticProps: GetStaticProps<Props> = async() => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocial();
  const skills: Skill[] = await fetchSkills();

  return {
    props: {
      pageInfo,
      experiences,
      projects,
      socials,
      skills,
    },
    revalidate: 10,
  }
}