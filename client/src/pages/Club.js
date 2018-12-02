import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-component';
import '../css/Club.css';

const masonryOptions = {
    transitionDuration: 0
};
 
const imagesLoadedOptions = { background: '.my-bg-image-el' }

class Club extends Component {
  
  render() {
    return (
      <div className="body-full">
      <div className="ui inverted segment signup column">
          {this.createClub()}
          {this.contentList()}
          </div>
      </div>
    )
  }
  createClub(){
    return(
      <div className="mkgclub">
          <Link to ="/CreateClub" className="btn btn-primary btn-link ui inverted purple button">모임개설</Link>
      </div>
    )
  }
  contentList() {
    return (
      <div>  
        <Masonry
            className={'my-gallery-class'} // default ''
            elementType={'ul'} // default 'div'
            options={masonryOptions} // default {}
            disableImagesLoaded={false} // default false
            updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
            imagesLoadedOptions={imagesLoadedOptions} // default {}
        >
  
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 root-frame">
          <a href="#" className="thumbnail article">
              <img src="../img/test.png" alt=""/>
              <div className="caption">
                <h3 className="article-header">
                  인싸만 드루와~
                </h3>
              <p className="source">
                  핵존예
              </p>
              </div>
          </a>   
        </div>                
        </Masonry>
      </div>
    )
  }
}

export default Club;