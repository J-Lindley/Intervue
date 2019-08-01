import React, {Component, Fragment}from 'react';
import { connect } from "react-redux";
import '../App.css';
import Question from '../components/Question';
import CategoryContainer from '../components/CategoryContainer';

class QuestionsPage extends Component {
  render() {
    return (
      <Fragment>
        <div className="ui grid">
          <div className="three wide column" id="categoryColumn">
              <CategoryContainer/>
          </div>
          <div className="twelve wide column" id="questionContainer">
              <Question />
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
