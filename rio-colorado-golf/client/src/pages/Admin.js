import React from "react";
import RioLogo from "../assets/img/riocolo-logo.png";
import Auth from "../utils/auth";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ALL_SERVICES } from "../utils/queries";
import { UPDATE_SERVICE } from "../utils/mutations";

const Admin = () => {
  const user = Auth.getProfile();

  const { loading, error, data } = useQuery(QUERY_ALL_SERVICES);
  const [updateServices, { error1 }] = useMutation(UPDATE_SERVICE);

  if (loading) return "Loading";
  if (error) return `error ${error}`;

  let services;

  if (data) {
    services = data.services;
  }
// future development code commented out
  // const formSubmission = async (event) => {
  //   event.preventDefault();
  // };

  const updatePriceDb = async (event) => {
    try {
      const updatePrice = await updateServices({
        variables: {
          id: event.target.id,
          price: event.target.value,
        },
      });

      alert(`Price has been Updated to ${event.target.value}`);

      return updatePrice;
    } catch (e) {
      console.log(event.target.id);
      console.log(event.target.value);
      console.log(e);
    }
  };

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

        {/* // future development code commented out */}
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
                    placeholder={services[0].price}
                    name="day-pricing-regular"
                    id={services[0]._id}
                    size="2"
                    onBlur={updatePriceDb}
                  />
                </div>
                <div class="col-md-2">
                  <span class="pricing-type">SR/JR</span>
                  <input
                    class="form-input pricing"
                    type="text"
                    placeholder={services[1].price}
                    name="day-pricing-sr-jr"
                    id={services[1]._id}
                    size="2"
                    onBlur={updatePriceDb}
                  />
                </div>
                <div class="col-md-2">
                  <span class="pricing-type">9-HOLE</span>
                  <input
                    class="form-input pricing"
                    type="text"
                    placeholder={services[2].price}
                    name="day-pricing-9"
                    id={services[2]._id}
                    size="2"
                    onBlur={updatePriceDb}
                  />
                </div>
                <div class="col-md-2">
                  <span class="pricing-type">TWILIGHT</span>
                  <input
                    class="form-input pricing"
                    type="text"
                    placeholder={services[3].price}
                    name="day-pricing-twilight"
                    id={services[3]._id}
                    size="2"
                    onBlur={updatePriceDb}
                  />
                </div>
                <div class="col-md-2">
                  <span class="pricing-type">WALKING</span>
                  <input
                    class="form-input pricing"
                    type="text"
                    placeholder={services[4].price}
                    name="day-pricing-walking"
                    id={services[4]._id}
                    size="2"
                    onBlur={updatePriceDb}
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
                    placeholder={services[5].price}
                    name="end-pricing-regular"
                    id={services[5]._id}
                    size="2"
                    onBlur={updatePriceDb}
                  />
                </div>
                <div class="col-md-2">
                  <span class="pricing-type">SR/JR</span>
                  <input
                    class="form-input pricing"
                    type="text"
                    placeholder={services[6].price}
                    name="end-pricing-sr-jr"
                    id={services[6]._id}
                    size="2"
                    onBlur={updatePriceDb}
                  />
                </div>
                <div class="col-md-2">
                  <span class="pricing-type">9-HOLE</span>
                  <input
                    class="form-input pricing"
                    type="text"
                    placeholder={services[7].price}
                    name="end-pricing-9"
                    id={services[7]._id}
                    size="2"
                    onBlur={updatePriceDb}
                  />
                </div>
                <div class="col-md-2">
                  <span class="pricing-type">TWILIGHT</span>
                  <input
                    class="form-input pricing"
                    type="text"
                    placeholder={services[8].price}
                    name="end-pricing-twilight"
                    id={services[8]._id}
                    size="2"
                    onBlur={updatePriceDb}
                  />
                </div>
                <div class="col-md-2">
                  <span class="pricing-type">WALKING</span>
                  <input
                    class="form-input pricing"
                    type="text"
                    placeholder={services[9].price}
                    name="end-pricing-walking"
                    id={services[9]._id}
                    size="2"
                    onBlur={updatePriceDb}
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
                    placeholder={services[10].price}
                    name="misc-pricing-single"
                    id={services[10]._id}
                    size="2"
                    onBlur={updatePriceDb}
                  />
                </div>
                <div class="col-md-4">
                  <span class="pricing-type">REPLAY 9</span>
                  <input
                    class="form-input pricing"
                    type="text"
                    placeholder={services[11].price}
                    name="misc-pricing-9"
                    id={services[11]._id}
                    size="2"
                    onBlur={updatePriceDb}
                  />
                </div>
                <div class="col-md-4">
                  <span class="pricing-type">REPLAY 18</span>
                  <input
                    class="form-input pricing"
                    type="text"
                    placeholder={services[12].price}
                    name="misc-pricing-18"
                    id={services[12]._id}
                    size="2"
                    onBlur={updatePriceDb}
                  />
                </div>
              </div>
              <div class="row justify-content-around bottom-misc">
                <div class="col-md-4">
                  <span class="pricing-type">TWILIGHT TIME</span>
                  <input
                    class="form-input pricing"
                    type="text"
                    placeholder="XX"
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
                    placeholder={services[13].price}
                    name="misc-pricing-sm"
                    id={services[13]._id}
                    size="2"
                    onBlur={updatePriceDb}
                  />
                </div>
                <div class="col-md-4">
                  <span class="pricing-type">RANGE LG</span>
                  <input
                    class="form-input pricing"
                    type="text"
                    placeholder={services[14].price}
                    name="misc-pricing-lg"
                    id={services[14]._id}
                    size="2"
                    onBlur={updatePriceDb}
                  />
                </div>
              </div>
            </div>

            {/* // future development code commented out */}
            {/* <button class="btn btn-shadow pricing-button" type="submit">
              <a href="">UPDATE</a>
            </button> */}
          </form>
        </div>
      </section>
    );
  } else {
    return (
      <div className="admin-error">
        <h3>You are not authorized to view this page</h3>
      </div>
    );
  }
};

export default Admin;
