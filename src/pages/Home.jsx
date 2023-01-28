import React from "react";
import Hero from "../components/Hero";
import BlogPost from "../components/BlogPost";
import About from "./AboutUs";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <Hero />
      <BlogPost />
      <About />
      <Contact />
    </div>
  );
};

export default Home;
