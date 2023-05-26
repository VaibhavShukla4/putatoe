import React from "react";
import Slider from "react-carousel-responsive";
import "react-carousel-responsive/dist/styles.css";
import Construction from "../../assets/Construction.png";
import Health from "../../assets/Health.png";
import Sports from "../../assets/Sports.png";
import Food from "../../assets/Food.png";
import Medicine from "../../assets/Medicine.png";
import "./index.scss";

const Category = () => {
  return (
    <React.Fragment>
      <div className="row ma-0 mt-2 d-none d-sm-flex">
        <div className="col-sm-4 category-banner-grid">
          <a>
            <img src={Construction} alt="" />
          </a>
        </div>
        <div className="col-sm-4 category-banner-grid">
          <a>
            <img src={Health} alt="" />
          </a>
        </div>
        <div className="col-sm-4 category-banner-grid">
          <a>
            <img src={Sports} alt="" />
          </a>
        </div>
        <div className="col-sm-4 category-banner-grid">
          <a>
            <img src={Food} alt="" />
          </a>
        </div>
        <div className="col-sm-4 category-banner-grid">
          <a>
            <img src={Medicine} alt="" />
          </a>
        </div>
      </div>
      <div className="d-block d-sm-none">
        <Slider autoPlay>
          <img src={Construction} alt="" className="imageStyle" />
          <img src={Health} alt="" className="imageStyle" />
          <img src={Sports} alt="" className="imageStyle" />
          <img src={Food} alt="" className="imageStyle" />
          <img src={Medicine} alt="" className="imageStyle" />
        </Slider>
      </div>
    </React.Fragment>
  );
};

export default Category;
