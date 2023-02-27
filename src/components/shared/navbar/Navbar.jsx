import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import CartDropdown from "./cartDropdown/CartDropdown";

function Navbar() {
  const [open, setOpen] = useState(false);

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
            <Link className="link" to="/products/1">
              Women
            </Link>
          </div>
          <div className="nav-item">
            <Link className="link" to="/products/2">
              Man
            </Link>
          </div>
          <div className="nav-item">
            <Link className="link" to="/products/3">
              Children
            </Link>
          </div>
        </div>
        {/* Center Section------------------------------------ */}
        <div className="center-nav-section">
          <Link className="link" to="/home">
            DEMOSTORE
          </Link>
        </div>
        {/* Right Section------------------------------------ */}
        <div className="right-nav-section">
          <div className="nav-item">
            <Link className="link" to="/home">
              Home
            </Link>
          </div>
          <div className="nav-item">
            <Link className="link" to="/home">
              About
            </Link>
          </div>
          <div className="nav-item">
            <Link className="link" to="/home">
              Contact
            </Link>
          </div>
          <div className="nav-item">
            <Link className="link" to="/home">
              Stores
            </Link>
          </div>
          <div className="nav-icons">
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div className="cartIcon" onClick={() => setOpen((prev) => !prev)}>
              <ShoppingCartOutlinedIcon />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
      {open && <CartDropdown/>}
    </section>
  );
}

export default Navbar;
