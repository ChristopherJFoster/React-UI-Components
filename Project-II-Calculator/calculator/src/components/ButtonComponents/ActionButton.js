import React from "react";

const ActionButton = props => {
  return (
    <div
      className={`button action-button ${props.className}`}
      style={props.style}
    >
      <p>{props.action}</p>
    </div>
  );
};

export default ActionButton;
