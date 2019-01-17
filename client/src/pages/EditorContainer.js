import React, {Component} from "react";
import Editor from "../components/Editor";

import Nav from "../components/Nav";
class EditorContainer extends Component{
    state={
        project:{id: this.props.match.params.id,
            name:"New Project",
            comments:["test1","test2","test3"],
            code:{
                javascript:"var i = 0; \n return i+2;",
                css:"body { background: #fff}",
                html:"<div class = \"new-div\"></div>"
            }
        },
        user:{}
    }
    componentDidMount(){
        const {user,id} = this.props.match.params;
        if(id&&user){
            console.log(user,id);
            this.setState({
                user:{
                    username:"username"
                }
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
            <div>
                {/* remember to mess with .editor class in codemirror */}
            <Nav mode="project"user ={this.state.user } project={this.state.project}/>
            <div className="container editor-container ">

                <div className="col projects">
                </div>
                <div className="col">
                    <div className = "row top-row mh-25">
                        <Editor lang ="javascript" code ={this.state.project.code.javascript}/> {/* add code prop*/}
                        <Editor lang ="css" code ={this.state.project.code.css}/> {/* add code prop*/}
                    </div>
                    <div className ="row bottom-row mh-25">
                        <Editor lang ="htmlmixed" code ={this.state.project.code.html}/> {/* add code prop*/}
                        <div className="border border-secondary md-6">
                        <iframe width="100%" className="render-window " title="Render Panel"></iframe>
                        </div>
                    </div>
                </div>
            </div>

            </div>

        );

    }

}


export default EditorContainer