import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-header">
      <Link to="/">
        <h1> Portfolio</h1>
      </Link>
      <ul className="navbar-menu">
        <li>
          <button className="primary-button">
            <Link to="/"> Home </Link>
          </button>
        </li>
        <li>
          <button className="primary-button">
            <Link to="/project"> Project</Link>
          </button>
        </li>
        <li>
          <button className="primary-button">
            <Link to="/about"> About </Link>
          </button>
        </li>
        <li>
          <button className="primary-button">
            <Link to="/contact"> Contact </Link>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
