import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import {HiStar, HiMiniUsers} from "react-icons/hi2";
import {BsSendFill} from 'react-icons/bs';



const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
  <section id='about' ref={ref} className='section'>
    <div className="flex container mx-auto">
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center
      lg:gap-x-20 lg:gap-y-0 h-screen'>
        <motion.div 
        variants={fadeIn('right', 0.3)}
        initial="hidden"
        whileInView={'show'}
        viewport={{once:false, amount:0.3}}
        className='flex-1'>
           <h2 className=' h2 text-accent font-semibold'>About Us.</h2>
          <h3 className=' h3 mb-4 '>We're a Data company with over 3 years of experience.
          </h3>
          <p className='mb-6'>
          I'm a Machine Learning Engineering professional with experience in Python, MLOps, MLflow, SQL, PowerBI, PySpark, Databricks, Git, Docker, Poetry, Azure Cloud, Azure DevOps, HTML, CSS, ReactJS and AngularJS.
          </p>
          <div className='flex gap-x-6 lg:gap-x-10 mb-12 lg:justify-center'>
            <div>
              <div className='text-[40px] font-tertiary text-gradient'>
               +{ inView ? <CountUp start={0} end={3} duration={3} /> : null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                 Years of <br />
                Experience
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient'>
               +{ inView ? <CountUp start={0} end={15} duration={3} /> : null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
              Projects <br />
              Completed
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient'>
               +{ inView ? <CountUp start={0} end={7} duration={3} /> : null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Models in  <br />
                Production
              </div>
            </div>
          </div>
          <div className=' flex gap-x-8 items-center mr-8 lg:justify-center'>
            <a href="https://www.linkedin.com/in/marivaldotorres/" target="_blank">
            <button className='btn btn-lg rounded-lg'>
              Contact us
            </button></a>
          </div>
        </motion.div>
        <motion.div
                variants={fadeIn('left', 0.5)}
                initial="hidden"
                whileInView={'show'}
                viewport={{once:false, amount:0.3}}
        className='flex-1 flex-col lg:space-y-5 '>
        <div className='flex flex-row items-center lg:h-full lg:py-5 hover:bg-gradient-to-br from-white/[0.1] via-[#484848]/[0.2] to-stone-950 bg-opacity-10 rounded-2xl shadow'>
         <div className="w-20 h-16 bg-[#340844] bg-opacity-50 text-[30px] rounded-full flex items-center justify-center mx-5 text-[#D55EFF] hover:text-white">
        <HiStar/>
         </div>

         <div className='mr-5'>
         <div className="text-white text-lg font-semibold capitalize leading-normal tracking-tight ">100% Secured</div>
         <div className=" text-white text-opacity-70 text-base font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nulla quis laborum.</div>
         </div>
        </div>
        <div className='flex flex-row  items-center h-full py-5 hover:bg-gradient-to-br from-white/[0.1] via-[#484848]/[0.2] to-stone-950 bg-opacity-10 rounded-2xl shadow'>
         <div className="w-20 h-16 bg-[#340844] bg-opacity-50 text-[30px] rounded-full flex items-center justify-center mx-5 text-[#D55EFF] hover:text-white">
        <HiMiniUsers />
         </div>

         <div className='mr-5'>
         <div className="text-white text-lg font-semibold capitalize leading-normal tracking-tight ">Lorem, ipsum.</div>
         <div className=" text-white text-opacity-70 text-base font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nulla quis laborum.</div>
         </div>
        </div>
        <div className='flex flex-row items-center h-full py-5  hover:bg-gradient-to-br from-white/[0.1] via-[#484848]/[0.2] to-stone-950 bg-opacity-10 rounded-2xl shadow'>
         <div className="w-20 h-16 bg-[#340844] bg-opacity-50 text-[30px] rounded-full flex items-center justify-center mx-5 text-[#D55EFF] hover:text-white">
        <BsSendFill/>
         </div>

         <div className='mr-5'>
         <div className="text-white text-lg font-semibold capitalize leading-normal tracking-tight ">100% Secured</div>
         <div className="text-white text-opacity-70 text-base font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nulla quis laborum.</div>
         </div>
        </div>
        </motion.div>
      </div>
    </div>
  </section>);
};

export default About;
