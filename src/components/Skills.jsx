import React from 'react';
import { useState } from 'react';
import { dataSkill } from '../data/data';

const Skills = () => {
    const [skills, setSkills] = useState(null);
    useState(() => {
        setSkills(dataSkill);
    }, [])

    return (
    <div name='skills' className='px-10 md:px-40 xl:px-56 w-full min-h-screen py-10 md:py-28 xl:py-40 bg-[#181818] text-gray-300 flex flex-col justify-center'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto py-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline'>Skills</p>
                <p className='py-4'>// These are the technologies I've worked with</p>
            </div>
            {
                skills && skills.map((e) => (
                    <div className='flex flex-col space-y-7 mt-10 text-white'>
                        <div className='flex flex-col'>
                            <span>
                                {e.name}
                            </span>
                            <div className='w-full md:w-96 h-[5px] rounded-full bg-[#252525] overflow-hidden'>
                                <div className={`bg-neutral-300 h-full`} style={{ width:`${e.percentage}%` }} data-aos="fade-right"></div>
                            </div>
                        </div>
                    </div>
                ))
            } 
        </div>
    </div>
  );
};

export default Skills;
