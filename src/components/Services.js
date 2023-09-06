import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import {
  Pagination,
  FreeMode,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";

import Dash from '../assets/Dash.png';
import MLE from '../assets/MLE.png';
import MLOps from '../assets/MLOps.png';
import AI from '../assets/AI.png';
import DS from '../assets/DS.png';
import DE from '../assets/DE.png';


const Services = () => {
  return (
    <section id="services" className=" section flex items-center h-screen ">
      <div className="container mx-auto my-auto h-full ">
        <div className=" flex flex-col m-2 mb-10  lg:bg-opacity-5 ">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className=" flex-1   lg:mb-0 "
          >
            <h2 className="h2 text-accent font-semibold m-5 ml-0">
              What We Do.
            </h2>
            <h3 className="h4  leading-tight mb-10 mr-3 pr-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae quia perferendis, enim sequi reiciendis ab ut sapiente
              harum quibusdam perspiciatis.
            </h3>
            {/* <a href="https://www.linkedin.com/in/marivaldotorres/" target="_blank" ><button className='btn btn-lg rounded-lg'  >See my work</button></a> */}
          </motion.div>
          <motion.div
                        variants={fadeIn("left", 0.5)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.3 }}
          className=" justify-center pb-5">
            <Swiper
              // install Swiper modules
              modules={[FreeMode, Autoplay, Pagination]}
              spaceBetween={30}
              slidesPerView={'1'}
              // centeredSlides={true}
              pagination={{ clickable: true }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
              scrollbar={{ draggable: true }}
              className="mySwiper  group   flex justify-center items-center  rounded-2xl h-96"
              freeMode={true}
              loop={true}
              grabCursor={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              <div className="  flex  w-max  h-full">
                <SwiperSlide>
                  <div className=" flex-col justify-center drop-shadow-lg p-5  w-full h-80   cursor-pointer duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 hover:bg-gradient-to-br from-white/[0.1] via-[#484848]/[0.2] to-stone-950 bg-opacity-10 rounded-2xl shadow ">
                    <div className="rounded-full flex items-center justify-center pb-3">
                    <img src={AI} alt="" width={100} height={100} className=" drop-shadow-lg img_shadow rounded-full" />
                    </div>
                    <div className=" text-lg text-accent h2 text-center tracking-wider  font-semibold  capitalize leading-normal ">
                      Artificial Intelligence
                    </div>
                    <p className="font-secondary leading-tight text-center">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ea est vitae doloribus aliquid omnis magnam neque
                      repudiandae porro. Laborum, a?
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className=" flex-col justify-center drop-shadow-lg p-5  w-full h-80   cursor-pointer duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 hover:bg-gradient-to-br from-white/[0.1] via-[#484848]/[0.2] to-stone-950 bg-opacity-10 rounded-2xl shadow ">
                    <div className="rounded-full flex items-center justify-center pb-3">
                    <img src={DS} alt="" width={100} height={100} className=" drop-shadow-lg img_shadow rounded-full" />
                    </div>
                    <div className="text-accent text-lg h2 text-center tracking-wider  font-semibold  capitalize leading-normal ">
                    Data Science
                    </div>
                    <p className="font-secondary leading-tight text-center">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ea est vitae doloribus aliquid omnis magnam neque
                      repudiandae porro. Laborum, a?
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className=" flex-col justify-center drop-shadow-lg p-5  w-full h-80   cursor-pointer duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 hover:bg-gradient-to-br from-white/[0.1] via-[#484848]/[0.2] to-stone-950 bg-opacity-10 rounded-2xl shadow ">
                    <div className="rounded-full flex items-center justify-center pb-3">
                    <img src={MLE} alt="" width={100} height={100} className=" drop-shadow-lg img_shadow rounded-full" />
                    </div>
                    <div className="text-accent text-lg h2 text-center tracking-wider  font-semibold  capitalize leading-normal ">
                      Machine Learning Engineering
                    </div>
                    <p className="font-secondary leading-tight text-center">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ea est vitae doloribus aliquid omnis magnam neque
                      repudiandae porro. Laborum, a?
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className=" flex-col justify-center drop-shadow-lg p-5  w-full h-80   cursor-pointer duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 hover:bg-gradient-to-br from-white/[0.1] via-[#484848]/[0.2] to-stone-950 bg-opacity-10 rounded-2xl shadow ">
                    <div className="rounded-full flex items-center justify-center pb-3">
                    <img src={MLOps} alt="" width={100} height={100} className=" drop-shadow-lg img_shadow rounded-full" />
                    </div>
                    <div className="text-accent text-lg h2 text-center tracking-wider  font-semibold  capitalize leading-normal ">
                    MLOps
                    </div>
                    <p className="font-secondary leading-tight text-center">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ea est vitae doloribus aliquid omnis magnam neque
                      repudiandae porro. Laborum, a?
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className=" flex-col justify-center drop-shadow-lg p-5  w-full h-80   cursor-pointer duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 hover:bg-gradient-to-br from-white/[0.1] via-[#484848]/[0.2] to-stone-950 bg-opacity-10 rounded-2xl shadow ">
                    <div className="rounded-full flex items-center justify-center pb-3">
                    <img src={Dash} alt="" width={100} height={100} className=" drop-shadow-lg img_shadow rounded-full" />
                    </div>
                    <div className="text-accent text-lg h2 text-center tracking-wider  font-semibold  capitalize leading-normal ">
                    Data Analytics
                    </div>
                    <p className="font-secondary leading-tight text-center">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ea est vitae doloribus aliquid omnis magnam neque
                      repudiandae porro. Laborum, a?
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className=" flex-col justify-center drop-shadow-lg p-5  w-full h-80   cursor-pointer duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 hover:bg-gradient-to-br from-white/[0.1] via-[#484848]/[0.2] to-stone-950 bg-opacity-10 rounded-2xl shadow ">
                    <div className="rounded-full flex items-center justify-center pb-3">
                    <img src={DE} alt="" width={100} height={100} className=" drop-shadow-lg img_shadow rounded-full" />
                    </div>
                    <div className="text-accent text-lg h2 text-center tracking-wider  font-semibold  capitalize leading-normal ">
                    Data Engineering
                    </div>
                    <p className="font-secondary leading-tight text-center">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ea est vitae doloribus aliquid omnis magnam neque
                      repudiandae porro. Laborum, a?
                    </p>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </motion.div>
          {/* <a href="https://www.linkedin.com/in/marivaldotorres/" target="_blank" ><button className='btn btn-lg rounded-lg'  >See my work</button></a> */}
        </div>
      </div>
    </section>
  );
};

export default Services;
