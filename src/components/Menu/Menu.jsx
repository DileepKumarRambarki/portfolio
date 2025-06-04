import React from "react";
import "./menu.css";
// Router
import { NavLink } from "../Nav/NavLink/NavLink";
const Menu = ({ menuOpen, setMenuOpen }) => {
  const onResume=()=>{
    window.open("https://www.example.com", "_blank");
    navigate('https://x.com');
  }
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <NavLink text="Home" path="home" onClick={() => setMenuOpen(false)} />
        <NavLink
          text="Experience"
          path="experience"
          onClick={() => setMenuOpen(false)}
        />
        <NavLink
          text="Skills"
          path="skills"
          onClick={() => setMenuOpen(false)}
        />
        <NavLink
          text="Portfolio"
          path="portfolio"
          onClick={() => setMenuOpen(false)}
        />
        <NavLink
          text="Leetcode"
          path="leetcode"
          onClick={() => setMenuOpen(false)}
        />
        <li className="link">
          <a
            href="https://drive.google.com/file/d/1VR9txcMVOiz6nnvHh2wXL8m-kUz3ilWX/view?usp=sharing" 
            target="_blank"     
            rel="noopener noreferrer" 
            onClick={() => setMenuOpen(false)} 
            style={{
              textDecoration:'none',
              color:'#fffffb',
            }}
          >
            Resume
          </a>
        </li>
        <NavLink
          text="Contact"
          path="contact"
          onClick={() => setMenuOpen(false)}
        />
      </ul>
    </div>
  );
};

export default Menu;