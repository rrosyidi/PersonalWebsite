import React from "react";
import ReactCardFlip from "react-card-flip";
import { useState } from "react";
import "./cardFlip.css";

const CardFlip = (props) => {
  const [flip, setFlip] = useState(false);

  const flipBack = () => {
    setFlip(true);
  };

  const flipFront = () => {
    setFlip(false);
  };

  return (
    <div className="cardContainer">
      <div style={{ margin: "40px" }}>
        <ReactCardFlip
          isFlipped={flip}
          flipDirection="vertical"
          flipSpeedBackToFront={0.35}
          flipSpeedFrontToBack={0.35}
        >
          <div className="cardFront" onMouseOver={flipBack}>
            {props.front}
          </div>

          <div className="cardFront cardBack" onMouseLeave={flipFront}>
            {props.back}
          </div>
        </ReactCardFlip>
      </div>
    </div>
  );
};

export default CardFlip;
