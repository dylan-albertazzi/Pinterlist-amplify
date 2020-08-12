import React from "react";
import { Container, Row, Col } from "reactstrap";

export default function AppFooter() {
  return (
    <Container fluid className="bg-green mt-auto py-3 text-white footer">
      <Row className="text-center">
        <Col>
          <p className="h6 m-0">© Pinterlist 2020</p>
        </Col>
      </Row>
    </Container>
  );
}
