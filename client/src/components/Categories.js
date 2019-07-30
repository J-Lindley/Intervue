import React , {Component, Fragment} from "react";
import "../App.css";
import axios from 'axios';

class Categories extends Component {
  state = {
    questionType: []
  }
  componentDidMount() {
    axios.get("api/questions/categories")
    .then(res => {
      console.log(res.data) 
      this.setState({questionType: res.data})}).catch(err => console.log(err))
      
  }
  render() {
    return ( 
      <Fragment>
        <h4>{this.state.questionType
            .map(questionType => (
              <div>{questionType}</div>
            ))}</h4>
      </Fragment>
    );
  }
}

export default Categories;