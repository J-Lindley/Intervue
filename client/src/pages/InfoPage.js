import React, {Component, Fragment} from 'react';
import "../App.css";

class InfoPage extends Component {
  render() {
    return(

    <Fragment>
      <div id="infoData">
        <h1>Hello, Welcome to InterVue. </h1>
        <h3>A one stop shop to help developers prepare for their for dream job interview. </h3>
        <h3>Sign up/Login with Google to create a profile which will allow you to save questions to your profile or click the "Get Started" button below to browse questions!</h3>  
        <h2>Good luck!</h2>

        <div>
        <button className ="ui button">
          <a href="/questionsPage">Get Started</a>
        </button>
      </div>
      </div>
    
      
    </Fragment>
    );
  }
}

export default InfoPage;
