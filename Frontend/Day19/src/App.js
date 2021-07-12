import React, { Component } from "react";
import './style.css';

class App extends Component {
  state = { count: 0 };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <>
        <button className="btn" onClick={this.increment}>{this.state.count}</button>
      </>
    );
  }
}

export default App;