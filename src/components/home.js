import React, { Component } from "react";
import * as ReactBootStrap from "react-bootstrap";
import "./home.css";

class Home extends Component {
  state = { clicked: false };

  render() {
    return (
      <div class="container">
        <div class="row">
          <ul>Section 1</ul>
          <ul>Section 2</ul>
        </div>
      </div>
    );
  }
}

export default Home;
