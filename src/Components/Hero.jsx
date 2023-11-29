import React from "react";
import NavBar from "./NavBar";
import { RxDividerHorizontal } from "react-icons/rx";

function Hero() {
  return (
    <div className="hero-container">
      <div>
        <div className="logo">
          <img src="/assets/img/invert-logo.webp" alt="" />
        </div>
        <NavBar />
      </div>
      <div className="hero-items">
        <div className="hero-title">
          
          <p >BEST PLACE TO PLAY</p>
          <h1 >GOLF</h1>
        <RxDividerHorizontal className="hero-icon" fontSize="80px"   />
        </div>

        <p>
          Golf is a great sport, stress cure, business talk event & America’s
          finest pastime!
        </p>
      </div>
    </div>
  );
}

export default Hero;
