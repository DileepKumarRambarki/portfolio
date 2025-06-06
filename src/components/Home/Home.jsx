import React from "react"
// import {Typed} from "react-typed"
import TypingText from "./TypingText"
// SVG
import man from "../../images/dev.svg"

// Animation
import { Link } from "react-scroll"
import { motion } from "framer-motion"

// CSS
import "./home.css"
import Button from "../Button/Button"

const contentVariants = {
  initial: {
    translateX: "-100vw",
    opacity: 0,
  },

  animate: {
    translateX: "0vw",
    opacity: 1,
    transition: {
      duration: 2,
      when: "beforeChildren",
    },
  },
}

const Home = () => {
  return (
    <section className="home-container" id="home" name="home">
      <motion.div
        className="content"
        variants={contentVariants}
        initial="initial"
        animate="animate"
      >
        <h2>Peace be upon you !</h2>
        <h1>I’m Dileep Kumar</h1>
        <p style={{ fontSize: "1.2rem ", fontWeight: "600" }}>
          I am a 
          <span style={{ marginLeft: "8px" }}>
            <TypingText texts={["Fullstack Developer", "Competitive Programmer"]}/>
          </span>
        </p>
        <Link
          // className="home-btn"
          to={"portfolio"}
          hashSpy={true}
          spy={true}
          smooth={true}
          delay={100}
          offset={-100}
          duration={500}
        >
          <Button text={"See my work"} type="submit" />
        </Link>
      </motion.div>

      <motion.div
        className="svg"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "mirror" }}
      >
        <img src={man} alt="Developer" />
      </motion.div>
    </section>
  )
}

export default Home
