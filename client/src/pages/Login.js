import React, { Component } from "react";
import {Link} from 'react-router-dom';
import "../css/Login.css";

class Login extends Component {
  render() {
    return (
      <article className="body-full ui middle aligned center aligned grid">
        <div className="loginbody column">
          <form className="ui middle form">
            <div className="ui placeholder inverted segment">
              <div className="ui two column very relaxed stackable grid">
                <div className="column">
                  <div className="ui form">
                    <div className="field">
                      <label>Email</label>
                      <div className="ui left icon inverted transparent input">
                        <input
                          type="text"
                          placeholder="이메일 주소를 입력하세요."
                          autoFocus={true}
                        />
                        <i className="user icon" />
                      </div>
                    </div>
                    <div className="field">
                      <label>Password</label>
                      <div className="ui left icon inverted transparent input">
                        <input
                          type="password"
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
                <Link to="/signup"><div className="ui big button inverted violet">
                    <i className="signup icon" />
                    없다면, 가입하기!
                  </div></Link>
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
