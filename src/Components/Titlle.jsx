import React from "react";
function Titlle(props) {
  const titleStyle = {
    color: props.textColor,

    fontSize: props.fontSize,
    fontWeight: props.fontWeight,

    width: props.width,
    marginLeft: props.marginLeft,
  };
  return (
    <div className="tittle">
      <h2 style={titleStyle}>{props.content}</h2>
      
    </div>
   
  );
}

export default Titlle;
