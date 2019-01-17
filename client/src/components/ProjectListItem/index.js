import React, {Component} from "react";

class ProjectListItem extends Component {
  state = {
    user:this.props.user,
    project:this.props.project
  }
  componentDidMount(){
    
  }
  
  render(){
  return (
    <div className ="project col-12 mx-0 px-0">
        <a className="project-title" href={"/"+this.state.project.owner+"/project/"+this.state.project.id}>{this.state.project.name}</a>
    </div>
  );
}
}

export default ProjectListItem;
