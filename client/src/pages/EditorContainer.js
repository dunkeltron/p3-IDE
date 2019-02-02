import React, { Component } from "react";
import Editor from "../components/Editor";
import ProjectListItem from "../components/ProjectListItem";
import Nav from "../components/Nav";
import SettingsPanel from "../components/SettingsPanel";
import API from "../utils/API";
import { stat } from "fs";

import{UnControlled as CodeMirror} from 'react-codemirror2';
require('codemirror/lib/codemirror.css');
require('codemirror/theme/material.css');
require('codemirror/theme/monokai.css');
require('codemirror/mode/xml/xml.js');
require('codemirror/mode/javascript/javascript.js');
require('codemirror/mode/css/css.js');
require('codemirror/mode/htmlmixed/htmlmixed.js');
require( "../components/Editor/editor.css");

class EditorContainer extends Component {
  state = {
    show: false,
    showSettings: false,
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
    ,
    currentUser: this.props.currentUser
  };

  componentDidMount() {
    this.toggleInput = this.toggleInput.bind(this);
    this.toggleSettings = this.toggleSettings.bind(this);
    console.log(this.props.currentUser);
    const { user, id } = this.props.match.params;
    if (id && user) {
      this.getUser();
    } else {
      console.log("no id");
    }
  }

  // Brian Edits 3 functions for HTML CSS and Javascript

  updateHTMLCode(newCode) {
    //this.state.project.codeBundle.html = newCode // suggested by Joe
		this.setState({
     project: {
       codeBundle: {
         html: newCode}
       } // diving into the object to insert HTML
      });
  }
  
  updateCSSCode(newCode) {
		this.setState({
      project: {
        codeBundle: {
          css:newCode}
      } // diving into the object to insert CSS
		});
  }
  
  updateJSCode(newCode) {
		this.setState({
      project: {
        codeBundle: {
          js: newCode}
      } // diving into the object to insert JS
		});
  }
  
  // mergeCode() {
  //   var tempHTML = this.state.project.codeBundle.html;
  //   var tempCSS = "<script>" + this.state.project.codeBundle.css + "</script>"
  //   var tempHTMLCSS = tempHTML + tempCSS;
  // }
  
  // End of Brian's Edits
  
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
    projectCopy.codeBundle.js = "let i = 333332";
    console.log("Copy: ", projectCopy);
    this.setState({
      project: projectCopy
    });
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
        : console.log();
    }
  };

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
    let authUser = "TestUsername";
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

    let projectInputName = "NEWPROJECT";

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
    // console.log("newauthdata: ", newAuthData);
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

  handleOnSettingsClick = event => {
    event.preventDefault();
    console.log("Settings Button Clicked");
    this.toggleSettings();
  };

  toggleSettings = () => {
    const { showSettings } = this.state;
    this.setState({ showSettings: !showSettings });
  };

  handleOnDeleteProject = event => {
    event.preventDefault();
    console.log("Delete Project Button Clicked");
    let authUser = "TestUsername";
    this.findToDeleteProject(authUser);
  };

  findToDeleteProject = authUser => {
    API.getUser(authUser)
      .then(res =>
        // console.log("result: ", res.data)
        this.deleteProject(authUser, res.data.ownedProjects)
      )
      .catch(err => console.log(err));
  };

  deleteProject = (authUser, authUserOwnedProjects) => {
    console.log("deleteProject->authID: ", authUser);
    console.log(
      "deleteProject->authUserOwnedProjects: ",
      authUserOwnedProjects
    );

    let currentProject = this.props.match.params.id;

    const deleteProjectData = {
      username: authUser,
      projectName: currentProject
    };

    console.log("deleteproject->deleteProjectData: ", deleteProjectData);

    API.deleteProject({ deleteProjectData }).then(
      console.log("Delete Successful?"),
      window.location.assign("/" + authUser + "/")
    );
  };

  handleOnCommentsClick = event => {
    event.preventDefault();
    console.log("Comments Button Clicked");
  };

  handleOnRunClick = event => {
    event.preventDefault();
    console.log("Run button clicked");
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
          handleOnNewProjectClick={this.handleOnNewProjectClick}
          handleConfirmedNewProject={this.handleConfirmedNewProject}
          toggleInput={this.toggleInput}
          toggleInputState={this.state.show}
        />
        {this.state.showSettings && (
          <SettingsPanel onClick={this.handleOnDeleteProject} />
        )}
        <div className=" col-12 editor-container mx-0 px-0 ">
          <div className="row col-12 mx-0 px-0">
            <div className="col projects ml-0 col-1">
              {this.state.user.projects.map(project => (
                <ProjectListItem project={project} />
              ))}
            </div>
            <div className="col-11 mx-0 px-0">
              <div className="row top-row mh-50r col-12 mx-0 px-0">

              {/* Javascript Code */}
                <Editor
                  lang="javascript"
                  code={this.state.project.codeBundle.js}
                  onNewChange={this.onNewChange}
                />{" "}
                {/* add code prop*/}
                {/* replace with http://www.alexrothenberg.com/2012/02/29/building-a-browser-ide.html example*/}

                {/* CSS CODE */}
                <Editor
                  lang="css"
                  code={this.state.project.codeBundle.css}
                />{" "}
                {/* add code prop*/}

              </div>
              <div className="row bottom-row mh-50 col-12 mx-0 px-0">

              {/* HTMLCODE */}
              <div className={"col-6 border border-secondary editor html"}>
                <CodeMirror
                value= {this.state.project.codeBundle.html} 
                options={{
                    mode: "htmlmixed",
                    theme: 'monokai',
                    lineNumbers: true
                }}
                onChange={(editor, data, value) => {
                    this.updateHTMLCode(value);
                    console.log("EditorContainer (HTML): " + value);
                    }}
                  />
                </div> 

                {/* add code prop*/}
                <div className="border border-secondary md-6 resp-container px-0 mx-0 col-6">
                
                  <iframe
                    className="render-window resp-iframe col-12"
                    title="Render Panel"
                    id="preview"
                    srcdoc={this.state.project.codeBundle.html}
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
