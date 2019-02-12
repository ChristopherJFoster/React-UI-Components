import React from "react";
import "./Header.css";

const moment = require("moment");

const timeStamp = moment()
  .format("D MMM")
  .toLowerCase();

const HeaderTitle = () => {
  return (
    <div className="header-title">
      <h2>Lambda School</h2>
      <h4>@LambdaSchool · {timeStamp}</h4>
    </div>
  );
};

export default HeaderTitle;
