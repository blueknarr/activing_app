import React from 'react'
import { Link } from "react-router-dom";

const masonryOptions = {
    transitionDuration: 0
};
 
const imagesLoadedOptions = { background: '.my-bg-image-el' }

export default function ClubList(props) {
    const contents = props.contents.map(content => {
        return(
          
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 root-frame">
          <Link to={`/clubdetails/${content.title}`} className="thumbnail article">
          {/* <a href="#" className="thumbnail article"> */}
              <img src="../img/test.png" alt=""/>
              <div className="caption">
                <div>
                <h3 className="article-header">
                  {content.title}
                </h3>
                </div>
                <div>
                <h4 className="article-header">
                <span>장소: {content.place},</span><span> 모임인원: {content.people}</span>
                </h4>
                </div>
                <div>
                <h4 className="article-header">
                  <span>날짜: </span>{content.date}
                </h4>
                </div>
              </div>
          {/* </a> */}
          </Link>   
        </div>                

        )
    })

  return (
    <div>
      {contents}
    </div>
  )
}
