import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import profile from "../assets/profile.png";
import { motion } from "framer-motion";
import getScrollAnimation from "../components/getScrollAnimation";
import ScrollAnimationWrapper from "../components/ScrollAnimationWrapper";

const Hero = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="home">
      <ScrollAnimationWrapper>
        <motion.div
          className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
          variants={scrollAnimation}
        >
          <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
            <h1 className="header-title">Feel The Beauty</h1>
            <p className="text-black-500 mt-4 mb-6">
              You can book appoitment now
            </p>
            <Link
              to="/calendar"
              className={
                "py-3 lg:py-4 px-12 lg:px-16 text-gray-100 font-semibold rounded-lg bg-pink-500 hover:shadow-pink-md hover:bg-pink-600 hover:text-gray-600 transition-all outline-none "
              }
            >
              Book Now
            </Link>
          </div>
          <div className="flex w-full">
            <motion.div className="h-full w-full" variants={scrollAnimation}>
              <img src={profile} alt="" />
            </motion.div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
    </div>

    // <div className="container grid-2">
    //   <div className="column-1">
    //     <h1 className="header-title">Feel The Beauty</h1>
    //     <p className="text pb-14">You can book appoitment now</p>
    //     <Link to="/calendar" className="btn">
    //       Book Now
    //     </Link>

    //     <div className="social">
    //       <Link to="#">
    //         <i className="fab fa-facebook-f"></i>
    //       </Link>
    //       <Link to="#">
    //         <i className="fab fa-youtube"></i>
    //       </Link>
    //       <Link to="#">
    //         <i className="fab fa-instagram"></i>
    //       </Link>
    //       <Link to="#">
    //         <i className="fab fa-linkedin-in"></i>
    //       </Link>
    //     </div>
    //   </div>

    //   <div className="column-2 image ">
    //     <img src={profile} className="img-element z-index " alt="" />
    //   </div>
    // </div>
  );
};

export default Hero;
