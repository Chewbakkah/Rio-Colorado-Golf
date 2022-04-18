import { useQuery } from "@apollo/client";
import React, { useState, useEffect } from "react";
import Directions from "../components/Directions";
import { QUERY_ALL_SERVICES } from "../utils/queries";

const Contact = () => {
  const [pricingState, setPricingState] = useState();

  const { data } = useQuery(QUERY_ALL_SERVICES);

  let services;

  if (data) {
    services = data.services;
  }

  // const handlePricing = async () => {
  //   try {
  //     const pricing = await getServices();
  //     setPricingState(pricing.data.services);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  // useEffect(() => {
  //   handlePricing();
  // }, []);

  return (
    <section>
      <section class="intro-container">
        <div class="intro-welcome">
          <h2>CONTACT INFORMATION</h2>
        </div>
        <div class="intro-text">
          Our staff of professionals are ready and eager to assist with the
          planning and hosting of your private event or corporate outing. Rio
          Colorado has the facilities to customize your event to exceed your
          every expectation. Everything from pre-tournament organizing, to
          post-event scoring, to even providing dinner, we are here to serve you
          and make your next game one to remember.
        </div>
        <div class="intro-book-now">
          <button class="btn btn-shadow">
            <a href="">BOOK ONLINE</a>
          </button>
        </div>
      </section>
      <section class="missing-container">
        <div class="missing-header">
          <h2>PRICING</h2>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h6 class="pricing-title text-center">WEEKDAY</h6>
              <div class="text-center pricing_r_align pricing_margin">
                {services.map((service) => {
                  console.log(service);
                  if (service.priceTimeFrame === "Weekday") {
                    return `<p>${service.service}: $<span id="weekday-regular">${service.price}</span></p><br />`;
                  } else {
                    return null;
                  }
                })}
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
            <div class="col-md-6">
              <h6 class="pricing-title text-center">WEEKEND/HOLIDAYS</h6>
              <div class="text-center pricing_r_align pricing_margin">
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
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h6 class="twi_pricing_title text-center">TWILIGHT: 3 PM</h6>
              <div class="text-center pricing_r_align pricing_twi_margin">
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
