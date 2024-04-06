import React, { useState, useEffect } from "react";
import { Stack, Typography, Container } from "@mui/material";
import "./Programs.css";
// import image from "../../Food App/image.jpg";
import graduate from "../../images.jfif";
import program from "../../picture.jfif";
import download from "../../graduate.jfif";
import { FaGraduationCap } from "react-icons/fa";

const Programs = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={graduate} alt="" />
        <div className="caption">
          <FaGraduationCap fontSize="30px" color="white" />
          <p>Masters</p>
        </div>
      </div>
      <div className="program">
        <img src={download} alt="" />
        <div className="caption">
          <FaGraduationCap fontSize="30px" color="white" />
          <p>Graduation</p>
        </div>
      </div>
      <div className="program">
        <img src={program} alt="" />
        <div className="caption">
          <FaGraduationCap fontSize="30px" color="white" />
          <p>Some Text</p>
        </div>
      </div>
    </div>
  );
};
export default Programs;
