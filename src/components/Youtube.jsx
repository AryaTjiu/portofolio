import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-scroll";

const Youtube = () => {
    return ( 
        <div className="w-full px-10 md:px-36 2xl:px-56 py-36 xl:py-0 min-h-screen bg-[#121212] flex flex-col md:flex-row justify-center text-neutral-300 md:space-x-20 xl:space-x-32 items-center">
            <div className="flex flex-col space-y-10 w-full xl:w-[38%]">
                <div className="flex flex-col" data-aos="fade-right">
                    <span className="text-sm text-purple-500">My Youtube Channel</span>
                    <span className="text-4xl xl:text-6xl font-bold">
                        CodeWithGi
                    </span>
                </div>
                <span data-aos="fade-right" data-aos-delay="50">
                    Hello, i have a youtube channel for you, it's my youtube channel called codewithgi! there you can see how to create multiple elements on a website with HTML, CSS, tailwindcss or reactjs. there will be a place for you to grow, so check this out
                </span>
                <a href="https://www.youtube.com/@codewithgi" className="hover:text-purple-500 duration-200 cursor-pointer flex items-center group" target="_blank" data-aos="fade-right" data-aos-delay="100">
                    <span>Check it out now</span>
                    <div className="w-3 group-hover:w-8 duration-200"></div>
                    <FaArrowRight/>
                </a>
            </div>
            <img src="assets/img/ilustrasion/youtube.svg" className="w-96 hidden md:inline-block md:w-64 xl:w-96" data-aos="fade-left"/>
        </div>
     );
}
 
export default Youtube;