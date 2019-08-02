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
              <div className="ui grid">
                <div className="eight wide column" id="categoryColumn">
                  <SavedQuestions /> 
                </div>
                <div className="eight wide column" id="categoryColumn">
                  <SubmittedQuestions />
                </div>
              </div>
            </div>
        </div>
      </Fragment>
    );
  }
}

export default Profile;
