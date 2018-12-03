import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../css/Header.css";

class Header extends Component {
  state = {
    email: '',
    username: "",
    nickname: "",
    born: 0,
    region: "",
    tag: []
  };

  setName () {
    if(this.state.username === '' && this.props.auth ) {
      this.setState({ username: this.props.auth.username })
    }
  }
  renderLogin() {
    switch (this.props.auth) {
      case null:
        return <span>Loading</span>;
      case false:
        return <p>Activiting에 가입해보세요!</p>;
      default:
        return <p>{this.props.auth.username}님, 환영합니다. <br/> <a href="/api/users/logout"> Logout</a> </p>;
    }
  }

  render() {
    this.setName();

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
