import React, { Component, Fragment }from 'react';
import '../App.css';
import axios from 'axios';
import DeleteBtn from './DeleteBtn';

class SubmittedQuestions extends Component {

  state = {
    submittedQuestions: {
      submitted: []
    }
  }

  componentDidMount() {
    axios.get("/api/current_user")
    .then(res => {
      let user = res.data.googleId;
      axios.get(`api/user/submittedQuestions/${user}`)
      .then(res => {
      this.setState({submittedQuestions: res.data})}) 
    })
  }


  render() {
    return (
      <Fragment>
      <h3 className="ui header" id="submittedQuestionTitle">Submitted Questions</h3>
        {this.state.submittedQuestions.submitted.length ? this.state.submittedQuestions.submitted
        .map(submittedQuestion => (
          <div className="ui segment" id="submittedQuestionContainer">
            <div className="submittedQuestionDetails">
              <h3>Question Category: </h3> 
              <strong>{submittedQuestion.questionType}</strong>
            </div>
            <div className="submittedQuestionDetails">
              <h3>Question: </h3> 
              <strong>{submittedQuestion.question}</strong>
            </div>
            <div className="submittedQuestionDetails">
              <h3>Answer: </h3> 
              <strong>{submittedQuestion.answer}</strong>
            </div>
            <DeleteBtn />
          </div>
        )) : ""}
      </Fragment>
    )
  }
}

export default SubmittedQuestions;