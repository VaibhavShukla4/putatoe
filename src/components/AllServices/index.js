import React, { useState } from "react";
// import "./index.scss";
import Daily from "../../assets/Cart.png";
import Construct from "../../assets/Construct.png";
import Consultancy from "../../assets/Consultancy.png";
import DailyNeedsForServices from "../DailyNeedsForServices";
import CounsultancyForServices from "../CounsultancyForServices";
import ConstructionForServices from "../ConstructionForServices";
import Category from "../Category";

const AllServices = () => {
  return (
    <>
      <div id="serviceAvailable" className="p-95 p-25 pt-2 col-xl-12 pl-5">
        <div className="all_section text-start">All Services</div>
        <div id="all_services_section">
          <DailyNeedsForServices />
          <ConstructionForServices />
          <CounsultancyForServices />
          <Category />
        </div>
        <div id="popular_subservices_heading">
          <div className="popular_products mt-2">
            <div className="popular_products_section">
              <div className="text-start">
                <h2>SERVICES WE PROVIDE</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="main_services">
          <div className="popular_products p-4">
            <div className="row ma-0">
              <div className="col-sm-6 col-lg-4 service_div">
                <div className="card top-card">
                  <div className="row">
                    <div className="col-6 col-sm-6 service_details">
                      <div className="service_text">
                        <h5 id="6">Daily Needs</h5>
                        <h6 id="2">Grocery</h6>
                        <h6 id="1">Dairy Products</h6>
                        <h6 id="84">Retail Water Supply Shop</h6>
                      </div>
                    </div>
                    <div className="col-6 col-sm-6 service_image">
                      <img src={Daily} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 service_div">
                <div className="card top-card">
                  <div className="row">
                    <div className="col-6 col-sm-6 service_details">
                      <div className="service_text">
                        <h5 id="15">Construction</h5>
                        <h6 id="77">Construction Material Shop</h6>
                        <h6 id="78">Modular Kitchen</h6>
                        <h6 id="79">Interior Designing</h6>
                      </div>
                    </div>
                    <div className="col-6 col-sm-6 service_image">
                      <img src={Construct} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 service_div">
                <div className="card top-card">
                  <div className="row">
                    <div className="col-6 col-sm-6 service_details">
                      <div className="service_text">
                        <h5 id="45">Consultancy</h5>
                        <h6 id="80">CA,CS & Legal Services</h6>
                      </div>
                    </div>
                    <div className="col-6 col-sm-6 service_image">
                      <img src={Consultancy} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllServices;
