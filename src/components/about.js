import React, { Component } from "react";
import university from "../img/college.svg";
import "./about.css";

class About extends Component {
  state = { clicked: false };

  render() {
    return (
      <div class="outerContainer">
        <div class="container" id="aboutContainer">
          <div class="row">
            <div class="column">
              <img src={university} />
            </div>
            <div class="column" align="left" id="collegeText">
              <div class="aboutText">
                <h1>
                  <span style={{ color: "#c1549c" }}>Drexel University</span>
                </h1>
                <h5>
                  <span style={{ color: "#fc8370" }}>Master's of Science</span>
                </h5>
                <h5>Major: Computer Science</h5>
                <h6>Sept 2019 - June 2021</h6>
                <br />
                <br />
                <br />
                <h1>
                  <span style={{ color: "#c1549c" }}>University of Mumbai</span>
                </h1>
                <h5>
                  <span style={{ color: "#fc8370" }}>
                    Bachelor's of Engineering
                  </span>
                </h5>
                <h5>Major: Computer Engineering</h5>
                <h6>August 2015 - May 2019</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
