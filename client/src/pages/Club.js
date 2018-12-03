import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ClubList from './ClubList'; 
import axios from 'axios';

class Club extends Component {
  state = {
    contents: []
  }
  
  onSearchContent = async () => {
    const response = await axios.get('/api/content/get');
    console.log('before render started')
    //console.log(response.data);
    this.setState({ contents: response.data});
    console.log(this.state.contents);
  }
  componentWillMount = () => {
    this.onSearchContent();
  }

  render() {
    
    return (
      <div>
          <div>
            <div>내 일정에 맞는 모임을 만들고 싶다면?</div>
          <Link to ="/createclub" className="btn btn-primary btn-block">모임개설 바로가기</Link>
          </div>
          <ClubList contents={this.state.contents} />
      </div>
    )
  }
  
}

export default Club;