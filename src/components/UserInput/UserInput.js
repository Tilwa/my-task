import React from "react";
import "./UserInput.css";
const UserInput = (props) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter your text"
        onChange={props.changed}
        id="input"
        value={props.currentName}
      />
    </div>
  );
};

export default UserInput;
