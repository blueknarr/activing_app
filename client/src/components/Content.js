import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import { Club, Main, Signup, CreateClub } from "../pages";
import Login from "../pages/Login";

export default class Content extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/club" component={Club} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/createclub" component={CreateClub} />
      </Switch>
    );
  }
}
