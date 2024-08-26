import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Aos from 'aos';
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import { useState } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  useEffect(() => {
    Aos.init({duration:1200})
  }, [])

  return (
    <div name='home' className='fixed top-0 left-0 h-screen w-full bg-gradient-to-tr from-pink-1 to-orange-1 z-0 px-10 md:px-36 2xl:px-96 overflow-hidden'>
      {/* glow */}
      {/* <div className='absolute bg-gradient-to-br from-purple-600 to-yellow-500  blur-[12vh] w-80 h-80 bottom-0 left-0 -z-10'></div> */}
      {/* Container */}
      <div className='w-full lg:w-[70%] min-h-screen flex flex-col justify-center text-slate-800'>
        <p className='text-slate-900 font-semibold'>Hi, my name is</p>
        <h1 className='text-4xl md:text-5xl sm:text-7xl font-bold'>
          ARYA TJIUTANTO
        </h1>
        <h2 className='text-4xl md:text-5xl sm:text-7xl font-bold'>
          I'm a Frontend Web Developer
        </h2>
        <p className='text-slate-900 py-4 max-w-[700px]'>
          Hello! I'm a passionate Frontend Web Developer, ready to help you take your web projects to the next level. With almost 3 years of experience in designing and developing attractive web interfaces, I understand how important a responsive user experience and appearance is.
        </p>
        <div data-aos-delay="200" className='flex space-x-10 items-center'>
          <Link to='work' smooth={true} duration={500}>
            <button className='text-slate-800 group border-2 border-slate-800 px-6 py-3 my-2 flex items-center hover:bg-white hover:border-white hover:shadow-lg shadow-white duration-150'>
              View Work
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3 '/>
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
