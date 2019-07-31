import React, { Component, Fragment } from 'react';
import '../App.css';
import SavedQuestions from '../components/SavedQuestions';
import SubmittedQuestions from '../components/SubmittedQuestions';


class Profile extends Component {

  render() {
    return (
      <Fragment>
        <SavedQuestions />
        <SubmittedQuestions />
      </Fragment>
    );
  }
}

export default Profile;
