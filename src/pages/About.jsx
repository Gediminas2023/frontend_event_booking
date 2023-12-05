import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import profile from "../assets/about.jpg";
import { motion } from "framer-motion";
import getScrollAnimation from "../components/getScrollAnimation";
import ScrollAnimationWrapper from "../components/ScrollAnimationWrapper";

const About = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <section className="about section" id="about">
      <ScrollAnimationWrapper>
        <motion.div variants={scrollAnimation}>
          <div className="container">
            <div className="section-header">
              <h3 className="title" data-title="Who Am I">
                About me
              </h3>
            </div>

            <div className="section-body grid-2">
              <div className="column-1 image">
                <img src={profile} className="z-index" alt="" />
              </div>

              <div className="column-2 ">
                <h3 className="title-sm dark:text-gray-400">Im Brigita</h3>
                <p className="text pb-10">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Praesentium distinctio doloribus quam? Ut, laudantium a
                  dolore, minima repudiandae iure iste molestiae exercitationem
                  earum neque tempora?
                </p>

                <Link to="/about/more" className="btn">
                  Read more
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
    </section>
  );
};

export default About;
