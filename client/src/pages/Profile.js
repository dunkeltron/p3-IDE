import React, {Component} from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";

class Profile extends Component {
  state={
    user:{}
  }
    componentDidMount(){
        const {user} = this.props.match.params;
        this.setState({
          user:{
            username:user
          }
        })
    }
  render(){
    return (
    <Container fluid>
    <Nav user={this.state.user} mode="profile"/>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1 className="text-center"> {this.props.match.params.user}</h1>   
            {/* this href needs to be changed to pop up a modal to create a project*/}
            <a className="editor-redir" alt=""href={"/"+this.props.match.params.user+"/project/newProject"}> To the Editor.</a>  
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
}

export default Profile;
