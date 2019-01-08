import React from "react";

import{UnControlled as CodeMirror} from 'react-codemirror2';
require('codemirror/lib/codemirror.css');
require('codemirror/theme/material.css');
require('codemirror/theme/neat.css');
require('codemirror/mode/xml/xml.js');
require('codemirror/mode/javascript/javascript.js');
function Editor(props) {
  return (
    <div className="col-md-4 border border-secondary editor">
        <CodeMirror
            value='<h1>I ♥ react-codemirror2</h1>'
            options={{
                mode: props.lang,
                theme: 'material',
                lineNumbers: true
            }}
            onChange={(editor, data, value) => {
            }}
        />
    </div>
  );


}


export default Editor;