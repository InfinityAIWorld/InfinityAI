import React from "react";
import { fadeIn } from "../variants";
import Junior from "../assets/junior.png";
import Romulo from "../assets/romulo.png";
import Joao from "../assets/joao.png";
import { motion } from "framer-motion";
import Bradesco from "../assets/bradesco-logo.png";
import Shopee from "../assets/shopee-logo.png";
import Modec from "../assets/modec-logo.png";
import Ipiranga from "../assets/ipiranga-logo.png";
import Porto from "../assets/porto-logo.png";


const Team = () => {
  return (
    <div
      className="section  lg:w-full lg:h-full translate-z-0
      "
      id="Team"
    >
      {/* xl:bg-explosion  xl:bg-cover xl:bg-right xl:bg-no-repeat bg-none */}
      <div className=" mx-auto flex justify-center items-center">
        <div className="container">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className=" flex-1 flex lg:justify-start p-5 items-center  lg:mb-4"
          >
            <div>
              <h2 className="h2 leading-tight flex font-semibold  text-accent">
                Who we're<span className="text-white ml-0 pl-0">.</span>
              </h2>
              <p className=" mb-14">
                We are a well-rounded team with over 10 years of experience,
                specializing in all domains of data.
              </p>
              <a href="" target="_blank">
                {/* <button className="btn btn-sm mb-2">View all projects</button> */}
              </a>
            </div>
          </motion.div>
          <div className="flex flex-col lg:flex-row  justify-center items-center p-5 pb-0">
            <div className="flex-1 flex flex-col gap-y-2">
              <div className="flex flex-col lg:flex-row h-full  gap-x-5">
                <motion.div
                  variants={fadeIn("left", 0.3)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  className=" flex-col justify-center drop-shadow-lg p-5  lg:w-81 h-94   cursor-pointer bg-gradient-to-br from-white/[0.1] via-[#484848]/[0.2] to-stone-950 bg-opacity-10 rounded-2xl shadow "
                >
                  <div className="rounded-full flex items-center justify-center pb-1">
                    <img
                      src={Joao}
                      alt=""
                      width={100}
                      height={100}
                      className=" drop-shadow-lg img_shadow rounded-2xl -mt-[5rem] "
                    />
                  </div>
                  <div className=" text-xl m-3 p-2 text-gradient text-center tracking-wider font-semibold  capitalize leading-normal ">
                    João Victor
                  </div>
                  <div className="flex items-center justify-center gap-x-1">
                    <p className="text-center leading-tight font-semibold mb-2 text-xs rounded-md py-1 px-2 bg-red-700 hover:bg-red-900 ">
                      Data Engineer
                    </p>
                  </div>
                  <p className="font-secondary leading-tight text-opacity-70 text-base font-normal text-center p-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                    est vitae doloribus aliquid omnis magnam neque repudiandae
                    porro. Laborum, a?
                  </p>
                </motion.div>
                <motion.div
                  variants={fadeIn("left", 0.6)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  className=" flex-col justify-center drop-shadow-lg p-5  lg:w-81 h-94   cursor-pointer  bg-gradient-to-br from-white/[0.1] via-[#484848]/[0.2] to-stone-950 bg-opacity-10 rounded-2xl shadow "
                >
                  <div className="rounded-full flex items-center justify-center pb-1">
                    <img
                      src={Junior}
                      alt=""
                      width={100}
                      height={100}
                      className=" drop-shadow-lg img_shadow rounded-2xl -mt-[5rem] "
                    />
                  </div>
                  <div className=" text-gradient text-xl m-3 p-2 text-center tracking-wider  font-semibold  capitalize leading-normal ">
                    Junior Torres
                  </div>
                  <div className="flex items-center justify-center gap-x-1">
                    <p className="text-center leading-tight font-semibold mb-2 text-xs rounded-md py-1 px-2 bg-cyan-700 hover:bg-cyan-900">
                      ML Engineer
                    </p>
                    <p className="text-center leading-tight font-semibold mb-2 text-xs rounded-md py-1 px-2 bg-emerald-700 hover:bg-emerald-900">
                      Data Analytics
                    </p>
                    <p className="text-center leading-tight font-semibold mb-2 text-xs rounded-md py-1 px-2 bg-violet-700 hover:bg-violet-900">
                      Data Scientist
                    </p>
                  </div>
                  <p className="font-secondary leading-tight  text-opacity-70 text-base font-normal text-center p-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                    est vitae doloribus aliquid omnis magnam neque repudiandae
                    porro. Laborum, a?
                  </p>
                </motion.div>
                <motion.div
                  variants={fadeIn("left", 0.9)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  className=" flex-col justify-center drop-shadow-lg p-5  lg:w-81 h-94   cursor-pointer bg-gradient-to-br from-white/[0.1] via-[#484848]/[0.2] to-stone-950 bg-opacity-10 rounded-2xl shadow "
                >
                  <div className="rounded-full flex items-center justify-center pb-1">
                    <img
                      src={Romulo}
                      alt=""
                      width={100}
                      height={100}
                      className=" drop-shadow-lg img_shadow rounded-2xl -mt-[5rem] "
                    />
                  </div>
                  <div className=" text-xl m-3 p-2 text-gradient text-center tracking-wider font-semibold  capitalize leading-normal ">
                    Romulo Amaral
                  </div>
                  <div className="flex items-center justify-center gap-x-1">
                    <p className="text-center leading-tight font-semibold mb-2 text-xs rounded-md py-1 px-2 bg-amber-700 hover:bg-amber-900 ">
                      AI Engineer
                    </p>
                    <p className="text-center leading-tight font-semibold mb-2 text-xs rounded-md py-1 px-2 bg-violet-700 hover:bg-violet-900 ">
                      Data Scientist
                    </p>
                    <p className="text-center leading-tight font-semibold mb-2 text-xs rounded-md py-1 px-2 bg-cyan-700 hover:bg-cyan-900 ">
                      ML Engineer
                    </p>
                  </div>
                  <p className="font-secondary leading-tight text-opacity-70 text-base font-normal text-center p-1">
                    Having over 6 years of experience, bringing innovative
                    solutions, leveraging the latest updates in AI for companies
                    in the US, Europe and Brazil.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className=" flex-1 flex justify-center lg:py-2 lg:px-5 "
          >
            <div className="flex-1 flex lg:flex-row gap-x-5 gap-y-5">
              <div className="flex  justify-start items-center w-1/5 p-3 ">
                <img src={Shopee} width={150} alt="Logo Shopee" className="" />
              </div>
              <div className="flex justify-center items-center w-1/5 p-3 ">
                <img src={Modec} width={150} alt="" className="" />
              </div>
              <div className="flex justify-end items-center w-1/5 p-3 ">
                <img src={Ipiranga} width={150} alt="" className="" />
              </div>
              <div className="flex justify-end items-center w-1/5 p-3 ">
                <img src={Bradesco} width={150} alt="" className="" />
              </div>
              <div className="flex justify-end items-center w-1/5 p-3 ">
                <img src={Porto} width={150} alt="" className="" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Team;
