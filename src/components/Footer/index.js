import React from "react";
import "./index.scss";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Putatoe from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer spad mt-2 py-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-md-6 col-sm-6">
            <div className="">
              <div className="logo text-start">
                <a href="">
                  <img
                    src={Putatoe}
                    alt=""
                    className=""
                    style={{ width: "90px" }}
                  />
                </a>
              </div>
              <div className="compony">
                <p className="text-white fw-bolder fs-5  text-start">
                  PUTATOE SOLUTIONS PVT. LTD.
                </p>
              </div>
            </div>
            <p className="text-white text-start">
              233 Harahawa Phatak, Near SBI Bank, Gorakhpur, Uttar Pradesh -
              273001
            </p>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="mt-2 text-start">
              <h6 className="text-white ">Useful Links</h6>
              <ul className="text-start list-unstyled">
                <li>
                  <a
                    href=""
                    className="text-white"
                    style={{ textDecoration: "none" }}
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-white "
                    style={{ textDecoration: "none" }}
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-white "
                    style={{ textDecoration: "none" }}
                  >
                    Terms and Conditions
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__widget">
              <div className="footer__widget__social text-start">
                <a href="" className="">
                  <FaFacebookF />
                </a>
                <a href="" className="">
                  <FaInstagram />
                </a>
                <a href="" className="">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
