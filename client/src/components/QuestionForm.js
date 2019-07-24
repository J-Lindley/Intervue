import React from "react";
import "../App.css";

function QuestionForm (props) {
  return ( 
    <div class="ui form">
      <div class="field">
        <label>Question Type</label>
        <div class="ui selection dropdown">
          <input type="hidden" name="questionType">
          <i class="dropdown icon"></i>
          <div class="default text">Select One</div>
          <div class="menu">
              <div class="item" data-value="1">Behavioral</div>
              <div class="item" data-value="0">JavaScript</div>
          </div>
        </div>
      </div>
    </div>
  );
}