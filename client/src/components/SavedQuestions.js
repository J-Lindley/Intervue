import React, { Component }from 'react';
import '../App.css';
import axios from 'axios';
import DeleteBtn from './DeleteBtn';

class SavedQuestions extends Component {

  state = {
    savedQuestions: []
  }

  componentDidMount() {
    axios.get("api/user/savedQuestions")
    .then(res => {
      console.log(res.data) 
      this.setState({savedQuestions: res.data})}).catch(err => console.log(err))  
  }

  render() {
    return(
      <div>Saved Questions</div>
    )
    // return (
    //   // <div class="ui raised segments">
    //   //   <h3 class="ui header">Saved Questions</h3>
    //   //   {this.state.savedQuestions
    //   //   .map(savedQuestion => (
    //   //     <div class="ui segment">
    //   //       <h2 className="questionLabel"> Question </h2>
    //   //       <h3>{savedQuestion.question}</h3>
    //   //       <h2 className="questionLabel"> Answer </h2>
    //   //       <h3>{savedQuestion.answer}</h3>
    //   //       <DeleteBtn />
    //   //       <div class="extra content">
    //   //           <span class="left floated" id="thumbsUp">
    //   //           <i class="thumbs up outline icon"></i>
    //   //           Helpful
    //   //           </span>

    //   //           <span class="right floated" id="thumbsDown">
    //   //           <i class="thumbs down outline icon"></i>
    //   //           Not Helpful
    //   //           </span>
    //   //           </div>
    //   //     </div>
    //   //   ))}
    //   // </div>
    // )
  }
}

export default SavedQuestions;