import React , {Component, Fragment} from "react";
import "../App.css";
import { connect } from "react-redux";
import Categories from '../components/Categories';

class CategoryContainer extends Component {

  render() {
    return ( 
      <Fragment>
        <h3 className="questionLabel">Question Categories</h3>
        <Categories/>
      </Fragment>
    );
  }
}

function mapStateToProps({ category }) {
  return { category };
}

export default connect(mapStateToProps)(CategoryContainer);