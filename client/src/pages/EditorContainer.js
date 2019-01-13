import React, {Component} from "react";
import Editor from "../components/Editor";
import Nav from "../components/Nav";
class EditorContainer extends Component {
    render(){
    return (
        <div>
            <Nav/>
            <div className="container editor-container mx-0 px-0">                
                <div className = "row ">
                    <div className = "projects-list">
                    Projects go Here
                    </div>
                    <Editor lang ="javascript"/>
                    <Editor lang ="css"/>
                    <Editor lang ="html"/>
                    <iframe title= " render-window"></iframe>
                </div>
            
            </div>
        </div>
    
    );
    }
    
}

export default EditorContainer