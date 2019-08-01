import React, {Component}from 'react';
import '../App.css';
import QuestionForm from '../components/QuestionForm';

class NewQuestion extends Component {
  render() {
    return (
      <div className="ui container">
        <QuestionForm />
      </div>
    )
  }
}

export default NewQuestion;
