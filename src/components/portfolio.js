import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./portfolio.css";

class Portfolio extends Component {
  state = { clicked: false };

  render() {
    return (
      <div class="container" id="portfolioContainer">
        <h1>
          <span style={{ color: "#fc8370" }}>PORTFOLIO</span>
        </h1>
        <div class="row">
          <div class="column" id="cardColumn">
            <Card
              style={{
                height: "29rem",
                borderRadius: "10px",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.09)",
              }}
            >
              <Card.Header>
                <span style={{ color: "#c1549c" }}>LOAN PREDICTION SYSTEM</span>
              </Card.Header>
              <Card.Body id="cardBody">
                <Card.Title>
                  <span style={{ color: "#fc8370" }}>
                    HTML, Python Flask, Python, Jupyter Notebook
                  </span>
                </Card.Title>
                <Card.Text>
                  <li>
                    Developed a classification model with 80% accuracy to
                    automate the loan eligibility process based on customer
                    details provided.
                  </li>
                  <li>
                    Evaluated algorithms to compute performance, quality, data
                    management and accuracy using machine learning and
                    statistical modeling techniques, such as Logistic
                    Regression, Naïve Bayes, Random Forest Classifier, Support
                    Vector Machine and Decision Tree.
                  </li>
                  <li>
                    Handled the data consisting of thirteen feature columns by
                    passing it through the algorithm to find the maximum
                    accuracy, and comparing the score to decide the eligibility
                    of a customer to receive a loan.
                  </li>
                </Card.Text>
                <Button
                  target="_blank"
                  href="https://github.com/nishitde/Loan-Prediction-System"
                  id="cardButton"
                >
                  See Project
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div class="column" id="cardColumn">
            <Card
              style={{
                height: "29rem",
                borderRadius: "10px",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.09)",
              }}
            >
              <Card.Header>
                <span style={{ color: "#c1549c" }}>
                  SIMILAR FACE CLUSTERING
                </span>
              </Card.Header>
              <Card.Body id="cardBody">
                <Card.Title>
                  <span style={{ color: "#fc8370" }}>
                    Python, Jupyter Notebook
                  </span>
                </Card.Title>
                <Card.Text>
                  <li>
                    Optimized the ETL system by using K-means clustering,
                    thereby reducing the complexity exponentially.
                  </li>
                  <li>
                    Performed Principal Component Analysis on the data to
                    convert it into a 100-dimensional data for convenient
                    computation.
                  </li>
                  <li>
                    Determined the closest and farthest cluster images by
                    computing the centroids using Euclidean distance.
                  </li>
                </Card.Text>
                <Button
                  target="_blank"
                  href="https://github.com/nishitde/Similar-Face-Clustering"
                  id="cardButton"
                >
                  See Project
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div class="column" id="cardColumn">
            <Card
              style={{
                height: "24rem",
                borderRadius: "10px",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.09)",
              }}
            >
              <Card.Header>
                <span style={{ color: "#c1549c" }}>
                  IMAGE CLASSIFICATION USING OPENCV
                </span>
              </Card.Header>
              <Card.Body id="cardBody">
                <Card.Title>
                  <span style={{ color: "#fc8370" }}>
                    OpenCV, Python, Flask, SQLite
                  </span>
                </Card.Title>
                <Card.Text>
                  <li>
                    Used OpenCV to convert the images from RGB to LAB color
                    space, then compute the difference in value using CIE color
                    space.
                  </li>
                  <li>
                    Implemented K-Means clustering to create a cluster of top 10
                    colors, out of which a threshold of top 5 colors was set for
                    filtering.
                  </li>
                  <li>
                    Performed comparison on choosing a color, with the colors in
                    the threshold and present the resulting images
                  </li>
                </Card.Text>
                <Button
                  target="_blank"
                  href="https://github.com/nishitde/Kaleidoscope-A-tool-for-identifying-colors"
                  id="cardButton"
                >
                  See Project
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div class="column" id="cardColumn">
            <Card
              style={{
                height: "24rem",
                borderRadius: "10px",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.09)",
              }}
            >
              <Card.Header>
                <span style={{ color: "#c1549c" }}>ONLINE JOB PORTAL</span>
              </Card.Header>
              <Card.Body id="cardBody">
                <Card.Title>
                  <span style={{ color: "#fc8370" }}>
                    .NET, Bootstrap, SQL Server 2012
                  </span>
                </Card.Title>
                <Card.Text>
                  <li>
                    Composed of three modules – Job Seeker, Job Provider and
                    Administrator.
                  </li>
                  <li>
                    Integrated a feature of ‘Resume Generation’ by taking input
                    from user and returning a single page, pre-defined formatted
                    resume.
                  </li>
                  <li>
                    Facilitated the implmentation of automated E-mailing system,
                    on confirmation requests and sending applications using the
                    class ‘System.Net.Mail’.
                  </li>
                </Card.Text>
                <Button
                  target="_blank"
                  href="https://github.com/nishitde/Online-Job-Portal"
                  id="cardButton"
                >
                  See Project
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div class="column" style={{ paddingTop: "20px" }}>
            <h5>WANT TO SEE MORE? CHECK OUT MY GITHUB PROFILE</h5>
            <Button
              target="_blank"
              href="https://github.com/nishitde"
              id="githubButton"
            >
              GitHub
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
