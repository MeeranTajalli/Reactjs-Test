// Hero.js
import React from 'react';
import bitcoin from '../assets/jumbotron-img-cropped.png';

function Hero() {
  return (
    <section className="hero-section container-fluid d-flex flex-column flex-lg-row align-items-center justify-content-between pb-5">
      <div className="hero-content text-center text-lg-start">
        <h1 className="hero-title">
          Buy and exchange<br/>
          cryptocurrency<br/>
          instantly.
        </h1>
        <div className="hero-buttons mt-4 d-flex flex-wrap justify-content-center justify-content-lg-start">
          <button type="button" className="btn btn-primary join button">
            Get Started
          </button>
          <button type="button" className="btn btn-outline-dark">
            How it works?
          </button>
        </div>
      </div>
      <div className="hero-img-wrapper">
        <img src={bitcoin} alt="Bitcoin" className="hero-img"/>
      </div>
    </section>
  );
}

export default Hero;
