import "./NavBar.css";
import { AiFillCaretDown, AiOutlineSearch, AiOutlineMenu } from 'react-icons/ai';

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="ctn">
        <div className="logo">
          <img src={ require("../../images/3d-nft-icon-nft-memes_629802-24-removebg-preview.png") } alt="" />
          <h1 className="font-bold">
            NFT
          </h1>
        </div>
        <ul className="menu">
          <li className="ln"> Home </li>
          <li className="ln"> Explore </li>
          <li className="ln"> Community </li>
          <li className="ln pages">
            Pages <AiFillCaretDown />
              <ul className="menu-pages">
                <li className="lp"> Explore Items </li>
                <li className="lp"> Item Details </li>
                <li className="lp"> Create Item </li>
                <li className="lp"> Connect Wallet </li>
                <li className="lp"> Support </li>
                <li className="lp"> Sign In Page </li>
                <li className="lp"> Sign Up Page </li>
              </ul>
          </li>
          <li className="ln"> Support </li>
        </ul>
        <div className="search">
          <AiOutlineSearch className="i" />
          <input type="search" placeholder="Search" />
        </div>
        <div className="button">
          <button
            type="button"
            className="button_2">
              Upload Your Art
          </button>
        </div>
        <div className="menu-phone-icon">
          <AiOutlineMenu />
        </div>
      </div>
    </nav>
  );
};