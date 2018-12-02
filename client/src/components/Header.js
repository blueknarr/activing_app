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
        return <p><a href="/auth/google">Login with GOOGLE</a> <br/> <a href="/signup">Signup</a> </p>;
      default:
        return <p>{this.props.auth.googleID}님, 환영합니다. <br/> <a href="/mypage">MyPage</a><br/> <a href="/api/users/logout"> Logout</a> </p>;
    }
  }

  render() {
    console.log(this.props);
    return (
      <article className="full-overlay">
        <div className="container-fluid">
            <a className="title-top" href="/">
              <span id="aa">A</span>CTIVIT'ING
            </a>
            <Link
              to={this.props.auth ? "/" : "/"}
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
