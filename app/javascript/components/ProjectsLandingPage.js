import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";

class ProjectsLandingPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col lg={4}>1</Col>
            <Col lg={4}>2</Col>
            <Col lg={4}>3</Col>
          </Row>
          <Row>
            <Col lg={4}>4</Col>
            <Col lg={4}>5</Col>
            <Col lg={4}>6</Col>
          </Row>
          <Row>
            <Col lg={4}>7</Col>
            <Col lg={4}>8</Col>
            <Col lg={4}>9</Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default ProjectsLandingPage;
