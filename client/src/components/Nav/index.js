import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg border-bottom border-secondary">
      <a className="navbar-brand" href="/">Test IDE</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto dropdown-menu-left">
      
      
        <li className="nav-item   dropdown  ">
          <a className="nav-link dropdown-toggle  " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            UserName
          </a>
          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">Account</a>
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
