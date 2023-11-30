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
          <RxDividerHorizontal className="hero-icon" fontSize="80px" />
        </div>

        <p className="para">
          Golf is a great sport, stress cure, business talk event & America’s
          finest pastime!
        </p>

        <Button
          color="white"
          width="150px"
          content="JOIN US"
          marginLeft="840px"
          textAlign="center"
          fontSize="16px"
          fontWeight="700"
          letterSpacing="2px"
          bgColor="rgb(144, 179, 81)"
        />
      </div>
    </div>
  );
}

export default Hero;
