import React , {Component} from "react";
import "../App.css";

class QuestionForm extends Component {
  render() {
    return ( 
          <div class="ui form">
            <div class="field">

              <div class="field">
              <label><h3>Question</h3></label>
              <textarea rows="2" name="question"></textarea>
              </div>

              <div class="field">
                <label><h3>Question Type</h3></label>
                <div class="ui selection dropdown">
                <input type="hidden" name="questionType"></input>
                <i class="dropdown icon"></i>
                <div class="default text">Select One</div>
                <div class="menu">
                {/* <div class="item" data-value="1">Behavioral</div>
                <div class="item" data-value="0">JavaScript</div> */}
                </div>
              </div>

              <div class="field">
              <label><h3>Company</h3></label>
              <input type="text" name="company"></input>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QuestionForm;