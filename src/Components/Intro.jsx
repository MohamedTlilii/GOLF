import React from "react";
import Titlle from "./Titlle";
import { RxDividerHorizontal } from "react-icons/rx";
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
    </div>
  );
}

export default Intro;
