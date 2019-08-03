import React from "react";
import "../App.css";

function SaveBtn(props) {
  return (
    <span className="ui primary button" {...props} role="button" tabIndex="0">
      Save
    </span>
  );
}

export default SaveBtn;
