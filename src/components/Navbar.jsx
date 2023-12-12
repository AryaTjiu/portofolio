import React, { useRef, useState } from 'react';
import {
  FaGithub,
  FaYoutube,
  FaInstagram,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const navbarRef = useRef(null);
  useState(() => {
    const handleScroll = () => {
      if(window.scrollY > window.screen.height - 100 && navbarRef) {
        navbarRef.current.style.background = "#131313";
      } else {
        navbarRef.current.style.background = "#181818";
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [])

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-10 md:px-20 xl:px-40 2xl:px-56 text-gray-300 z-40 overflow-hidden duration-1000' ref={navbarRef}>
      <div className='text-2xl md:text-3xl font-bold'>
        My portfolio
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li>
          <Link className='hover:text-purple-600 duration-200' to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link className='hover:text-purple-600 duration-200' to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link className='hover:text-purple-600 duration-200' to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link className='hover:text-purple-600 duration-200' to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link className='hover:text-purple-600 duration-200' to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <button className='md:hidden group flex flex-col space-y-1 z-40'>
        <div className='w-5 h-1 bg-white'></div>
        <div className='w-5 h-1 bg-white'></div>
        <div className='w-5 h-1 bg-white'></div>

        {/* Mobile menu */}
        <ul className="bg-[#101010] fixed -top-[100vh] group-focus:-top-1 left-0 w-full duration-200">
          <div className='px-10 pr-14 py-5 pt-8 flex justify-end'>
            <button className='relative'>
              <div className='w-7 h-1 rotate-45 bg-white absolute'></div>
              <div className='w-7 h-1 -rotate-45 bg-white absolute'></div>
            </button> 
          </div>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            <li className='w-full py-6 flex justify-center hover:bg-[#202020]'>
                <button className='w-full h-full'>
                  Home
                </button>
            </li>
          </Link>
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            <li className='w-full py-6 flex justify-center hover:bg-[#202020]'>
              <button className='w-full h-full'>
                About
              </button>
            </li>
          </Link>
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            <li className='w-full py-6 flex justify-center hover:bg-[#202020]'>
              <button className='w-full h-full'>
                Skills
              </button>
            </li>
          </Link>
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            <li className='w-full py-6 flex justify-center hover:bg-[#202020]'>
              <button className='w-full h-full'>
                Work
              </button>
            </li>
          </Link>
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            <li className='w-full py-6 flex justify-center hover:bg-[#202020]'>
              <button className='w-full h-full'>
                Contact
              </button>
            </li>
          </Link>
        </ul>
      </button>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0 z-50'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.youtube.com/@codewithgi'
            >
              Youtube <FaYoutube size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gradient-to-tr from-yellow-300 via-red-600 to-purple-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.instagram.com/codewith_gi/'
            >
              Instagram <FaInstagram size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#5555] space-x-6 pr-0'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.codewars.com/users/codewithgi'
            >
              Codewars <img src='assets/img/icon/codewars.svg' className='h-[60px] p-'></img>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/AryaTjiu'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='mailto:aryatjiu.dev@gmail.com'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
