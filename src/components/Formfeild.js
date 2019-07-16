import React, { Component } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import FlyingRobots from "./FlyingRobos";
import RoboCard from "./RoboCard";
import "../App.scss";
class FormFeild extends Component {
  state = {
    newRobot: {
      url: [],
      name: "",
      job: ""
    },
    loading: true,
    robo: false
  };

  //handle submit
  handleSubmit = async event => {
    event.preventDefault();
    const API_BASE_URL = await "https://robohash.org";
    let newRobot = this.state.newRobot;
    newRobot.url = [
      ...newRobot.url,
      `${API_BASE_URL}/${newRobot.name}bgset=bg1 `
    ];
    this.setState({ ...newRobot, robo: true });
    this.clear();
  };

  //clear input feild
  clear = () => {
    let newRobot = this.state.newRobot;
    newRobot.name = "";
    newRobot.job = "";
    this.setState({ newRobot });
  };

  //render form
  renderForm = () => {
    return (
      <div className="Form-container">
        <Segment className="devider">
          <Form className="form" onSubmit={this.handleSubmit}>
            <Form.Field>
              <label>What do you want to call your robot?</label>
              <input
                placeholder="Robot Name"
                name="name"
                value={this.state.newRobot.name}
                onChange={e => {
                  let newRobot = { ...this.state.newRobot };
                  newRobot.name = e.target.value;
                  this.setState({ newRobot });
                }}
              />
              <label>What your Robot do?</label>
              <input
                placeholder="What your robot do"
                name="Robot job"
                value={this.state.newRobot.job}
                onChange={e => {
                  let newRobot = { ...this.state.newRobot };
                  newRobot.job = e.target.value;
                  this.setState({ newRobot });
                }}
              />
            </Form.Field>
            <Button type="submit">Submit</Button>
          </Form>
        </Segment>
      </div>
    );
  };
  render() {
    const { newRobot, robo } = this.state;
    return (
      <div className="landing-container">
        <span className="App-header"> ROBOT GENERATOR </span>
        {this.renderForm()}
        <FlyingRobots />
        {robo ? (
          <div className="card-container">
            {newRobot.url.map(item => {
              return (
                <RoboCard
                  url={item}
                  name={this.state.name}
                  key={item}
                  job={this.state.job}
                />
              );
            })}
          </div>
        ) : null}
      </div>
    );
  }
}
export default FormFeild;
