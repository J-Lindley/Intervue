import React from "react";
import "../App.css";

function DeleteBtn(props) {
  return (
    <span className="ui button" {...props} role="button" tabIndex="0">
      Delete
    </span>
  );
}

export default DeleteBtn;
