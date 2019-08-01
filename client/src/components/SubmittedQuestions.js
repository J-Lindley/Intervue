import React, { Component }from 'react';
import '../App.css';
import axios from 'axios';

class SubmittedQuestions extends Component {

  state = {
    submittedQuestions: []
  }

  componentDidMount() {
    axios.get("api/user/submittedQuestions")
    .then(res => {
      console.log(res.data) 
      this.setState({submittedQuestions: res.data})}).catch(err => console.log(err))  
  }

  render() {
    return(
      <div>Submitted Questions</div>
    )
    // return (
    //   // <Fragment>
    //   // <div className="ui raised segments">
    //   //   <h3 className="ui header">Submitted Questions</h3>
    //   //   {this.state.submittedQuestions
    //   //   .map(submittedQuestion => (
    //   //     <div className="ui segment">
    //   //       <h2 className="questionLabel"> Question </h2>
    //   //       <h3>{submittedQuestion.question}</h3>
    //   //       <h2 className="questionLabel"> Answer </h2>
    //   //       <h3>{submittedQuestion.answer}</h3>
    //   //     </div>
    //   //   ))}
    //   // </div>
    //   // </Fragment>
    // )
  }
}

export default SubmittedQuestions;