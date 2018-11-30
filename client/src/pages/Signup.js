import React, { Component } from "react";
import Tags from "./Tags";
import "../css/Signup.css";

class Signup extends Component {
  render() {
    return (
      <div className="body-full">
      <div className="ui inverted segment signup column">
        <form className="ui form">
          <h4 className="ui dividing middle header"> ACTIVIT'ING 회원 가입</h4>
          <div className="field">
            <label>이메일</label>
            <div className="field ui inverted transparent input">
              <input
                type="email"
                name="email"
                placeholder="이메일을 입력하세요."
              />
            </div>
          </div>

          <div className="field">
            <label>비밀번호</label>
            <div className="field ui inverted transparent input">
              <input
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

          <div className="field">
            <label>이름</label>
            <div className="field ui inverted transparent input">
              <input
                type="text"
                name="fullname"
                placeholder="이름을 입력하세요."
              />
            </div>
          </div>

          <div className="field">
            <label>닉네임</label>
            <div className="field ui inverted transparent input">
              <input
                type="text"
                name="nick"
                placeholder="닉네임으로 타인에게 노출됩니다."
              />
            </div>
          </div>

          <div className="two fields">
            <div className="field">
              <label>태어난 해</label>
              <select className="ui fluid dropdown">
                <option value="">년도</option>
                <option value="SL">1980</option>
                <option value="PS">1981</option>
                <option value="IC">1982</option>
                <option value="DG">1983</option>
                <option value="DG">1984</option>
                <option value="DG">1985</option>
                <option value="DG">1986</option>
                <option value="DG">1987</option>
                <option value="DG">1988</option>
                <option value="DG">1989</option>
                <option value="DG">1990</option>
                <option value="DG">1991</option>
                <option value="DG">1992</option>
                <option value="DG">1993</option>
                <option value="DG">1994</option>
                <option value="DG">1995</option>
                <option value="DG">1996</option>
                <option value="DG">1997</option>
                <option value="DG">1998</option>
                <option value="DG">1999</option>
              </select>
            </div>
          </div>

          <div className="two fields">
            <div className="field">
              <label>지역</label>
              <select className="ui fluid dropdown">
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

          <div className="field">
            <label>관심사</label>
            <Tags />
            <p>최대 8개 까지 입력이 가능합니다.</p>
          </div>

          <div className="ui segment">
            <div className="field">
              <div className="ui checkbox">
                <input
                  type="checkbox"
                  name="gift"
                  tabindex="0"
                  className="hidden"
                />
                <label>
                  서비스에 가입자의 개인 정보 활용을 동의합니다. (해당 서비스
                  외에는 절대 활용되지 않습니다)
                </label>
              </div>
            </div>
          </div>
          <div className="ui inverted purple button" tabindex="0">
            회원가입
          </div>
        </form>
      </div>
      </div>
    );
  }
}

export default Signup;
