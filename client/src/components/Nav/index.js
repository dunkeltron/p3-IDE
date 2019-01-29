import React from "react";
import Button from "../Button";

function Nav(props) {
  // props = {
  //   mode:props.mode,
  //   user:props.user,
  //   project:props.project
  // }

  // saveProjects() { alert('The button was clicked.') }

  return (
    <nav className="navbar navbar-expand-lg border-bottom border-secondary">
      <a className="navbar-brand " href="/">
        Test IDE
      </a>
      {props.mode === "project" ? (
        <ul className="navbar-nav ml-0">
          {/* If we're in project mode we need to render project specific buttons to the nav */}
          <li className="nav-text align-middle" id="project-brand">
            <span className=" project-name-banner ">
              {props.project.projectName}
            </span>
          </li>

          {/* COmments and settings  should be their own buttons
                    The comment modal should pop up with the comments array passed through from EditorContainer
                    put number of comments in a circle or something*/}
          <li className="nav-text  mr-0">
            <form className="form-inline ml-5 ">
              {/* <button className="btn btn-success" type="button">
                
              </button> */}

              <Button
                className=""
                onClick={props.handleOnCommentsClick}
                type="success"
              >
              Comments {props.project.comments.length}{" "}
              </Button>
              
              <Button
                className="ml-3"
                onClick={props.handleOnSettingsClick}
                type="secondary"
              >
              Settings
              </Button>

              <Button
                className="save"
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
                className="newProject"
                onClick={props.handleOnNewProjectClick}
                type="success"
              >
              +
              </Button>
            </form>
          </li>
        </ul>
      ) : (
        <ul className="navbar-nav ml-0">
          {/* Or we are in profile view and don't need project buttons */}
          <li className="nav-text  mr-0">
            <form className="form-inline ml-5 ">
              <button className="btn btn-secondary ml-3" type="button">
                New Project
              </button>
            </form>
          </li>
        </ul>
      )}
      <ul className="navbar-nav ml-auto mr-0 dropdown-menu-left">
        <li className="nav-item   dropdown  ">
          <a
            className="nav-link dropdown-toggle  "
            href={"/" + props.user}
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {props.user.username}
          </a>
          <div
            className="dropdown-menu dropdown-menu-right"
            aria-labelledby="navbarDropdown"
          >
            <a className="dropdown-item" href={"/" + props.user.username}>
              Account
            </a>
            <a
              className="dropdown-item"
              href={"/settings/" + props.user.username}
            >
              Edit Profile
            </a>
            <div className="dropdown-divider" />
            <a className="dropdown-item" href="/api/auth/logout">
              Log Out
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
