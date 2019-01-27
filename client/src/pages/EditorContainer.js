import React, { Component } from "react";
import Editor from "../components/Editor";
import ProjectListItem from "../components/ProjectListItem";
import Nav from "../components/Nav";
import API from "../utils/API";

class EditorContainer extends Component {
  state = {
    project: {
      id: this.props.match.params.id,
      name: "Testing Project",
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
          name: "Project 2",
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
          name: "Project 1",
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
    const { user, id } = this.props.match.params;
    if (id && user) {
      this.getUser();
    } else {
      console.log("no id");
    }
  }

  //Does user check against user URL  
  getUser = currentUsername => {
    // console.log(this.props.match.params.user)
    currentUsername = this.props.match.params.user
    API.getUser(currentUsername)
      .then(
        res =>
          // console.log("result: ", res.data.username),
          res.data.username === this.props.match.params.user
            ? this.getProjects()
            : console.log("User not found, keeps everything at default")
      )
      .catch(err => console.log(err));
  };

  //Call Selected project based on user and project route
  getProjects = () => {
    // console.log(this.props.match.params.id)
    API.getProjects()
      .then(res =>
        // console.log("result: ", res.data),
        // console.log("projectName: ", res.data[0].projectName),
        
        res.data[0].projectName === this.props.match.params.id
         ? this.setState({
          project: res.data[0]
        })
        : console.log("User found but Project not found, keeps everything at default")
      )
      .catch(err => console.log(err));
  };

  saveProjects = id => {
    API.saveProjects(id)
      .then(res => this.getProjects())
      .catch(err => console.log(err));
  };

  handleOnSaveClick = event => {
    event.preventDefault();
    // if (this.state.title && this.state.author) {
    //   API.saveBook({
    //     title: this.state.title,
    //     author: this.state.author,
    //     synopsis: this.state.synopsis
    //   })
    //     .then(res => this.loadBooks())
    //     .catch(err => console.log(err));
    // }
    console.log("Save Button Clicked");
  };

  handleOnSettingsClick = event => {
    event.preventDefault();
    console.log("Settings Button Clicked");
  };

  handleOnCommentsClick = event => {
    event.preventDefault();
    console.log("Comments Button Clicked");
  };

  handleOnRunClick = event => {
    event.preventDefault();
    console.log("Run Button Clicked");
  };

  render() {
    return (
      <div className="container-fluid mx-0 px-0">
        {/* remember to mess with .editor class in codemirror */}
        <Nav
          mode="project"
          user={this.state.user}
          project={this.state.project}
          handleOnSaveClick={this.handleOnSaveClick}
          handleOnSettingsClick={this.handleOnSettingsClick}
          handleOnCommentsClick={this.handleOnCommentsClick}
          handleOnRunClick={this.handleOnRunClick}
        />
        <div className=" col-12 editor-container mx-0 px-0 ">
          <div className="row col-12 mx-0 px-0">
            <div className="col projects ml-0 col-1">
              {this.state.user.projects.map(project => (
                <ProjectListItem project={project} />
              ))}
            </div>
            <div className="col-11 mx-0 px-0">
              <div className="row top-row mh-50r col-12 mx-0 px-0">
                <Editor
                  lang="javascript"
                  code={this.state.project.codeBundle.js}
                />{" "}
                <Editor lang="css" code={this.state.project.codeBundle.css} />{" "}
              </div>
              <div className="row bottom-row mh-50 col-12 mx-0 px-0">
                <Editor
                  lang="htmlmixed"
                  code={this.state.project.codeBundle.html}
                />{" "}
                <div className="border border-secondary md-6 resp-container px-0 mx-0 col-6">
                  <iframe
                    className="render-window resp-iframe col-12"
                    title="Render Panel"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditorContainer;
