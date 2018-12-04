import React, { Component } from "react";
import { WithContext as ReactTags } from "react-tag-input";
import '../css/Dev.css';

class Dev extends React.Component {

  render() {
    
    return (
      <div className="body-full">
      <div className="dev-outer">
        <img className="dev" src="img/dev.jpg" />
        </div>
      </div>
    );
  }
}

export default Dev;
