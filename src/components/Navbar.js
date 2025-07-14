import React, { useState } from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="navbar-header">
      <Link to="/">
        <h1> Portfolio</h1>
      </Link>
      <ul className={click ? "navbar-menu active" : "navbar-menu"}>
        <li>          
            <Link to="/"> Home </Link>
        </li>
        <li>
            <Link to="/project"> Project</Link>
        </li>
        <li>
            <Link to="/about"> About </Link>
        </li>
        <li>
            <Link to="/contact"> Contact </Link>
        </li>
      </ul>
      <div className="hamburgur" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
