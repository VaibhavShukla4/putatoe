import React, { useState } from "react";
import "./index.scss";
import Carousel from "react-elastic-carousel";
// daily needs
import AlooBhujia from "../../assets/DailyNeeds/aloo-bhujiafront-new.jpg";
import BikaneriBhujia from "../../assets/DailyNeeds/bikaneribhujiaf.jpg";
import MoongDaal from "../../assets/DailyNeeds/Foodex_Moong_Dal_jpg-1.jpg";
import HingChana from "../../assets/DailyNeeds/hing-chana-front.jpg";
import RaitaBoondi from "../../assets/DailyNeeds/Raita-Boondi-F-400x561.jpg";
import SaltedPeanut from "../../assets/DailyNeeds/salted-peanut-front-min-400x561.jpg";
import PunjabiTadka from "../../assets/DailyNeeds/panjabi-tadka-font-min.jpg";
import KhattaMeetha from "../../assets/DailyNeeds/Khatta-Meetha-F.jpg";
import NavratanMixture from "../../assets/DailyNeeds/Foodex-Navratan-Mixture.jpg";

const DailyNeeds = () => {
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
            <div className="col-7 col-sm-6 pa-0">
              <h6 className="mb-0">10% OFF</h6>
            </div>
          </div>
          <div className="img">
            <img src={AlooBhujia} alt="" />
          </div>
          <div className="info">
            <h3>Aloo Bhujia</h3>
            <h5 style={{ fontSize: "12px" }}>Chips, Namkeen & Snacks</h5>
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
            <div className="col-7 col-sm-6 pa-0">
              <h6 className="mb-0">10% OFF</h6>
            </div>
          </div>
          <div className="img">
            <img src={BikaneriBhujia} alt="" />
          </div>
          <div className="info">
            <h3>Bikaneri Bhujia</h3>
            <h5 style={{ fontSize: "12px" }}>Chips, Namkeen & Snacks</h5>
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
            <div className="col-7 col-sm-6 pa-0">
              <h6 className="mb-0">10% OFF</h6>
            </div>
          </div>
          <div className="img">
            <img src={MoongDaal} alt="" />
          </div>
          <div className="info">
            <h3>Moong Daal</h3>
            <h5 style={{ fontSize: "12px" }}>Chips, Namkeen & Snacks</h5>
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
            <div className="col-7 col-sm-6 pa-0">
              <h6 className="mb-0">10% OFF</h6>
            </div>
          </div>
          <div className="img">
            <img src={HingChana} alt="" />
          </div>
          <div className="info">
            <h3>Hing Chana</h3>
            <h5 style={{ fontSize: "12px" }}>Chips, Namkeen & Snacks</h5>
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
            <div className="col-7 col-sm-6 pa-0">
              <h6 className="mb-0">10% OFF</h6>
            </div>
          </div>
          <div className="img">
            <img src={RaitaBoondi} alt="" />
          </div>
          <div className="info">
            <h3>Raita Boondi</h3>
            <h5 style={{ fontSize: "12px" }}>Chips, Namkeen & Snacks</h5>
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
            <div className="col-7 col-sm-6 pa-0">
              <h6 className="mb-0">10% OFF</h6>
            </div>
          </div>
          <div className="img">
            <img src={SaltedPeanut} alt="" />
          </div>
          <div className="info">
            <h3>Salted Peanut</h3>
            <h5 style={{ fontSize: "12px" }}>Chips, Namkeen & Snacks</h5>
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
            <div className="col-7 col-sm-6 pa-0">
              <h6 className="mb-0">10% OFF</h6>
            </div>
          </div>
          <div className="img">
            <img src={PunjabiTadka} alt="" />
          </div>
          <div className="info">
            <h3>Punjabi Tadka</h3>
            <h5 style={{ fontSize: "12px" }}>Chips, Namkeen & Snacks</h5>
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
            <div className="col-7 col-sm-6 pa-0">
              <h6 className="mb-0">10% OFF</h6>
            </div>
          </div>
          <div className="img">
            <img src={KhattaMeetha} alt="" />
          </div>
          <div className="info">
            <h3>Khatta Meetha</h3>
            <h5 style={{ fontSize: "12px" }}>Chips, Namkeen & Snacks</h5>
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
            <div className="col-7 col-sm-6 pa-0">
              <h6 className="mb-0">10% OFF</h6>
            </div>
          </div>
          <div className="img">
            <img src={NavratanMixture} alt="" />
          </div>
          <div className="info">
            <h3>Navratan Mixture</h3>
            <h5 style={{ fontSize: "12px" }}>Chips, Namkeen & Snacks</h5>
          </div>
        </a>
      </div>
    </div>,
  ];
  return (
    <React.Fragment>
      <div className="popular_products_45 mt-2">
        <div className="popular_products_section bg-white">
          <div className="text-start">
            <h2>Top Deals For Daily Needs</h2>
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
              itemsToShow={carouselOptions.itemsToShow}
              onSlideChanged={({ item }) => setActiveItem(item.index)}
              renderArrow={false}
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
    </React.Fragment>
  );
};

export default DailyNeeds;
