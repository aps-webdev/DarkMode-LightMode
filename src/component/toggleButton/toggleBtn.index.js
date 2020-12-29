import React from "react";
import "./toggleBtn.styles.scss";

function ToggleBtn(props) {
  return (
    <div className="toggleContainer">
      <input
        type="checkbox"
        name="toggle"
        id="toggle"
        className="toggle toggleStyle"
        onChange={props.handleToggle}
      />
      <label htmlFor="toggle" className="toggleButton"></label>
    </div>
  );
}

export default ToggleBtn;
