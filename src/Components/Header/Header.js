import "./Header.css";

export default function Header() {
  return (
    <div className="ab">
      <div className="bg">
        <div className="ctn">
          <div className="texts">
            <h1 className="mb-6 text-5xl font-bold">
            Tailwind Template for NFT Marketplace and Web3 Platforms
            </h1>
            <p className="mb-6">
              Template for NFT, Token, and Web3 marketplace projects, based on Tailwind CSS. Comes with all the essential UI components and pages you need to build an NFT marketplace or all sorts of Web3 platforms.
            </p>
            <div className="buttons">
              <button
                type="button"
                className="button_1">
                  Explore now
              </button>
              <button
                type="button"
                className="button_2">
                  Upload Your Art
              </button>
            </div>
          </div>
          <div className="img">
            <img src={ require("../../images/3d-nft-icon-nft-memes_629802-24-removebg-preview.png") } alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};