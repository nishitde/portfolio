import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./footer.css";

class Footer extends Component {
  state = { clicked: false };

  render() {
    return (
      <div class="footerOuterContainer">
        <div class="container" id="footerContainer">
          <h3>
            <span>CONNECT WITH ME</span>
          </h3>
          <a
            target="_blank"
            href="https://www.facebook.com/nishit.de"
            style={{ padding: "5px" }}
          >
            <img src="https://img.icons8.com/small/48/000000/facebook.png" />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/nishit_de/"
            style={{ padding: "5px" }}
          >
            <img src="https://img.icons8.com/small/48/000000/instagram-new.png" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/nishitde/"
            style={{ padding: "5px" }}
          >
            <img src="https://img.icons8.com/small/48/000000/linkedin.png" />
          </a>
          <a
            target="_blank"
            href="https://github.com/nishitde"
            style={{ padding: "5px" }}
          >
            <img src="https://img.icons8.com/small/48/000000/github.png" />
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
