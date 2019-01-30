import React from "react";
import{UnControlled as CodeMirror} from 'react-codemirror2';
require('codemirror/lib/codemirror.css');
require('codemirror/theme/material.css');
require('codemirror/theme/monokai.css');
require('codemirror/mode/xml/xml.js');
require('codemirror/mode/javascript/javascript.js');
require('codemirror/mode/css/css.js');
require('codemirror/mode/htmlmixed/htmlmixed.js');
require( "./editor.css");
function Editor(props) {
  return (
    <div className={"col-6 border border-secondary editor "+props.lang}>

        <CodeMirror
            value= {props.code} 
            options={{
                mode: props.lang,
                theme: 'monokai',
                lineNumbers: true
            }}
            //this sets and displays the code mirror's state.value 
            //we need to figure out how to access and return to the parent component 
            //only save when focus is lost
            //gotta read throguh code-mirror docs for how to pass these back to the parent
            
            onChange={(editor, data, value) => {
                console.log( value);
            }}
        />
    </div>
  );


}


export default Editor;