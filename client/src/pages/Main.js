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
        >
          <div>
            <img src="img/test1.jpg" alt="test1" className="imgslides" />
          </div>
          <div>
            <img src="img/test2.jpg" alt="test2" className="imgslides" />
          </div>
          <div>
            <img src="img/test3.jpeg" alt="test3" className="imgslides" />
          </div>
          <div>
            <img src="img/test4.png" alt="test4" className="imgslides" />
          </div>
        </Carousel>
      </div>

      <div className="main-body ui container middle">
        <div className="col-sm-8 jumbotron">
          <h3> Activit'ing 모임 현황</h3>
          <h5> 오늘의 모임 수 : 170개 </h5>
        </div>
        <div className="col-sm-4">구독료</div>
      </div>

    </div>
  );
}
export default Main;
