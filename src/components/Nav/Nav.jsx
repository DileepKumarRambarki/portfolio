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
          <a href="https://www.overleaf.com/download/project/67ea7e46b8bf720c1b198ef3/build/1973af77f38-b3648c8bd9916194/output/output.pdf?compileGroup=standard&clsiserverid=clsi-pre-emp-n2d-b-f-vdtv&enable_pdf_caching=true" target="_blank">
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
