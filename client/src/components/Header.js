import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../css/Header.css";

class Header extends Component {
  renderLogin() {
    switch (this.props.auth) {
      case null:
        return <span>Loading</span>;
      case false:
        return <a href="/auth/google">Login with GOOGLE</a>;
      default:
        return <a href="/api/users/logout">Logout</a>;
    }
  }

  render() {
    console.log(this.props);
    return (
      <article className="full-overlay">
        <div className="container-fluid">
            <a className="title-top" href="#">
              <span id="aa">A</span>CTIVIT'ING
            </a>
            <Link
              to={this.props.auth ? "/dashboard" : "/"}
              className="left brand-logo"
            />
            <ul className="right">
              <li>{this.renderLogin()}</li>
            </ul>
        </div>
      </article>
    );
  }
}

const mapStateToProps = state => {
  return { auth: state.auth };
};

export default connect(mapStateToProps)(Header);
