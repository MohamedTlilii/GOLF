import React from "react";

function Button(props) {
  const buttonStyle = {
    color: props.color,
    backgroundColor: props.bgColor,
    width: props.width,
    marginLeft: props.marginLeft,
    marginTop : props.marginTop,
    marginBottom : props.marginBottom,
    textAlign: props.textAlign,
    fontSize: props.fontSize,
    fontWeight: props.fontWeight,
    letterSpacing: props.letterSpacing,
  };
  return (
    <div>
      <button style={buttonStyle} className="btn">
        {props.content}
      </button>
    </div>
  );
}

export default Button;
