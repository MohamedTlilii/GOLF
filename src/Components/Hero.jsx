import React from "react";
import NavBar from "./NavBar";
import { RxDividerHorizontal } from "react-icons/rx";
import Button from "./Button";

function Hero() {
  return (
    <div className="hero-container">
      <div>
        <div className="logo">
          <img
            style={{ width: "240px" }}
            src="/assets/img/invert-logo.webp"
            alt=""
          />
        </div>
        <NavBar />
      </div>
      <div className="hero-items">
        <div className="hero-title">
          <p>BEST PLACE TO PLAY</p>
          <h1>GOLF</h1>
          <div className="icon-box">
            <RxDividerHorizontal className="hero-icon" fontSize="80px" />
          </div>
        </div>
        <p className="para">
          Golf is a great sport, stress cure, business talk event & America’s
          finest pastime!
        </p>
        <Button color="white" bgColor="rgb(144, 179, 81)" content="JOIN US" />
      </div>
    </div>
  );
}

export default Hero;
