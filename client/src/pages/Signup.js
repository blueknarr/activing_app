import React, { Component } from "react";
import Tags from "./Tags";
import { connect } from "react-redux";
import { register } from "../actions/user";
import "../css/Signup.css";
const crypto = require("crypto");

function hash(password) {
  return crypto
    .createHmac("sha256", process.env.SECRET_KEY)
    .update(password)
    .digest("hex");
}

class Signup extends Component {
  state = {
    email: "",
    password: "",
    username: "",
    nickname: "",
    sex: "",
    born: 0,
    region: "",
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
              <span id="signupact">A</span>CTIVIT'ING 회원 가입
            </h4>
            <div className="field form-group">
              <label>이메일</label>
              <div className="field ui inverted transparent input">
                <input
                  className="form-control"
                  type="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  name="email"
                  placeholder="이메일을 입력하세요."
                  autoFocus={true}
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
              <div className="field ui inverted transparent input">
                <input
                  className="form-control"
                  value={this.state.username}
                  onChange={this.handleChange}
                  type="text"
                  name="username"
                  placeholder="이름을 입력하세요."
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
                  placeholder="닉네임으로 타인에게 노출됩니다."
                />
              </div>
            </div>
            <div className="two fields">
              <div className="field form-group">
                <label>성별</label>
                <select
                  className="ui fluid dropdown form-control"
                  name="sex"
                  value={this.state.sex}
                  onChange={this.handleChange}
                >
                  <option value="">성별</option>
                  <option value="m">남자</option>
                  <option value="f">여자</option>
                </select>
              </div>
            </div>
            <div className="two fields">
              <div className="field form-group">
                <label>태어난 해</label>
                <select
                  className="ui fluid dropdown form-control"
                  name="born"
                  value={this.state.born}
                  onChange={this.handleChange}
                >
                  <option value="">년도</option>
                  <option value="1980">1980</option>
                  <option value="1981">1981</option>
                  <option value="1982">1982</option>
                  <option value="1983">1983</option>
                  <option value="1984">1984</option>
                  <option value="1985">1985</option>
                  <option value="1986">1986</option>
                  <option value="1987">1987</option>
                  <option value="1988">1988</option>
                  <option value="1989">1989</option>
                  <option value="1990">1990</option>
                  <option value="1991">1991</option>
                  <option value="1992">1992</option>
                  <option value="1993">1993</option>
                  <option value="1994">1994</option>
                  <option value="1995">1995</option>
                  <option value="1996">1996</option>
                  <option value="1997">1997</option>
                  <option value="1998">1998</option>
                  <option value="1999">1999</option>
                </select>
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

            <div className="ui segment">
              <div className="field">
                <div className="ui checkbox">
                  <input
                    type="checkbox"
                    name="gift"
                    tabIndex="0"
                    className="hidden"
                  />
                  <label>
                    서비스에 가입자의 개인 정보 활용을 동의합니다. (해당 서비스
                    외에는 절대 활용되지 않습니다)
                  </label>
                </div>
              </div>
            </div>
            <button
              className="ui inverted purple button"
            >
              회원가입
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps)(Signup);
