import React from "react";
import { Link } from "react-router-dom";
import navImg from "../../assets/img/riocolo-logo.png";
// import Auth from "../../utils/auth";

const Nav = () => {
  const primaryNav = document.querySelector(".primary-navigation");
  const navToggle = document.querySelector(".mobile-nav-toggle");

  navToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute("data-visible");
    if (visibility === "false") {
      primaryNav.setAttribute("data-visible", true);
      navToggle.setAttribute("aria-expanded", true);
    } else if (visibility === "true") {
      primaryNav.setAttribute("data-visible", false);
      navToggle.setAttribute("aria-expanded", false);
    }
  });

  return (
    <header class="primary-header flex">
      <div>
        <Link to="/">
          <img class="header-img" src={navImg} />
        </Link>
      </div>

      <button
        class="mobile-nav-toggle"
        aria-controls="primary-navigation"
        aria-expanded="false"
      >
        <span class="sr-only">Menu</span>
      </button>

      <nav>
        <ul
          id="primary-navigation"
          data-visible="false"
          class="primary-navigation flex"
        >
          <li class="active">
            <Link to="/course">
              <span class="header-text">COURSE</span>
            </Link>
          </li>
          <li>
            <Link to="/amenities">
              <span class="header-text">AMENITIES</span>
            </Link>
          </li>
          <li>
            <Link to="/events">
              <span class="header-text">EVENTS</span>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <span class="header-text">CONTACT</span>
            </Link>
          </li>
          <li>
            <button class="btn">
              <Link to="/login">
                <span class="header-text">LOGIN</span>
              </Link>
            </button>
          </li>
        </ul>
      </nav>
    </header>

    // <header>
    //   <nav class="container-fluid">
    //     <div class="row justify-content-space-between align-items-center primary-navigation flex">
    //       <div class="col-md-7">
    //         <Link to="/">
    //           <img class="header-img" src={navImg} />
    //         </Link>
    //       </div>
    //       <div class="col-md-1 center-text">
    //         <Link to="/course">COURSE</Link>
    //       </div>
    //       <div class="col-md-1 center-text">
    //         <Link to="/amenities">AMENITIES</Link>
    //       </div>
    //       <div class="col-md-1 center-text">
    //         <Link to="/events">EVENTS</Link>
    //       </div>
    //       <div class="col-md-1 center-text">
    //         <Link to="/contact">CONTACT</Link>
    //       </div>
    //       <div class="col-md-1 center-text">
    //         <button>
    //           <Link to="/login">LOGIN</Link>
    //         </button>
    //       </div>
    //     </div>
    //   </nav>
    // </header>
  );
};

export default Nav;
