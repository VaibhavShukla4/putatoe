import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
// daily needs
import IncorporationOfPublicCompony from "../../assets/Counsultancy/IncorporationOfPublicCompony.png";
import AperaRegistration from "../../assets/Counsultancy/AperaRegistration.png";
import GstRegistration from "../../assets/Counsultancy/GstRegistration.png";
import GstReturnFilling from "../../assets/Counsultancy/GstReturnFilling.png";
import MsmeRegistration from "../../assets/Counsultancy/MsmeRegistration.png";
import NgoRegistration from "../../assets/Counsultancy/NgoRegistration.png";
import NidhiCompony from "../../assets/Counsultancy/NidhiCompony.png";
import ProducerCompony from "../../assets/Counsultancy/ProducerCompony.png";
import PsaraLicense from "../../assets/Counsultancy/PsaraLicense.png";
import Sec80GSec12AACompilance from "../../assets/Counsultancy/Sec80G&Sec12AACompilance.png";
import StartupIndiaRegistration from "../../assets/Counsultancy/StartupIndiaRegistration.png";

const Counsultancy = () => {
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
            <img src={IncorporationOfPublicCompony} alt="" />
          </div>
          <div className="info">
            <h3>Incorporation Of PublicCompony</h3>
            <h5 style={{ fontSize: "12px" }}>
              Startup, Incorporation & Registration
            </h5>
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
            <img src={AperaRegistration} alt="" />
          </div>
          <div className="info">
            <h3>APERA Registration</h3>
            <h5 style={{ fontSize: "12px" }}>
              Startup, Incorporation & Registration
            </h5>
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
            <img src={GstRegistration} alt="" />
          </div>
          <div className="info">
            <h3>GST Registration</h3>
            <h5 style={{ fontSize: "12px" }}>
              Startup, Incorporation & Registration
            </h5>
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
            <img src={GstReturnFilling} alt="" />
          </div>
          <div className="info">
            <h3>GST Return Filling</h3>
            <h5 style={{ fontSize: "12px" }}>
              Startup, Incorporation & Registration
            </h5>
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
            <img src={MsmeRegistration} alt="" />
          </div>
          <div className="info">
            <h3>MSME Registration</h3>
            <h5 style={{ fontSize: "12px" }}>
              Startup, Incorporation & Registration
            </h5>
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
            <img src={NgoRegistration} alt="" />
          </div>
          <div className="info">
            <h3>NGO Registration</h3>
            <h5 style={{ fontSize: "12px" }}>
              Startup, Incorporation & Registration
            </h5>
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
            <img src={NidhiCompony} alt="" />
          </div>
          <div className="info">
            <h3>Nidhi Compony</h3>
            <h5 style={{ fontSize: "12px" }}>
              Startup, Incorporation & Registration
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
            <div className="col-7 col-sm-6 pa-0">
              <h6 className="mb-0">10% OFF</h6>
            </div>
          </div>
          <div className="img">
            <img src={ProducerCompony} alt="" />
          </div>
          <div className="info">
            <h3>Producer Compony</h3>
            <h5 style={{ fontSize: "12px" }}>
              Startup, Incorporation & Registration
            </h5>
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
            <img src={PsaraLicense} alt="" />
          </div>
          <div className="info">
            <h3>PSARA Registration</h3>
            <h5 style={{ fontSize: "12px" }}>
              Startup, Incorporation & Registration
            </h5>
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
            <div className="col-7 col-sm-6 pa-0">
              <h6 className="mb-0">10% OFF</h6>
            </div>
          </div>
          <div className="img">
            <img src={Sec80GSec12AACompilance} alt="" />
          </div>
          <div className="info">
            <h3>Sec 80G & Sec 12AA Compilance</h3>
            <h5 style={{ fontSize: "12px" }}>
              Startup, Incorporation & Registration
            </h5>
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
            <div className="col-7 col-sm-6 pa-0">
              <h6 className="mb-0">10% OFF</h6>
            </div>
          </div>
          <div className="img">
            <img src={StartupIndiaRegistration} alt="" />
          </div>
          <div className="info">
            <h3>Startup India Registration</h3>
            <h5 style={{ fontSize: "12px" }}>
              Startup, Incorporation & Registration
            </h5>
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
            <h2>Top Deals For Consultancy</h2>
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
    </div>
  );
};

export default Counsultancy;
