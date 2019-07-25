import React, { Component } from "react";
import { Card, Image, Icon } from "semantic-ui-react";
import "../App.scss";
class RoboCard extends Component {
    state = {
        name: this.props.name,
        job: this.props.job,
        likeCount: 0,
        heart: false,
        comment: ""
    };
    addLike = event => {
        let like = this.state.likeCount;
        this.setState({ likeCount: (like += 1), heart: !this.state.heart });
    };
    removeLike = event => {
        let like = this.state.likeCount;
        this.setState({ likeCount: (like -= 1), heart: false });
    };

    render() {
        return (
            <Card style={{ marginTop: "2%" }}>
                {!this.props.url ? (
                    <div style={{ width: "20px", height: "20px" }}>
                        Loading...
                    </div>
                ) : (
                    <Image
                        src={this.props.url}
                        wrapped
                        ui={false}
                        style={{ margin: "2%" }}
                    />
                )}
                <Card.Content>
                    <Card.Header>{this.state.name}</Card.Header>
                    <Card.Description>
                        {this.state.name} is a {this.state.job}.
                    </Card.Description>
                    {/* <input
              placeholder="What your robot do"
            name="Robot job"
            value={this.state.comment}
            onChange={e => {
              this.setState({ comment : e.target.value});
            }}
          >

          </input> */}
                    <Icon
                        onClick={e => {
                            e.preventDefault();
                            this.props.remove(this.state.name);
                        }}
                        name="delete"
                        style={{ float: "right" }}
                    ></Icon>
                    <Icon
                        color={this.state.heart ? "red" : "grey"}
                        name="bolt"
                        style={{ float: "left" }}
                        onClick={e => {
                            this.addLike(e);
                        }}
                    ></Icon>
                    <Icon
                        color={!this.state.heart ? "blue" : "grey"}
                        name="thumbs down outline"
                        style={{ float: "left" }}
                        onClick={e => {
                            this.state.likeCount > 0 && this.removeLike(e);
                        }}
                    ></Icon>
                    <span>{this.state.likeCount}</span>
                </Card.Content>
            </Card>
        );
    }
}
export default RoboCard;
