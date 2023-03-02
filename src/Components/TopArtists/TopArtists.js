import "./TopArtists.css";
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';

export default function TopArtists() {

  return (
    <div className="top-artists">
      <div className="ctn">
        <div className="title">
          <h1>
            Top Artists
          </h1>
          <div className="buttons"> 
            <button
              type="button"
              className="button_2"
              >
                <AiFillCaretLeft />
            </button>
            <button
              type="button"
              className="button_2"
              >
                <AiFillCaretRight />
            </button>
          </div>
        </div>
        <div className="swiper">
          <div className="borderr">
            <div className="box">
              <img src={ require("../../images/image-04.png") } alt="" />
              <div className="data">
                <h1>@Elon_Mask</h1>
                <h2>12.25 ETH</h2>
              </div>
            </div>
          </div>
          <div className="borderr">
            <div className="box">
              <img src={ require("../../images/image-02.png") } alt="" />
              <div className="data">
                <h1>@Wilium_Dev</h1>
                <h2>14.55 ETH</h2>
              </div>
            </div>
          </div>
          <div className="borderr">
            <div className="box">
              <img src={ require("../../images/image-03.png") } alt="" />
              <div className="data">
                <h1>@Hiliya_Farah</h1>
                <h2>9.89 ETH</h2>
              </div>
            </div>
          </div>
          <div className="borderr">
            <div className="box">
              <img src={ require("../../images/image-04.png") } alt="" />
              <div className="data">
                <h1>@Elon_Mask</h1>
                <h2>12.25 ETH</h2>
              </div>
            </div>
          </div>
          <div className="borderr">
            <div className="box">
              <img src={ require("../../images/image-02.png") } alt="" />
              <div className="data">
                <h1>@Wilium_Dev</h1>
                <h2>14.55 ETH</h2>
              </div>
            </div>
          </div>
          <div className="borderr">
            <div className="box">
              <img src={ require("../../images/image-03.png") } alt="" />
              <div className="data">
                <h1>@Hiliya_Farah</h1>
                <h2>9.89 ETH</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};