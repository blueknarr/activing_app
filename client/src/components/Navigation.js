import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import '../css/Navigation.css';

class Navigation extends Component {
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
            <Link to="/match">Today's Match</Link>
          </li>
          <li>
            <Link to="/signup">SIGNUP</Link>
          </li>
          <li>
            <Link to="/dev">Dev Team</Link>
          </li>
          <li>
            <Link to="/login">LOGIN</Link>
          </li>
        </ul>
      </div>

    );
  }
}

export default Navigation;