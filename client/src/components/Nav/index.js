import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg border-bottom border-secondary">
      <a className="navbar-brand" href="/">Test IDE</a>
      <ul className="navbar-nav ml-auto dropdown-menu-right">
      
      
        <li className="nav-item   dropdown  ">
          <a className="nav-link dropdown-toggle  " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            New Project 
          </a>
          <div className="dropdown-menu dropdown-menu-left" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="/api/comments/projectID">Comments</a>
            <a className="dropdown-item" href="/api/settings/projectID">Settings</a>
          </div>
        </li>
      
    </ul>
      
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto dropdown-menu-left">
      
      
        <li className="nav-item   dropdown  ">
          <a className="nav-link dropdown-toggle  " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            UserName
          </a>
          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="/userAccount">Account</a>
            <a className="dropdown-item" href="#">Other Projects</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Log Out</a>
          </div>
        </li>
      
    </ul>
    
  </div>
  </nav>
  );
}

export default Nav;
