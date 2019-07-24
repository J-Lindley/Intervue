import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from './actions';

import Header from "./components/Header";
import InfoPage from "./pages/infoPage";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div className="App">
        {
          <div>
            <Header />
            <div className="ui container">
              <Router>
                <div>
                  <Switch>
                    {/* <Route exact path="/" component={}/>*/
                  <Route exact path="/infoPage" component={InfoPage} />
                  /*<Route exact path="/newQuestion" component={} />
                  <Route exact path="/detailsPage/:id" />
                  <Route component={404Page} /> */}
                  </Switch>
                </div>
              </Router>
            </div>
          </div>
        }
      </div>
    );
  }
}

export default connect(null, actions)(App);
