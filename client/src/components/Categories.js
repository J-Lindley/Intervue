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
        <button className="ui primary button">
          <h4>{this.state.questionType
            .map(questionType => (
              <div>{questionType}</div>
            ))}</h4>
        </button>
      </Fragment>
    );
  }
}

export default Categories;