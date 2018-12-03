import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { register } from '../actions/content.js'
import Tags from "./Tags";
import "../css/Signup.css";

class CreateClub extends Component {
  
    state = {
        title: "",
        date: "",
        cost: "",
        people: "",
        place: "",
        details:"",
        tag:[]
    };
  
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]:value });
    
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { dispatch } = this.props;
    dispatch(register(this.state));
  }

  render() {
    return (
      <div>
        <div className="body-full">
          <div className="ui inverted segment signup column">
            <h4 className="ui dividing middle header">모임 개설</h4>
            <form name="form" className="ui form" onSubmit={this.handleSubmit}>
              <div className="field form-group">
                <label htmlFor="title">모임명</label>
                <div className="field ui inverted transparent input">
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    value={this.state.title}
                    onChange={this.handleChange}
                    placeholder="모임명을 입력하세요."
                  />
                </div>
              </div>

              <div className="field form-group">
                <label htmlFor="place">장소</label>
                <div className="field ui inverted transparent input">
                  <input
                    type="text"
                    className="form-control"
                    name="place"
                    value={this.state.place}
                    onChange={this.handleChange}
                    placeholder="모임 장소를 입력하세요."
                  />
                </div>
              </div>

              <div className="field form-group">
                <label htmlFor="date">날짜</label>
                <div className="field ui inverted transparent input">
                  <input
                    type="text"
                    className="form-control"
                    name="date"
                    value={this.state.date}
                    onChange={this.handleChange}
                    placeholder="모임 날짜를 입력하세요."
                  />
                </div>
              </div>

              <div className="field form-group">
                <label htmlFor="cost">비용</label>
                <div className="field ui inverted transparent input">
                  <input
                    type="text"
                    className="form-control"
                    name="cost"
                    value={this.state.cost}
                    onChange={this.handleChange}
                    placeholder="모임 비용을 입력하세요."
                  />
                </div>
              </div>

              <div className="field form-group">
                <label htmlFor="people">총 인원</label>
                <div className="field ui inverted transparent input">
                  <input
                    type="text"
                    className="form-control"
                    name="people"
                    value={this.state.people}
                    onChange={this.handleChange}
                    placeholder="모임 인원을 입력하세요."
                  />
                </div>
              </div>

              <div className="field form-group">
                <label htmlFor="details">모임 설명</label>
                <div className="field ui inverted transparent input">
                  <input
                    type="text"
                    className="form-control"
                    name="details"
                    value={this.state.details}
                    onChange={this.handleChange}
                    placeholder="모임에 대해 입력하세요."
                  />
                </div>
              </div>

              <div className="form-group field">
                <label>Tag</label>
                <Tags />
                <p>최대 8개 까지 입력이 가능합니다.</p>
              </div>

              <div className="form-group">모임개설</div>
                
              <button className="ui inverted purple button">
                  등록
              </button> 
              
              <Link to="/club" className="ui inverted purple button">
                취소
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
    return { content: state.content };
  };
  
export default connect(mapStateToProps)(CreateClub);
