import React, { Component } from "react";
import { Card, Image, Grid } from "semantic-ui-react";
import "../App.scss";
class RoboCard extends Component {
  state = {
    name: this.props.name,
    job: this.props.job
  };

  render() {
    console.log(this.state, "<>>>sss");
    return (
      <Card style={{ marginTop: "2%" }}>
        {!this.props.url ? (
          <div
            style={{ backgroundColor: "orange", width: "20px", height: "20px" }}
          >
            Loading
          </div>
        ) : (
          <Image src={this.props.url} wrapped ui={false} />
        )}
        <Card.Content>
          <Card.Header>{this.state.name}</Card.Header>
          <Card.Description>
            {this.state.name} is a {this.state.job}.
          </Card.Description>
        </Card.Content>
      </Card>
    );
  }
}
export default RoboCard;