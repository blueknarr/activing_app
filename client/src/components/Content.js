import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import { Club, Main, Signup, CreateClub,ClubDetails } from "../pages";
import Login from "../pages/Login";
import Mypage from "../pages/Mypage";
import Todaymatch from "../pages/Todaymatch";
import Dev from "../pages/Dev";


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
        <Route exact path="/todaymatch" component={Todaymatch} />
        <Route exact path="/dev" component={Dev} />
      </Switch>
    );
  }
}
