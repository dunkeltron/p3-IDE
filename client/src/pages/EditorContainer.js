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

  getProjects = () => {
    API.getProjects()
      .then(res =>
        // console.log("result: ", res.data),
        // console.log("projectName: ", res.data[0].projectName),
        // projectName = res.data[0].projectName,
        this.setState({ project: res.data[0] })
      )
      .catch(err => console.log(err));
  };
  onLogOut =() =>{
    API.logout()
    .then(result =>
      console.log(result));
  }

  componentDidMount() {
    const { user, id } = this.props.match.params;
    if (id && user) {
      //   console.log(user, id);
      this.getProjects();
      //   this.setState({
      //     /* I think this is where the API get function call should go*/
      //     /*project:{api call}*/
      //   });
    } else {
      console.log("no id");
    }
  }
  render() {
    return (
      <div className="container-fluid mx-0 px-0">
        {/* remember to mess with .editor class in codemirror */}
        <Nav
          mode="project"
          user={this.state.user}
          project={this.state.project}
          onLogOut={this.onLogOut}
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
                {/* add code prop*/}
                <Editor
                  lang="css"
                  code={this.state.project.codeBundle.css}
                />{" "}
                {/* add code prop*/}
              </div>
              <div className="row bottom-row mh-50 col-12 mx-0 px-0">
                <Editor
                  lang="htmlmixed"
                  code={this.state.project.codeBundle.html}
                />{" "}
                {/* add code prop*/}
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
