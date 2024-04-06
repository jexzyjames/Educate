import React, { useState, useEffect } from "react";
import { AppBar, Stack, Toolbar, Typography } from "@mui/material";
import { FaGraduationCap, FaAlignJustify } from "react-icons/fa";
import "./Navbar.css";
import { Link } from "react-scroll";
const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobile, setMobile] = useState(false);
  const toggleMenu = () => {
    mobile ? setMobile(false) : setMobile(true);
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, [mobile]);
  const [width] = useState(window.innerWidth);
 
  return (
    <AppBar
      className={`contain ${sticky ? "dark-nav" : "contain"}`}
      sx={{
        display: "flex",
        flexDirection: "row",
      }}
      direction="row"
    >
      <Stack
        display="flex"
        alignItems="center"
        justifyContent="center"
        direction="row"
        gap={2}
      >
        <FaGraduationCap color="white" fontSize={20} />
        <Typography variant="h6">Educate</Typography>
      </Stack>
      {width === 768 ? <FaAlignJustify cursor="pointer" /> : null}
      <Toolbar
        className={mobile ? 'hide' : 'ul'}
        sx={{
          gap: { lg: "15px", md: "5px" },
          position: { md: "fixed", sm: "fixed", xs: "fixed" },
          top: { md: "50px", sm: "50px", xs: "50px", lg: "0" },
          // right: { md: "-200px", sm: "-200px", xs: "-200px", lg: "0" },
          bottom: { md: "0", sm: "0px", xs: "0", lg: "auto" },
          transition: { md: "0.4s", sm: "0.4s", xs: "0.4s", lg: "auto" },
          paddingTop: { md: "70px", sm: "70px", xs: "70px", lg: "0" },
          display: { md: "flex", sm: "flex", xs: "flex" },
          background: {
            md: "#3aaf9f",
            sm: "#3aaf9f",
            xs: "#3aaf9f",
            lg: "none",
          },
          flexDirection: { md: "block", sm: "column", xs: "column", lg: "row" },
        }}
      >
        <li>
          <Link to="hero" offset={0} duration={500} smooth={true}>
            Home
          </Link>
        </li>
        <li>
          <Link to="programs" offset={-260} duration={500} smooth={true}>
            Programs
          </Link>
        </li>
        <li>
          <Link to="about" offset={-150} duration={500} smooth={true}>
            About
          </Link>
        </li>
        <li>
          <Link to="campus" offset={-260} duration={500} smooth={true}>
            Campus
          </Link>
        </li>
        <li>
          <Link to="testimonials" offset={-260} duration={500} smooth={true}>
            Testimonials
          </Link>
        </li>
        <li></li>
        <li
          style={{
            background: "#000",
            borderRadius: "20px",
            padding: "7px 14px",
            color: "black !important",
            fontSize: "14px",
          }}
        >
          <Link
            style={{ color: "black" }}
            to="contact"
            offset={-260}
            duration={500}
            smooth={true}
          >
            Contact
          </Link>
        </li>
      </Toolbar>
      <FaAlignJustify
        onClick={toggleMenu}
        className="menu-icon"
        cursor="pointer"
      />
    </AppBar>
  );
};

export default Navbar;
