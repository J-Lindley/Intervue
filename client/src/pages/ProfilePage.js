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
            <div className="ui tabular menu">
            <WelcomeUser />
            </div>
            <div class="ui bottom attached segment">
                <SavedQuestions />
            </div>
            <div class="ui bottom attached segment">
              <SubmittedQuestions />
            </div> 
        </div>
      </Fragment>
    );
  }
}

export default Profile;
