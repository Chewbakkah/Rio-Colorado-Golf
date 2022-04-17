import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section>
      <footer className="container-fluid">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-2 center-text">
            <Link to="/course">COURSE</Link>
          </div>
          <div className="col-md-2 center-text">
            <Link to="/amenities">AMENITIES</Link>
          </div>
          <div className="col-md-2 center-text">
            <Link to="/events">EVENTS</Link>
          </div>
          <div className="col-md-2 center-text">
            <Link to="/contact">CONTACT</Link>
          </div>
          <div className="col-md-4 center-text vert-align">
            <span className="follow-us">FOLLOW US:</span>{" "}
            <a href="https://www.facebook.com/Rio-Colorado-Golf-Course-152518368102169">
              <i className="fa-brands fa-facebook social-icon"></i>
            </a>
            <a href="https://www.instagram.com/riocoloradogc/">
              <i className="fa-brands fa-instagram social-icon"></i>
            </a>
          </div>
        </div>
        <section class="admin-footer">
          <div className="float-end">
            <Link to="/admin">ADMIN</Link>
          </div>
        </section>
      </footer>
    </section>
  );
};

export default Footer;
