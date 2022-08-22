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
          <div className="card" onMouseOver={flipBack}>
            <div className="card imgAndText">
              <img src={props.img} className="img"/>
              <p>{props.front}</p>
            </div>
          </div>

          <div className="card" onMouseLeave={flipFront}>
            <p className="backText">{props.back}</p>
          </div>
        </ReactCardFlip>
      </div>
    </div>
  );
};

export default CardFlip;
