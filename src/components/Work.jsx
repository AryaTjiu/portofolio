import React from 'react';
import { dataWork } from "../data/data.js";


const Work = () => {

    // projects file
    const project = dataWork;
    //setProject(data);
  
  return (
    <div name='work' className='px-10 md:px-36 w-full min-h-screen md:h-screen py-36 xl:py-0 text-gray-300 bg-[#181818]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline text-gray-300'>
            Work
          </p>
          <p className='py-4'>// Check out some of my recent work</p>
        </div>
        {/* container for projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Gird Item */}
          {project.map((item, index) => (
            <div key={index} style={{ backgroundImage: `url(assets/img/${item.image})` }} className="shadow-lg shadow-[#040c16] group container rounded-md  flex justify-center text-center items-center mx-auto content-div bg-cover">
              {/* Hover effect for images */}
              <div className="opacity-0 group-hover:opacity-100 duration-500">
                <div className='flex flex-col'>  
                  <span className="text-2xl font bold text-white tracking-wider ">
                    {item.name} 
                  </span>
                  {item.exercise &&
                    <span>
                      Exercise
                    </span>
                  }
                  <span>
                    {item.date}
                  </span>
                </div>
                <div className="pt-8 text-center ">
                  {/* eslint-disable-next-line */}
                  {
                    item.github &&
                    <a href={item.github} target="_blank">
                      <button
                        className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg border-2 border-white hover:bg-transparent hover:text-white duration-200">
                        Code
                      </button>
                    </a>
                  }
                  {/* eslint-disable-next-line */}
                  <a href={item.live} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg border-2 border-white hover:bg-transparent hover:text-white duration-200">
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
