import React from "react";

function Footer() {
  return (
    <footer class="container-fluid">
      <div class="row justify-content-center align-items-center">
        <div class="col-md-2 center-text">
          <a href="#">COURSE</a>
        </div>
        <div class="col-md-2 center-text">
          <a href="#">AMENITIES</a>
        </div>
        <div class="col-md-2 center-text">
          <a href="#">EVENTS</a>
        </div>
        <div class="col-md-2 center-text">
          <a href="#">CONTACT</a>
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
}

export default Footer;
