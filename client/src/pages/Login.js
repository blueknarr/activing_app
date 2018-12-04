import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "../css/Login.css";


class Login extends Component {

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
        return <p><a className="ui inverted massive purple button" href="/auth/google">Activiting에 가입해보세요!</a></p>;
      default:
        return <p>{this.props.auth.username}님, 환영합니다. <br/> <a href="/api/users/logout"> Logout</a> </p>;
    }
  }

  render() {
    console.log(this.state);
    this.setName();
    return (
      <article className="body-full ui middle aligned center aligned grid">
        <div className="loginbody column inverted segment">

            <ul className="loginbtn right ui">
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

export default connect(mapStateToProps)(Login);
