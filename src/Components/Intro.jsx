import React from "react";
import Titlle from "./Titlle";
import { RxDividerHorizontal } from "react-icons/rx";
import Button from "./Button";
function Intro() {
  return (
    <div className="intro-container">
      <Titlle
        textColor="#2F2C2F"
        fontSize="51px"
        fontWeight="400"
        content="HOW DID IT ALL START?"
        width="350px"
        marginLeft="390px"
      />
      <RxDividerHorizontal className="intro-icon" fontSize="80px" />
      <div className="intro">
        <h3>
          With thousands of golfers enjoying our courses every year, we’re sure
          we are the best club!
        </h3>
        <p>
          Founded by a band of Scotsmen, proud people of the country where the
          game itself was invented originally, this club stays true to the Old
          World traditions of the game.
        </p>
        <p>Also, we’re ver</p>
      </div>
      <Button
        color="white"
        width="150px"
        content=" ABOUT"
        marginLeft="590px"
        textAlign="center"
        fontSize="16px"
        fontWeight="700"
        letterSpacing="2px"
        bgColor="rgb(144, 179, 81)"
      />
      <Button
        color="black"
        width="150px"
        content=" GALLERY"
        marginLeft="760px"
        textAlign="center"
        fontSize="16px"
        fontWeight="700"
        letterSpacing="2px"
        marginTop="-30px"
        
        // bgColor="rgb(144, 179, 81)"
      />
    </div>
  );
}

export default Intro;
