import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "../css/Todaymatch.css";


class Login extends Component {

  render() {
    return (
      <article className="body-full ui middle aligned center aligned grid">
        <div className="loginbody column inverted segment">

            <ul className="loginbtn right ui">
              <li><p>준비 중인 기능입니다 :)</p></li>
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