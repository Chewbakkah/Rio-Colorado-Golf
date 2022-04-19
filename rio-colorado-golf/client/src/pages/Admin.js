import React from "react";
import RioLogo from "../assets/img/riocolo-logo.png";
import Auth from "../utils/auth";

const Admin = () => {
  const user = Auth.getProfile();

  if (user.data.role === "admin") {
    return (
      <section class="admin-container">
        <div class="row admin-header admin-card align-items-center">
          <div class="col-md-6 admin-header-logo">
            <img src={RioLogo} alt="Rio" />
            Rio Colorado
          </div>
          <div class="col-md-6 admin-header-txt">ADMIN DASHBOARD</div>
        </div>
        {/* <div class="member-control admin-card">
          <h3>USER/MEMBER CONTROLS</h3>
          <div class="user-search">
            <span>USER SEARCH</span>
            <br />
            <form>
              <div class="row">
                <div class="col-md-4">
                  <input
                    class="form-input"
                    type="text"
                    placeholder="ENTER A FIRST NAME"
                    name="user-search-first-name"
                    id="user-search-first-name"
                    size="30"
                  />
                </div>
                <div class="col-md-4">
                  <input
                    class="form-input"
                    type="text"
                    placeholder="ENTER A LAST NAME"
                    name="user-search-last-name"
                    id="user-search-last-name"
                    size="30"
                  />
                </div>
                <div class="col-md-4">
                  <input
                    class="form-input"
                    type="text"
                    placeholder="ENTER AN EMAIL"
                    name="user-search-email"
                    id="user-search-email"
                    size="30"
                  />
                </div>
              </div>
              <button class="btn btn-shadow search-button" type="submit">
                <a href="">SEARCH</a>
              </button>
            </form>
          </div>
          <div class="row justify-content-between search-header">
            <div class="col-md-3">EMAIL ADDRESS</div>
            <div class="col-md-3">FULL NAME</div>
            <div class="col-md-3">USER LEVEL</div>
            <div class="col-md-3">DELETE USER</div>
          </div>
          <div class="user-search-results" id="user-search-results">
            <div class="row justify-content-between search-results">
              <div class="col-md-3">anitabath@gmail.com</div>
              <div class="col-md-3">Bath, Anita</div>
              <div class="col-md-3">USER</div>
              <div class="col-md-3">
                <a class="delete" href="#">
                  <i class="fa-solid fa-xmark"></i>
                </a>
              </div>
            </div>
  
            <div class="row justify-content-between search-results">
              <div class="col-md-3">abeblinkin@gmail.com</div>
              <div class="col-md-3">Blinken, Abe</div>
              <div class="col-md-3">MEMBER</div>
              <div class="col-md-3">
                <a class="delete" href="#">
                  <i class="fa-solid fa-xmark"></i>
                </a>
              </div>
            </div>
          </div>
        </div> */}
        <div class="pricing-control admin-card">
          <h3>PRICING CONTROLS</h3>
          <form>
            <div class="pricing-card">
              <h4>WEEKDAY</h4>
              <div class="row justify-content-center">
                <div class="col-md-2">
                  <span class="pricing-type">REGULAR</span>
                  <input
                    class="form-input pricing"
                    type="text"
                    placeholder="xx"
                    name="day-pricing-regular"
                    id="day-pricing-regular"
                    size="2"
                  />
                </div>
                <div class="col-md-2">
                  <span class="pricing-type">SR/JR</span>
                  <input
                    class="form-input pricing"
                    type="text"
                    placeholder="xx"
                    name="day-pricing-sr-jr"
                    id="day-pricing-sr-jr"
                    size="2"
                  />
                </div>
                <div class="col-md-2">
                  <span class="pricing-type">9-HOLE</span>
                  <input
                    class="form-input pricing"
                    type="text"
                    placeholder="xx"
                    name="day-pricing-9"
                    id="day-pricing-9"
                    size="2"
                  />
                </div>
                <div class="col-md-2">
                  <span class="pricing-type">TWILIGHT</span>
                  <input
                    class="form-input pricing"
                    type="text"
                    placeholder="xx"
                    name="day-pricing-twilight"
                    id="day-pricing-twilight"
                    size="2"
                  />
                </div>
                <div class="col-md-2">
                  <span class="pricing-type">WALKING</span>
                  <input
                    class="form-input pricing"
                    type="text"
                    placeholder="xx"
                    name="day-pricing-walking"
                    id="day-pricing-walking"
                    size="2"
                  />
                </div>
              </div>
            </div>
            <div class="pricing-card">
              <h4>WEEKEND</h4>
              <div class="row justify-content-center">
                <div class="col-md-2">
                  <span class="pricing-type">REGULAR</span>
                  <input
                    class="form-input pricing"
                    type="text"
                    placeholder="xx"
                    name="end-pricing-regular"
                    id="end-pricing-regular"
                    size="2"
                  />
                </div>
                <div class="col-md-2">
                  <span class="pricing-type">SR/JR</span>
                  <input
                    class="form-input pricing"
                    type="text"
                    placeholder="xx"
                    name="end-pricing-sr-jr"
                    id="end-pricing-sr-jr"
                    size="2"
                  />
                </div>
                <div class="col-md-2">
                  <span class="pricing-type">9-HOLE</span>
                  <input
                    class="form-input pricing"
                    type="text"
                    placeholder="xx"
                    name="end-pricing-9"
                    id="end-pricing-9"
                    size="2"
                  />
                </div>
                <div class="col-md-2">
                  <span class="pricing-type">TWILIGHT</span>
                  <input
                    class="form-input pricing"
                    type="text"
                    placeholder="xx"
                    name="end-pricing-twilight"
                    id="end-pricing-twilight"
                    size="2"
                  />
                </div>
                <div class="col-md-2">
                  <span class="pricing-type">WALKING</span>
                  <input
                    class="form-input pricing"
                    type="text"
                    placeholder="xx"
                    name="end-pricing-walking"
                    id="end-pricing-walking"
                    size="2"
                  />
                </div>
              </div>
            </div>
            <div class="pricing-card">
              <h4>MISC</h4>
              <div class="row justify-content-around">
                <div class="col-md-4">
                  <span class="pricing-type">SINGLE/3'S</span>
                  <input
                    class="form-input pricing"
                    type="text"
                    placeholder="xx"
                    name="misc-pricing-single"
                    id="misc-pricing-single"
                    size="2"
                  />
                </div>
                <div class="col-md-4">
                  <span class="pricing-type">REPLAY 9</span>
                  <input
                    class="form-input pricing"
                    type="text"
                    placeholder="xx"
                    name="misc-pricing-9"
                    id="misc-pricing-9"
                    size="2"
                  />
                </div>
                <div class="col-md-4">
                  <span class="pricing-type">REPLAY 18</span>
                  <input
                    class="form-input pricing"
                    type="text"
                    placeholder="xx"
                    name="misc-pricing-18"
                    id="misc-pricing-18"
                    size="2"
                  />
                </div>
              </div>
              <div class="row justify-content-around bottom-misc">
                <div class="col-md-4">
                  <span class="pricing-type">TWILIGHT TIME</span>
                  <input
                    class="form-input pricing"
                    type="text"
                    placeholder="xx"
                    name="misc-pricing-time"
                    id="misc-pricing-time"
                    size="2"
                  />
                </div>
                <div class="col-md-4">
                  <span class="pricing-type">RANGE SM</span>
                  <input
                    class="form-input pricing"
                    type="text"
                    placeholder="xx"
                    name="misc-pricing-sm"
                    id="misc-pricing-sm"
                    size="2"
                  />
                </div>
                <div class="col-md-4">
                  <span class="pricing-type">RANGE LG</span>
                  <input
                    class="form-input pricing"
                    type="text"
                    placeholder="xx"
                    name="misc-pricing-lg"
                    id="misc-pricing-lg"
                    size="2"
                  />
                </div>
              </div>
            </div>
            <button class="btn btn-shadow pricing-button" type="submit">
              <a href="">UPDATE</a>
            </button>
          </form>
        </div>
      </section>
    );
  } else {
    return (
      <div>
        <h3>You are not authorized to view this page</h3>
      </div>
    );
  }
};

export default Admin;
