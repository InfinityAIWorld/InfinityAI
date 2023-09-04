import React from 'react';
import {BiHomeAlt, BiUser} from 'react-icons/bi';
import {HiHome, HiMiniUsers} from "react-icons/hi2";
import {MdWork,MdEmail} from "react-icons/md";
import {BsClipboardData} from 'react-icons/bs';
import {Link} from 'react-scroll';


const Nav = () => {
  return (
  <nav className='fixed  items-center  xl:gap-y-10  lg:w-600
   xl:right-[2%] flex bottom-0 overflow-hidden z-50 xl:justify-between xl:max-w-md xl:h-screen '>
   <div className="container mx-auto" >

    <div className='w-full xl:flex-col bg-white/10 h-[70px] backdrop-blur-sm rounded-lg 
    xl:px-0 max-w-[460px] m-2 p-5 flex  xl:justify-center   xl:h-max justify-between text-[25px] items-center'>
      <Link
      to='home'
      activeClass='active'
      smooth={true}
      spy={true}
      offset={-200}
      className='cursor-pointer w-[50px] h-[50px] flex items-center justify-center hover:text-[#D55EFF] transition-all duration-300 group relative'>

        <HiHome />

              </Link>
      <Link
      to='about'
      activeClass='active'
      smooth={true}
      spy={true}
      className='cursor-pointer w-[50px] h-[50px] flex items-center justify-center hover:text-[#D55EFF]'>
        <HiMiniUsers />
      </Link>
      <Link
      to='services'
      activeClass='active'
      smooth={true}
      spy={true}
      className='cursor-pointer w-[50px] h-[50px] flex items-center justify-center hover:text-[#D55EFF]'>
        <BsClipboardData />
      </Link>
      <Link
      to='Team'
      activeClass='active'
      smooth={true}
      spy={true}
      className='cursor-pointer w-[50px] h-[50px] flex items-center justify-center hover:text-[#D55EFF]'>
        <MdWork />
      </Link>
      <Link
      to='contact'
      activeClass='active'
      smooth={true}
      spy={true}
      className='cursor-pointer w-[50px] h-[50px] flex items-center justify-center hover:text-[#D55EFF]'>
        <MdEmail />
      </Link>
    </div>
   </div>
  </nav>
  );
};

export default Nav;
