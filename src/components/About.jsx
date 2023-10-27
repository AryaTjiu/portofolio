import React from 'react';

const About = () => {
  return (
    <div name='about' className='px-10 md:px-36 w-full xl:h-screen min-h-screen bg-[#181818] text-gray-300 py-36 xl:py-0'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 md:pl-4' data-aos="fade-down">
            <p className='text-4xl font-bold inline border-b-4 border-purple-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 md:px-4'>
            <div className='sm:text-right text-4xl font-bold' data-aos="fade-right">
              <p>Hi. I'm Arya Tjiutanto, nice to meet you. Please take a look around.</p>
            </div>
            <div data-aos="fade-left">
              <p>I was born on October 9, 2007 and have had a deep interest in technology since childhood. At the age of 13, I entered the world of programming and have been familiar with this for 3 years. During the trip, I learned various programming languages ​​such as JavaScript, Python, Java, and Dart. But in the end, I decided to focus on JavaScript and develop my skills in the field of website development, and in that time I have become a website developer with almost 2 years of experience, with the main focus on frontend development. Proficient in HTML, CSS, Tailwind CSS, JavaScript, and ReactJS. Committed to creating engaging and responsive user experiences.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
