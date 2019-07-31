import React , {Component, Fragment} from "react";
import "../App.css";
import Categories from '../components/Categories';

class CategoryContainer extends Component {
  render() {
    return ( 
      <Fragment>
        <h3 className="questionLabel">Question Categories</h3>
        <Categories />
      </Fragment>
    );
  }
}

export default CategoryContainer;