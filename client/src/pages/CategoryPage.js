import React, {Component, Fragment}from 'react';
import { connect } from "react-redux";
import '../App.css';
import QuestionType from '../components/QuestionType';
import CategoryContainer from '../components/CategoryContainer';

class CategoryPage extends Component {
  render() {
    return (
      <Fragment>
        <div className="ui grid">
          <div className="four wide column" id="categoryColumn">
              <CategoryContainer/>
          </div>
          <div className="ten wide column" id="questionContainer">
              <QuestionType />
          </div>
        </div>
      </Fragment>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(CategoryPage);