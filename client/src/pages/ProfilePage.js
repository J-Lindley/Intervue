import React, { Component, Fragment } from 'react';
import '../App.css';
import SavedQuestions from '../components/SavedQuestions';
import SubmittedQuestions from '../components/SubmittedQuestions';


class Profile extends Component {
  render() {
    return (
      <Fragment>
        <div className="ui container">
          <SavedQuestions />
          <SubmittedQuestions />
        </div>
      </Fragment>
    );
  }
}

export default Profile;
