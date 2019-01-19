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
    <div className="col-6 border border-secondary editor">

        <CodeMirror
            value= {props.code} 
            options={{
                mode: props.lang,
                theme: 'monokai',
                lineNumbers: true
            }}
            onChange={(editor, data, value) => {
            }}
        />
    </div>
  );


}


export default Editor;