import React, {Component} from "react";

class Nav extends Component {
  state = {
    commentsNum : 5,
    mode:"",
    user:{}
  }
  componentDidMount(){
    this.setState({
      mode:this.props.mode,

    })
  }
  
  render(){
  return (
    <nav className="navbar navbar-expand-lg border-bottom border-secondary">
      <a className="navbar-brand" href="/">Test IDE</a>
      { (this.state.mode=="project")? 
      <ul className="navbar-nav ml-auto dropdown-menu-right">
        
      
        <li className="nav-item   dropdown  ">
          <a className="nav-link dropdown-toggle  " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            PROJECT NAME {/*this.props.project.name */}
          </a>
          <div className="dropdown-menu dropdown-menu-left" aria-labelledby="navbarDropdown">
            {/* COmments and settings  should be their own buttons
                The comment modal should pop up with the comments array passed through from EditorContainer
                put number of comments in a circle or something*/}
            <a className="dropdown-item comments" href="">Comments {this.state.commentsNum}</a>
            {/* This should produce either a drop down or a modal that shows the current settigns object of the project
             This should be passed through from Editor Container as well*/}
            <a className="dropdown-item" href="">Settings</a>
          </div>
        </li>
      
    </ul>
      :<div/>}
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto dropdown-menu-left">
      
      
        <li className="nav-item   dropdown  ">
          <a className="nav-link dropdown-toggle  " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
           User Name {/*this.props.user*/}
          </a>
          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href={"/"+this.props.user}>Account</a>
            <a className="dropdown-item" href="#">New Project</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Log Out</a>
          </div>
        </li>
      
    </ul>
    
  </div>
  </nav>
  );
}
}

export default Nav;
