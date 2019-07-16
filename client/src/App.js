import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import GoogleAuth from './components/GoogleAuth';


function App() {
  return (
    <div className="App">
      <Header>
        <GoogleAuth />
      </Header>
      {/* <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/"/>
          <Route exact path="/books"/>
          <Route exact path="/books/:id" />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router> */}
    </div>
  );
}

export default App;
