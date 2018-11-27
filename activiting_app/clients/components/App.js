import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Main from './Main'
import Meetings from './Meetings'
import AboutUs from './AboutUs'
import Join from './Join'
import Login from './Login'

 class App extends Component {
  render() {
    return (
        <BrowserRouter>
        <div>
            <div className="ui container">Header</div>
            <div className="ui container">
                <div className="ui menu">
                    <div className="header item">
                        Activiting
                    </div>
                    <a className="item">
                        <Link to="/">홈</Link>
                    </a>
                    <a className="item">
                        <Link to="/meetings">모임</Link>
                    </a>
                    <a className="item">
                        <Link to="/aboutus">About Us</Link>
                    </a>
                </div>
            </div>
            <div className="ui container">
                <Route exact path="/" component={Main} />
                <Route path="/meetings" component={Meetings}/>
                <Route path="/aboutus" component={AboutUs}/>
            </div>
            <div className="ui container">footer</div>
        </div>
        </BrowserRouter>
    )
  }
}

export default App;