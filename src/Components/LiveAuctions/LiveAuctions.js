import "./LiveAuctions.css";
import { FcLike } from 'react-icons/fc';

export default function LiveAuctions() {
  return (
    <div className="live-auctions">
      <div className="ctn">
        <div className="title">
          <h1>
            Live Auctions
          </h1>
          <div className="button"> 
            <button
              type="button"
              className="button_2"
              >
                View All
            </button>
          </div>
        </div>
        <div className="ab-cards">
          <div className="borderr">
            <div className="box">
              <div className="ab-img">
                <img src={ require("../../images/items.jpg") } alt="" />
                <div className="likes">
                  <FcLike className="i" />
                  <div className="number-likes">
                    40k
                  </div>
                </div>
              </div>
              <h1 className="title">
                22-Bit Digital #551
              </h1>
              <div className="persons">
                <div className="img">
                  <img src={ require("../../images/profiles.jpg") } alt="" />
                </div>
                <div className="data">
                  <div className="a">
                    <h2>@Devid_Mill...</h2>
                    <h2>5.49 ETH</h2>
                  </div>
                  <div className="b">
                    <p>creator</p>
                    <h2>Current Bit</h2>
                  </div>
                </div>
              </div>
              <div className="n">
                05 : 15 : 07 : 45
              </div>
            </div>
          </div>
          <div className="borderr">
            <div className="box">
              <div className="ab-img">
                <img src={ require("../../images/items.jpg") } alt="" />
                <div className="likes">
                  <FcLike className="i" />
                  <div className="number-likes">
                    3.2k
                  </div>
                </div>
              </div>
              <h1 className="title">
                25-Bit Digital #729
              </h1>
              <div className="persons">
                <div className="img">
                  <img src={ require("../../images/profiles.jpg") } alt="" />
                </div>
                <div className="data">
                  <div className="a">
                    <h2>@Devid_Meth...</h2>
                    <h2>3.49 ETH</h2>
                  </div>
                  <div className="b">
                    <p>creator</p>
                    <h2>Current Bit</h2>
                  </div>
                </div>
              </div>
              <div className="n">
              05 : 15 : 07 : 45
              </div>
            </div>
          </div>
          <div className="borderr">
            <div className="box">
              <div className="ab-img">
                <img src={ require("../../images/items.jpg") } alt="" />
                <div className="likes">
                  <FcLike className="i" />
                  <div className="number-likes">
                    1,900
                  </div>
                </div>
              </div>
              <h1 className="title">
                27-Bit Digital #395
              </h1>
              <div className="persons">
                <div className="img">
                  <img src={ require("../../images/profiles.jpg") } alt="" />
                </div>
                <div className="data">
                  <div className="a">
                    <h2>@Jemmy_Fra...</h2>
                    <h2>6.29 ETH</h2>
                  </div>
                  <div className="b">
                    <p>creator</p>
                    <h2>Current Bit</h2>
                  </div>
                </div>
              </div>
              <div className="n">
              05 : 15 : 07 : 45
              </div>
            </div>
          </div>
          <div className="borderr">
            <div className="box">
              <div className="ab-img">
                <img src={ require("../../images/items.jpg") } alt="" />
                <div className="likes">
                  <FcLike className="i" />
                  <div className="number-likes">
                    7.3k
                  </div>
                </div>
              </div>
              <h1 className="title">
                27-Bit Digital #395
              </h1>
              <div className="persons">
                <div className="img">
                  <img src={ require("../../images/profiles.jpg") } alt="" />
                </div>
                <div className="data">
                  <div className="a">
                    <h2>@Miliya_Cho...</h2>
                    <h2>6.29 ETH</h2>
                  </div>
                  <div className="b">
                    <p>creator</p>
                    <h2>Current Bit</h2>
                  </div>
                </div>
              </div>
              <div className="n">
              05 : 15 : 07 : 45
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}