import React from "react";


const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <a href="#home">NEW VEHICLES</a>
        </li>
        <li className="navbar-item">
          <a href="#products">PRE-OWNED</a>
        </li>
        <li className="navbar-item">
          <a href="#about">HYBRIDS</a>
        </li>
        <li className="navbar-item">
          <a href="#contact">SPECIALS</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;