import React, { Component } from "react";
import "./HelloWorldList.css";
import HelloWorld from "./HelloWorld";

import AddGreeter from "./AddGreeter";

class HelloWorldList extends Component {
  constructor(props) {
    super(props);
    this.state = { greetings: ["Jim", "Sally", "Hailey"] };
    this.addGreeting = this.addGreeting.bind(this);
    this.removeGreeting = this.removeGreeting.bind(this);
  }
  addGreeting(newName) {
    this.setState({ greetings: [...this.state.greetings, newName] });
  }
  render() {
    return (
      <div className="HelloWorldList">
        <AddGreeter addGreeting={this.addGreeting} />
        {this.renderGreetings()}
      </div>
    );
  }
  renderGreetings() {
    return this.state.greetings.map(name => (
      <HelloWorld key={name} name={name} removeGreeting={this.removeGreeting} />
    ));
  }
  removeGreeting(removeName) {
    const filteredGreetings = this.state.greetings.filter(name => {
      return name !== removeName;
    });
    this.setState({ greetings: filteredGreetings });
  }
}

export default HelloWorldList;
