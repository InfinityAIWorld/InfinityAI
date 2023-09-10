import React from "react";
import { HiHome, HiMiniUsers, HiMiniCodeBracket } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";
import { BsFillBarChartFill } from "react-icons/bs";
import { Link } from "react-scroll";
import { BiSolidInfoSquare } from "react-icons/bi";

const Nav = () => {
  return (
    <nav
      className="fixed  items-center  xl:gap-y-10  lg:w-600
   xl:right-[2%] flex bottom-0 overflow-hidden z-50 xl:justify-between xl:max-w-md xl:h-screen "
    >
      <div className="container mx-auto">
        <div
          className="w-full xl:flex-col bg-white/10 h-[70px] backdrop-blur-sm rounded-lg 
    xl:px-0 max-w-[460px] m-2 p-5 flex  xl:justify-center   xl:h-max justify-between text-[25px] items-center"
        >
          <Link
            to="home"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
            data-tooltip-target="tooltip-left"
            data-tooltip-placement="left"
            className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center hover:text-[#D55EFF] transition-all duration-300 group relative"
          >
            <div
              id="tooltip-left"
              role="tooltip"
              class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
            >
              Tooltip on left
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
            <HiHome />
          </Link>
          <Link
            to="about"
            activeClass="active"
            smooth={true}
            spy={true}
            data-tooltip-target="tooltip-left"
            data-tooltip-placement="left"
            className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center hover:text-[#D55EFF]"
          >
            <BiSolidInfoSquare />
          </Link>
          <Link
            to="services"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center hover:text-[#D55EFF]"
          >
            <BsFillBarChartFill />
          </Link>
          <Link
            to="tecnologies"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center hover:text-[#D55EFF]"
          >
            <HiMiniCodeBracket />
          </Link>
          <Link
            to="Team"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center hover:text-[#D55EFF]"
          >
            <HiMiniUsers />
          </Link>
          <Link
            to="contact"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center hover:text-[#D55EFF]"
          >
            <MdEmail />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
