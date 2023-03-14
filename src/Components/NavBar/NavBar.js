import "./NavBar.css";
import { AiFillCaretDown, AiOutlineSearch, AiOutlineMenu, AiOutlineWallet } from 'react-icons/ai';
import { useState } from "react";
import { Link } from "react-router-dom";
import scrollTop from "../../Functions/scrollTop";

export default function NavBar() {

  let [menu, setMenu] = useState(false);
  let [menuPages, setMenuPages] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="ctn">
          <Link onClick={scrollTop} to="/">
            <div className="logo">
              <img src={ require("../../images/logo.jpg") } alt="" />
              <h1 className="font-bold">
                NFT
              </h1>
            </div>
          </Link>
          <ul className="menu">
            <Link onClick={scrollTop} to="/" className="ln"> Home </Link>
            <Link onClick={scrollTop} to="/explore" className="ln"> Explore </Link>
            <li className="ln"> Community </li>
            <li className="ln pages">
              Pages <AiFillCaretDown />
                <ul className="menu-pages">
                  <Link onClick={scrollTop} to="/explore">
                    <li className="lp"> Explore Items </li>
                  </Link>
                  <Link onClick={scrollTop} to="/item-details">
                    <li className="lp"> Item Details </li>
                  </Link>
                  <Link onClick={scrollTop} to="/create-item">
                    <li className="lp"> Create Item </li>
                  </Link>
                  <Link onClick={scrollTop} to="/connect-wallet">
                    <li className="lp"> Connect Wallet </li>
                  </Link>
                  <Link onClick={scrollTop} to="/support">
                    <li className="lp"> Support </li>
                  </Link>
                  <Link onClick={scrollTop} to="/signin">
                    <li className="lp"> Sign In Page </li>
                  </Link>
                  <Link onClick={scrollTop} to="/signup">
                    <li className="lp"> Sign Up Page </li>
                  </Link>
                </ul>
            </li>
            <Link onClick={scrollTop} to="/support" className="ln"> Support </Link>
          </ul>
          <div className="search">
            <AiOutlineSearch className="i" />
            <input type="search" placeholder="Search" />
          </div>
          <div className="button">
            <Link onClick={scrollTop} to="/connect-wallet">
              <button
                type="button"
                className="button_2">
                  <AiOutlineWallet />
                  Wallet Connect
              </button>
            </Link>
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
                      <Link onClick={scrollTop} to="/explore">
                        <li className="lp"> Explore Items </li>
                      </Link>
                      <Link onClick={scrollTop} to="/item-details">
                        <li className="lp"> Item Details </li>
                      </Link>
                      <Link onClick={scrollTop} to="/create-item">
                        <li className="lp"> Create Item </li>
                      </Link>
                      <Link onClick={scrollTop} to="/connect-wallet">
                        <li className="lp"> Connect Wallet </li>
                      </Link>
                      <Link onClick={scrollTop} to="/support">
                        <li className="lp"> Support </li>
                      </Link>
                      <Link onClick={scrollTop} to="/signin">
                        <li className="lp"> Sign In Page </li>
                      </Link>
                      <Link onClick={scrollTop} to="/signup">
                        <li className="lp"> Sign Up Page </li>
                      </Link>
                    </ul>
                  </div>
                <Link onClick={scrollTop} to="/support">
                  <li className="ln"> Support </li>
                </Link>   
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