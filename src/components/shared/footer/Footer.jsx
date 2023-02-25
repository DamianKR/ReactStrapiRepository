import React from "react";
import "./Footer.scss"

function Footer() {
  return (
    <div className="footer">
      <div className="top-footer">
        <div className="item-footer">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accesories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item-footer">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item-footer">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae enim
            blanditiis cupiditate recusandae expedita tempora, ex assumenda
            doloribus neque, ratione soluta quia.
          </span>
        </div>
        <div className="item-footer">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae enim
            blanditiis cupiditate recusandae expedita tempora, ex assumenda
            doloribus neque, ratione soluta quia asperiores laborum.
          </span>
        </div>
      </div>
      <div className="bottom-footer">
        <div className="left-bottom-footer">
          <span className="logo">Demostore</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right-bottom-footer">
          <img src="/img/paymentImage.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
