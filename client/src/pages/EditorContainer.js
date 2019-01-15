import React, {Component} from "react";
import Editor from "../components/Editor";

import Nav from "../components/Nav";
class EditorContainer extends Component{
    state={
        project:{},
        user:{}
    }
    componentDidMount(){
        const {user,id} = this.props.match.params;
        if(id&&user){
            console.log(user,id);
            this.setState({
                user:user,
                id:id
            })
        }
        else if(user&&!id){

        }
        else{
            console.log("no id");
        }
        
        
    }
    render(){

        return (
            <div>
                {/* remember to mess with .editor class in codemirror */}
            <Nav user ={this.props.match.params.user}/>
            <div className="container editor-container ">
            
                <div className="col projects">
                </div>
                <div className="col">
                    <div className = "row top-row mh-25">
                        <Editor lang ="javascript"/> {/* add code prop*/}
                        <Editor lang ="css"/> {/* add code prop*/}
                    </div>
                    <div className ="row bottom-row mh-25">                
                        <Editor lang ="htmlmixed"/> {/* add code prop*/}
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