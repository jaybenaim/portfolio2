import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import CommunitySlideshow from "./CommunitySlideshow";
import YelpcampSlideshow from "./YelpcampSlideshow";
import CrowdSurferSlideshow from "./CrowdSurferSlideshow";

class ProjectsLandingPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Container className="project-landing">
          <div className="back-button">
            <a href="/">
              <i className="fa fa-arrow-circle-left"></i>
            </a>
          </div>
          <h1 className="projects-h1">My Projects</h1>
          <Row>
            <Col lg={4}>
              <CommunitySlideshow />
              <div className="project-container">
                <a href="https://github.com/jaybenaim/community">Community</a>
                <p>
                  An app bringing communities together that allows users to see
                  the people in their community and create a communication base
                  where items can be lent to each other for a small price of a
                  conversation or a cup of coffee Two week sprint Utilized
                  Github project planning
                </p>
              </div>
            </Col>
            <Col lg={4}>
              <YelpcampSlideshow />
              <a href="https://github.com/jaybenaim/yelpCamp/tree/master">
                YelpCamp
              </a>
              <p>
                Created a campsite blog-style web app Utilized non-relational
                database
              </p>
            </Col>
            <Col lg={4}>
              <CrowdSurferSlideshow />
              <a href="https://i.imgur.com/vZVKLNE.png">Crowd Surfer</a>
              <p>
                A crowd funding app using Django and Python, and PostgreSQL.
                Group project of four.
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={4}>
              <a href="https://github.com/jaybenaim/django-template">
                Django Template
              </a>
              <p>
                Built a template starter for DJango Integrated basic
                authentication for users to sign up
              </p>
            </Col>
            <Col lg={4}>
              <a href=""> </a>
              <p></p>
            </Col>
            <Col lg={4}></Col>
          </Row>
          <Row>
            <Col lg={4}></Col>
            <Col lg={4}></Col>
            <Col lg={4}></Col>
          </Row>
        </Container>
        <div className="contact-info">
          <p>
            <a href="https://github.com/jaybenaim">Github: </a>
            https://github.com/jaybenaim
          </p>
          <p>
            <a href="https://www.linkedin.com/in/jacob-benaim-a64a0818a/">
              LinkedIn:
            </a>
            https://www.linkedin.com/in/jacob-benaim-a64a0818a/
          </p>
          <p>
            <i className="fa fa-envelope-square"></i> benaimJacob@gmail.com{" "}
          </p>
          <p>
            <i className="fa fa-phone"></i> 647-640-4714
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default ProjectsLandingPage;
