import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from './actions';

import Header from "./components/Header";
import QuestionsPage from './pages/QuestionsPage';
import NewQuestion from './pages/NewQuestion';
import InfoPage from './pages/InfoPage';
import ProfilePage from './pages/ProfilePage';
// import NoMatch from './pages/404Page';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div className="App">
        {
          <div>
              <Router>
                <Header />
                  {/* <div className="ui container"> */}
                  <Switch>
                  <Route exact path="/" component={InfoPage}/>
                  <Route exact path="/InfoPage" component={InfoPage}/>
                  <Route exact path="/questionsPage" component={QuestionsPage} />
                  <Route exact path="/newQuestion" component={NewQuestion} />
                  <Route exact path="/profile" component={ProfilePage}/>
                  {/* <Route component={NoMatch}/> */}
                  </Switch>
                  {/* </div> */}
              </Router>
            </div>
        }
      </div>
    );
  }
}

export default connect(null, actions)(App);
