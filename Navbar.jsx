import React from "react";
import "./Navbar.css";
import "../index.css";

const Navbar = () => {
  
  return (
    <>
      <nav className='container'>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Projects</li>
          <li>Get Involved</li>
          <li>Events</li>
          <li>Blogs</li>
          <li>
            <button className="btn">Contact Us</button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
