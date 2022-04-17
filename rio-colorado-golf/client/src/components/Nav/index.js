import React from "react";
import { Link } from "react-router-dom";
import navImg from "../../assets/img/riocolo-logo.png";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";


const Nav = () => {
  return (
    <header className="primary-header flex">
      <div>
        <Link to="/">
          <img className="header-img" src={navImg} />
        </Link>
      </div>

      <div>
        <MobileNavigation />
        <Navigation />
      </div>
      
    </header>

  );
};

export default Nav;
