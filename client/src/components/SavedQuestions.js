import React, { Component, Fragment }from 'react';
import '../App.css';
import axios from 'axios';
import DeleteBtn from './DeleteBtn';

class SavedQuestions extends Component {

  state = {
    savedQuestions: {
      saved: []
    }
  }

  componentDidMount() {
    //first get and store user id
    axios.get("/api/current_user")
    .then(res => {
      console.log(res.data.googleId);
      
      
      let user = res.data.googleId;
      axios.get(`api/user/savedQuestions/${user}`)
        .then(res => {
          console.log(res.data);
          this.setState({savedQuestions: res.data});
        })
    })
  }


  deleteQuestion = id => {
    
  }

  render() {
    return (
      <Fragment>
        <h3 className="ui header" id="savedQuestionTitle">Saved Questions</h3>
        {this.state.savedQuestions.saved.length ? this.state.savedQuestions.saved
        .map(savedQuestion => (
          <div className="ui segment" id="savedQuestionContainer">
            <h4>Question Category: {savedQuestion.questionType}</h4>
            <h4>Question: {savedQuestion.question}</h4>
            <h4>Answer: {savedQuestion.answer}</h4>
            <DeleteBtn />
          </div>
        )) : ""}
      </Fragment>
    )
  }
}

export default SavedQuestions;