import React, { Component } from "react";
import { Link } from "react-router-dom";
import ClubList from "./ClubList";
import axios from "axios";
import "../css/Club.css";

class Club extends Component {
  state = {
    contents: []
  };

  onSearchContent = async () => {
    const response = await axios.get("/api/content/get");
    console.log("before render started");
    //console.log(response.data);
    this.setState({ contents: response.data });
    console.log(this.state.contents);
  };
  componentWillMount = () => {
    this.onSearchContent();
  };

  render() {
    return (
      <div>
        <div className="body-full">
          <div className="outer">
            <div className="height">내 일정에 맞는 모임을 만들고 싶다면?</div>

            <div className="height">
              <Link to="/createclub" className="btn btn-primary btn-block ui google plus button">
                모임 만들기
              </Link>
            </div>
          </div>

          <div className="blank-height" />
          <ClubList contents={this.state.contents} />
        </div>
      </div>
    );
  }
}

export default Club;
