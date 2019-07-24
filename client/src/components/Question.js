import React, {Component}from 'react';
import '../App.css';
const db = require("../models");
const apiRoutes = require("../../../routes/api");


class Question extends Component {
  componentDidMount() {
    this.loadQuestion();
  }

  loadQuestion = () => {
    
  }

}

export default Question;