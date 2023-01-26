import React from "react";
import { isWebpSupported } from "react-image-webp/dist/utils";

const Home = () => {
  return (
    <div className="home container mx-auto flex flex-row mt-[5.5rem]">
      <div className="hero pr-6">
        <div className="hero-cta">
          <h1 className="hero-cta-text uppercase text-6xl pt-10">
            Save a life today.
            <br />
            Donate blood.
          </h1>
        </div>
        <p className="hero-description">
          Blood donation is a selfless act that can make a huge difference in
          someone's life. By donating blood, you can help save lives and improve
          the health of your community.
        </p>
        <button>Join Our Program</button>
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

export default Home;
