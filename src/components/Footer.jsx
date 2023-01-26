import React from "react";

const Footer = () => {
  return (
    <div className="bg-stone-300 h-12  text-center container mx-auto">
      <span className="container mx-auto">
        {new Date().getFullYear()} All rights reserved &copy;
        <b>Abir Tasrif Anto</b>
      </span>
    </div>
  );
};

export default Footer;
