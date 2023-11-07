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
    <div name='home' className='w-full h-screen min-h-screen z-0 py-36 xl:py-0 overflow-hidden'>
      {/* glow */}
      {/* <div className='absolute bg-gradient-to-br from-purple-600 to-yellow-500  blur-[12vh] w-80 h-80 bottom-0 left-0 -z-10'></div> */}
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-10 md:px-36 flex flex-col justify-center h-full text-neutral-200'>
        <p className='text-purple-600' data-aos="fade-down">Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold' data-aos="fade-down" data-aos-delay="50">
          ARYA TJIUTANTO
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold' data-aos="fade-down" data-aos-delay="100">
          I'm a Frontend Web Developer
        </h2>
        <p className='text-[#cccccc] py-4 max-w-[700px]' data-aos="fade-down" data-aos-delay="150">
          Hello! I'm a passionate Frontend Web Developer, ready to help you take your web projects to the next level. With almost 2 years of experience in designing and developing attractive web interfaces, I understand how important a responsive user experience and appearance is.
        </p>
        <div data-aos="fade-down" data-aos-delay="200">
          <Link to='work' smooth={true} duration={500}>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
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
