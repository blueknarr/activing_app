import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import { Club, Main, Signup, CreateClub,ClubDetails } from "../pages";
import Login from "../pages/Login";
import Mypage from "../pages/Mypage";


export default class Content extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/club" component={Club} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/createclub" component={CreateClub} />
        <Route path="/clubdetails" component={ClubDetails} />
        <Route exact path="/mypage" component={Mypage} />
      </Switch>
    );
  }
}
