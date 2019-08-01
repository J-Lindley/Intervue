import React, {Component, Fragment}from 'react';
import { connect } from "react-redux";
import '../App.css';
import CategoryContainer from '../components/CategoryContainer';
import QuestionContainer from '../components/QuestionContainer';

class QuestionsPage extends Component {
  render() {
    return (
      <Fragment>
        <div className="ui container">
          <div className="ui grid">
            <div className="five wide column" id="categoryColumn">
              <CategoryContainer/>
            </div>
          <div className="ten wide column" id="questionContainer">
              <QuestionContainer/>
          </div>
          </div>
        </div>
        
      </Fragment>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(QuestionsPage);
