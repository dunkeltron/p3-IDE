import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";

function Profile() {
  return (
    <Container fluid>
    <Nav/>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1 className="text-center">Profile Page</h1>   
            <a className="editor-redir" alt=""href="/editor"> To the Editor.</a>  
            <a className="log-in-redir" alt=""href="/"> To the Log In.</a>       
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
