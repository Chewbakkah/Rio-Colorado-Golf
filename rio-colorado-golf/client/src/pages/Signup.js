import React, { useState, useEffect } from "react";

import { useHistory, useLocation } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";

import Auth from "../utils/auth";

const Signup = () => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [confirmPassState, setConfirmPassState] = useState({
    confirmPassword: "",
  });
  const [addUser, { error }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleConfPass = (event) => {
    const { name, value } = event.target;

    setConfirmPassState({
      ...confirmPassState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // if (formState.password == confirmPassState) {
    try {
      const { data } = await addUser({
        variables: { ...formState },
      });
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
    // } else {
    //   alert("The passwords you have entered do not match");
    // }
  };

  const history = useHistory();

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <section className="sign-up-container">
      <div className="login-card">
        <div className="float-end d-inline p-2">
          <a className="exit-icon" onClick={() => history.goBack()}>
            <i className="fa-solid fa-xmark"></i>
          </a>
        </div>

        <h2 class="d-inline">Rio Colorado</h2>

        <form onSubmit={handleFormSubmit}>
          <div className="form-row">
            <div>
              <span className="login-text">FIRST NAME:</span>
              <input
                className="form-input "
                type="text"
                placeholder="ENTER YOUR FIRST NAME"
                name="firstName"
                id="signup-first-name"
                size="100%"
                onChange={handleChange}
              />
              <span className="login-text">LAST NAME:</span>
              <input
                className="form-input"
                type="text"
                placeholder="ENTER YOUR LAST NAME"
                name="lastName"
                id="signup-last-name"
                size="40"
                onChange={handleChange}
              />
              <span className="login-text">EMAIL:</span>
              <input
                className="form-input"
                type="text"
                placeholder="ENTER YOUR EMAIL ADDRESS"
                name="email"
                id="signup-email"
                size="40"
                onChange={handleChange}
              />
              <span className="login-text">PASSWORD:</span>
              <input
                className="form-input"
                type="text"
                placeholder="ENTER YOUR EMAIL PASSWORD"
                name="password"
                id="signup-password"
                size="40"
                onChange={handleChange}
              />

{/* // future development code commented out */}
              {/* <span class="login-text">CONFIRM PASSWORD:</span>
              <input
                className="form-input"
                type="text"
                placeholder="ENTER YOUR EMAIL PASSWORD"
                name="confirmPassword"
                id="confirm-signup-password"
                size="40"
              />  */}
              <div className="row justify-content-center">
                <div className="sign-up-button">
                  <button className="btn btn-shadow login-button" type="submit">
                    <span class="btn-text">LOGIN</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
        {error && <div>Signup failed</div>}
      </div>
    </section>
  );
};

export default Signup;
