import React from "react";
import Titlle from "./Titlle";

function Service() {
  return (
    <div className="service-container">
      <div className="service-titlle-icon">
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
      
      </div>
       
       <div className="service-titlle-number">
       <span className="number" >02</span>
       
       <p className="service-titlle">
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
