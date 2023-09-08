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
          <h3 className=' h3 mb-4 '>We are a Data company with projects across the US, Europe and South America!
          </h3>
          <p className='mb-6'>
          We possess expertise in various domains including Artificial Intelligence, Data Engineering, Data Science, MLOps, Large Language Models, Data Analytics, among others!
          </p>
          <div className='flex gap-x-6 lg:gap-x-10 mb-12 lg:justify-center'>
            <div>
              <div className='text-[40px] font-tertiary text-gradient'>
               +{ inView ? <CountUp start={0} end={10} duration={3} /> : null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                 Years of <br />
                Experience
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient'>
               +{ inView ? <CountUp start={0} end={100} duration={3} /> : null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
              Millions in Revenue <br />
              for our Clients
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient'>
               +{ inView ? <CountUp start={0} end={10} duration={3} /> : null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Companies<br />
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
         <div className="text-white text-lg font-semibold capitalize leading-normal tracking-tight ">International Experience</div>
         <div className=" text-white text-opacity-70 text-base font-normal">We have collaborated with prestigious companies such as PokerStars, Shopee, Bradesco, Ipiranga, among many others.</div>
         </div>
        </div>
        <div className='flex flex-row  items-center h-full py-5 hover:bg-gradient-to-br from-white/[0.1] via-[#484848]/[0.2] to-stone-950 bg-opacity-10 rounded-2xl shadow'>
         <div className="w-20 h-16 bg-[#340844] bg-opacity-50 text-[30px] rounded-full flex items-center justify-center mx-5 text-[#D55EFF] hover:text-white">
        <HiMiniUsers />
         </div>

         <div className='mr-5'>
         <div className="text-white text-lg font-semibold capitalize leading-normal tracking-tight ">State-of-the-art solutions</div>
         <div className=" text-white text-opacity-70 text-base font-normal">Our expertise in virtually all fields of data positions us as one of the few who can deliver top-quality solutions in every area. Need a chatbot? No worries—we can develop both the backend and the frontend. We've got you covered!</div>
         </div>
        </div>
        <div className='flex flex-row items-center h-full py-5  hover:bg-gradient-to-br from-white/[0.1] via-[#484848]/[0.2] to-stone-950 bg-opacity-10 rounded-2xl shadow'>
         <div className="w-20 h-16 bg-[#340844] bg-opacity-50 text-[30px] rounded-full flex items-center justify-center mx-5 text-[#D55EFF] hover:text-white">
        <BsSendFill/>
         </div>

         <div className='mr-5'>
         <div className="text-white text-lg font-semibold capitalize leading-normal tracking-tight ">100% Secured</div>
         <div className="text-white text-opacity-70 text-base font-normal">We are committed to delivering outstanding results in the best way possible. If you're not completely satisfied, we offer a 100% money-back guarantee. This is a testament to the supreme confidence we have in our capabilities.</div>
         </div>
        </div>
        </motion.div>
      </div>
    </div>
  </section>);
};

export default About;
