import React from "react";
import Titlle from "./Titlle";
import { RxDividerHorizontal } from "react-icons/rx";
function Service() {
  return (
    <div className="service-container">
      <Titlle
        textColor="#2F2C2F"
        fontSize="51px"
        fontWeight="400"
        content="CLUB
        SERVICES"
        width="350px"
        marginLeft="1190px"
        marginBottom="14px"
      />
      <RxDividerHorizontal className="service-icon" fontSize="80px" />
        <span className="number">02</span>
      <div className="service-titlle">
        <p>
          Our Golf Club is an exceptional recreation and dining destination for
          golf experience that can accommodate golfers of all levels. After your
          round, the Golf Club Restaurant is a great place to relax and take in
          the Sunset!
        </p>
      </div>
    </div>
  );
}

export default Service;
