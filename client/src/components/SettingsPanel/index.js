import React from "react";

function SettingsPanel({ type = "default", onClick, value, children }) {
  return (
    <div>
      {/* <input className={"ml-3"} value={value} placeholder="Settings Panel" /> */}
      <button onClick={onClick} className={"ml-3 mt-2 mb-2 btn btn-danger"}>Delete Project</button>
    </div>
  );
}

export default SettingsPanel;
