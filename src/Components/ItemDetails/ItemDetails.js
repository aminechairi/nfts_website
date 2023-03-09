import "./ItemDetails.css";
import { FcLike } from 'react-icons/fc';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination } from "swiper";

export default function ItemDetails() {
  return (
    <div className="item_details">
      <div className="ctn">
        <div className="img">
          <Swiper
            effect={"cube"}
            grabCursor={true}
            pagination={{
              clickable: true,
            }}
            modules={[EffectCube, Pagination]}
            className="mySwiper"
          >
          <SwiperSlide>
            <img src={ require("../../images/portfolio-01.jpg") } alt="" />
          </SwiperSlide>
            <SwiperSlide>
            <img src={ require("../../images/portfolio-02.jpg") } alt="" />
            </SwiperSlide>
            <SwiperSlide>
            <img src={ require("../../images/portfolio-01 (1).jpg") } alt="" />
            </SwiperSlide>
            <SwiperSlide>
            <img src={ require("../../images/portfolio-05.jpg") } alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="data">
          <div className="title">
            <h1>
              3d locker illustration
            </h1>
            <div className="likes">
              <FcLike className="i" />
              <div className="number-likes">
                4.5k
              </div>
            </div>
          </div>
          <div className="acounts">
            <div className="box">
              <img src={ require("../../images/image-04.png") } alt="" />
              <div className="data">
                <h1>@Elon_Mask</h1>
                <p>12.25 ETH</p>
              </div>
            </div>
            <div className="box">
              <img src={ require("../../images/image-02.png") } alt="" />
              <div className="data">
                <h1>@Wilium_Dev</h1>
                <p>14.55 ETH</p>
              </div>
            </div>
          </div>
          <div className="description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales mi felis, pretium tincidunt lorem varius ac. Curabitur mauris lacus, pretium vel neque nec, blandit pharetra nulla.
            </p>
          </div>
          <div className="specifications"> 
            <ul className="list">
              <li>
                <span className="key">
                  Artist :
                </span>
                <span className="value">
                  Devid Methio
                </span>
              </li>
              <li>
                <span className="key">
                Size :
                </span>
                <span className="value">
                  4000x4000
                </span>
              </li>
              <li>
                <span className="key">
                  Created On :
                </span>
                <span className="value">
                04 April , 2021
                </span>
              </li>
            </ul>
            <ul className="list">
              <li>
                <span className="key">
                  Current Bid : 
                </span>
                <span className="value">
                4.89 ETH
                </span>
              </li>
              <div className="n">
                05 : 15 : 07 : 45
              </div>
            </ul>
          </div>
          <div className="hbd">
            <div className="ffilteration">
              <button
                type="button"
                className="button_2 active"
                >
                  History
              </button>
              <button
                type="button"
                className="button_2"
                >
                  Bids
              </button>
              <button
                type="button"
                className="button_2"
                >
                  Details
              </button>
            </div>
            <div className="acounts">
            <div className="box">
              <img src={ require("../../images/image-04.png") } alt="" />
              <div className="data">
                <h1>@Elon_Mask</h1>
                <p>12.25 ETH</p>
              </div>
            </div>
            <div className="box">
              <img src={ require("../../images/image-02.png") } alt="" />
              <div className="data">
                <h1>@Wilium_Dev</h1>
                <p>14.55 ETH</p>
              </div>
            </div>
            <div className="box">
              <img src={ require("../../images/image-02.png") } alt="" />
              <div className="data">
                <h1>@Wilium_Dev</h1>
                <p>14.55 ETH</p>
              </div>
            </div>
          </div>
          </div>
          <div className="place_bid">
            <button
              type="button"
              className="button_1 active"
              >
                History
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};