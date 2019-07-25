//Add About Text Text
//Button Continue as Guest => detailsPage.js

import React, {Component, Fragment} from 'react';
import "../App.css";



class InfoPage extends Component {
render() {
  return(

    <Fragment>
    <div id="infoData">
      <h1>Hello, Welcome to InterVue. </h1>

      <h3>A place for new developers to get access to common interview questions. 
      We found popular interview questions and put them in a serchable format. 
       Search by programming language, to capture questions specific to your job search.  
       Create a profile to archive the questions you want keep handy.
      </h3>
    </div>
    
    <div>
    <button className ="ui button">
      <a href="/questionsPage">Get Started</a>
    </button>
    </div>
    </Fragment>
  );
}
}
export default InfoPage;