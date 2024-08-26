import { faGithub, faInstagram, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
        navbarRef.current.style.background = "";
      } else {
        navbarRef.current.style.background = "";
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [])

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-10 md:px-20 xl:px-40 2xl:px-56 text-slate-900 z-[1] overflow-hidden duration-1000' ref={navbarRef}>
      <div className='text-2xl md:text-3xl font-bold'>
        My portfolio
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        {/* <li>
          <Link className='hover:text-white duration-200' to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li> */}
        <li>
          <Link className='hover:text-white duration-200' to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        {/* <li>
          <Link className='hover:text-white duration-200' to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li> */}
        <li>
          <Link className='hover:text-white duration-200' to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link className='hover:text-white duration-200' to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        <li>
          |
        </li>
        <li>
          <a href='https://wa.link/so3ifb' className='hover:text-white duration-150'>
            <FontAwesomeIcon icon={faWhatsapp}/>
          </a>
        </li>
        <li>
          <a href='https://www.instagram.com/antelocode/' className='hover:text-white duration-150'>
            <FontAwesomeIcon icon={faInstagram}/>
          </a>
        </li>
        <li>
          <a href='https://github.com/AryaTjiu' className='hover:text-white duration-150'>
            <FontAwesomeIcon icon={faGithub}/>
          </a>
        </li>
        <li>
          <a href='https://www.youtube.com/@codewithgi' className='hover:text-white duration-150'>
            <FontAwesomeIcon icon={faYoutube}/>
          </a>
        </li>
      </ul>

      {/* Hamburger */}
      <button className='md:hidden group flex flex-col space-y-1 z-40 text-white'>
        <div className='w-5 h-1 bg-white'></div>
        <div className='w-5 h-1 bg-white'></div>
        <div className='w-5 h-1 bg-white'></div>

        {/* Mobile menu */}
        <ul className="flex flex-col space-y-3 -top-[117vh] group-focus:-top-1 bg-[#101010] fixed  left-0 w-full duration-200 p-5 pb-10">
          <div className='px-8 py-5 mb-5 flex justify-end'>
            <button className='relative'>
              <div className='w-7 h-1 rotate-45 bg-white absolute'></div>
              <div className='w-7 h-1 -rotate-45 bg-white absolute'></div>
            </button> 
          </div>
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            <li className='bg-neutral-800 rounded-lg w-full py-5 flex justify-start hover:bg-[#202020] text-left'>
              <button className='w-full h-full flex items-center space-x-2 px-5'>
                <span>
                  About
                </span>
              </button>
            </li>
          </Link>
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            <li className='bg-neutral-800 rounded-lg w-full py-5 flex justify-start hover:bg-[#202020] text-left'>
              <button className='w-full h-full flex items-center space-x-2 px-5'>
                <span>
                  Work
                </span>
              </button>
            </li>
          </Link>
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            <li className='bg-neutral-800 rounded-lg w-full py-5 flex justify-start hover:bg-[#202020] text-left'>
              <button className='w-full h-full flex items-center space-x-2 px-5'>
                <span>
                  Contact
                </span>
              </button>
            </li>
          </Link>
          <a href='https://wa.link/so3ifb' smooth={true} duration={500}>
            <li className='bg-neutral-800 rounded-lg w-full py-5 flex justify-start hover:bg-[#202020] text-left'>
              <button className='w-full h-full flex items-center space-x-2 px-5'>
                <FontAwesomeIcon icon={faWhatsapp}/>
                <span>
                  Whatsapp
                </span>
              </button>
            </li>
          </a>
          <a href='https://www.instagram.com/antelocode/' smooth={true} duration={500}>
            <li className='bg-neutral-800 rounded-lg w-full py-5 flex justify-start hover:bg-[#202020] text-left'>
              <button className='w-full h-full flex items-center space-x-2 px-5'>
                <FontAwesomeIcon icon={faInstagram}/>
                <span>
                  Instagram
                </span>
              </button>
            </li>
          </a>
          <a href='https://github.com/AryaTjiu' smooth={true} duration={500}>
            <li className='bg-neutral-800 rounded-lg w-full py-5 flex justify-start hover:bg-[#202020] text-left'>
              <button className='w-full h-full flex items-center space-x-2 px-5'>
                <FontAwesomeIcon icon={faGithub}/>
                <span>
                  Github
                </span>
              </button>
            </li>
          </a>
          <a href='https://www.youtube.com/@codewithgi' smooth={true} duration={500}>
            <li className='bg-neutral-800 rounded-lg w-full py-5 flex justify-start hover:bg-[#202020] text-left'>
              <button className='w-full h-full flex items-center space-x-2 px-5'>
                <FontAwesomeIcon icon={faYoutube}/>
                <span>
                  Youtube
                </span>
              </button>
            </li>
          </a>
        </ul>
      </button>
    </div>
  );
};

export default Navbar;
