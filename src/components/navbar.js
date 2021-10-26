import React, { Component } from "react";
import * as ReactBootStrap from "react-bootstrap";
import "./navbar.css";

class Navbar extends Component {
  state = { clicked: false };

  render() {
    return (
      <ReactBootStrap.Navbar collapseOnSelect expand="lg">
        <div class="container">
          <ul class="nav navbar-nav">
            <ReactBootStrap.Navbar.Brand href="#home">
              <h1>
                <span id="logoText">NISHIT</span>
              </h1>
            </ReactBootStrap.Navbar.Brand>
          </ul>
          <ul class="nav navbar-nav navbar-right" pullRight>
            <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
              <ReactBootStrap.Nav
                className="mr-auto nav nav-pills"
                defaultActiveKey="#home"
              >
                <ReactBootStrap.Nav.Link href="#home" id="nav-items">
                  Home
                </ReactBootStrap.Nav.Link>
                <ReactBootStrap.Nav.Link href="#about" id="nav-items">
                  About
                </ReactBootStrap.Nav.Link>
                <ReactBootStrap.Nav.Link href="#portfolio" id="nav-items">
                  Portfolio
                </ReactBootStrap.Nav.Link>
                <ReactBootStrap.Nav.Link href="#contact" id="nav-items">
                  Contact
                </ReactBootStrap.Nav.Link>
                <ReactBootStrap.Nav.Link href="#coursework" id="nav-items">
                  Coursework
                </ReactBootStrap.Nav.Link>
              </ReactBootStrap.Nav>
            </ReactBootStrap.Navbar.Collapse>
          </ul>
        </div>
      </ReactBootStrap.Navbar>
    );
  }
}

export default Navbar;
