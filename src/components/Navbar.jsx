import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-stone-300 h-12">
      <div className="nav-items container mx-auto flex flex-row justify-between items-center pt-2">
        <div className="logo text-3xl font-medium">
          <p className="logo-title text-green-800">
            নি<span className="text-red-600">র্ভী</span>ক
          </p>
        </div>
        <div className="menu-items flex flex-row items-center gap-6 text-lg uppercase relative">
          <NavLink
            className=" text-green-900 hover:text-red-600 duration-300"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className=" text-green-900 hover:text-red-600 duration-300"
            to="/blog"
          >
            Blog
          </NavLink>
          <NavLink
            className=" text-green-900 hover:text-red-600 duration-300"
            to="/gallery"
          >
            Gallery
          </NavLink>
          <NavLink
            className=" text-green-900 hover:text-red-600 duration-300"
            to="/about"
          >
            About Us
          </NavLink>
          <NavLink
            className=" text-green-900 hover:text-red-600 duration-300"
            to="/contact"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
