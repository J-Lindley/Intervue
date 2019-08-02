import React, { Component, Fragment } from "react";
import "../App.css";
import axios from "axios";
import NewQuestionWelcome from "./NewQuestionWelcome";

class QuestionForm extends Component {
  state = {
    questionType: []
  }

  componentDidMount() {
    axios.get("api/questions/categories")
    .then(res => {
      console.log(res.data) 
      this.setState({questionType: res.data})}).catch(err => console.log(err))
      
  }

  render() {
    return (
      <Fragment>
        <div className="ui container">
          <div className="ui tabular menu">
            <NewQuestionWelcome />
          </div>
          <div class="ui bottom attached segment">
              <form className="ui form">
              <div className="field">
                <label className="formLabel">Question: </label>
                <textarea
                  placeholder="Please submit the question here. (Required) "
                  type="text"
                />
              </div>
              <div className="field">
                <label className="formLabel">Answer: </label>
                <textarea
                  placeholder="Please submit the question answer here. (Required) "
                  type="text"
                />
              </div>
              <div className="field">
                <label className="formLabel">Company: </label>
                <input placeholder="Company (if applicable)" type="text" />
              </div>
              <div className="field">
                <label className="formLabel">Question Category: </label>
                <select className="ui search dropdown">
                  <option value="">Select Category (Required)</option>
                  {this.state.questionType
                  .map(questionType => (
                    <option value={questionType}>{questionType}</option>
                  ))}
                </select>
              </div>
              <div className="ui submit button">Submit Question</div>
            </form>
          </div>
        </div>

        
      </Fragment>
    );
  }
}

export default QuestionForm;
