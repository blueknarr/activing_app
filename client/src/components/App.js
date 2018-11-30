import React, { Component, Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import Header from "./Header";
import Navigation from "./Navigation";
import Content from "./Content";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    console.log(actions);
    return (
      <BrowserRouter>
        <Fragment>
          <Header />
          <Navigation />
          <Content />
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default connect(
  null,
  actions
)(App);
