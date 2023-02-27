import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";
import './ContactHome.scss'

function ContactHome() {
  return (
    <div className="contact-home text-light p-4 d-flex justify-content-center">
      <div className="wrapper w-75 d-flex justify-content-between align-items-center">
        <span>BE IN TOUCH WITH US:</span>
        <div className="mail d-flex">
          <input className="p-1 border-0 rounded-start" type="text" placeholder="Enter e-mail..." />
          <button className="btn btn-dark rounded-0">JOIN US</button>
        </div>
        <div className="icons">
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <GoogleIcon />
          <PinterestIcon />
        </div>
      </div>
    </div>
  );
}

export default ContactHome;
