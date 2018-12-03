import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { register } from "../actions/user.js";
import "../css/Login.css";
const crypto = require("crypto");

function hash(password) {
  return crypto
    .createHmac("sha256", process.env.SECRET_KEY)
    .update(password)
    .digest("hex");
}

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { dispatch } = this.props;
    dispatch(register(this.state));
  };

  render() {
    console.log(this.state);
    return (
      <article className="body-full ui middle aligned center aligned grid">
        <div className="loginbody column">
          <form
            name="form"
            className="ui middle form"
            onSubmit={this.handleSubmit}
          >
            <div className="ui placeholder inverted segment">
              <div className="ui two column very relaxed stackable grid">
                <div className="column">
                  <div className="ui form">
                    <div className="field form-group">
                      <label>Email</label>
                      <div className="ui left icon inverted transparent input">
                        <input
                          className="form-control"
                          value={this.state.email}
                          onChange={this.handleChange}
                          name="email"
                          type="email"
                          placeholder="이메일 주소를 입력하세요."
                          autoFocus={true}
                        />
                        <i className="user icon" />
                      </div>
                    </div>
                    <div className="field form-group">
                      <label>Password</label>
                      <div className="ui left icon inverted transparent input">
                        <input
                          className="form-control"
                          value={this.state.password}
                          onChange={this.handleChange}
                          type="password"
                          name="password"
                          placeholder="패스워드를 입력하세요."
                        />
                        <i className="lock icon" />
                      </div>
                    </div>
                    <button className="ui fluid inverted purple button">
                      로그인!
                    </button>
                  </div>
                </div>
                <div className="middle aligned column">
                  <Link to="/signup">
                    <div className="ui big button inverted violet">
                      <i className="signup icon" />
                      없다면, 가입하기!
                    </div>
                  </Link>
                </div>
              </div>
              <div className="ui vertical divider" />
            </div>
          </form>
        </div>
      </article>
    );
  }
}

export default Login;
