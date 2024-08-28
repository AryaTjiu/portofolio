import React, { useState } from 'react';
import { dataWork } from "../data/data.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const Work = () => {

  // projects file
  const project = dataWork;
  
  return (
    <div name='work' className='px-10 md:px-16 lg:px-24 2xl:px-80 w-full min-h-screen py-36 text-slate-800 bg-white relative z-10'>
      <div className='mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline text-transparent bg-clip-text bg-gradient-to-r from-red-1 to-orange-1'>
            Work
          </p>
          <p className='py-4'>// Check out some of my recent work</p>
        </div>
        {/* container for projects */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-12">
          {/* Gird Item */}
          {project.map((item, index) => (
            <div className='flex flex-col space-y-7 group relative overflow-hidden' id={item.id}>
              <a href={item.live}>
                <div className='absolute opacity-0 group-hover:opacity-100 w-full h-full top-0 left-0 flex items-center justify-center bg-black bg-opacity-60 text-white duration-150'>
                  <div className='flex flex-col items-center justify-center space-y-2'>
                    <h6 className='text-xl font-semibold'>
                      {item.name}
                    </h6>
                    <span>
                      {item.date}
                    </span>
                    <div className='flex items-center space-x-4 text-xl'> 
                      <FontAwesomeIcon icon={faUpRightFromSquare}/>
                      <span>
                        visit
                      </span>
                    </div>
                  </div>
                </div>                
                <img src={`/assets/img/${item.image}`} className='w-full h-52 md:h-64'/>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
