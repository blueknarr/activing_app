import React from 'react'
import Masonry from 'react-masonry-component';

const masonryOptions = {
    transitionDuration: 0
};
 
const imagesLoadedOptions = { background: '.my-bg-image-el' }

export default function ClubList(props) {
  console.log('clublist in');
    const contents = props.contents.map(content => {
        return(
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
                  {content.title}
                </h3>
              <p className="source">
                  {content.people}
              </p>
              </div>
          </a>   
        </div>                
        </Masonry>
        )
    })

  return (
    <div>
      {contents}
    </div>
  )
}
