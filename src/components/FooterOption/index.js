import React from "react";
import "./index.scss";

import Home from "../../assets/mobile/home.png";
import Chat from "../../assets/mobile/chat.png";
import Orders from "../../assets/mobile/orders.png";
import Account from "../../assets/mobile/account.png";

const FooterOption = () => {
  return (
    <div className="container-fluid d-block d-sm-none">
      <div className="row mobileFooterOptions">
        <div className="col-3">
          <div>
            <a>
              <div className="bottomNavTab">
                <img src={Home} alt="Home" /> <span>Home</span>
              </div>
            </a>
          </div>
        </div>
        <div className="col-3">
          <div>
            <a>
              <div className="bottomNavTab">
                <img src={Chat} alt="Home" /> <span>Chat</span>
              </div>
            </a>
          </div>
        </div>
        <div className="col-3">
          <div>
            <a>
              <div className="bottomNavTab">
                <img src={Orders} alt="Home" /> <span>Orders</span>
              </div>
            </a>
          </div>
        </div>
        <div className="col-3">
          <div>
            <a>
              <div className="bottomNavTab">
                <img src={Account} alt="Home" /> <span>Account</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterOption;
