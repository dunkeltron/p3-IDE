import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";
import API from "../utils/API";
import ProjectCard from "../components/ProjectCard";

class Profile extends Component {
  state = {
    profileOwnedProject: [],
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
    }
  };

  componentDidMount() {
    const { user } = this.props.match.params;
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
        // console.log("result: ", res.data)
        this.setState({
          profileOwnedProject: res.data.ownedProjects
        })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Container fluid>
          <Nav user={this.state.user} mode="profile" />
          <Row>
            <Col size="md-12">
              <Jumbotron>
                <h1 className="text-center"> {this.props.match.params.user}</h1>
                {/* this href needs to be changed to pop up a modal to create a project*/}
                <a
                  className="editor-redir"
                  alt=""
                  href={
                    "/" + this.props.match.params.user + "/project/newProject"
                  }
                >
                  {" "}
                  To the Editor.
                </a>
                <a className="log-in-redir" alt="" href="/">
                  {" "}
                  To the Log In.
                </a>
              </Jumbotron>
            </Col>
          </Row>
        </Container>

        {this.state.profileOwnedProject.map(project => (
          <ProjectCard
            key={project.id}
            title={project.projectName}
            link={project.owner+"/project/"+project.projectName}
          />
        ))}
      </div>
    );
  }
}

export default Profile;
