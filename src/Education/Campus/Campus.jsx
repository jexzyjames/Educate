import React from "react";
import image from "../../Education/Images/download.jpg";
import image1 from "../../Education/Images/images.jfif";
import image2 from "../../Education/Images/graduate.jfif";
import image3 from "../../Education/Images/hero.jfif";
import "./Campus.css";
import { FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Campus = () => {
  return (
    // <AnimatePresence>
      <motion.div
        className="campus"
        initial={{ opacity: 0, translateY: -100 }}
        whileInView={{ opacity: 1, translateY: 0, transitionDelay: 2 }}
        whileFocus={{ opacity: 1, translateY: 0, transitionDelay: 2 }}
      >
        <motion.div
          initial={{ opacity: 0, translateY: -100 }}
          whileInView={{ opacity: 1, translateY: 0, transitionDelay: 2 }}
          whileFocus={{ opacity: 1, translateY: 0, transitionDelay: 2 }}
          className="gallery"
        >
          <img src={image} alt="" />
          <img src={image1} alt="" />
          <img src={image2} alt="" />
          <img src={image3} alt="" />
        </motion.div>
        <button>
          See more here <FaArrowRight />{" "}
        </button>
      </motion.div>
    // </AnimatePresence>
  );
};

export default Campus;
