import React, {Component}from 'react';
import '../App.css';
import axios from 'axios';
const db = require("../models");
const apiRoutes = require("../../../routes/api");


class Question extends Component {
  componentDidMount() {
    axios.get("/api/questions")
    .then(res => {
      console.log(res.data) 
      this.setState({questions:res.data})}).catch(err => console.log(err))
  }

  

}

export default Question;