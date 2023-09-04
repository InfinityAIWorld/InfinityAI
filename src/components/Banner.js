import React from 'react';
import {FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa';
import {TypeAnimation} from 'react-type-animation';
import { motion } from 'framer-motion';
import {fadeIn} from '../variants';
import Robo from '../assets/robot.png';
import Ball from '../assets/ball.png';
import Ball2 from '../assets/ball2.png';
import Ball3 from '../assets/ball3.png';
import Brain from '../assets/Brain.svg';
import ParticlesContainer from "../components/ParticlesContainer";


const Banner = () => {
  return (<div id='home' className='min-h-[85vh] h-screen  w-full lg:min-h-[78vh] flex items-center'>
    <div className="container mx-auto">
      <div className='flex  flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
        <div className=' flex-1 text-center font-secondary lg:text-left max-w-[600px] z-50'>
          {/* <motion.h1 
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          exit="exit"
          whileInView={'show'}
          viewport={{once:false, amount:0.7}}
          className=' text-[55px] font-bold leading-[0.8] lg:text-[100px] '>
            JUNIOR <span>TORRES</span>
            </motion.h1> */}
            <motion.div 
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            whileInView={'show'}
            viewport={{once:false, amount:0.7}}
            className='mb-6 mt-4 text-[32px] lg:text-[60px] font-secondary font-semibold uppercase
            leading=[1]'>
              <span className=' text-white mr-4 text-[55px] lg:text-[80px] '>We're 
              </span>
              <br/>
              <br/>
              <TypeAnimation  sequence={[
                'MLOps Engineer',
                2000,
                'ML Engineer',
                2000,
                'Data Scientist',
                2000,
                'Data Analyst',
                2000,
              ]}
              speed={50}
              className=' text-accent lg:text-[80px]'
              wrapper='span'
              repeat={Infinity}
              />
              
            </motion.div>
            <motion.p 
            variants={fadeIn('up', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{once:false, amount:0.7}}
            className=' mb-8 max-wlg mx-auto lg:mx-0'>
              Welcome to our website. Here, you'll find our projects, every position we've held, and all the services I offer to help you achieve your goals.</motion.p>
        <motion.div
        variants={fadeIn('up', 0.6)}
        initial="hidden"
        whileInView={'show'}
        viewport={{once:false, amount:0.7}}
        className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0 hover:z-50'>
          <a href="#" target="_blank" >
          <button className='btn btn-lg rounded-lg'>Contact US</button></a>
          <a className='text-gradient btn-link' href="#" target="_blank">
            Our Services
            </a>
        </motion.div>
        <motion.div
        variants={fadeIn('up', 0.7)}
        initial="hidden"
        whileInView={'show'}
        viewport={{once:false, amount:0.7}}
        className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:-mx-0'>
          <a href="#" target="_blank" className='text-[25px] hover:text-accent'>
          <FaGithub />
          </a>
          <a href="#" target="_blank" className=' text-[25px] hover:text-accent'>
          <FaLinkedin />
          </a>
          <a href="#" target="_blank" className=' text-[25px] hover:text-accent'>
          <FaInstagram />
          </a>
        </motion.div>
        </div>
        <div className="w-full h-full absolute right-0 bottom-0">
        <ParticlesContainer />
        <motion.div 
        className=''>
          <div className=' max-w-[737px] lg:max-w-[678px]  xl:flex xl:max-w-none
         hidden lg:flex absolute  -bottom-32 lg:bottom-[4%] lg:right-[-0%]'>
          <img src={Robo} alt="" />
          </div>
          <div className='animate-upAndDown1 w-full h-full max-w-[40px] max-h-[40px] hidden lg:flex absolute -bottom-32 lg:bottom-[35%] lg:right-[35%]'>
          <img src={Ball} alt="" />
          </div>
          <div className='animate-upAndDown1 w-full h-full max-w-[60px] max-h-[60px] hidden lg:flex absolute -bottom-32 lg:bottom-[45%] lg:right-[15%]'>
          <img src={Ball2} alt="" />
          </div>
          <div className='hidden lg:flex absolute animate-upAndDown1 w-full h-full max-w-[100px] max-h-[100px] -bottom-32 lg:bottom-[65%] lg:right-[38%]' >
          <img src={Ball3} alt="" />
          
          </div>
          <div className='hidden lg:flex absolute animate-upAndDown w-full h-full max-w-[300px] max-h-[300px]  -bottom-32 lg:bottom-[27%] lg:right-[20%]'>
          <img src={Brain} alt="" />
          </div>
        </motion.div>
        </div>
      </div>
      
    </div>
    </div>);
};

export default Banner;
