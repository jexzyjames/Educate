import React, { useRef, useState } from "react";
import "./Testimonials.css";
import {
  FaArrowRight,
  FaArrowAltCircleRight,
  FaArrowAltCircleLeft,
  FaArrowCircleRight,
} from "react-icons/fa";
import img from "../../Education/Images/picture.jfif";
import img1 from "../../Education/Images/download.jfif";
import img2 from "../../Education/Images/picture.jfif";
import img3 from "../../Education/Images/images.jfif";
import {motion} from 'framer-motion'
const Testimonials = () => {
  const slider = useRef();
  let tx = 0;
  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  return (
    <motion.div
    initial={{opacity:0, translateY:-100}}
    whileInView={{opacity:1, translateY:0, transitionDelay:2}}
    whileFocus={{opacity:1, translateY:0, transitionDelay:2}} className="testimonials">
      <img src="" alt="" />
      <FaArrowAltCircleLeft onClick={slideBackward} className="prev" />
      <FaArrowAltCircleRight onClick={slideForward} className="next" />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={img} alt="" />
                <div>
                  <h3>Tom Brown</h3>
                  <span>Educate, USA</span>
                </div>
              </div>

              <p>
                Choosing to pursue my degree at Educate was one of the best
                decisions i've ever made. The supportive community,
                state-of-the-art facilities, and commitment ton academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={img1} alt="" />
                <div>
                  <h3>Lennon Rice</h3>
                  <span>Educate, USA</span>
                </div>
              </div>

              <p>
                Choosing to pursue my degree at Educate was one of the best
                decisions i've ever made. The supportive community,
                state-of-the-art facilities, and commitment ton academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={img2} alt="" />
                <div>
                  <h3>John Maxwell</h3>
                  <span>Educate, USA</span>
                </div>
              </div>

              <p>
                Choosing to pursue my degree at Educate was one of the best
                decisions i've ever made. The supportive community,
                state-of-the-art facilities, and commitment ton academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={img3} alt="" />
                <div>
                  <h3>Thomas Jackson</h3>
                  <span>Educate, USA</span>
                </div>
              </div>

              <p>
                Choosing to pursue my degree at Educate was one of the best
                decisions i've ever made. The supportive community,
                state-of-the-art facilities, and commitment ton academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Testimonials;
