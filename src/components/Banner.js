import React from "react";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Robo from "../assets/robot.png";
import Ball from "../assets/ball.png";
import Ball2 from "../assets/ball2.png";
import Ball3 from "../assets/ball3.png";
import Brain from "../assets/Brain.svg";
import ParticlesContainer from "../components/ParticlesContainer";
import { BsArrowRight } from "react-icons/bs";
import Logo from "../assets/logo.svg"; //

const Banner = () => {
  return (
    <div
      id="home"
      className="min-h-[85vh] lg:h-screen  lg:w-full lg:min-h-[78vh] flex items-center"
    >
      <div className="container mx-auto ">
        <div className="flex  flex-1 flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className=" flex-1 text-center font-secondary lg:text-left max-w-[800px] z-50">
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 mt-4 text-[32px] lg:text-[60px] font-secondary font-semibold uppercase
            leading=[1] flex  items-center flex-col lg:items-start"
            >
              <div className=" lg:w-[400px]  w-[270px]  ">
                <a href="" target="_blank">
                  <img src={Logo} alt="" />
                </a>
              </div>
              <div className=" mb-3 text-white font-primary text-[32px] lg:text-5xl ">
                We are
              </div>
              <TypeAnimation
                sequence={[
                  "MLOps Engineers",
                  2000,
                  "ML Engineers",
                  2000,
                  "Data Scientists",
                  2000,
                  "Data Analysts",
                  2000,
                  "Data Engineers",
                  2000,
                  "AI Engineers",
                  2000,
                ]}
                speed={50}
                className=" text-accent font-primary tracking-[10%] !text-[32px] font-semibold lg:!text-5xl"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className=" mb-8 max-w-[390px] mx-auto lg:mx-0 lg:max-w-[600px] p-2"
            >
              Welcome to our website. Here, you will find out about all the
              services that we offer, as well as learn a little more about what
              we have accomplished for our clients in previous years!
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0 hover:z-50"
            >
              <Link smooth={true} to="contact" spy={true} >
                <button  className="btn btn-lg rounded-lg  max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
                  <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                    Contact US
                  </span>
                  <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
                </button>
              </Link>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
              <Link 
              className="text-gradient btn-link" 
              to="services"
              spy={true}
              smooth={true}>
                Our Services
              </Link>
            </motion.div>
          </div>
          <div className="w-full h-full absolute right-0 bottom-0">
            <ParticlesContainer />
            <motion.div className="">
              <div
                className="   xl:flex xl:max-w-none hidden lg:flex absolute  -bottom-32 lg:bottom-[-4%] lg:right-[-0%] mix-blend-lighten"
              >
                <img src={Robo} alt="" />
              </div>
              <div className="animate-upAndDown1 w-full h-full max-w-[40px] max-h-[40px] hidden lg:flex absolute -bottom-32 lg:bottom-[35%]  lg:right-[40%]">
                <img src={Ball} alt="" />
              </div>
              <div className="animate-upAndDown1 w-full h-full max-w-[60px] max-h-[60px] hidden lg:flex absolute -bottom-32 lg:bottom-[45%]   lg:right-[20%]">
                <img src={Ball2} alt="" />
              </div>
              <div className="hidden lg:flex absolute animate-upAndDown1 w-full h-full max-w-[100px] max-h-[100px] -bottom-32 lg:bottom-[65%] lg:right-[43%]">
                <img src={Ball3} alt="" />
              </div>
              <div className="hidden lg:flex absolute animate-upAndDown w-full h-full max-w-[300px] max-h-[300px]  -bottom-32 lg:bottom-[32%] lg:right-[17%]">
                <img src={Brain} alt="" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
