import React from "react";

class LikeButton extends React.Component {
  state = {
    count: 0
  };

  counter = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    if (this.state.count === 1) {
      return <button onClick={this.counter}>{this.state.count} Like</button>;
    } else {
      return <button onClick={this.counter}>{this.state.count} Likes</button>;
    }
  }
}

export default LikeButton;
