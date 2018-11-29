import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './Header'
import Landing from '../pages/Main'
import Navigation from './Navigation';
import Content from './Content';


class App extends Component {
    componentDidMount(){
        this.props.fetchUser();
    }

  render() {
    console.log(actions);
    return (
      <div className="App">
        <BrowserRouter>
            <div>
                <Header />
                <Navigation />
                <Content/>
            </div>    
        </BrowserRouter>
      </div>
    )
  }
}

export default connect(null, actions)(App);