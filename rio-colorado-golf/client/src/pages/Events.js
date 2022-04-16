import React from "react";
import Calender from "../components/Calender/calender";
import EventsImg from "../../src/assets/img/riocolo-events.jpg";

const Events = () => {
  return (
    <section>
      <div class="alligator-img">
        <img class="img-fluid w-100 img-shadow" src={EventsImg} />
      </div>
      <div class="events-container">
        <div class="missing-header">
          <h2>EVENTS</h2>
          <button class="calender-btn btn-shadow calender-button">
            <a href="">VIEW CALENDER</a>
          </button>
        </div>

        <Calender />
      </div>
      <div class="tournament-container">
        <div class="missing-header">
          <h2>TOURNAMENT RESULTS</h2>
        </div>
        <div class="tournament-results" id="tournament-results">
          No Tournament Info Available
        </div>
      </div>
    </section>
  );
};

export default Events;
