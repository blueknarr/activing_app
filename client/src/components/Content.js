import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import { Club, Main, Signup } from "../pages";
import Login from "../pages/Login";

export default class Content extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/club" component={Club} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        {/* <Route exact path="/" component={PostNew} /> */}
      </Switch>
    );
  }
}
