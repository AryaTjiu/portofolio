import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const Codewars = () => {
    return ( 
        <div className="w-full px-10 md:px-36 2xl:px-56 min-h-screen xl:h-screen py-36 xl:py-0 bg-[#121212] flex flex-col md:flex-row justify-center text-neutral-300 md:space-x-20 xl:space-x-32 items-center space-y-10">
            <img src="assets/img/icon/codewars.svg" className="w-full md:w-72 xl:w-96 z-0" data-aos="fade-right"/>
            <div className="flex flex-col space-y-10 w-full xl:w-[38%]">
                <div className="flex flex-col">
                    <span className="text-sm text-purple-500" data-aos="fade-left">coding challenges</span>
                    <span className="text-6xl font-bold" data-aos="fade-left" data-aos-delay="50">
                        CodeWars
                    </span>
                </div>
                <span data-aos="fade-left" data-aos-delay="100">
                We all know that to improve the quality of coding and programming logic we have to keep practicing, one way to practice is by completing coding challenges, and currently I have an account on a coding challenge website called "codewars".
                Codewars is a platform that helps you learn, train and improve your coding skills by completing programming tasks of various types and levels of difficulty. This time I'm very excited to share my codewars profile with you, so please check out my coding progress
                </span>
                <a href="https://www.codewars.com/users/codewithgi" className="hover:text-purple-500 duration-200 cursor-pointer flex items-center group" target="_blank" data-aos="fade-left" data-aos-delay="150">
                    <span>Check it out now</span>
                    <div className="w-3 group-hover:w-8 duration-200"></div>
                    <FaArrowRight/>
                </a>
            </div>
        </div>
    );
}
 
export default Codewars;