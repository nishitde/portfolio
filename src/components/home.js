import React, { Component } from "react";
import * as ReactBootStrap from "react-bootstrap";
import programmer from "../img/coder.svg";
import "./home.css";

class Home extends Component {
  state = { clicked: false };

  render() {
    return (
      <div class="container" id="homeContainer">
        <div class="row">
          <div class="column" align="left" id="text_column">
            <div class="textColumn">
              <h1>
                Hi, I'm <span style={{ color: "#fc8370" }}>Nishit De</span>
              </h1>
              <h5>
                <span style={{ color: "#c1549c" }}>
                  Software Development Engineer
                </span>
              </h5>
              <br />
              <p>
                My name is Nishit and I am a graduate student at Drexel
                University. In addition to my expertise with a variety of coding
                languages, I'm attempting to learn new ones gradually. My
                portfolio presents me better than words ever could, so if you'd
                like, we can look at it together and I can tell you about the
                projects I designed and built over the years. I strive to
                perform well in all roles of full stack development, and I enjoy
                every aspect of the process.
              </p>
            </div>
          </div>
          <div class="column">
            <img src={programmer} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
