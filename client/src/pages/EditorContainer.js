import React from "react";
import Editor from "../components/Editor";

import Nav from "../components/Nav";
function EditorContainer() {
    return (
        <div>
            
        <Nav/>
        <div className="container editor-container">
            <div className = "row">
            <Editor lang ="javascript"/>
            <Editor lang ="css"/>
            <Editor lang ="html"/>
            </div>
        
        </div>
        
        </div>
    
    );
    
}

export default EditorContainer