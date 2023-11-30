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
<RxDividerHorizontal className="service-icon" fontSize="80px" />    </div>
  );
}

export default Service;
