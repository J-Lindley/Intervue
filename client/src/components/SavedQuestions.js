import React, { Component, Fragment } from 'react';
import '../App.css';
import axios from 'axios';
import DeleteBtn from './DeleteBtn';
import { connect } from "react-redux";
import * as actions from "../actions";

class SavedQuestions extends Component {

  state = {
    savedQuestions: {
      saved: []
    },
    showAnswer: false
  }

  componentDidMount() {
    //first get and store user id
    axios.get("/api/current_user")
      .then(res => {

        let user = res.data.googleId;
        axios.get(`api/user/savedQuestions/${user}`)
          .then(res => {
            this.setState({ savedQuestions: res.data });
          })
      })
  }

  deleteSaved = id => {
    console.log(id);
    axios.get("/api/current_user")
      .then(res => {
        axios.put(`api/user/deleteQuestion/`, { qid: id, uid: res.data.googleId })
          .then(res => {
            window.location.reload();
          })
      })
  }

  showAnswer = () => {
    console.log("I've been clicked")
    this.setState({showAnswer: true});
  }

  render() {
    return (
      <Fragment>
        <h3 className="ui header" id="savedQuestionTitle">Saved Questions</h3>
        {this.state.savedQuestions.saved.length ? this.state.savedQuestions.saved
          .map(savedQuestion => (
            <div className="ui segment" id="savedQuestionContainer">
              <div className="savedQuestionDetails">
                <h3>Question Category: </h3>
                <strong>{savedQuestion.questionType}</strong>
              </div>
              <div className="savedQuestionDetails">
                <h3>Question: </h3>
                <strong>{savedQuestion.question}</strong>
              </div>
              <div className="savedQuestionDetails">
                <h3>Answer: </h3>
                <strong>{this.state.showAnswer ? savedQuestion.answer : 
                <button className="ui primary button" id="showAnswerButton" onClick={this.showAnswer}>Click for answer</button> }</strong>
              </div>
              <DeleteBtn onClick={() => this.deleteSaved(savedQuestion._id)} />
            </div>
          )) : ""}
      </Fragment>
    )
  }
}
function mapStateToProps({ category, auth }) {
  return { category, auth };
}

export default connect(mapStateToProps, actions) (SavedQuestions);