import React , {Component} from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false: 
        return <a href="/auth/google"> Login with Google </a>;
      default:
        return <a href="/api/logout">Logout</a>;
    }
  }

  render() {
    return (
      <div className="ui menu">
        <div className="header item">
          InterVue
        </div>
        <div className="header item">
          <a>Profile</a>
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