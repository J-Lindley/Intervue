import React, {Component, Fragment}from 'react';
import { connect } from "react-redux";
import '../App.css';
import QuestionType from '../components/QuestionType';
import CategoryContainer from '../components/CategoryContainer';

class CategoryPage extends Component {
<<<<<<< HEAD
  render() {
    return (
      <Fragment>
        <div className="ui grid">
          <div className="four wide column" id="categoryColumn">
              <CategoryContainer/>
          </div>
          <div className="ten wide column" id="questionContainer">
              <QuestionType />
=======



  render() {
    return (
      <Fragment>
        <div className="ui container">
          <div className="ui grid">
            <div className="five wide column" id="categoryColumn">
              <CategoryContainer/>
            </div>
            <div className="ten wide column" id="questionContainer">
              <QuestionType />
            </div>
>>>>>>> master
          </div>
        </div>
      </Fragment>
    );
  }
}

<<<<<<< HEAD
function mapStateToProps({ auth }) {
  return { auth };
=======
function mapStateToProps({ category }) {
  return { category };
>>>>>>> master
}

export default connect(mapStateToProps)(CategoryPage);