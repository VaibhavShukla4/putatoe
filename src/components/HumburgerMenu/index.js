import React from "react";
import "./index.scss";
import { MdLocationPin, MdOutlineKeyboardArrowDown } from "react-icons/md";
import Logo from "../../assets/logo.png";

const HumburgerMenu = () => {
  return (
    <div className="humberger__menu__wrapper p-0 show__humberger__menu__wrapper transition-all duration-600">
      <div className="row humberger__login__profile ma-0">
        <div className="col-3">
          <img
            src={Logo}
            alt=""
            style={{ width: "60px" }}
            className="logo_img"
          />
        </div>
        <div className="col-9 m-auto">
          <div className="pa-0">
            <h5 style={{ textAlign: "right", width: "12.8rem" }}>
              <button className=" button-login">LOGIN</button>
            </h5>
            <h6
              className=""
              style={{
                textAlign: "left",
                width: "12.8rem",
                position: "relative",
                bottom: "9px",
                left: "5px",
              }}
            >
              <MdLocationPin className="text-white" fontSize={15} />
              <MdOutlineKeyboardArrowDown
                className="text-white"
                fontSize={22}
              />
            </h6>
          </div>
        </div>
      </div>
      <div className="ham-nav-container text-start">
        <div className="ham-nav-category">
          <div className="ham-category-heading">Explore Services</div>
          <div className="">Grocery</div>
          <div className="">Footwear</div>
          <div className="">Personal Care</div>
        </div>
        <div className="ham-nav-category-2">
          <div className="ham-category-heading">
            <a href="" className="text-decoration-none contact-a">
              Abous Us
            </a>
          </div>
          <div className="ham-category-heading ">
            <a href="" className="text-decoration-none contact-a">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HumburgerMenu;
