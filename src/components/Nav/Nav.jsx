import React from "react";

// Animation
import { motion } from "framer-motion";
import { animateScroll as scroll } from "react-scroll";

// Styles
import "./nav.css";

// Components
import MenuIcon from "../Menu/MenuIcon/MenuIcon";

const Nav = ({ menuOpen, setMenuOpen }) => {
  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={"nav-wrapper " + (menuOpen && "menuActive")}>
      <motion.div
        id="navbar"
        className={"nav-container"}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        <span
          className={"logo " + (menuOpen && "menuActive")}
          onClick={() => scroll.scrollToTop()}
        >
          &lt; Dileep/&gt;
        </span>
        <div id="button-container">
          <a href="https://drive.google.com/file/d/1VR9txcMVOiz6nnvHh2wXL8m-kUz3ilWX/view?usp=sharing" target="_blank">
          <button id="resume-button">
            <a >Resume</a>
          </button></a>
          <MenuIcon handleClick={handleClick} menuOpen={menuOpen} />
        </div>
      </motion.div>
    </div>
  );
};

export default Nav;
