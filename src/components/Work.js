import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Junior from "../assets/junior.png";
import Romulo from "../assets/romulo.png";
import Joao from "../assets/joao.png";

const Work = () => {
  return (
    <section
      className="section bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat lg:w-screen lg:h-screen translate-z-0"
      id="Team"
    >
      <div className=" mx-auto flex justify-center items-center">
        <div className="container">
          <div className="flex flex-col lg:flex-row  justify-center items-center">
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className=" flex-1 flex flex-col gap-y-12 mb-10 max-w-sm lg:mb-0"
            >
              <div>
                <h2 className="h2 leading-tight font-semibold text-accent">
                  Who we're.
                </h2>
                <p className="max-w-sm mb-16">
                We are a well-rounded team with over 10 years of experience, specializing in all domains of data.
                </p>
                <a href="" target="_blank">
                  {/* <button className="btn btn-sm mb-2">View all projects</button> */}
                </a>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn("left", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="flex-1 flex flex-col gap-y-2"
            >
              <div className="flex flex-col lg:flex-row h-full  gap-x-3">
                <div className=" flex-col justify-center drop-shadow-lg p-5  w-full h-94   cursor-pointer duration-500 bg-gradient-to-br from-white/[0.1] via-[#484848]/[0.2] to-stone-950 bg-opacity-10 rounded-2xl shadow ">
                  <div className="rounded-full flex items-center justify-center pb-3">
                    <img
                      src={Joao}
                      alt=""
                      width={100}
                      height={100}
                      className=" drop-shadow-lg img_shadow rounded-2xl -mt-[5rem]"
                    />
                  </div>
                  <div className=" text-lg text-accent h2 text-center tracking-wider  font-semibold  capitalize leading-normal ">
                    João Victor
                  </div>
                  <p className="text-center leading-tight font-semibold mb-2">
                    Data Engineer
                  </p>
                  <p className="font-secondary leading-tight text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                    est vitae doloribus aliquid omnis magnam neque repudiandae
                    porro. Laborum, a?
                  </p>
                </div>
                <div className=" flex-col justify-center drop-shadow-lg p-5  w-full h-94   cursor-pointer  bg-gradient-to-br from-white/[0.1] via-[#484848]/[0.2] to-stone-950 bg-opacity-10 rounded-2xl shadow ">
                  <div className="rounded-full flex items-center justify-center pb-3">
                    <img
                      src={Junior}
                      alt=""
                      width={100}
                      height={100}
                      className=" drop-shadow-lg img_shadow rounded-2xl -mt-[5rem] "
                    />
                  </div>
                  <div className=" text-lg text-accent h2 text-center tracking-wider  font-semibold  capitalize leading-normal ">
                    Junior Torres
                  </div>
                  <p className="text-center leading-tight font-semibold mb-2">
                    ML Engineer
                  </p>
                  <p className="font-secondary leading-tight text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                    est vitae doloribus aliquid omnis magnam neque repudiandae
                    porro. Laborum, a?
                  </p>
                </div>
                <div className=" flex-col justify-center drop-shadow-lg p-5  w-full h-94   cursor-pointer bg-gradient-to-br from-white/[0.1] via-[#484848]/[0.2] to-stone-950 bg-opacity-10 rounded-2xl shadow ">
                  <div className="rounded-full flex items-center justify-center pb-3">
                    <img
                      src={Romulo}
                      alt=""
                      width={100}
                      height={100}
                      className=" drop-shadow-lg img_shadow rounded-2xl -mt-[5rem] "
                    />
                  </div>
                  <div className=" text-lg text-accent h2 text-center tracking-wider  font-semibold  capitalize leading-normal ">
                    Romulo Amaral
                  </div>
                  <p className="text-center leading-tight font-semibold mb-2">
                    AI Engineer/ Data Scientist/ ML Engineer
                  </p>
                  <p className="font-secondary leading-tight text-center">
                  Having over 6 years of experience, bringing innovative solutions, leveraging the latest updates in AI for companies in the US, Europe and Brazil.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
