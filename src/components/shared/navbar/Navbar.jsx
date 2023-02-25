import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Link } from "react-router-dom";
import "./Navbar.scss"

function Navbar() {
  return (
    <section className="navbar">
      <div className="navWrapper">
        {/* Left Section------------------------------------ */}
        <div className="left-nav-section">
          <div className="nav-item">
            <img
              src="/img/flag image.png"
              alt="nav-flag"
              className="nav-image"
            />
            <KeyboardArrowDownIcon />
          </div>
          <div className="nav-item">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="nav-item">
            <Link className="link" to="/products/women">Women</Link>
          </div>
          <div className="nav-item">
            <Link className="link" to="/products/man">Man</Link>
          </div>
          <div className="nav-item">
            <Link className="link" to="/products/children">Children</Link>
          </div>
        </div>
        {/* Center Section------------------------------------ */}
        <div className="center-nav-section">
          <Link className="link" to="/home">DEMOSTORE</Link>
        </div>
        {/* Right Section------------------------------------ */}
        <div className="right-nav-section">
          <div className="nav-item">
            <Link className="link" to="/home">Home</Link>
          </div>
          <div className="nav-item">
            <Link className="link" to="/home">About</Link>
          </div>
          <div className="nav-item">
            <Link className="link" to="/home">Contact</Link>
          </div>
          <div className="nav-item">
            <Link className="link" to="/home">Stores</Link>
          </div>
          <div className="nav-icons">
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div className="cartIcon">
              <ShoppingCartOutlinedIcon />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
