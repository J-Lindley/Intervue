import React, { Component, Fragment }from 'react';
import '../App.css';
import axios from 'axios';

class WelcomeUser extends Component {
  state = {
    users:[]
  }

  componentDidMount() {
    axios.get("api/user/findUser")
    .then(res => {
      this.setState({users: res.data})}).catch(err => console.log(err));  
  }

  render() {
    return(
      <Fragment>
      {this.state.users
      .map(user => (
      <div id="userWelcome">
        <div>
          <h1>Hello, {user.userName}! </h1>
        </div>
      </div>
      ))}
      </Fragment>
    )
  }
}

export default WelcomeUser;