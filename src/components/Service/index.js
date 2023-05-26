import React from "react";
import "./index.scss";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Recharge from "../../assets/Recharge.png";
import DailyNeeds from "../DailyNeeds";
import Counsultancy from "../Counsultancy";
import Construction from "../Construction";
import Advertise from "../Advertise";

const Service = () => {
  return (
    <>
      <div id="serviceAvailable" className="p-95 p-25 pt-2 col-xl-12 pl-5">
        <div className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={Recharge} alt="" />
            </div>
            <div className="owl-nav disabled">
              <button className="owl-prev">
                <span>
                  <FaChevronLeft />
                </span>
              </button>
              <button className="owl-next">
                <span>
                  <FaChevronRight />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="all_section text-start">All Products</div>
        <div id="all_services_section">
          <Counsultancy />
          <DailyNeeds />
          <Construction />
          <Advertise />
        </div>
      </div>
    </>
  );
};

export default Service;
