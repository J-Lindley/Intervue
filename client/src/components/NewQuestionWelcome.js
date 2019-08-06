import React, { Component, Fragment }from 'react';
import '../App.css';
import axios from 'axios';

class NewQuestionWelcome extends Component {
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
            <h1>{this.state.user.userName} - please add your question using the form below! </h1>
          </div>
        </div>
        
      </Fragment>
    )
  }
}

export default NewQuestionWelcome;