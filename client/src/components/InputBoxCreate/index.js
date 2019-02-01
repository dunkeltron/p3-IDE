import React from "react";

// Destructuring the type, className, children and onClick props, applying them to the button element
function InputBoxCreate({ type = "default", onClick, children }) {
  return (
    <div>
      <input placeholder="Enter Project Name Here!"></input>
      <button className={"ml-3 btn btn-warning"} onClick={onClick}>Confirm</button>
    </div>
  );
}

export default InputBoxCreate;
