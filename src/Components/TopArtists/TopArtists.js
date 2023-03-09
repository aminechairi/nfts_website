// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./TopArtists.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import React from "react";

export default function TopArtists() {

  // slidesPerView
  let [slidesPerView, setSlidesPerView] = React.useState(null);

  function slidesPerViewfn() {

    if (
      document.documentElement.clientWidth < 768 
    ) {
      setSlidesPerView(1)
    }

    if (
      document.documentElement.clientWidth > 768 
    ) {
      setSlidesPerView(2)
    }

    if (
      document.documentElement.clientWidth > 992
    ) {
      setSlidesPerView(3)
    }
    
  }

  return (
    <div className="top-artists"           
      onLoad={slidesPerViewfn}>
      <div className="ctn">
        <div className="title">
          <h1>
            Top Artists
          </h1>
        </div>
        <Swiper
          onResize={slidesPerViewfn}
          slidesPerView={slidesPerView || 1}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="borderr">
              <div className="box">
                <img src={ require("../../images/image-04.png") } alt="" />
                <div className="data">
                  <h1>@Elon_Mask</h1>
                  <h2>12.25 ETH</h2>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="borderr">
              <div className="box">
                <img src={ require("../../images/image-02.png") } alt="" />
                <div className="data">
                  <h1>@Wilium_Dev</h1>
                  <h2>14.55 ETH</h2>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="borderr">
              <div className="box">
                <img src={ require("../../images/image-03.png") } alt="" />
                <div className="data">
                  <h1>@Hiliya_Farah</h1>
                  <h2>9.89 ETH</h2>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="borderr">
              <div className="box">
                <img src={ require("../../images/image-04.png") } alt="" />
                <div className="data">
                  <h1>@Elon_Mask</h1>
                  <h2>12.25 ETH</h2>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="borderr">
              <div className="box">
                <img src={ require("../../images/image-02.png") } alt="" />
                <div className="data">
                  <h1>@Wilium_Dev</h1>
                  <h2>14.55 ETH</h2>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="borderr">
              <div className="box">
                <img src={ require("../../images/image-03.png") } alt="" />
                <div className="data">
                  <h1>@Hiliya_Farah</h1>
                  <h2>9.89 ETH</h2>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};