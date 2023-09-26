import React from "react";
import { HiHome, HiMiniUsers, HiMiniCodeBracket } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";
import { BsFillBarChartFill } from "react-icons/bs";
import { Link } from "react-scroll";
import { BiSolidInfoSquare } from "react-icons/bi";
import { Tooltip } from "flowbite-react";

const Nav = () => {
  const isMobile = window.innerWidth <= 400;
  return (
    <nav
      className="fixed  items-center  xl:gap-y-10  lg:w-900
   xl:right-[0%] flex bottom-0 overflow-hidden z-50 xl:justify-between xl:max-w-md xl:h-screen w-full xl:w-fit"
    >
      <div className="container lg:w-[200px] lg:flex lg:justify-end flex justify-center  lg:mx-auto">
        <div
          className=" xl:flex-col bg-white/10 h-[70px] w-max lg:w-[80px] backdrop-blur-sm rounded-lg 
    xl:px-0  p-3 my-1  lg:m-2 lg:p-5 flex  xl:justify-center   xl:h-max justify-between text-[25px] items-center"
        >
          <Tooltip
            content="Home"
            placement="left"
            trigger="hover"
            animation="duration-500"
            className="hidden lg:block"
          >
            <Link
              to="home"
              activeClass="active"
              smooth={true}
              spy={true}
              className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center hover:text-[#D55EFF] transition-all duration-300 group relative"
            >
              <HiHome />
            </Link>
          </Tooltip>
          <Tooltip
            content="About Us"
            placement="left"
            trigger="hover"
            animation="duration-500"
            className="hidden lg:block"
          >
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
          </Tooltip>
          <Tooltip
            content="Services"
            placement="left"
            trigger="hover"
            animation="duration-500"
            className="hidden lg:block"
          >
          <Link
            to="services"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center hover:text-[#D55EFF]"
          >
            <BsFillBarChartFill />
          </Link>
          </Tooltip>
          <Tooltip
            content="Tecnologies"
            placement="left"
            trigger="hover"
            animation="duration-500"
            className="hidden lg:block"
          >
          <Link
            to="tecnologies"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center hover:text-[#D55EFF]"
          >
            <HiMiniCodeBracket />
          </Link>
          </Tooltip>
          <Tooltip
            content="Team"
            placement="left"
            trigger="hover"
            animation="duration-500"
            className="hidden lg:block"
          >
          <Link
            to="Team"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center hover:text-[#D55EFF]"
          >
            <HiMiniUsers />
          </Link>
          </Tooltip>
          <Tooltip
            content="Contact"
            placement="left"
            trigger="hover"
            animation="duration-500"
            className="hidden lg:block"
          >
          <Link
            to="contact"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-10}
            className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center hover:text-[#D55EFF]"
          >
            <MdEmail />
          </Link>
          </Tooltip>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
