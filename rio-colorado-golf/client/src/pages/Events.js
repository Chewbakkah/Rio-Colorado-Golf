import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Calender from "../components/Calender/calender";
import EventsImg from "../../src/assets/img/riocolo-events.jpg";

const Events = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <section>
      <div className="alligator-img">
        <img className="img-fluid w-100 img-shadow" src={EventsImg} alt="he'll bite"/>
      </div>
      <div className="events-container">
        <div className="intro-welcome">
          <h2>EVENTS</h2>
          <button className="calender-btn btn-shadow calender-button">
            <a href="//localendar.com/public/RioColoradoGC" rel="noopener noreferrer" target="_blank">VIEW CALENDER</a>
          </button>
        </div>

        <Calender />
      </div>
      <div className="tournament-container">
        <div className="intro-welcome">
          <h2>TOURNAMENT RESULTS</h2>
        </div>
        <div className="tournament-results" id="tournament-results">
          <div className="coming-soon">
            <h2>Coming Soon!</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
