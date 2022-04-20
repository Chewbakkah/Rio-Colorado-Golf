import { useQuery } from "@apollo/client";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Directions from "../components/Directions";
import { QUERY_ALL_SERVICES } from "../utils/queries";

import holeImage from "../../src/assets/img/riocolo-cup-slice.jpg";

const Contact = () => {
  // const [pricingState, setPricingState] = useState();

  const { loading, error, data } = useQuery(QUERY_ALL_SERVICES);

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (loading) return "Loading";
  if (error) return `error ${error}`;

  let services;

  if (data) {
    services = data.services;
  }
// future development code commented out
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
      <div className="hole-img">
        <img className="img-fluid w-100 img-shadow" src={holeImage} alt="ball on the edge"/>
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
      </section>
      <section className="missing-container">
        <div className="intro-welcome">
          <h2>PRICING</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h6 className="pricing-title text-center">WEEKDAY</h6>
              <div className="text-center pricing_r_align pricing_margin">

{/* future development code  */}

                {/* {services.map((service) => {
                  if (service.priceTimeFrame === "Weekday") {
                    return `<p>${service.service}: <span id="weekday-regular">${service.price}</span></p><br />`;
                  } else {
                    return null;
                  }
                })} */}
                <p>
                  REGULAR: <span id="weekday-regular">{services[0].price}</span>
                  <br />
                  JR/SR(62+):{" "}
                  <span id="weekday-regular">{services[1].price}</span>
                  <br />
                  9-HOLES: <span id="weekday-regular">{services[2].price}</span>
                  <br />
                  TWILIGHT:{" "}
                  <span id="weekday-regular">{services[3].price}</span>
                  <br />
                  WALKING: <span id="weekday-regular">{services[4].price}</span>
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <h6 className="pricing-title text-center">WEEKEND/HOLIDAYS</h6>
              <div className="text-center pricing_r_align pricing_margin">
                <p>
                  REGULAR: <span id="weekday-regular">{services[5].price}</span>
                  <br />
                  JR/SR(62+):{" "}
                  <span id="weekday-regular">{services[6].price}</span>
                  <br />
                  9-HOLES: <span id="weekday-regular">{services[7].price}</span>
                  <br />
                  TWILIGHT:{" "}
                  <span id="weekday-regular">{services[8].price}</span>
                  <br />
                  WALKING: <span id="weekday-regular">{services[9].price}</span>
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
                  SINGLE CART RIDER:{" "}
                  <span id="weekday-regular">{services[10].price}</span>
                  <br />
                  REPLAY 9 HOLES:{" "}
                  <span id="weekday-regular">{services[11].price}</span>
                  <br />
                  REPLAY 18 HOLES:{" "}
                  <span id="weekday-regular">{services[12].price}</span>
                  <br />
                  RANGE SMALL:{" "}
                  <span id="weekday-regular">{services[13].price}</span>
                  <br />
                  REPLAY LARGE:{" "}
                  <span id="weekday-regular">{services[14].price}</span>
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
