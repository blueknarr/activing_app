import React, { Component } from 'react'

class Signup extends Component {
  render() {
    return (
      
<form class="ui form">
  <h4 class="ui dividing header">회원 가입</h4>
  <div class="field">
    <label>이름</label>
      <div class="field">
        <input type="email" name="email" placeholder="이메일을 입력하세요."/>
      </div>
    </div>

      <div class="field">
    <label>비밀번호</label>
      <div class="field">
        <input type="password" name="password" placeholder="비밀번호를 입력하세요."/>
      </div>
    </div>

      <div class="field">
    <label>비밀번호 확인</label>
      <div class="field">
        <input type="password" name="passwordConfirm" placeholder="비밀번호를 다시 입력하세요."/>
      </div>
    </div>

      <div class="field">
    <label>닉네임</label>
      <div class="field">
        <input type="text" name="nick" placeholder="닉네임을 입력하세요."/>
      </div>
    </div>

 <div class="two fields">
    <div class="field">
      <label>태어난 해</label>
      <select class="ui fluid dropdown">
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
  
  <div class="two fields">
    <div class="field">
      <label>지역</label>
      <select class="ui fluid dropdown">
        <option value="">도시 목록</option>
    <option value="SL">서울</option>
    <option value="PS">부산</option>
    <option value="IC">인천</option>
    <option value="DG">대구</option>
    <option value="DG">대전</option>
    <option value="DG">광주</option>
    <option value="DG">수원</option>
    <option value="DG">울산</option>
    <option value="DG">창원</option>
    <option value="DG">고양</option>
    <option value="DG">용인</option>
    <option value="DG">성남</option>
    <option value="DG">부천</option>
    <option value="DG">청주</option>
    <option value="DG">안산</option>
    <option value="DG">화성</option>
    <option value="DG">전주</option>
    <option value="DG">천안</option>
    <option value="DG">남양주</option>
    <option value="DG">안양</option>
    <option value="DG">김해</option>
    <option value="DG">포항</option>
    <option value="DG">평택</option>
    <option value="DG">제주</option>
    <option value="DG">시흥</option>
    <option value="DG">파주</option>
    <option value="DG">의정부</option>
    <option value="DG">구미</option>
    <option value="DG">김포</option>
    <option value="DG">진주</option>
    <option value="DG">원주</option>
    <option value="DG">광주(경기도)</option>
    <option value="DG">아산</option>
    <option value="DG">양산</option>
    <option value="DG">광명</option>
    <option value="DG">익산</option>
    <option value="DG">춘천</option>
    <option value="DG">경산</option>
    <option value="DG">군포</option>
    <option value="DG">세종</option>
    <option value="DG">과천</option>
    <option value="DG">양평</option>
      </select>
    </div>
  </div>

  <div class="field">
    
  
  </div>


   <div class="ui segment">
    <div class="field">
      <div class="ui checkbox">
        <input type="checkbox" name="gift" tabindex="0" class="hidden"/>
        <label>서비스에 가입자의 개인 정보 활용을 동의합니다. (해당 서비스 외에는 절대 활용되지 않습니다) </label>
      </div>
    </div>
  </div>
  <div class="ui button" tabindex="0">회원가입</div>
</form>
    )
  }
}

export default Signup;