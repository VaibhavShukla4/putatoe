import React, { useState } from "react";
import "./index.scss";
import ArrowImg from "../../assets/arrows.png";
import Grocery from "../../assets/food-cart-1098-14618.jpg";
import Footwear from "../../assets/gh.jpg";
import PersonalCare from "../../assets/Organic-Ingredients-Personal-Care-980x665.jpg";

const Sidebar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div
        className={`d-none d-xl-block sideBarResponsive ${
          show ? "sidebarLarge" : "sidebarSmall"
        }`}
        width="100px"
      >
        <div className="" style={{ minHeight: "100vh" }}>
          <div className="arrowSidebar">
            <a onClick={() => setShow(!show)}>
              {show ? (
                <img
                  src={ArrowImg}
                  id="sidebarArrowLeft"
                  alt=""
                  style={{ width: "18px" }}
                />
              ) : (
                <img
                  src={ArrowImg}
                  id="sidebarArrowRight"
                  alt=""
                  style={{ width: "18px" }}
                />
              )}
            </a>
          </div>
          <div className="putatoe-sidebar-services-list">
            <div className="sidebarAnchorTags cursorPointer">
              <img src={Grocery} className="mr-2 sidebar_item_image" />
              {show ? "" : <h6 className="mt-2 sideBarText"> </h6>}
            </div>
            <div className="sidebarAnchorTags cursorPointer">
              <img src={Footwear} className="mr-2 sidebar_item_image" />
              {show ? "" : <h6 className="mt-2 sideBarText"> </h6>}
            </div>
            <div className="sidebarAnchorTags cursorPointer">
              <img src={PersonalCare} className="mr-2 sidebar_item_image" />
              {show ? "" : <h6 className="mt-2 sideBarText"> </h6>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
