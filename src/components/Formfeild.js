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
        robo: false,
        show: false,
        auth: true
    };

    //handle submit
    handleSubmit = async event => {
        event.preventDefault();
        const API_BASE_URL = await "https://robohash.org";
        let newRobot = this.state.newRobot;
        this.auth(newRobot.name, newRobot.url);

        if (this.state.auth) {
            newRobot.url = [
                ...newRobot.url,
                `${API_BASE_URL}/${newRobot.name}/bgset=bg1 `
            ];
            this.setState({ ...newRobot, robo: true });
            window.scrollTo(0, 480);
            this.clear();
        }
    };

    //clear input feild
    clear = () => {
        let newRobot = this.state.newRobot;
        newRobot.name = "";
        newRobot.job = "";
        this.setState({ newRobot });
    };
    //hidden Alert
    hiddenAlert = () => {
        this.setState({ show: false });
    };

    //remove card
    removeCard = name => {
        let res = this.state.newRobot.url.filter(item => {
            if (!item.includes(name)) {
                return item;
            }
        });
        let newRobot = this.state.newRobot;
        newRobot.url = res;
        this.setState({ newRobot });
    };
    //handle  auth
    auth = (name, url) => {
        url.map(item => {
            if (item.includes(name)) {
                alert("this name exist, please enter another name");
                this.setState({ auth: false });
            } else {
                alert("awesome you have not pick that name yet");
                this.setState({ auth: true });
            }
        });
    };

    //render form
    renderForm = () => {
        return (
            <div className="Form-container">
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
                    <Button
                        type="submit"
                        onClick={() => this.setState({ show: true })}
                    >
                        Submit
                    </Button>
                </Form>
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
                                    remove={this.removeCard}
                                    dislike={this.state.dislike}
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
