import React from "react";
import Calender from "../components/Calender/calender";
import EventsImg from "../../src/assets/img/riocolo-events.jpg";

const Events = () => {
  return (
    <section>
      <div className="alligator-img">
        <img className="img-fluid w-100 img-shadow" src={EventsImg} />
      </div>
      <div className="events-container">
        <div className="missing-header">
          <h2>EVENTS</h2>
          <button className="calender-btn btn-shadow calender-button">
            <a href="">VIEW CALENDER</a>
          </button>
        </div>

        <Calender />
      </div>
      <div className="tournament-container">
        <div className="missing-header">
          <h2>TOURNAMENT RESULTS</h2>
        </div>
        <div className="tournament-results" id="tournament-results">
          No Tournament Info Available
        </div>
      </div>
    </section>
  );
};

export default Events;
