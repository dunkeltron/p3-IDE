import React from "react";
import Button from "../Button";
import InputBoxCreate from "../InputBoxCreate";
import AccountDropdown from "../AccountDropdown";

function Nav(props) {
  // props = {
  //   mode:props.mode,
  //   user:props.user,
  //   project:props.project
  // }

  // saveProjects() { alert('The button was clicked.') }

  return (
    <nav className="navbar navbar-expand-lg border-bottom border-secondary">
      <span className="navbar-brand " >Test IDE</span>
      
      { (props.mode==="project")? 
          (<ul className="navbar-nav ml-0">
            {/* If we're in project mode we need to render project specific buttons to the nav */}
              <li className="nav-link"  id="project-brand" >
                <span className=" project-name-banner ">{props.project.projectName}</span>
                
              </li>
            
                {/* COmments and settings  should be their own buttons
                    The comment modal should pop up with the comments array passed through from EditorContainer
                    put number of comments in a circle or something*/}
          <li className="nav-text  mr-0">
            <form className="form-inline ml-5 ">
              {/* <button className="btn btn-success" type="button">
                
              </button> */}

              <Button
                className="ml-3"
                onClick={props.handleOnCommentsClick}
                type="success"
              >
                Comments{" "}
              </Button>

              <Button
                className="ml-3"
                onClick={props.handleOnSettingsClick}
                type="secondary"
              >
                Settings
              </Button>

              <Button
                className="save ml-3"
                onClick={props.handleOnSaveClick}
                type="success"
              >
                Save
              </Button>

              <Button
                className="ml-3 run"
                onClick={props.handleOnRunClick}
                type="secondary"
              >
                Run
              </Button>
              <Button
                className="newProject ml-3 mr-3"
                onClick={props.handleOnNewProjectClick}
                type="success"
              >
                +
              </Button>
              {props.toggleInputState && (
                <InputBoxCreate
                  type="warning"
                  onClick={props.handleConfirmedNewProject}
                  onChange={props.handleInputTextChange}
                  value={props.inputTextValue}
                />
              )}
            </form>
          </li>
        </ul>
      ) : (
        <ul className="navbar-nav ml-auto mr-0 dropdown-menu-left">
        
            <li className="nav-item   dropdown  ">
            <a className="nav-link dropdown-toggle  "  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              New Project
            </a>
            <div className="dropdown-menu dropdown-menu-bottom" aria-labelledby="navbarDropdown">
            <div className="input-group input-group-sm mb-3 dropdown-item">
                <div className="input-group-prepend dropdown-item">
                  <span className="input-group-text dropdown-item" id="inputGroup-sizing-sm">Project Name</span>
                </div>
                <input type="text" class="form-control dropdown-item" aria-label="Small" aria-describedby="inputGroup-sizing-sm"></input>
            </div>
            <Button  className="dropdown-item "  to="/"> Logout </Button>
            </div>
        </li>    
    </ul>
      )
         }
        
    <AccountDropdown currentUser={(sessionStorage.getItem("currentUser"))} _logout={props._logout} ></AccountDropdown>
    
  </nav>
  );
}

export default Nav;
