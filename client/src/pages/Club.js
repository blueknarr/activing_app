import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ClubList from './ClubList'; 
import axios from 'axios';

class Club extends Component {
  state = {
    contens: []
  }
  
  onSearchContent = async () => {
    const response = await axios.get('/api/content/get');
    console.log('before render started')
    //console.log(response.data);
    this.setState({ contents: response.data});
    console.log(this.state.contents);
  }
  componentWillMount(){
    this.onSearchContent();
  }
  render() {
    
    return (
      <div>
          <div>
          <Link to ="/CreateClub" className="btn btn-primary btn-link">모임개설</Link>
          </div>
          <ClubList contents={this.state.contens} />
      </div>
    )
  }
  
}

export default Club;