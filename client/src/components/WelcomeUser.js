import React, { Component, Fragment }from 'react';
import '../App.css';
import axios from 'axios';

class WelcomeUser extends Component {
  state = {
    user:[]
  }

  componentDidMount() {
    axios.get("api/current_user")
    .then(res => {
      this.setState({user: res.data})}).catch(err => console.log(err));  
  }

  render() {
    return(
      <Fragment>
      <div id="userWelcome">
        <div>
          <h1>Hello, {this.state.user.userName}! </h1>
        </div>
      </div>
      </Fragment>
    )
  }
}

export default WelcomeUser;