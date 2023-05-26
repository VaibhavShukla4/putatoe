import React from "react";
import "./index.scss";
import { BiSearch } from "react-icons/bi";
import { FaComments, FaBell, FaBars, FaTimes } from "react-icons/fa";
import { ImCart } from "react-icons/im";
import Putatoe from "../../assets/logo.png";

const Header = ({ setHumburgeMenuShow, humburgeMenuShow }) => {
  return (
    <header className="header sticky-top">
      <div className="login-sidebar">
        <span className="close-login-sidebar">
          <FaTimes fontSize={25} />
        </span>
      </div>
      <div className="d-none"></div>
      <div className=""></div>
      <nav className="container-fluid">
        <div className="row">
          <div className="col-xl-2 col-sm-3 col-lg-2 pr-2 pl-2">
            <a
              href=""
              className="logo-name ml-xl-3 d-flex align-items-center text-decoration-none"
              style={{ marginLeft: "16px" }}
            >
              <div>
                <img src={Putatoe} alt="" height="50" width="50" />
              </div>
              <div className=" ml-2 mx-2">
                PUTATOE
                <span className="theme_Line">One Solution</span>
              </div>
            </a>
          </div>
          <div className="col-xl-2 col-sm-0 col-0 my-auto d-none d-xl-block">
            <div className="mt-3">
              <span className="location">
                Gorakhnath Mandir , Gorakhpur, Uttar Pradesh
              </span>
            </div>
          </div>
          <div className="col-xl-4 col-12 col-sm-6 col-lg-7 my-auto">
            <div className="d-flex">
              <input
                className="searchBar-input "
                placeholder="Search for products and brands"
              />
              <div className="search-button">
                <BiSearch className="search-button search" />
              </div>
            </div>
          </div>
          <div className="col-0 col-sm-0 col-xl-2 my-auto pt-1 d-none d-xl-flex account-div ">
            <div className="">
              <a href="">
                <button className="btn  text-white">
                  <FaComments fontSize={25} />
                </button>
              </a>
            </div>
            <div className="">
              <button className="btn  text-white" style={{ width: "50px" }}>
                <ImCart fontSize={25} />
                <sup className="cart_count mr-3">0</sup>
              </button>
            </div>
            <div className="">
              <button className="btn  text-white" style={{ width: "50px" }}>
                <FaBell fontSize={25} />
                <sup className="cart_count">0</sup>
              </button>
            </div>
          </div>
          <div className="col-xl-2 col-sm-0 col-0 my-auto d-flex align-items-center d-none d-xl-flex account-div ">
            <div className="w-100">
              <button className="button-login">LOGIN</button>
            </div>
          </div>
        </div>
        <div className="humberger_notifications d-xl-none">
          <button className="btn  text-white" style={{ width: "50px" }}>
            <FaBell fontSize={25} />
            <sup className="cart_count_small">0</sup>
          </button>
        </div>
        <div className="humberger_cart d-xl-none">
          <button className="btn  text-white" style={{ width: "50px" }}>
            <ImCart fontSize={25} />
            <sup className="cart_count_small ">0</sup>
          </button>
        </div>
        <div className="humberger__open text-white d-xl-none">
          <button
            className="btn text-white p-0"
            style={{ width: "28px", height: "28px" }}
            onClick={() => setHumburgeMenuShow(!humburgeMenuShow)}
          >
            <FaBars fontSize={20} />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
