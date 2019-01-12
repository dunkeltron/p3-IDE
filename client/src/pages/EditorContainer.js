import React from "react";
import Editor from "../components/Editor";

import Nav from "../components/Nav";
function EditorContainer() {
    //g
    return (
        <div>
            {/* remember to mess with .editor class in codemirror */}
        <Nav/>
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
                    <iframe className="render-window mh-25 md-6" title="Render Panel"></iframe>
                </div>
            </div>
        </div>
        
        </div>
    
    );
    
}

export default EditorContainer