import { Component } from "react";

class Count extends Component {
  render() {
    return <h4>Total todos: {this.props.count}</h4>;
  }
}

export default Count;