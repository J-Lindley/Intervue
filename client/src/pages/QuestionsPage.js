import React, {Component, Fragment}from 'react';
import {Link} from 'react-router-dom';
import { connect } from "react-redux";
import '../App.css';
import SaveBtn from '../components/SaveBtn';
import DeleteBtn from '../components/DeleteBtn';


class QuestionsPage extends Component {
  render() {
    return (
      <Fragment>
        <div className="ui left fixed vertical menu">
          <Link
            to={this.props.auth ? '/questionsPage' : '/infoPage'}
            className="item" id="headerTitle"
          >
            <h2>InterVue</h2>
          </Link>
          <div className= "item">
            <h4>Question Types: </h4>
          </div>
          <div className="item">Behavioral</div>
          <div className="item">JavaScript</div>
          <div className="item">Java</div>
          <div className="item">React</div>
        </div>
        
        <div>
          <button class="ui right labeled icon button" id="nextBtn">Next
          <i class="right arrow icon"></i>
          </button>
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

        <div>
          <button class="ui left labeled icon button" id="previousBtn">Previous
          <i class="left arrow icon"></i>
          </button>
        </div>
      </Fragment>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps) (QuestionsPage);
