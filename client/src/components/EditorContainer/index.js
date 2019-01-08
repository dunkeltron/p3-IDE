import React from "react";
import Editor from "../Editor";
function EditorContainer() {
    return (
        <div className="container editor-container">
            <div className = "row">
            <Editor lang ="javascript"/>
            <Editor lang ="css"/>
            <Editor lang ="html"/>
            </div>
        
        </div>
    
    );
    
}

export default EditorContainer