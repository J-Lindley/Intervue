import React, { Component, Fragment }from 'react';
import '../App.css';
import axios from 'axios';

class NewQuestionWelcome extends Component {
  state = {
    users:[]
  }

  componentDidMount() {
    axios.get("api/user/findUser")
    .then(res => {
      console.log(res.data) 
      this.setState({users: res.data})}).catch(err => console.log(err));  
  }

  render() {
    return(
      <Fragment>
      {this.state.users
      .map(user => (
      <div id ="userWelcome">
        <div>
          <h1>{user.userName} please add your question using the form below! </h1>
        </div>
      </div>
      ))}
      </Fragment>
    )
  }
}

export default NewQuestionWelcome;