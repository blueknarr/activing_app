import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../css/mainImage.css";
import "../css/Main.css";

function Main() {
  return (
    <div className="body-full">
      <div className="carousel">
        <Carousel
          infiniteLoop
          autoPlay
          emulateTouch
          showStatus={false}
          showThumbs={false}
          centerMode
          centerSlidePercentage={50}
          autoPlay
        >
          <div>
            <img src="img/test4.jpg" alt="test1" className="imgslides" />
          </div>
          <div>
            <img src="img/test8.jpg" alt="test2" className="imgslides" />
          </div>
          <div>
            <img src="img/test4.png" alt="test5" className="imgslides" />
          </div>
          <div>
            <img src="img/test6.jpg" alt="test3" className="imgslides" />
          </div>
          <div>
            <img src="img/test3.jpeg" alt="test6" className="imgslides" />
          </div>
        </Carousel>
      </div>

      <div className="story">
        
          <h3> "Activit'ing 모임을 통해 오늘 <span id="matchnum">170</span> 명의 사람이 즐거운 모임을 가졌습니다."</h3>
        
      </div>

    </div>
  );
}
export default Main;
