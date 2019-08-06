import React , {Component, Fragment} from "react";
import "../App.css";
import axios from 'axios';
import * as actions from '../actions';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

class Categories extends Component {
  
  state = {
    questionType: [],
  }

  componentDidMount() {
    axios.get("api/questions/categories")
    .then(res => {
      console.log(res.data) 
      this.setState({questionType: res.data})}).catch(err => console.log(err))  
  }

  handleCategoryClick(category){
    this.props.updateCategory(category);
    this.props.history.push('/categorypage');
  }

  render() {
    return ( 
      <Fragment>
          <h4>{this.state.questionType
            .map(questionType => (
              <button className="ui primary button" id="categoryBtn" 
              onClick={() => this.handleCategoryClick(questionType)}>
              {questionType}
              </button>
            ))}</h4>
      </Fragment>
    );
  }
}
 

export default connect(null, actions)(withRouter(Categories));