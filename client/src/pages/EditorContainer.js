import React, { Component } from "react";
import Editor from "../components/Editor";
import ProjectListItem from "../components/ProjectListItem";
import Nav from "../components/Nav";
import API from "../utils/API";

class EditorContainer extends Component {
  state = {
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
    currentUsername = this.props.match.params.user;
    API.getUser(currentUsername)
      .then(res =>
        // console.log("result: ", res.data)
        res.data.username === currentUsername
          ? this.getProjects(res.data.ownedProjects)
          : console.log("User not found, keeps everything at default")
      )
      .catch(err => console.log(err));
  };

  getProjects = ownedProjects => {
    // console.log(this.props.match.params.id);
    console.log("OwnedProjects: ", ownedProjects);
    for (let i = 0; i < ownedProjects.length; ++i) {
      ownedProjects[i].projectName === this.props.match.params.id
        ? //Return
          this.setState({
            project: ownedProjects[i]
          })
        : console.log();
    }
  };

  handleOnSaveClick = event => {
    event.preventDefault();
    // console.log("Save Button Clicked");
    let projectCopy = Object.assign({}, this.state.project); 
    //The hard coded code is where the this.state of the code mirror goes
    projectCopy.codeBundle.js = "let i = 333332"
    console.log("Copy: ", projectCopy)
    this.setState({
      project: projectCopy
    })
    this.findProjectToSave(this.props.match.params.user);
  };

  findProjectToSave = currentUsername => {
    const authUser = "TestUsername";

    console.log("findProject(): ", currentUsername);
    authUser === currentUsername
      ? API.getUser(authUser)
          .then(res =>
            // console.log("findProject->getUserResult: ", res.data)
            res.data.username === authUser
              ? this.saveProject(authUser, res.data.ownedProjects)
              : console.log("findProjectToSave->getUser: User not found")
          )
          .catch(err => console.log(err))
      : console.log("Authed User trying to save project that isn't owned");
  };

  saveProject = (authUser, selectedProject) => {
    console.log("saveProject->selectedProjects: ", selectedProject);
    console.log(
      "saveProject->this.props.match.params.id",
      this.props.match.params.id
    );

    const projectObject = {
      _id: this.state.project._id,
      owner: this.state.project.owner,
      projectName: this.state.project.projectName,
      codeBundle: this.state.project.codeBundle,
      isPublic: this.state.project.isPublic,
      settings: this.state.project.settings,
      comments: this.state.project.comments,
      views: this.state.project.views,
      watchers: this.state.project.watchers,
      collaborators: this.state.project.collaborators
    };

    for (let i = 0; i < selectedProject.length; ++i) {
      selectedProject[i].projectName === this.props.match.params.id
        ? API.saveProject({ projectObject })
        : console.log(); //"saveProject->selectedProject not found"
    }
  };

  handleOnNewProjectClick = event => {
    event.preventDefault();
    console.log("New Project Button Clicked");
    //
    let authUser = "TestUsername"
    this.createProject(authUser);
  };

  createProject = authUser => {
    console.log("createProject->authID: ", authUser);
    //This is just copying the current state but doesnt change it at all
    let newProjectObj = Object.assign({}, this.state.project); 
    //Must be hardcoded
    newProjectObj._id = null
    newProjectObj.owner = authUser
    newProjectObj.projectName = "NEWPROJECT"
    newProjectObj.codeBundle.js = ""
    newProjectObj.codeBundle.css = ""
    newProjectObj.codeBundle.html = ""
    newProjectObj.comments = []
    newProjectObj.isPublic = true
    newProjectObj.settings = []
    newProjectObj.views = 0
    newProjectObj.watchers = 0
    newProjectObj.collaborators = []

    console.log("createProject->newProObj: ", newProjectObj)
    API.createProject({ newProjectObj })    
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
    console.log("Run button clicked");
  };

  // getProjects = () => {
  //   API.getProjects()
  //   .then(res =>
  //     console.log("getProjects ALL", res.data)
  //   )
  //   .catch(err => console.log(err))
  // }

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
          handleOnNewProjectClick={this.handleOnNewProjectClick}
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
