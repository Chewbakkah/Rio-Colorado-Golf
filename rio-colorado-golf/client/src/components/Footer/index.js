import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer class="container-fluid">
      <div class="row justify-content-center align-items-center">
        <div class="col-md-2 center-text">
          <Link to="/course">COURSE</Link>
        </div>
        <div class="col-md-2 center-text">
          <Link to="/amenities">AMENITIES</Link>
        </div>
        <div class="col-md-2 center-text">
          <Link to="/events">EVENTS</Link>
        </div>
        <div class="col-md-2 center-text">
          <Link to="/contact">CONTACT</Link>
        </div>
        <div class="col-md-4 center-text vert-align">
          <span class="follow-us">FOLLOW US:</span>{" "}
          <a href="https://www.facebook.com/Rio-Colorado-Golf-Course-152518368102169">
            <i class="fa-brands fa-facebook social-icon"></i>
          </a>
          <a href="https://www.instagram.com/riocoloradogc/">
            <i class="fa-brands fa-instagram social-icon"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
