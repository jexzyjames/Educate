import React, { useState, useEffect } from "react";
import { Stack, Typography } from "@mui/material";
import "./Hero.css";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: -100 }}
      whileInView={{ opacity: 1, translateY: 0, transitionDelay: 2 }}
      whileFocus={{ opacity: 1, translateY: 0, transitionDelay: 2 }}
      className="hero container"
      id="hero"
    >
      <Stack
        spacing={2}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: "25px",
              sm: "30px",
              md: "36px",
              lg: "50px",
              xl: "60px",
            },
            fontWeight: "600",
            maxWidth: "800px",
            textAlign: "center",
          }}
          variant="h2"
        >
          We Ensure better education for a better world
        </Typography>
        <Typography
          sx={{
            maxWidth: "800px",
            margin: "10px auto 20px",
            fontSize: "15px",
            textAlign: "center",
          }}
          variant="h6"
        >
          Our cutting edge curriculum is designed to empower students with the
          knowlwedge, skills and experiences needed to excel at the dynamic
          field of education.
        </Typography>
        <button className="buttons">
          Explore More <FaArrowRight />
        </button>
      </Stack>
    </motion.div>
  );
};

export default Hero;
