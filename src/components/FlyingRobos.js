import React, { Component } from "react";
import Robot1 from "../Assets/robot (1).png";
import Robot2 from "../Assets/robot (2).png";
import Robot3 from "../Assets/robot.png";
import { Image } from "semantic-ui-react";
import "../Robot.scss";
const FlyingRobots = () => {
  return (
    <div className="container">
      <div class="robo-container robo-container--one">
        <div class="robo robo--one"></div>
      </div>
      <div class="robo-container robo-container--two">
        <div class="robo robo--two"></div>
      </div>
      <div class="robo-container robo-container--three">
        <div class="robo robo--three"></div>
      </div>
      <div class="robo-container robo-container--four">
        <div class="robo robo--four"></div>
      </div>
    </div>
  );
};

export default FlyingRobots;
