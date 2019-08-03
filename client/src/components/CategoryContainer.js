import React , {Component, Fragment} from "react";
import "../App.css";
import { connect } from "react-redux";
import Categories from '../components/Categories';

class CategoryContainer extends Component {

  render() {
    return ( 
      <Fragment>
<<<<<<< HEAD
        <h3 className="questionLabel">Question Types</h3>
        <Categories />
=======
        <h3 className="questionLabel">Question Categories</h3>
        <Categories/>
>>>>>>> master
      </Fragment>
    );
  }
}

function mapStateToProps({ category }) {
  return { category };
}

export default connect(mapStateToProps)(CategoryContainer);