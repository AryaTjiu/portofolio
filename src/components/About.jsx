import React, { useEffect, useState } from 'react';
import { dataSkill } from '../data/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faCss3Alt, faHtml5, faJs, faReact } from '@fortawesome/free-brands-svg-icons';

const About = () => {
  const [skills, setSkills] = useState(null);
    useEffect(() => {
        setSkills(dataSkill);
    }, [])

  return (
    <section name='about' className='px-10 md:px-36 2xl:px-96 w-full min-h-[120vh] bg-white text-slate-800 py-20 xl:py-40 2xl:py-80 relative z-20'>
      <div className='flex flex-col justify-center w-full h-full space-y-10'>
        <h6 className='w-fit text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-1 to-pink-1'>
          About
        </h6>
        <div className='grid grid-cols-1 gap-y-12 items-center gap-8'>
          {/* paragraph section */}
          <div className='space-y-5 w-full lg:w-[80%] xl:w-[70%]'>
            <div className='text-4xl font-bold' data-aos="fade-right">
              <p>Hi. I'm Arya Tjiutanto, nice to meet you. Please take a look around.</p>
            </div>
            <div data-aos="fade-left" className='text-justify'>
              <p>I was born on October 9, 2007, and developed a passion for technology from a young age. I started programming at 13 and have since focused on JavaScript, gaining nearly 3 years of experience in web development, particularly in frontend development. I'm proficient in HTML, CSS, Tailwind CSS, JavaScript, ReactJS / NextJS, and I'm dedicated to creating engaging and responsive user experiences.</p>  
            </div>
          </div>
          <div className='flex flex-col space-y-8'>
            <span className='font-semibold'>
              // The technology I use, and my expertise
            </span>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 lg:gap-5 relative'>
              {
                skills && skills.map((e) => (
                    <article className='w-full bg-pink-0.4 rounded-xl flex flex-col flex-wrap items-center space-y-3 py-10 relative'>
                        <div>
                          <img src={e.img} className='w-10 h-10'></img>
                        </div>
                        <span>
                          {e.name}
                        </span>
                    </article>
                ))
              } 
            </div>
          </div>
        </div>
      </div>
      
      {/* <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 md:pl-4' data-aos="fade-down">
            <p className='text-4xl font-bold inline border-b-4 border-purple-600'>
              About
            </p>
          </div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 md:px-4'>
          <div className='sm:text-right text-4xl font-bold' data-aos="fade-right">
            <p>Hi. I'm Arya Tjiutanto, nice to meet you. Please take a look around.</p>
          </div>
          <div data-aos="fade-left">
            <p>I was born on October 9, 2007 and have had a deep interest in technology since childhood. At the age of 13, I entered the world of programming and have been familiar with this for almost 3 years. During the trip, I learned various programming languages ​​such as JavaScript, Python,and Java. But in the end, I decided to focus on JavaScript and develop my skills in the field of website development, and in that time I have become a website developer with almost 3 years of experience, with the main focus on frontend development. Proficient in HTML, CSS, Tailwind CSS, JavaScript, and ReactJS. Committed to creating engaging and responsive user experiences.</p>  
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default About;
