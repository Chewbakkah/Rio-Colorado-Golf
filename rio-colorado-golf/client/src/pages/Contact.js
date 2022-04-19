import { useQuery } from "@apollo/client";
import React, { useState, useEffect } from "react";
import Directions from "../components/Directions";
import { QUERY_ALL_SERVICES } from "../utils/queries";

import holeImage from "../../src/assets/img/riocolo-cup-slice.jpg";

const Contact = () => {
  return (
    <section>
      <div class="hole-img">
        <img className="img-fluid w-100 img-shadow" src={holeImage} />
      </div>
      <section className="intro-container">
        <div className="intro-welcome">
          <h2>CONTACT INFORMATION</h2>
        </div>
        <div className="intro-text">
          Our staff of professionals are ready and eager to assist with the
          planning and hosting of your private event or corporate outing. Rio
          Colorado has the facilities to customize your event to exceed your
          every expectation. Everything from pre-tournament organizing, to
          post-event scoring, to even providing dinner, we are here to serve you
          and make your next game one to remember.
        </div>
        <div className="intro-book-now">
          <button className="btn btn-shadow">
            <a href="">BOOK ONLINE</a>
          </button>
        </div>
      </section>
      <section className="missing-container">
        <div className="missing-header">
          <h2>PRICING</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h6 className="pricing-title text-center">WEEKDAY</h6>
              <div className="text-center pricing_r_align pricing_margin">
                <p>
                  REGULAR: $<span id="weekday-regular">34</span>
                  <br />
                  JR/SR(62+): $<span id="weekday-regular">29</span>
                  <br />
                  9-HOLES: $<span id="weekday-regular">24</span>
                  <br />
                  TWILIGHT: $<span id="weekday-regular">28</span>
                  <br />
                  WALKING PHOENIX: $<span id="weekday-regular">20</span>
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <h6 className="pricing-title text-center">WEEKEND/HOLIDAYS</h6>
              <div className="text-center pricing_r_align pricing_margin">
                <p>
                  REGULAR: $<span id="weekday-regular">44</span>
                  <br />
                  JR/SR(62+): $<span id="weekday-regular">33</span>
                  <br />
                  9-HOLES: $<span id="weekday-regular">29</span>
                  <br />
                  TWILIGHT: $<span id="weekday-regular">33</span>
                  <br />
                  WALKING PHOENIX: $<span id="weekday-regular">25</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h6 className="twi_pricing_title text-center">TWILIGHT: 3 PM</h6>
              <div className="text-center pricing_r_align pricing_twi_margin">
                <p>
                  SINGLE/3-SOME: $<span id="weekday-regular">5</span>
                  <br />
                  REPLAY 9 HOLES: $<span id="weekday-regular">12</span>
                  <br />
                  REPLAY 18 HOLES: $<span id="weekday-regular">17</span>
                  <br />
                  RANGE SMALL: $<span id="weekday-regular">6</span>
                  <br />
                  REPLAY LARGE: $<span id="weekday-regular">9</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Directions />
    </section>
  );
};

export default Contact;
