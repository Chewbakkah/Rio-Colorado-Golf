import React from "react";
// import { Link } from "react-router-dom";
// import Auth from "../../utils/auth";

function Nav() {
  return (
    <header>
      <nav class="container-fluid">
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
          <div class="col-md-2 center-text">
            <button>
              <a href=" #">LOGIN</a>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
