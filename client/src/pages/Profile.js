
import React, {Component} from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";
import API from "../utils/API";
import {Link} from "react-router-dom";
class Profile extends Component {
  state={
    currentUser:this.props.currentUser,
    user:{}
  }
    componentDidMount(){
      console.log(this.props.match);
      console.log(this.state.currentUser);
        const {user} = this.props.match.params;
        this.setState({
          user:{
            username:user
          }
        })
    }
    onLogOut(){
      API.logout();
    }
  render(){
    return (
    <Container fluid>
       <Nav currentUser = {this.props.currentUser} user={this.state.user} onLogOut={this.props._logout} mode="profile"/>  
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1 className="text-center"> {this.props.match.params.user}</h1>   
            {/* this href needs to be changed to pop up a modal to create a project*/}
            <Link className="editor-redir" to={"/"+this.props.match.params.user+"/project/newProject"}> To the Editor.</Link>  
            <Link className="log-in-redir" to="/"> To the Log In.</Link>   
            <Link to="/somebodyElse"> Link to Somebody Else's profile</Link>    
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