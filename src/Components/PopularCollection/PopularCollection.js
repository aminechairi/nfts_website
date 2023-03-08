import "./PopularCollection.css";
import { FcLike } from 'react-icons/fc';

export default function PopularCollection() {
  return (
    <div className="popular_collection">
      <div className="ctn">
        <div className="title">
          <h1>
            Popular Collection
          </h1>
          <div className="button"> 
            <button
              type="button"
              className="button_2"
              >
                Explore More
            </button>
          </div>
        </div>
        <div className="ab_cards">
          <div className="card">
            <div className="ab_imgs">
              <div className="off">
                <img src={ require("../../images/banner-01.jpg") } alt="" />
              </div>
              <div className="imgs_list">
                <img src={ require("../../images/banner-03.jpg") } alt="" />
                <img src={ require("../../images/banner-04.jpg") } alt="" />
                <img src={ require("../../images/banner-02.jpg") } alt="" />
              </div>
            </div>
            <div className="name_likes">
              <h1>
                Creative 3d illustration
              </h1>
              <div className="likes">
                <FcLike className="i" />
                <div className="number-likes">
                  4.5k
                </div>
              </div>
            </div>
            <div className="acount">
              <img src={ require("../../images/creator-01.jpg") } alt="" />
              <div className="data">
                <h1>@Lathium_Lui...</h1>
                <p>Creator</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="ab_imgs">
              <div className="off">
                <img 
                src={ require("../../images/portfolio-01.jpg") } alt="" />
              </div>
              <div className="imgs_list">
                <img src={ require("../../images/portfolio-02.jpg") } alt="" />
                <img src={ require("../../images/portfolio-03.jpg") } alt="" />
                <img src={ require("../../images/portfolio-03 (1).jpg") } alt="" />
              </div>
            </div>
            <div className="name_likes">
              <h1>
                Creative 3d illustration
              </h1>
              <div className="likes">
                <FcLike className="i" />
                <div className="number-likes">
                  4.5k
                </div>
              </div>
            </div>
            <div className="acount">
              <img src={ require("../../images/creator-02.jpg") } alt="" />
              <div className="data">
                <h1>@Andrio_Hev...</h1>
                <p>Creator</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};