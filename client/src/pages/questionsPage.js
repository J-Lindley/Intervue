import React, {Component, Fragment}from 'react';
import '../App.css';
import SaveBtn from '../components/SaveBtn';
import DeleteBtn from '../components/DeleteBtn';

class QuestionsPage extends Component {
  render() {
    return (
      <Fragment>
        <div className="ui left fixed vertical menu">
          <div className="item" id="headerTitle">
            <h2>InterVue</h2>
          </div>
          <div className= "item">
            <h4>Question Types: </h4>
          </div>
          {/* <a class="item">Behavioral</a>
          <a class="item">JavaScript</a>
          <a class="item">React</a>
          <a class="item"></a> */}
        </div>
        
        <div class="ui card" id="questionCard">
            <div class="content">
            <div class="header" id='questionTitle'> Interview Question: </div>
            <div class="header"> If we wanted to implement a method of tracking every click that the user made on the site, how would we want to do this?</div>
            <div class="header" id='questionAnswerTitle'> Interview Answer: </div>
              <div class="description">
              <p>SEE ANSWER</p>
              </div>
            </div>
          <div class="extra content">
            <SaveBtn />
            <DeleteBtn />
          </div>
          <div class="extra content">
            <span class="left floated like">
              <i class="thumbs up outline icon"></i>
              Helpful
            </span>
            <span class="right floated star">
            <i class="thumbs down outline icon"></i>
            Not Helpful
            </span>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default QuestionsPage;
