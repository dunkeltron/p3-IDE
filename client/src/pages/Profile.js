import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

function Profile() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1 className="text-center">Profile Page</h1>            
          </Jumbotron>
        </Col>
      </Row>
      {/*<Row>
        <ProjectContainer/>
      </Row>*/}
    </Container>
  );
}

export default Profile;
