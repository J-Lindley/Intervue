import React , {Component, Fragment} from "react";
import "../App.css";
import axios from 'axios';

class Categories extends Component {
  componentDidMount() {
    axios.get("/api/questions/")
    .then(res => {
      console.log(res.data) 
      this.setState({questions: res.data})}).catch(err => console.log(err))
      
  }
  render() {
    return ( 
      <Fragment>
        <h4>CATEGORIES</h4>
      </Fragment>
    );
  }
}

export default Categories;