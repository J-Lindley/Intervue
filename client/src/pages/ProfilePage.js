import React, { Component, Fragment } from 'react';
import '../App.css';
import SavedQuestions from '../components/SavedQuestions';
import SubmittedQuestions from '../components/SubmittedQuestions';
import WelcomeUser from '../components/WelcomeUser';


class Profile extends Component {
  render() {
    return (
      <Fragment>
        <div className="ui container">
            <div className="twelve wide column">
            <WelcomeUser />
            </div>
            <div className="ui tabular menu">
              <a className="item">Saved Questions</a>
              <a className="item">Submitted Questions</a>
            </div>
            <div class="ui bottom attached segment">
                <SavedQuestions />
            </div>
            <SubmittedQuestions />
            
        </div>
      </Fragment>
    );
  }
}

export default Profile;
