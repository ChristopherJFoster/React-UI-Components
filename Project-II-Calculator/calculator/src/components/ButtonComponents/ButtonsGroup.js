import React from "react";
import NumberButton from "./NumberButton";
import ActionButton from "./ActionButton";

const ButtonsGroup = props => {
  return (
    <div className="buttons-group">
      <ActionButton
        style={{ color: "turquoise" }}
        className="wide clear"
        action="clear"
      />
      <ActionButton action={"\u00F7"} />
      <NumberButton number="7" />
      <NumberButton number="8" />
      <NumberButton number="9" />
      <ActionButton action={"\u00D7"} />
      <NumberButton number="4" />
      <NumberButton style={{ color: "pink" }} number="5" />
      <NumberButton number="6" />
      <ActionButton action={"\u2212"} />
      <NumberButton number="1" />
      <NumberButton number="2" />
      <NumberButton number="3" />
      <ActionButton action="+" />
      <NumberButton className="wide" number="0" />
      <ActionButton action="=" />
    </div>
  );
};

export default ButtonsGroup;
