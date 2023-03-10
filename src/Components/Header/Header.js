import "./Header.css";
import { Link } from "react-router-dom";
import scrollTop from "../../Functions/scrollTop";

export default function Header() {
  return (
    <div className="ab">
      <div className="bg">
        <div className="ctn">
          <div className="texts">
            <h1>
              Tailwind Template for NFT Marketplace and Web3 Platforms
            </h1>
            <p>
              Template for NFT, Token, and Web3 marketplace projects, based on Tailwind CSS. Comes with all the essential UI components and pages you need to build an NFT marketplace or all sorts of Web3 platforms.
            </p>
            <div className="buttons">
              <Link onClick={scrollTop} to="/explore">
                <button
                  type="button"
                  className="button_1">
                    Explore now
                </button>
              </Link>
              <Link onClick={scrollTop} to="/create-item">
                <button
                  type="button"
                  className="button_2">
                    Upload Your Art
                </button>
              </Link>
            </div>
          </div>
          <div className="img">
            <img src={ require("../../images/slider-1.png") } alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};