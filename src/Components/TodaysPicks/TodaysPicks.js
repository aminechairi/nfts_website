import "./TodaysPicks.css";
import { FcLike } from 'react-icons/fc';
import { Link } from "react-router-dom";
import scrollTop from "../../Functions/scrollTop";

export default function TodaysPicks( props ) {
  return (
    <div className="todays-picks">
      <div className="ctn">
        <div className="title"
          style={{
            display: props.headerComponent === true ? "flex" : "none",
          }}
        >
          <h1>
            Today's Picks
          </h1>
          <div className="button"> 
            <Link onClick={scrollTop} to="/explore">
              <button
                type="button"
                className="button_2"
                >
                  View All
              </button>
            </Link>
          </div>
        </div>
          <div className="ffilteration"
            style={{
              display: props.headerComponent === true ? "none" : "flex",
            }}
          >
            <button
              type="button"
              className="button_2 active"
              >
                All
            </button>
            <button
              type="button"
              className="button_2"
              >
                Digital Art
            </button>
            <button
              type="button"
              className="button_2"
              >
                Music
            </button>
            <button
              type="button"
              className="button_2"
              >
                3D Illustration
            </button>
            <button
              type="button"
              className="button_2"
              >
                Digital Art
            </button>
            <button
              type="button"
              className="button_2"
              >
                Music
            </button>
          </div>
        <div className="ab-cards">
          <div className="borderr">
            <div className="box">
              <div className="ab-img">
                <img src={ require("../../images/items.jpg") } alt="" />
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
              <div className="buttons">
                <button
                  type="button"
                  className="button_1 b_1">
                    Place Bid
                </button>
                <button
                  type="button"
                  className="button_2 b_2">
                    View History
                </button>
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
                    1, 162
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
                    <h2>@amine_CHI...</h2>
                    <h2>3.59 ETH</h2>
                  </div>
                  <div className="b">
                    <p>creator</p>
                    <h2>Current Bit</h2>
                  </div>
                </div>
              </div>
              <div className="buttons">
                <button
                  type="button"
                  className="button_1 b_1">
                    Place Bid
                </button>
                <button
                  type="button"
                  className="button_2 b_2">
                    View History
                </button>
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
                    130
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
                    <h2>@Nicolo_Tes..</h2>
                    <h2>1.25 ETH</h2>
                  </div>
                  <div className="b">
                    <p>creator</p>
                    <h2>Current Bit</h2>
                  </div>
                </div>
              </div>
              <div className="buttons">
                <button
                  type="button"
                  className="button_1 b_1">
                    Place Bid
                </button>
                <button
                  type="button"
                  className="button_2 b_2">
                    View History
                </button>
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
                    10.5k
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
                    <h2>@KAMAL_bu..</h2>
                    <h2>12.50 ETH</h2>
                  </div>
                  <div className="b">
                    <p>creator</p>
                    <h2>Current Bit</h2>
                  </div>
                </div>
              </div>
              <div className="buttons">
                <button
                  type="button"
                  className="button_1 b_1">
                    Place Bid
                </button>
                <button
                  type="button"
                  className="button_2 b_2">
                    View History
                </button>
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
                    4.5k
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
              <div className="buttons">
                <button
                  type="button"
                  className="button_1 b_1">
                    Place Bid
                </button>
                <button
                  type="button"
                  className="button_2 b_2">
                    View History
                </button>
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
                    1, 162
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
                    <h2>@amine_CHI...</h2>
                    <h2>3.59 ETH</h2>
                  </div>
                  <div className="b">
                    <p>creator</p>
                    <h2>Current Bit</h2>
                  </div>
                </div>
              </div>
              <div className="buttons">
                <button
                  type="button"
                  className="button_1 b_1">
                    Place Bid
                </button>
                <button
                  type="button"
                  className="button_2 b_2">
                    View History
                </button>
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
                    130
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
                    <h2>@Nicolo_Tes..</h2>
                    <h2>1.25 ETH</h2>
                  </div>
                  <div className="b">
                    <p>creator</p>
                    <h2>Current Bit</h2>
                  </div>
                </div>
              </div>
              <div className="buttons">
                <button
                  type="button"
                  className="button_1 b_1">
                    Place Bid
                </button>
                <button
                  type="button"
                  className="button_2 b_2">
                    View History
                </button>
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
                    10.5k
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
                    <h2>@KAMAL_bu..</h2>
                    <h2>12.50 ETH</h2>
                  </div>
                  <div className="b">
                    <p>creator</p>
                    <h2>Current Bit</h2>
                  </div>
                </div>
              </div>
              <div className="buttons">
                <button
                  type="button"
                  className="button_1 b_1">
                    Place Bid
                </button>
                <button
                  type="button"
                  className="button_2 b_2">
                    View History
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="ab-reload">
          <button className="button_2">
            Reload More...
          </button>
        </div>
      </div>
    </div>
  );
};