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
        this.setState({ questionType: res.data })
      }).catch(err => console.log(err))

  }

  submitQuestion = event => {
    event.preventDefault();
    if (this.refs.question.value !== "" && this.refs.answer.value !== "" && this.refs.category.value !== "Select Category (Required)") {
      const newQuestion = {
        question: this.refs.question.value,
        answer: this.refs.answer.value,
        company: this.refs.company.value,
        questionType: this.refs.category.value
      }

      axios.post("api/questions/newQuestion", newQuestion)
        .then(function (res) {
          console.log(res.data._id);
          let submitted = res.data._id;
          axios.get("api/current_user")
            .then(res => {
              let user = res.data.googleId;
              axios.put("api/user/submitQuestion", { qid: submitted, uid: user })
                .then(res => {
                  console.log(res);
                })
            })
        })
    }

  }

  render() {
    return (
      <Fragment>
        <div className="ui container">
          <div className="ui tabular menu">
            <NewQuestionWelcome />
          </div>
          <div class="ui bottom attached segment">
            <form className="ui form" id="newQuestionContainer">
              <div className="field">
                <label className="formLabel"><h3>Question: </h3></label>
                <textarea
                  placeholder="Please submit the question here. (Required) "
                  type="text"
                  ref="question"
                  name="question"
                />
              </div>
              <div className="field">
                <label className="formLabel"><h3>Answer: </h3></label>
                <textarea
                  placeholder="Please submit the question answer here. (Required) "
                  type="text"
                  ref="answer"
                  name="answer"
                />
              </div>
              <div className="field">
                <label className="formLabel"><h3>Company: </h3></label>
                <input placeholder="Company (if applicable)" type="text" name="company" ref="company" />
              </div>
              <div className="field">
                <label className="formLabel"><h3>Question Category: </h3></label>
                <select className="ui search dropdown" ref="category" name="category">
                  <option value="">Select Category (Required)</option>
                  {this.state.questionType
                    .map(questionType => (
                      <option value={questionType}>{questionType}</option>
                    ))}
                </select>
              </div>
              <div className="ui primary button" onClick={this.submitQuestion}>Submit Question</div>
            </form>
          </div>
        </div>


      </Fragment>
    );
  }
}

export default QuestionForm;
