import React from "react";

function Directions() {
  return (
    <div className="container directions">
      <div className="row directions-row">
        <div className="map-container col-xl-9">
          <iframe
            className="map"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=7320%20fm2668%20bay%20city&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
          ></iframe>
        </div>
        <div className="col-xl-3">
          <div>
            <div>
              <h4>ADDRESS</h4>
              7320 FM2668, Bay City, TX 77414
            </div>
            <div>
              <h4>EMAIL</h4>
              playgolf@riocoloradogolfcourse.com
            </div>
            <div>
              <h4>PHONE NUMBER</h4>
              (979) 244-2955
            </div>
            <div>
              <h4>OPERATING HOURS:</h4>
              Sunday - Saturday
              <br />
              7:00AM - 5:30PM
            </div>
            <div className="directions-book-now">
              <button className="btn btn-shadow">
                <a href="/contact">BOOK NOW</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Directions;
