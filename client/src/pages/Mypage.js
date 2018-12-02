import React, { Component } from "react";
import Tags from "./Tags";
import { connect } from "react-redux";
import { register } from "../actions/content.js";
import "../css/Mypage.css";

class Mypage extends Component {
  state = {
    email: "gksduf06@gmail.com",
    password: "",
    username: "김한열",
    nickname: "맥쥬",
    sex: "m",
    born: 1991,
    region: "SL",
    tag: []
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { dispatch } = this.props;
    dispatch(register(this.state));
  };

  render() {
    return (
      <div className="body-full">
        <div className="ui inverted segment signup column">
          <form name="form" className="ui form" onSubmit={this.handleSubmit}>
            <h4 className="ui dividing middle header">
              <span id="signupact">A</span>CTIVIT'ING 정보 수정
            </h4>

            <div className="field form-group">
              <label>이메일</label>
              <div className="field ui inverted transparent disabled input">
                <input
                  className="form-control"
                  type="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  name="email"
                  placeholder={this.state.email}
                />
              </div>
            </div>

            <div className="field form-group">
              <label>비밀번호</label>
              <div className="field ui inverted transparent input">
                <input
                  className="form-control"
                  value={this.state.password}
                  onChange={this.handleChange}
                  type="password"
                  name="password"
                  placeholder="비밀번호를 입력하세요."
                />
              </div>
            </div>

            <div className="field">
              <label>비밀번호 확인</label>
              <div className="field ui inverted transparent input">
                <input
                  type="password"
                  name="passwordConfirm"
                  placeholder="비밀번호를 다시 입력하세요."
                />
              </div>
            </div>

            <div className="field form-group">
              <label>이름</label>
              <div className="field ui inverted transparent disabled input">
                <input
                  className="form-control"
                  value={this.state.username}
                  onChange={this.handleChange}
                  type="text"
                  name="username"
                  placeholder={this.state.username}
                />
              </div>
            </div>

            <div className="field form-group">
              <label>닉네임</label>
              <div className="field ui inverted transparent input">
                <input
                  className="form-control"
                  value={this.state.nickname}
                  onChange={this.handleChange}
                  type="text"
                  name="nickname"
                />
              </div>
            </div>

            <div className="two fields">
              <div className="field form-group">
                <label>지역</label>
                <select
                  className="ui fluid dropdown form-control"
                  name="region"
                  value={this.state.region}
                  onChange={this.handleChange}
                >
                  <option value="">도시 목록</option>
                  <option value="SL">서울</option>
                  <option value="PS">부산</option>
                  <option value="IC">인천</option>
                  <option value="DG">대구</option>
                  <option value="DJ">대전</option>
                  <option value="KJ">광주</option>
                  <option value="SW">수원</option>
                  <option value="WS">울산</option>
                  <option value="CW">창원</option>
                  <option value="GY">고양</option>
                  <option value="YI">용인</option>
                  <option value="SN">성남</option>
                  <option value="BC">부천</option>
                  <option value="CJ">청주</option>
                  <option value="AS">안산</option>
                  <option value="HS">화성</option>
                  <option value="JJ">전주</option>
                  <option value="CA">천안</option>
                  <option value="NY">남양주</option>
                  <option value="AA">안양</option>
                  <option value="KH">김해</option>
                  <option value="PH">포항</option>
                  <option value="PT">평택</option>
                  <option value="JE">제주</option>
                  <option value="SH">시흥</option>
                  <option value="PJ">파주</option>
                  <option value="EJ">의정부</option>
                  <option value="GM">구미</option>
                  <option value="KP">김포</option>
                  <option value="JI">진주</option>
                  <option value="WJ">원주</option>
                  <option value="KK">광주(경기도)</option>
                  <option value="AS">아산</option>
                  <option value="YS">양산</option>
                  <option value="KM">광명</option>
                  <option value="IS">익산</option>
                  <option value="CC">춘천</option>
                  <option value="KS">경산</option>
                  <option value="KP">군포</option>
                  <option value="SJ">세종</option>
                  <option value="GC">과천</option>
                  <option value="YP">양평</option>
                </select>
              </div>
            </div>

            <div className="field tags form-group">
              <label>관심사</label>
              <Tags />
              <p>
                Back space 키로 삭제가 가능하고, 최대 8개 까지 입력이
                가능합니다.
              </p>
            </div>

            <div
              className="ui inverted purple button form-control"
              tabIndex="0"
              name="submit"
              value={this.state}
              onChange={this.handleSubmit}
            >
              정보 수정 완료
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Mypage;
