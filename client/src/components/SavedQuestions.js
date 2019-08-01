import React, { Component }from 'react';
import '../App.css';
import axios from 'axios';
import DeleteBtn from './DeleteBtn';

class SavedQuestions extends Component {

  state = {
    savedQuestions: []
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
          
        })
    })
  }

  render() {
    return (
      <div className="ui raised segments">
        <h3 className="ui header">Saved Questions</h3>
        {this.state.savedQuestions
        .map(savedQuestion => (
          <div className="ui segment">
            <h2 className="questionLabel"> Question </h2>
            <h3>{savedQuestion.question}</h3>
            <h2 className="questionLabel"> Answer </h2>
            <h3>{savedQuestion.answer}</h3>
            <DeleteBtn />
            <div className="extra content">
                <span className="left floated" id="thumbsUp">
                <i className="thumbs up outline icon"></i>
                Helpful
                </span>

                <span className="right floated" id="thumbsDown">
                <i className="thumbs down outline icon"></i>
                Not Helpful
                </span>
                </div>
          </div>
        ))}
      </div>
    )
  }
}

export default SavedQuestions;