import React from "react";
import { RxDividerHorizontal } from "react-icons/rx";

function Titlle(props) {
  return (
    <div className="tittle">
      <h2
        style={{ color: `${props.color}`, backgroundColor: `${props.bgColor}` }}
      >
        {props.content}
      </h2>
      <RxDividerHorizontal className="icon-titlle"
        
      />
    </div>
  );
}

export default Titlle;
