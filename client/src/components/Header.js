import React , {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import "../App.css";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false: 
        return <a href="/auth/google"> Login with Google </a>;
      default:
        return <Fragment>
          <div className="header item">
            <a>Profile</a>
          </div>
          <div className="header item">
            <a href="/api/logout">Logout</a>
          </div></Fragment>
    }
  }

  render() {
    return (
      <div className="ui menu">
        <div className="header item">
          <h2>InterVue</h2>
        </div>
        <div className="header item right">
          {this.renderContent()}
        </div>
        
      </div>
    );
  } 
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);