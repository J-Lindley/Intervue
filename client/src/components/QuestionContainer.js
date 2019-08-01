import React , {Component, Fragment} from "react";
import "../App.css";
import Question from '../components/Question';

class QuestionContainer extends Component {
  render() {
    return ( 
      <Fragment>
        <Question />
      </Fragment>
    );
  }
}

export default QuestionContainer;