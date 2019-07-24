//Add About Text Text
//Button Continue as Guest => detailsPage.js

import React, {Component, Fragment} from 'react';
import "../App.css";



class InfoPage extends Component {
render() {
  return(

    <Fragment>
    <div>
      <h1>Hello, Welcome to InterVue. </h1>

      <p>A place for new developers to get access to common interview questions. 
      We found popular interview questions and put them in a serchable format. 
      Search buy programming language, to capture questions specific to your job search.  
      Create a profile to archive the questions you want keep handy.
      </p>
    </div>
    
    <div>
    <button className ="ui button">Get Started</button>
    </div>
    </Fragment>
  );
}
}
export default InfoPage;




