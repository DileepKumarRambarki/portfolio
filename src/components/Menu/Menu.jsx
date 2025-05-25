import React from "react";
import "./menu.css";
// Router
import { NavLink } from "../Nav/NavLink/NavLink";

const Menu = ({ menuOpen, setMenuOpen }) => {
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