import React from "react";
import "../App.css";

function SaveBtn (props) {
    return(
      <span className={props.isSaved ? "ui primary disabled button" : "ui primary button"} {...props} role="button" tabIndex="0">
      {props.isSaved ? "Saved" : "Save"} 
      </span>
    )
}    

export default SaveBtn;
