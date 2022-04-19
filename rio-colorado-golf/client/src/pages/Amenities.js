import React from "react";
import Directions from "../components/Directions";
import amenHeaderImg from "../../src/assets/img/riocolo-amenities.jpg";
import campImg from "../../src/assets/img/riocolo-camp.jpg";

const Amenities = () => {
  return (
    <section>
      <div className="cart-img">
        <img className="img-fluid w-100 img-shadow" src={amenHeaderImg} />
      </div>
      <section className="onsite-container">
        <div className="onsite-header">
          <h2>AMENITIES</h2>
        </div>
        <div className="onsite-text">
          Rio Colorado Golf Course features a full service pro shop stocked with
          your favorite food, snacks, and beverages. Our practice facilities
          include two putting greens, a short game green, and a driving range.
        </div>
      </section>
      <div className="amenities-img">
        <img className="img-fluid w-100" src={campImg} />
      </div>
      <section className="offsite-container">
        <div className="offsite-header">
          <h2>LOCAL RESOURCES</h2>
        </div>
        <div className="offsite-text">
          The greater Matagorda County area is host to many sporting
          attractions, dining options, and affordable lodging options. From
          popular well known hotel chains to upscale beach rentals there is an
          option that will suit any adventure weekend visitor. Come see what Bay
          City has to offer!
        </div>
      </section>
      <Directions />
    </section>
  );
};

export default Amenities;
