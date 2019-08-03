import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import axios from 'axios';
import logo from "../images/rocket.png";
import "../App.css";

class Header extends Component {

  state = {
    users:{}
  }

  componentDidMount() {
    axios.get("/api/current_user")
    .then(res => {
      this.setState({users: res.data})}).catch(err => console.log(err));  
  }

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <a href="/auth/google"> Login with Google </a>;
      default:
        return (
          <Fragment>
            <div className="header item">
              <a href="/questionsPage">Home</a>
            </div>
            {this.state.users.length ? this.state.users.map(user => (
            <div className="header item">
              <img src={user.userPhoto} alt="userPhoto" id="userPhoto" />
              <a href="/profile">Profile</a>
            </div>
            ))}
            <div className="header item">
              <a href="/newQuestion">Add Interview Question</a>
            </div>
          
            <div className="header item">
              <a href="/api/logout">Logout</a>
            </div>
          </Fragment>
        )
    }
  }

  render() {
    return (
      <div className="ui borderless menu" id="headerContainer">
          <Link
            to={this.props.auth ? '/questionsPage' : '/infoPage'}
            className="header item"
          >
            <img src={logo} alt="Logo" id="logo"/>
            <h1 id="appLink">InterVue</h1>

          </Link>
        <div className="header item right">{this.renderContent()}</div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
