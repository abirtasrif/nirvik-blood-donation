import React from "react";
import { isWebpSupported } from "react-image-webp/dist/utils";

const Hero = () => {
  return (
    <div className="home container mx-auto flex flex-row mt-[6.5rem]">
      <div className="hero pl-6 pt-24">
        <div className="hero-cta">
          <h1 className="hero-cta-text uppercase text-7xl pt-9 leading-[4.5rem]">
            Save a life today.
            <br />
            Donate blood.
          </h1>
        </div>
        <p className="hero-description w-1/2 text-justify py-5">
          Blood donation is a selfless act that can make a huge difference in
          someone's life. By donating blood, you can help save lives and improve
          the health of your community.
        </p>
        <button className="button py-3 px-4 mt-5 text-white bg-red-600 hover:bg-[#544440] duration-300">
          Join Our Program
        </button>
      </div>
      <div className="hero-img-container">
        {isWebpSupported() ? (
          <img
            src="https://i.ibb.co/xs7QQVf/donate.webp"
            alt="a blood drop falling on a needy hand"
          />
        ) : (
          <img
            src="https://i.ibb.co/DkSNr27/donate.png"
            alt="a blood drop falling on a needy hand"
          />
        )}
      </div>
    </div>
  );
};

export default Hero;
