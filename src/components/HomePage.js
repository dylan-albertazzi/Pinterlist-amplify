import React from "react";
import { Container, Button, Row, Col, Jumbotron } from "reactstrap";
import AddPin from "./AddPin";
import AppNavbar from "./AppNavbar";
import AppFooter from "./AppFooter";

export default function HomePage() {
  return (
    <>
      <AppNavbar />
      <Container fluid>
        <Jumbotron className="bg-transparent text-center mb-0">
          <h4>
            Stop wasting time finding the ingredients you need from Pinterest
            recipes!
          </h4>
        </Jumbotron>
        <Row className="h-100 px-3">
          <Col md={6} className="my-auto">
            <img
              className="img-fluid bottom-img"
              src={
                // process.env.PUBLIC_URL
                require("../images/checking-list.svg")
              }
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="mt-5 d-flex align-items-center">
          <Col className="text-left my-5 ">
            <h5>One Click</h5>

            <p>Turn a Pinterest Recipe into a Grocery List</p>
          </Col>
          <Col md={6} className="my-auto">
            <img
              className="img-fluid bottom-img"
              src={
                // process.env.PUBLIC_URL
                require("../images/pin-to-list.svg")
              }
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <AddPin />
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="text-left my-5">
            <h5>How it works</h5>
            <p>
              Say which pins you want the ingredients for and Pinterlist
              thoughtfully reads the essay long story leading up to the recipe
              AND returns the ingredients you need to buy! All for absolutely no
              cost!
            </p>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="my-5">
          <Col className="text-center">
            <img
              className="img-fluid bottom-img"
              src={
                // process.env.PUBLIC_URL
                require("../images/accomplished-woman.svg")
              }
            />
          </Col>
        </Row>
      </Container>

      <AppFooter />
    </>
  );
}
