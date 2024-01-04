import React, { useState } from 'react';
import { dataWork } from "../data/data.js";

const Work = () => {

  // projects file
  const project = dataWork;
  
  return (
    <div name='work' className='px-10 md:px-36 xl:px-80 w-full min-h-screen py-36 text-gray-300 bg-[#181818]'>
      <div className='mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline text-gray-300'>
            Work
          </p>
          <p className='py-4'>// Check out some of my recent work</p>
        </div>
        {/* container for projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12">
          {/* Gird Item */}
          {project.map((item, index) => (
            <div className='flex flex-col space-y-7' id={item.id}>
              <img src={`/assets/img/${item.image}`} className='w-full h-52 md:h-64'/>
              <div className='flex flex-col space-y-6'>
                <div className='flex justify-between'>
                  <div className='grid'>  
                    <span className='text-xl font-bold'>{item.name}</span>
                    <span>{item.date}</span>
                  </div>
                  <span>
                    {item.exercise? "exercise" : item.projectNote}
                  </span>
                </div>
                <div className='flex items-center space-x-4'>
                  <span>
                    Tech: 
                  </span>
                  <div className='flex space-x-2'>
                    {item.tech.map(data => (
                        <span>
                          {data}
                        </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col space-y-2">
                  {/* eslint-disable-next-line */}
                  {
                    item.github &&
                    <a href={item.github} target="_blank">
                      <button
                        className="text-center space-x-2 px-10 py-3 bg-white text-gray-700 border-2 border-white hover:bg-transparent hover:text-white duration-200 w-full">
                          <span>Code</span>
                      </button>
                    </a>
                  }
                  {/* eslint-disable-next-line */}
                  <a href={item.live} target="_blank">
                    <button
                      className="text-center px-10 py-3 bg-transparent text-white border-2 border-white hover:bg-pink-600 hover:border-pink-600 hover:text-white duration-200 w-full">
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
