import React, {Component} from "react";
import Editor from "../components/Editor";
import ProjectListItem from "../components/ProjectListItem";
import Nav from "../components/Nav";
class EditorContainer extends Component{
    state={
        project:{id: this.props.match.params.id,
            name:"Testing Project",
            owner: this.props.match.params.user,
            comments:["test1","test2","test3"],
            code:{
                javascript:"var i = 0; \n return i+2;",
                css:"body { background: #fff}",
                html:"<div class = \"new-div\"></div>"
            }
        },
        user:{
            username: this.props.match.params.user,
            projects: 
                [{  id: "project2",
                    name:"Project 2",
                    owner: this.props.match.params.user,
                    comments:["test3"],
                    code:{
                        javascript:"console.log(\"Hello World!\");",
                        css:"body { background: #000}",
                        html:"<button class = \"new-button\"></button>"
                    }
                },
                {id: "project1",
                    name:"Project 1",
                    owner: this.props.match.params.user,
                    comments:["test1","test2","test3"],
                    code:{
                        javascript:"var i = 0; \n return i+2;",
                        css:"body { background: #fff}",
                        html:"<div class = \"new-div\"></div>"
                    }
                }
            ]    
        }
            
    }
    
    componentDidMount(){
        const {user,id} = this.props.match.params;
        if(id&&user){
            console.log(user,id);
            this.setState({
                
                /* I think this is where the API get function call should go*/
                /*project:{}*/
            })
        }
        else{
            console.log("no id");
        }


    }
    render(){

        return (
            <div className ="container-fluid mx-0 px-0">
                {/* remember to mess with .editor class in codemirror */}
            <Nav mode="project"user ={this.state.user } project={this.state.project}/>
            <div className=" col-12 editor-container mx-0 px-0 ">
                <div className = "row col-12 mx-0 px-0">
                    <div className="col projects ml-0 col-1">
                    {this.state.user.projects.map(project => (
                        <ProjectListItem project={project} />
                    ))}
                        
                    </div>
                    <div className="col-11 mx-0 px-0">
                        <div className = "row top-row mh-50 col-12 mx-0 px-0">
                            <Editor lang ="javascript" code ={this.state.project.code.javascript}/> {/* add code prop*/}
                            <Editor lang ="css" code ={this.state.project.code.css}/> {/* add code prop*/}
                        </div>
                        <div className ="row bottom-row mh-50 col-12 mx-0 px-0">
                            <Editor lang ="htmlmixed" code ={this.state.project.code.html}/> {/* add code prop*/}
                            <div className="border border-secondary md-6 resp-container px-0 mx-0 col-6">
                                <iframe  className="render-window resp-iframe col-12" title="Render Panel"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            </div>

        );

    }

}


export default EditorContainer