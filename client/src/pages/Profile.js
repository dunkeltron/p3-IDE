
import React, {Component} from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";
import API from "../utils/API";
import {Link} from "react-router-dom";
class Profile extends Component {
  state={
    currentUser:this.props.currentUser,
    user:{},
    inputTextValue: "",
    show:false
  }
  handleInputTextChange = event => {
    this.setState({inputTextValue: event.target.value});
  }

  handleOnNewProjectClick = event => {
    event.preventDefault();
    console.log("New Project Button Clicked");
    this.toggleInput();
  };

  toggleInput = () => {
    const { show } = this.state;
    this.setState({ show: !show });
  };

  handleConfirmedNewProject = event => {
    event.preventDefault();
    console.log("New Project Button Clicked");
    let authUser = sessionStorage.getItem("currentUser").username;
    this.findToCreateProject(authUser);
  };

  findToCreateProject = authUser => {
    API.getUser(authUser)
      .then(res =>
        // console.log("result: ", res.data)
        this.createProject(authUser, res.data.ownedProjects)
      )
      .catch(err => console.log(err));
  };

  createProject = (authUser, authUserOwnedProjects) => {
    console.log("createProject->authID: ", authUser);
    console.log(
      "createProject->authUserOwnedProjects: ",
      authUserOwnedProjects
    );

    let projectInputName = this.state.inputTextValue.trim();

    //This is just copying the current state but doesnt change it at all
    const newProjectObj = {
      owner: authUser,
      projectName: projectInputName,
      codeBundle: {
        html: "",
        js: "",
        css: ""
      },
      isPublic: true,
      settings: [],
      comments: [],
      views: 0,
      watchers: 0,
      collaborators: []
    };

    newProjectObj.owner = authUser;
    newProjectObj.projectName = projectInputName;

    console.log("createProject->newProObj: ", newProjectObj);
    API.createProject({ newProjectObj }).then(data => {
      console.log(data.data);
      let newAuthData = data.data;
      API.getProjectbyUser({ newAuthData }).then(
        console.log("data.data: ", data.data),
        window.location.assign(
          "/" + data.data.owner + "/project/" + data.data.projectName
        )
      );
    });
  };

    componentDidMount(){
      console.log(this.props);
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
       <Nav currentUser = {this.props.currentUser} 
            user={this.state.user} 
            _logout={this.props._logout} 
            mode="profile"
            toggleInput={this.toggleInput}
            toggleInputState={this.state.show}
            inputTextValue={this.inputTextValue}
            handleInputTextChange={this.handleInputTextChange}
          />  
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