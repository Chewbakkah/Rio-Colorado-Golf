import React from "react";
import { Link } from "react-router-dom";
// import Auth from "../../utils/auth";

const Nav = () => {
  return (
    <header>
      <nav class="container-fluid">
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
          <div class="col-md-2 center-text">
            <button>
              <Link to="/login">LOGIN</Link>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
