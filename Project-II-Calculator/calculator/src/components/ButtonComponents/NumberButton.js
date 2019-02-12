import React from "react";

const NumberButton = props => {
  return (
    <div
      className={`button number-button ${props.className}`}
      style={props.style}
    >
      <p>{props.number}</p>
    </div>
  );
};

export default NumberButton;
