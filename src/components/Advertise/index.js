import React, { useRef } from "react";
import Slider from "react-carousel-responsive";
import "react-carousel-responsive/dist/styles.css";
import Foods from "../../assets/Foods.png";
import Education from "../../assets/Education.png";
import Event from "../../assets/Event.png";
import "./index.scss";

const Advertise = () => {
  return (
    <React.Fragment>
      <div className="row ma-0 mt-2 d-none d-sm-flex">
        <div className="col-sm-4 category-banner-grid">
          <a>
            <img src={Foods} alt="" />
          </a>
        </div>
        <div className="col-sm-4 category-banner-grid">
          <a>
            <img src={Education} alt="" />
          </a>
        </div>
        <div className="col-sm-4 category-banner-grid">
          <a>
            <img src={Event} alt="" />
          </a>
        </div>
      </div>
      <div className="d-block d-sm-none">
        <Slider autoPlay className="react-carousel-responsive__root">
          <img src={Foods} alt="" className="imageStyle" />
          <img src={Education} alt="" className="imageStyle" />
          <img src={Event} alt="" className="imageStyle" />
        </Slider>
      </div>
    </React.Fragment>
  );
};

export default Advertise;
