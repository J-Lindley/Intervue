import React, {Component, Fragment}from 'react';
import '../App.css';
import DeleteBtn from '../components/DeleteBtn';

class Profile extends Component {
  render() {
    return (
      <Fragment>
      <div class="ui raised segments">
        <h3 class="ui header">Saved Questions</h3>
        <div class="ui segment">
          <p>Question 1</p>
          <DeleteBtn />
        </div>
        <div class="ui segment">
          <p>Question 2</p>
          <DeleteBtn />
        </div>
        <div class="ui segment">
          <p>Question 3</p>
          <DeleteBtn />
        </div>
        <div class="ui segment">
          <p>Question 4</p>
          <DeleteBtn />
        </div>
        <div class="ui segment">
          <p>Question 5</p>
          <DeleteBtn />
        </div>
      </div>

      <div class="ui raised segments">
        <h3 class="ui header">Submitted Questions</h3>
        <div class="ui segment">
          <p>Question 1</p>
          <DeleteBtn />
        </div>
        <div class="ui segment">
          <p>Question 2</p>
          <DeleteBtn />
        </div>
        <div class="ui segment">
          <p>Question 3</p>
          <DeleteBtn />
        </div>
        <div class="ui segment">
          <p>Question 4</p>
          <DeleteBtn />
        </div>
        <div class="ui segment">
          <p>Question 5</p>
          <DeleteBtn />
        </div>
      </div>
      </Fragment>
    )
  }
}

export default Profile;
