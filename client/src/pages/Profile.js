
import React, {Component} from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";
import API from "../utils/API";
import {Link} from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import ProfileBanner from "../components/ProfileBanner";
import SocialLinks from "../components/SocialLinks";
class Profile extends Component {
  state = {
    profileOwnedProject: [],
    dateCreation: {},
    profilePic: "",
    socialLinks: {
      git: "",
      linkedIn: "",
      personalSite: ""
    },
    project: {
      id: this.props.match.params.id,
      projectName: "Testing Project",
      owner: this.props.match.params.user,
      comments: ["test1", "test2", "test3"],
      codeBundle: {
        js: "var i = 0; \n return i+2;",
        css: "body { background: #fff}",
        html: '<div class = "new-div"></div>'
      }
    },
    user: {
      username: this.props.match.params.user,
      projects: [
        {
          id: "project2",
          projectName: "Project 2",
          owner: this.props.match.params.user,
          comments: ["test3"],
          codeBundle: {
            js: 'console.log("Hello World!");',
            css: "body { background: #000}",
            html: '<button class = "new-button"></button>'
          }
        },
        {
          id: "project1",
          projectName: "Project 1",
          owner: this.props.match.params.user,
          comments: ["test1", "test2", "test3"],
          codeBundle: {
            js: "var i = 0; \n return i+2;",
            css: "body { background: #fff}",
            html: '<div class = "new-div"></div>'
          }
        }
      ]
    },  
    currentUser:this.props.currentUser,
    user:{},
    inputTextValue: "",
    show:false,
    toggleInputState:false
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
    let authUser = JSON.parse(sessionStorage.getItem("currentUser")).username;
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

    if (user) {
      this.getUser(this.props.match.params.user);
    } else {
      console.log("no id");
    }
  }

  getUser = currentUsername => {
    // console.log(this.props.match.params.user)
    API.getUser(currentUsername)
      .then(res =>
        // console.log("result: ", res.data),
        this.setState({
          profileOwnedProject: res.data.ownedProjects,
          dateCreation: res.data.dateCreation,
          profilePic: res.data.profilePic,
          socialLinks: res.data.socialLinks,
          user: res.data
        })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Container fluid>
        <Nav currentUser = {this.props.currentUser} 
            user={this.state.user} 
            _logout={this.props._logout} 
            mode="profile"
            handleOnNewProjectClick={this.handleOnNewProjectClick}
            handleConfirmedNewProject={this.handleConfirmedNewProject}
            toggleInput={this.toggleInput}
            toggleInputState={this.state.show}
            inputTextValue={this.inputTextValue}
            handleInputTextChange={this.handleInputTextChange}
      />  
          <Row />
          <ProfileBanner
            user={this.state.user.username}
            src={this.state.user.profilePic}
          >
            <SocialLinks />
          </ProfileBanner>
        </Container>

        {this.state.profileOwnedProject.map(project => (
          <ProjectCard
            key={project.id}
            title={project.projectName}
            link={project.owner + "/project/" + project.projectName}
          />
        ))}
      </div>
    );
  }
}

export default Profile;