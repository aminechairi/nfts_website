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
        {
          Array.from(Array(8)).map(() => {
            return (
          <div className="borderr">
            <div className="box">
              <div className="ab-img">
                <img src={ require("../../images/nft_img02.jpg") } alt="" />
                <div className="likes">
                  <FcLike className="i" />
                  <div className="number-likes">
                    4.5k
                  </div>
                </div>
              </div>
              <h1 className="title">
                22-Bit Digital #551
              </h1>
              <div className="persons">
                <div className="img">
                  <img src={ require("../../images/image-04.png") } alt="" />
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
            )
          })
        }
        </div>
      </div>
    </div>
  );
}