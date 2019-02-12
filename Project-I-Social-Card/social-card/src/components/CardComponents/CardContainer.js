import React from "react";
import "./Card.css";
import CardBanner from "./CardBanner";
import CardContent from "./CardContent";

const CardContainer = () => {
  return (
    <a class="link" href="https://www.reactjs.org">
      <div className="card-container-full">
        <div className="card-container">
          <CardBanner />
          <CardContent />
        </div>
      </div>
    </a>
  );
};

export default CardContainer;
