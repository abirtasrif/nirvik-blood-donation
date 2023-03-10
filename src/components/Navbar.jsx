import React from "react";
import { NavLink } from "react-router-dom";
import { BsFillDropletFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="navbar fixed top-0 w-full z-30">
      <div className="blank h-10"></div>
      <div className="nav-items container mx-auto flex flex-row justify-between items-center ">
        <div className="left h-16 pl-5 py-4 rounded-tl-lg ">
          <div className="logo text-3xl font-medium">
            <p className="logo-title flex flex-row">
              <span>
                <BsFillDropletFill className="text-red-600" />
              </span>
              <span className="nirvik uppercase pb-2">nirvik</span>
            </p>
          </div>
        </div>
        <div className="right h-16 py-5 pr-6">
          <div className="menu-items flex flex-row items-center gap-6 text-lg uppercase justify-end">
            <NavLink className="hover:text-red-600 duration-300" to="/">
              Home
            </NavLink>
            <NavLink className="hover:text-red-600 duration-300" to="/blog">
              Blog
            </NavLink>
            <NavLink className="hover:text-red-600 duration-300" to="/about">
              About Us
            </NavLink>
            <NavLink className="hover:text-red-600 duration-300" to="/contact">
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
