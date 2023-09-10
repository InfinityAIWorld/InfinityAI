import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import CircleSm from "../assets/circle-sm.png";
import CircleMd from "../assets/circle-md.png";
import CircleLg from "../assets/circle-lg.png";

const Tecnologies = () => {
  return (
    <section
      id="tecnologies"
      className=" h-screen  w-full lg:min-h-[78vh] flex items-center justify-center"
    >
      <div className=" container flex flex-row max-auto xl:mx-0">
        <motion.div 
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="flex items-center justify-center w-1/2 ">
          <div className="flex-1  items-center justify-center p-5">
          <h2 className=" h2  text-accent font-semibold">We Know<span className="text-white ml-0 pl-0">.</span></h2>
            <h3 className=" h3 mb-4 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, qui.
            </h3>
            <p className="mb-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat aspernatur sed, animi molestias illo delectus.            </p>
          </div>
        </motion.div>
        <motion.div
        variants={fadeIn("left", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="flex w-1/2 ">
        <div className="relative flex justify-center items-center">
          <div className=" relative flex justify-center items-center">
          <img
            src={CircleLg}
            alt=""
            className="animate-spin-slow w-[600px] h-[600px]  "
          />
          <img
            src={CircleMd}
            alt=""
            className="animate-spinslowant absolute w-[500px] h-[500px] "
          />
          <img
            src={CircleSm}

            alt=""
            className="animate-spin-slow absolute  w-[250px] h-[250px] "
          />         
          </div>
        </div>
        
        </motion.div>
      </div>
    </section>
  );
};
export default Tecnologies;
