import React, { Component } from "react";
import { withRouter } from "react-router";
import axios from "axios";
import "../css/ClubDetails.css";

class ClubDetails extends Component {
  state = {
    title: "",
    cost: "",
    date: "",
    people: "",
    place: "",
    details: ""
  };

  onSearchContentDetails = async () => {
    //console.log(response.data);

    let title = this.props.location.pathname.split("/");
    const name = title[2];
    const response = await axios.post("/api/content/getDetail", { name });
    //console.log(response.data);
    this.setState({
      title: response.data[0].title,
      cost: response.data[0].cost,
      date: response.data[0].date,
      people: response.data[0].people,
      place: response.data[0].place,
      details: response.data[0].details
    });
    console.log(this.state.title);
    console.log(this.state.date);
    console.log(this.state.people);
  };

  componentWillMount = () => {
    this.onSearchContentDetails();
  };

  render() {
    return (
      <div className="body-full">
        <div className="row ui inverted segment">
        <h3>★- 즐거운 모임 정보 -★</h3><br/>
        <div className="col-md-6">
          <div className="detail"><p>방 제 : {this.state.title}</p></div><br/>
          <div className="detail"><p>비 용 : {this.state.cost}</p></div><br/>
          <div className="detail"><p>날 짜 : {this.state.date}</p></div><br/>
          <div className="detail"><p>인 원 : {this.state.people}</p></div><br/>
          <div className="detail"><p>장 소 : {this.state.place}</p></div><br/>
          <div className="detail"><p>공 지 : {this.state.details}</p></div>
          </div>
          <div className="col-md-6">
          <img className="imgimg" src={`../img/test${this.state.people}.jpg`} alt=""/>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ClubDetails);
