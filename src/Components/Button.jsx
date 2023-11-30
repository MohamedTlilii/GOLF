import React from "react";

function Button(props) {
  return (
    <div>
      <button
        style={{ color: `${props.color}`, backgroundColor: `${props.bgColor}` }}
        className="app-btn"
        type="button"
      >
        {props.content}
      </button>
    </div>
  );
}

export default Button;
