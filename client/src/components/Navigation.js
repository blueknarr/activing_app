import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import '../css/Navigation.css';

class Navigation extends Component {

  renderLogin() {
    console.log(this.props.auth);
    switch (this.props.auth) {
      case null:
        return <span>Loading</span>;
      case false:
        return <Link to='/login'>Login</Link>;
      default:
        return <Link to='/signup'>MyPage</Link>;
    }
  }

  render() {
    return (

      <div className="rows">
        <ul className="nav nav-pills nav-justified">
          <li>
            <Link to="/">Activit'ng</Link>
          </li>
          <li>
            <Link to="/club">Club Schedule</Link>
          </li>
          <li>
            <Link to="/todaymatch">Today's Match</Link>
          </li>
          <li>
            <Link to="/login">{this.renderLogin()}</Link>
          </li>
          <li>
            <Link to="/dev">Dev Team</Link>
          </li>
        </ul>
      </div>

    );
  }
}

const mapStateToProps = state => {
  return { auth: state.auth };
};
export default connect(mapStateToProps)(Navigation);