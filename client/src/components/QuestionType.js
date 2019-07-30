import React, {Component}from 'react';
import '../App.css';

class QuestionType extends Component {
  componentDidMount() {
    
  }

  state={
    category:"javascript",
    questions:[]
  }
  componentDidMount() {
    axios.get("/api/questions/category/" + this.state.category)
    .then(res => {
      console.log(res.data) 
      this.setState({questions:res.data})}).catch(err => console.log(err))
  }

}

export default QuestionType;