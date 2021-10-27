import React, { Component, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./contact.css";
import { db } from "../firebase";
import { addDoc, collection } from "@firebase/firestore";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [attachment, setAttachment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      addDoc(collection(db, "Contacts"), {
        FirstName: firstName,
        LastName: lastName,
        Email: email,
        Message: message,
        Attachment: attachment,
      });
      alert("Message has been successfully submitted");
    } catch (e) {
      alert(e.message);
    }

    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
    setAttachment("");
  };

  return (
    <div class="portfolioOuterContainer">
      <div class="container" id="contactContainer">
        <h3>Don't be a stranger</h3>
        <h1>
          <span style={{ color: "#c1549c" }}>CONTACT ME</span>
        </h1>
        <Card
          style={{
            height: "29rem",
            width: "40%",
            marginTop: "3%",
            left: "29.6%",
            borderRadius: "10px",
            boxShadow:
              "0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.29)",
          }}
        >
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <div class="contactCardBody">
                <div class="row" id="firstLineInputs">
                  <div class="column">
                    <Form.Group
                      className="firstNameText"
                      controlId="ControlInput1"
                    >
                      <Form.Label>
                        FIRST NAME <span style={{ color: "#c1549c" }}>*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                      />
                    </Form.Group>
                  </div>
                  <div class="column">
                    <Form.Group
                      className="lastNameText"
                      controlId="ControlInput2"
                    >
                      <Form.Label>
                        LAST NAME <span style={{ color: "#c1549c" }}>*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                      />
                    </Form.Group>
                  </div>
                </div>
                <Form.Group className="emailText" controlId="ControlInput3">
                  <Form.Label>
                    EMAIL ADDRESS <span style={{ color: "#c1549c" }}>*</span>
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group
                  className="messageText"
                  controlId="ControlTextarea1"
                >
                  <Form.Label>
                    MESSAGE <span style={{ color: "#c1549c" }}>*</span>
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formFileMultiple" className="mb-3">
                  <Form.Label>ATTACH FILES</Form.Label>
                  <Form.Control
                    type="file"
                    value={attachment}
                    onChange={(e) => setAttachment(e.target.value)}
                    multiple
                  />
                </Form.Group>
              </div>
              <Button type="submit" id="contactCardButton">
                Send Message
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
