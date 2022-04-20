import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Directions from "../components/Directions";
import amenHeaderImg from "../../src/assets/img/riocolo-amenities.jpg";
import campImg from "../../src/assets/img/riocolo-camp.jpg";
import puttingImg from "../../src/assets/img/riocolo-puttinggreen2.jpg";

const Amenities = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <section class="amenities">
      <div className="cart-img">
        <img className="img-fluid w-100 img-shadow" src={amenHeaderImg} />
      </div>
      <section className="amenities-container">
        <div className="intro-welcome">
          <h2>AMENITIES</h2>
        </div>
        <div className="amenities-text">
          Rio Colorado Golf Course features a full service pro shop stocked with
          your favorite food, snacks, and beverages. Our practice facilities
          include two putting greens, a short game green, and a driving range.
        </div>
        <div className="cart-img">
          <img className="img-fluid w-100 img-shadow" src={puttingImg} />
        </div>
      </section>
      <div className="amenities-img">
        <img className="img-fluid w-100" src={campImg} />
      </div>
      <section class="amenities-bottom">
        <section className="onsite-container">
          <div className="intro-welcome">
            <h2>LOCAL RESOURCES</h2>
          </div>
          <div className="intro-text">
            The greater Matagorda County area is host to many sporting
            attractions, dining options, and affordable lodging options. From
            popular well known hotel chains to upscale beach rentals there is an
            option that will suit any adventure weekend visitor. Come see what
            Bay City has to offer!
          </div>
        </section>
        <Directions />
      </section>
    </section>
  );
};

export default Amenities;
