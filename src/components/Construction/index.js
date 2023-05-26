import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
// daily needs
import BadiGitti from "../../assets/Construction/BadiGitti.png";
import Baloo from "../../assets/Construction/Baloo.png";
import ChotiGitti from "../../assets/Construction/ChotiGitti.png";
import Elbow from "../../assets/Construction/Elbow.png";
import Furniture from "../../assets/Construction/Furniture.png";
import Gitti from "../../assets/Construction/Gitti.png";
import JetSpray from "../../assets/Construction/JetSpray.png";
import MysemCement from "../../assets/Construction/MysemCement.png";
import Plumbing from "../../assets/Construction/Plumbing.png";
import Rate from "../../assets/Construction/Rate.png";
import Wood from "../../assets/Construction/Wood.png";

const Construction = () => {
  const [activeItem, setActiveItem] = useState(0);
  const breakPoints = [
    { width: 300, itemsToShow: 2 },
    { width: 525, itemsToShow: 3 },
    { width: 768, itemsToShow: 5 },
    { width: 1200, itemsToShow: 6 },
  ];
  const carouselOptions = {
    enableSwipe: true,
    enableTilt: true,
    itemsToShow: 7, // Adjust the number of visible items as needed
  };
  const carouselItems = [
    <div
      key={1}
      className="owl-item active"
      style={{ width: "auto", marginRight: "10px" }}
    >
      <div className="owl-item-inner border-remove">
        <a>
          <div className="row" height={25}>
            <div className="col-5 col-sm-6"></div>
            <div className="col-7 col-sm-6 pa-0"></div>
          </div>
          <div className="img">
            <img src={BadiGitti} alt="" />
          </div>
          <div className="info">
            <h3>badi Gitti 20mm</h3>
            <h5 style={{ fontSize: "12px" }}>badi Gitti 20mm</h5>
          </div>
        </a>
      </div>
    </div>,
    <div
      key={2}
      className="owl-item active"
      style={{ width: "auto", marginRight: "10px" }}
    >
      <div className="owl-item-inner border-remove">
        <a>
          <div className="row">
            <div className="col-5 col-sm-6"></div>
            <div className="col-7 col-sm-6 pa-0"></div>
          </div>
          <div className="img">
            <img src={Baloo} alt="" />
          </div>
          <div className="info">
            <h3>Baloo for linter</h3>
            <h5 style={{ fontSize: "12px" }}>Baloo for linter</h5>
          </div>
        </a>
      </div>
    </div>,
    <div
      key={3}
      className="owl-item active"
      style={{ width: "auto", marginRight: "10px" }}
    >
      <div className="owl-item-inner border-remove">
        <a>
          <div className="row">
            <div className="col-5 col-sm-6"></div>
            <div className="col-7 col-sm-6 pa-0"></div>
          </div>
          <div className="img">
            <img src={ChotiGitti} alt="" />
          </div>
          <div className="info">
            <h3>Choti Gitti 12 mm</h3>
            <h5 style={{ fontSize: "12px" }}>Choti Gitti 12 mm</h5>
          </div>
        </a>
      </div>
    </div>,
    <div
      key={4}
      className="owl-item active"
      style={{ width: "auto", marginRight: "10px" }}
    >
      <div className="owl-item-inner border-remove">
        <a>
          <div className="row">
            <div className="col-5 col-sm-6"></div>
            <div className="col-7 col-sm-6 pa-0"></div>
          </div>
          <div className="img">
            <img src={Elbow} alt="" />
          </div>
          <div className="info">
            <h3>Elbow for plumbing</h3>
            <h5 style={{ fontSize: "12px" }}>Elbow for plumbing</h5>
          </div>
        </a>
      </div>
    </div>,
    <div
      key={5}
      className="owl-item active"
      style={{ width: "auto", marginRight: "10px" }}
    >
      <div className="owl-item-inner border-remove">
        <a>
          <div className="row">
            <div className="col-5 col-sm-6"></div>
            <div className="col-7 col-sm-6 pa-0"></div>
          </div>
          <div className="img">
            <img src={Furniture} alt="" />
          </div>
          <div className="info">
            <h3>Furniture for settering</h3>
            <h5 style={{ fontSize: "12px" }}>Furniture for settering</h5>
          </div>
        </a>
      </div>
    </div>,
    <div
      key={6}
      className="owl-item active"
      style={{ width: "auto", marginRight: "10px" }}
    >
      <div className="owl-item-inner border-remove">
        <a>
          <div className="row">
            <div className="col-5 col-sm-6"></div>
            <div className="col-7 col-sm-6 pa-0"></div>
          </div>
          <div className="img">
            <img src={Gitti} alt="" />
          </div>
          <div className="info">
            <h3>Gitti for Construction</h3>
            <h5 style={{ fontSize: "12px" }}>Gitti for Construction</h5>
          </div>
        </a>
      </div>
    </div>,
    <div
      key={7}
      className="owl-item active"
      style={{ width: "auto", marginRight: "10px" }}
    >
      <div className="owl-item-inner border-remove">
        <a>
          <div className="row">
            <div className="col-5 col-sm-6"></div>
            <div className="col-7 col-sm-6 pa-0"></div>
          </div>
          <div className="img">
            <img src={JetSpray} alt="" />
          </div>
          <div className="info">
            <h3>Jet Spray for drill machine cooling</h3>
            <h5 style={{ fontSize: "12px" }}>
              Jet Spray for drill machine cooling
            </h5>
          </div>
        </a>
      </div>
    </div>,
    <div
      key={8}
      className="owl-item active"
      style={{ width: "auto", marginRight: "10px" }}
    >
      <div className="owl-item-inner border-remove">
        <a>
          <div className="row">
            <div className="col-5 col-sm-6"></div>
            <div className="col-7 col-sm-6 pa-0"></div>
          </div>
          <div className="img">
            <img src={MysemCement} alt="" />
          </div>
          <div className="info">
            <h3>Mysem Cement 355 grade</h3>
            <h5 style={{ fontSize: "12px" }}>Mysem Cement 355 grade</h5>
          </div>
        </a>
      </div>
    </div>,
    <div
      key={9}
      className="owl-item active"
      style={{ width: "auto", marginRight: "10px" }}
    >
      <div className="owl-item-inner border-remove">
        <a>
          <div className="row">
            <div className="col-5 col-sm-6"></div>
            <div className="col-7 col-sm-6 pa-0"></div>
          </div>
          <div className="img">
            <img src={Plumbing} alt="" />
          </div>
          <div className="info">
            <h3>Plumbing for water supply</h3>
            <h5 style={{ fontSize: "12px" }}>Plumbing for water supply</h5>
          </div>
        </a>
      </div>
    </div>,
    <div
      key={10}
      className="owl-item active"
      style={{ width: "auto", marginRight: "10px" }}
    >
      <div className="owl-item-inner border-remove">
        <a>
          <div className="row">
            <div className="col-5 col-sm-6"></div>
            <div className="col-7 col-sm-6 pa-0"></div>
          </div>
          <div className="img">
            <img src={Rate} alt="" />
          </div>
          <div className="info">
            <h3>Rate for Construction</h3>
            <h5 style={{ fontSize: "12px" }}>Rate for Construction</h5>
          </div>
        </a>
      </div>
    </div>,
    <div
      key={11}
      className="owl-item active"
      style={{ width: "auto", marginRight: "10px" }}
    >
      <div className="owl-item-inner border-remove">
        <a>
          <div className="row">
            <div className="col-5 col-sm-6"></div>
            <div className="col-7 col-sm-6 pa-0"></div>
          </div>
          <div className="img">
            <img src={Wood} alt="" />
          </div>
          <div className="info">
            <h3>Wood for settering</h3>
            <h5 style={{ fontSize: "12px" }}>Wood for settering</h5>
          </div>
        </a>
      </div>
    </div>,
  ];
  return (
    <div>
      <div className="popular_products_45 mt-2">
        <div className="popular_products_section bg-white">
          <div className="text-start">
            <h2>Top Deals For Construction</h2>
          </div>
        </div>
      </div>
      <div
        className="owl-carousel bg-white owl-loaded owl-drag"
        id="popular_products_6"
      >
        <div className="owl-stage-outer">
          <div className="owl-stage">
            <Carousel
              // className="caraousal_"
              itemsToShow={carouselOptions.itemsToShow}
              onSlideChanged={({ item }) => setActiveItem(item.index)}
              renderArrow={false} // Hide default navigation arrows
              currentIndex={activeItem}
              breakPoints={breakPoints}
              itemPadding={[10, 10]}
              itemPosition="center"
              showEmptySlots
            >
              {carouselItems}
            </Carousel>
          </div>
        </div>
        <div className="owl-nav disabled"></div>
        <div className="owl-dots disabled"></div>
      </div>
    </div>
  );
};

export default Construction;
