import React, { useMemo } from "react";
import "./Contact.css";
import { motion } from "framer-motion";
import getScrollAnimation from "../../components/getScrollAnimation";
import ScrollAnimationWrapper from "../../components/ScrollAnimationWrapper";

const Contact = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <section className="contact" id="contact">
      <ScrollAnimationWrapper>
        <motion.div variants={scrollAnimation}>
          <div className="container">
            <div className="contact-box">
              <div className="contact-info">
                <h3 className="title">Get in touch</h3>
                <p className="text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <div className="information-wrap">
                  <div className="information">
                    <div className="contact-icon">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <p className="info-text">Vilniaus g, Vilnius</p>
                  </div>

                  <div className="information">
                    <div className="contact-icon">
                      <i className="fas fa-paper-plane"></i>
                    </div>
                    <p className="info-text">lorem@ipsum.com</p>
                  </div>

                  <div className="information">
                    <div className="contact-icon">
                      <i className="fas fa-phone-alt"></i>
                    </div>
                    <p className="info-text">+370-456-78922</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
    </section>
  );
};

export default Contact;
