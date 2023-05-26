import React, { useState, useEffect, useRef } from "react";
import Carousel from "react-elastic-carousel";
import Mobile from "../../assets/MOBILE-Recharge-blue-png.png";
import DthRecharge from "../../assets/CREDIT-CARD-blue-png.png";
import Loans from "../../assets/HOME-LOAN-blue-png .png";
import News from "../../assets/NEWS-blue-png.png";
import Pramotion from "../../assets/PROMOTION-blue-png.png";
import Blogs from "../../assets/BLOG-2-blue-png.png";
import "./index.scss";

const Main = () => {
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
    <div key={1} className="owl-item cloned">
      <div className="owl-item-inner pa-0 pa-0">
        <div className="category-grid">
          <div className="category-image-grid">
            <div>
              <img src={Mobile} alt="" />
            </div>
          </div>
          <div className="category-name-grid txtoverflowsingle">
            Mobile Recharge
          </div>
        </div>
      </div>
    </div>,
    <div key={2} className="owl-item cloned">
      <div className="owl-item-inner pa-0 pa-0">
        <div className="category-grid">
          <div className="category-image-grid">
            <div>
              <img src={Loans} alt="" />
            </div>
          </div>
          <div className="category-name-grid txtoverflowsingle">Loans</div>
        </div>
      </div>
    </div>,
    <div key={3} className="owl-item cloned">
      <div className="owl-item-inner pa-0 pa-0">
        <div className="category-grid">
          <div className="category-image-grid">
            <div>
              <img src={Loans} alt="" />
            </div>
          </div>
          <div className="category-name-grid txtoverflowsingle">
            Bill Payments
          </div>
        </div>
      </div>
    </div>,
    <div key={4} className="owl-item cloned">
      <div className="owl-item-inner pa-0 pa-0">
        <div className="category-grid">
          <div className="category-image-grid">
            <div>
              <img src={News} alt="" />
            </div>
          </div>
          <div className="category-name-grid txtoverflowsingle">News</div>
        </div>
      </div>
    </div>,
    <div key={5} className="owl-item cloned">
      <div className="owl-item-inner pa-0 pa-0">
        <div className="category-grid">
          <div className="category-image-grid">
            <div>
              <img src={Pramotion} alt="" />
            </div>
          </div>
          <div className="category-name-grid txtoverflowsingle">Pramotions</div>
        </div>
      </div>
    </div>,
    <div key={6} className="owl-item cloned">
      <div className="owl-item-inner pa-0 pa-0">
        <div className="category-grid">
          <div className="category-image-grid">
            <div>
              <img src={Blogs} alt="" />
            </div>
          </div>
          <div className="category-name-grid txtoverflowsingle">Blogs</div>
        </div>
      </div>
    </div>,
    <div key={7} className="owl-item cloned">
      <div className="owl-item-inner pa-0 pa-0">
        <div className="category-grid">
          <div className="category-image-grid">
            <div>
              <img src={Mobile} alt="" />
            </div>
          </div>
          <div className="category-name-grid txtoverflowsingle">
            Mobile Recharge
          </div>
        </div>
      </div>
    </div>,
    <div key={8} className="owl-item cloned">
      <div className="owl-item-inner pa-0 pa-0">
        <div className="category-grid">
          <div className="category-image-grid">
            <div>
              <img src={Loans} alt="" />
            </div>
          </div>
          <div className="category-name-grid txtoverflowsingle">Loans</div>
        </div>
      </div>
    </div>,
  ];

  return (
    <main>
      <div className="container-fluid pa-0">
        <div className="row ma-0 category-topbar pr-0 p-95 text-white d-none d-xl-flex">
          <div className="col-lg-2 p-2 fo-11 fw-600 text-center pa-0 ">
            <a className="color-rec text-decoration-none ">
              <div className="bg-white bg-rec">
                <img src={Mobile} width={28} />
              </div>
              <span className="category-text"> MOBILE RECHARGE</span>
            </a>
          </div>
          <div className="col-lg-2 p-2 fo-11 fw-600 text-center pa-0 ">
            <a className="color-rec text-decoration-none ">
              <div className="bg-white bg-rec">
                <img src={DthRecharge} width={28} />
              </div>
              <span className="category-text"> DTH RECHARGE</span>
            </a>
          </div>
          <div className="col-lg-2 p-2 fo-11 fw-600 text-center pa-0 ">
            <a className="color-rec text-decoration-none ">
              <div className="bg-white bg-rec">
                <img src={Loans} width={28} />
              </div>
              <span className="category-text"> LOANS</span>
            </a>
          </div>
          <div className="col-lg-2 p-2 fo-11 fw-600 text-center pa-0 ">
            <a className="color-rec text-decoration-none ">
              <div className="bg-white bg-rec">
                <img src={News} width={28} />
              </div>
              <span className="category-text">NEWS</span>
            </a>
          </div>
          <div className="col-lg-2 p-2 fo-11 fw-600 text-center pa-0 ">
            <a className="color-rec text-decoration-none ">
              <div className="bg-white bg-rec">
                <img src={Pramotion} width={28} />
              </div>
              <span className="category-text">PROMOTIONS</span>
            </a>
          </div>
          <div className="col-lg-2 p-2 fo-11 fw-600 text-center pa-0 ">
            <a className="color-rec text-decoration-none ">
              <div className="bg-white bg-rec">
                <img src={Blogs} width={28} />
              </div>
              <span className="category-text">BLOGS</span>
            </a>
          </div>
        </div>
        <div className="p-95 p-25 pt-1">
          <div className="popular_products d-block d-xl-none">
            <div
              className="owl-carousel owl-loaded owl-drag owl-hidden"
              id="popular_subservies"
            >
              <div className="owl-stage-outer ">
                <Carousel
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

              <div className="owl-dots disabled"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
