import "./NavBar.css";
import { AiFillCaretDown, AiOutlineSearch, AiOutlineMenu, AiOutlineWallet } from 'react-icons/ai';
import { useState } from "react";

export default function NavBar() {

  let [menu, setMenu] = useState(false);
  let [menuPages, setMenuPages] = useState(false);

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
            <ul className="menu-phone"
              style={{
                display: menu === false ?
                  "none"
                : "flex",
              }}
            >
              <li className="ln"> Home </li>
              <li className="ln"> Explore </li>
              <li className="ln"> Community </li>
              <li className="ln pages">
                <span onClick={() => {
                  setMenuPages(!menuPages)
                }}> Pages <AiFillCaretDown /> </span>
              </li>


                  <ul className="menu-pages"
                    style={{
                      display: menuPages === false ?
                        "none"
                      : "block",
                    }}
                  >
                    <li className="lp"> Explore Items </li>
                    <li className="lp"> Item Details </li>
                    <li className="lp"> Create Item </li>
                    <li className="lp"> Connect Wallet </li>
                    <li className="lp"> Support </li>
                    <li className="lp"> Sign In Page </li>
                    <li className="lp"> Sign Up Page </li>
                  </ul>












              <li className="ln"> Support </li>
            </ul>
        </div>
        <div className="bg" 
          style={{
            display: menu === true ?
              "block"
            : "none",
          }}
          onClick={() => {
            setMenu(!menu)
            setMenuPages(false)
          }}>
        </div>
      </nav>
    </>
  );
};