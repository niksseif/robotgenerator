import React from "react";
import "../Robot.scss";

const FlyingRobots = () => {
  return (
    <div className="container">
      <div className="robo-container robo-container--one">
        <div className="robo robo--one"></div>
      </div>
      <div className="robo-container robo-container--two">
        <div className="robo robo--two"></div>
      </div>
      <div className="robo-container robo-container--three">
        <div className="robo robo--three"></div>
      </div>
      <div className="robo-container robo-container--four">
        <div className="robo robo--four"></div>
      </div>
    </div>
  );
};

export default FlyingRobots;
