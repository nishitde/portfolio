import React, { Component } from "react";
import skills from "../img/skills.png";
import "./coursework.css";

class Coursework extends Component {
  state = { clicked: false };

  render() {
    return (
      <div class="container" id="courseworkContainer">
        <div class="row">
          <div class="column">
            <img
              src={skills}
              style={{ float: "left", width: "95%", objectFit: "contain" }}
            />
          </div>
          <div class="column" id="courseworkText">
            <div class="webTech">
              <h4>
                <span style={{ color: "#c1549c" }}>WEB TECHNOLOGIES</span>
              </h4>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                width="45"
                height="45"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                width="45"
                height="45"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg"
                width="45"
                height="45"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg"
                width="45"
                height="45"
              />
            </div>
            <div class="frameworks">
              <h4>
                <span style={{ color: "#c1549c" }}>FRAMEWORKS</span>
              </h4>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg"
                width="45"
                height="45"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg"
                width="45"
                height="45"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
                width="45"
                height="45"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"
                width="45"
                height="45"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                width="45"
                height="45"
              />
            </div>
            <div class="softwareTools">
              <h4>
                <span style={{ color: "#c1549c" }}>SOFTWARES AND TOOLS</span>
              </h4>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg"
                width="45"
                height="45"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                width="45"
                height="45"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                width="45"
                height="45"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg"
                width="45"
                height="45"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Coursework;
