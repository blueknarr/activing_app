import React, { Component } from 'react'
import { withRouter } from 'react-router'
import axios from 'axios';

class ClubDetails extends Component {
  
  state = {
    title:'',
    cost:'',
    date:'',
    people:'',
    place:'',
    details:''
  }

  onSearchContentDetails = async () => {
    //console.log(response.data);
   
    let title = (this.props.location.pathname).split('/');
    const name = title[2];
    const response = await axios.post('/api/content/getDetail', { name });
    //console.log(response.data);
    this.setState({ 
      title : response.data[0].title,
      cost : response.data[0].cost,
      date : response.data[0].date,
      people : response.data[0].people,
      place: response.data[0].place,
      details: response.data[0].details
    });
    console.log(this.state.title);
    console.log(this.state.date);
    console.log(this.state.people);
  }

  componentWillMount = () => {
    this.onSearchContentDetails();
  }

  render() {
    return (
      <div>
        <div>
         {this.state.title}
        </div>
        <div>
        {this.state.cost}
        </div>
        <div>
        {this.state.date}
        </div>
        <div>
        {this.state.people}
        </div>
        <div>
        {this.state.place}
        </div>
        <div>
        {this.state.details}
        </div>
      </div>
    )
  }
}

export default withRouter(ClubDetails);