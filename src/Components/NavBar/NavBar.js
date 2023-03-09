import "./NavBar.css";
import { AiFillCaretDown, AiOutlineSearch, AiOutlineMenu, AiOutlineWallet } from 'react-icons/ai';
import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {

  let [menu, setMenu] = useState(false);
  let [menuPages, setMenuPages] = useState(false);

  function scrollTop() {
    document.documentElement.scrollTop = 0;
  }

  return (
    <>
      <nav className="navbar">
        <div className="ctn">
          <div className="logo">
            <img src={ require("../../images/3d-nft-icon-nft-memes_629802-24-removebg-preview.png") } alt="" />
            <h1 className="font-bold">
              NFT
            </h1>
          </div>
          <ul className="menu">
            <Link onClick={scrollTop} to="/" className="ln"> Home </Link>
            <Link onClick={scrollTop} to="/Explore" className="ln"> Explore </Link>
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
                <AiOutlineWallet />
                Wallet Connect
            </button>
          </div>
          <div className="menu-phone-icon">
            <AiOutlineMenu onClick={() => {
              setMenu(!menu)
              setMenuPages(false)
            }} />
          </div>
        </div>
        <div className="ab-menu-phone"
          style={{
            left: menu === false ?
              "-100%"
            : "0"
              ,
            opacity:
              menu === false ?
                "0"
              : 
                "1"
            ,
          }}
        >
              <ul className="menu-phone">
                <Link onClick={scrollTop} to="/">
                  <li className="ln"> Home </li>
                </Link>
                <Link onClick={scrollTop} to="/explore">
                  <li className="ln"> Explore </li>
                </Link>                
                <li className="ln"> Community </li>
                <li className="ln pages">
                  <span onClick={() => {
                    setMenuPages(!menuPages)
                  }}> Pages <AiFillCaretDown /> </span>
                </li>
                  <div
                    className="ab-menu-pages"
                    style={{
                      height:
                        menuPages === false ?
                          "0px"
                        : 
                          "361.85px"
                      ,
                    }}
                  >
                    <ul className="menu-pages">
                      <li className="lp"> Explore Items </li>
                      <li className="lp"> Item Details </li>
                      <li className="lp"> Create Item </li>
                      <li className="lp"> Connect Wallet </li>
                      <li className="lp"> Support </li>
                      <li className="lp"> Sign In Page </li>
                      <li className="lp"> Sign Up Page </li>
                    </ul>
                  </div>
                <li className="ln"> Support </li>
              </ul>
        </div>
        <div className="bg"
          style={{
            display:
              menu === false ?
                "none"
              : 
                "block"
            ,
          }}
          onClick={() => {
            setMenu(false)
          }}
        >
        </div>
      </nav>
    </>
  );
};