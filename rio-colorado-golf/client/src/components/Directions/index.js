import React from "react";

function Directions() {
  return (
    <div class="container directions">
      <div class="row">
        <div class="col-lg-8">
          <iframe
            class="map"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=7320%20fm2668%20bay%20city&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>
        </div>
        <div class="col-lg-4">
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
            <div class="directions-book-now">
              <button class="btn btn-shadow">
                <a href="">BOOK ONLINE</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Directions;
