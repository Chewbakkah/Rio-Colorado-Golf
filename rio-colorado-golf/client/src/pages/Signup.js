import React, { useState } from "react";
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

  return (
    <section class="sign-up-container">
      <div class="login-card container row">
        <div class="row justify-content-end">
          <div class="col-md-2">
            <a class="exit-icon" href="#">
              <i class="fa-solid fa-xmark"></i>
            </a>
          </div>
        </div>
        <h2>Rio Colorado</h2>
        <form onSubmit={handleFormSubmit}>
          <div class="form-row">
            <div class="col-7">
              <span class="login-text">FIRST NAME:</span>
              <input
                class="form-input"
                type="text"
                placeholder="ENTER YOUR FIRST NAME"
                name="firstName"
                id="signup-first-name"
                size="100%"
                onChange={handleChange}
              />
              <span class="login-text">LAST NAME:</span>
              <input
                class="form-input"
                type="text"
                placeholder="ENTER YOUR LAST NAME"
                name="lastName"
                id="signup-last-name"
                size="40"
                onChange={handleChange}
              />
              <span class="login-text">EMAIL:</span>
              <input
                class="form-input"
                type="text"
                placeholder="ENTER YOUR EMAIL ADDRESS"
                name="email"
                id="signup-email"
                size="40"
                onChange={handleChange}
              />
              <span class="login-text">PASSWORD:</span>
              <input
                class="form-input"
                type="text"
                placeholder="ENTER YOUR EMAIL PASSWORD"
                name="password"
                id="signup-password"
                size="40"
                onChange={handleChange}
              />
              {/* <span class="login-text">CONFIRM PASSWORD:</span>
              <input
                class="form-input"
                type="text"
                placeholder="ENTER YOUR EMAIL PASSWORD"
                name="confirmPassword"
                id="confirm-signup-password"
                size="40"
                onChange={handleConfPass}
              /> */}
              <div class="row justify-content-center">
                <div class="col-md-6 offset-md-3">
                  <button class="btn btn-shadow login-button" type="submit">
                    LOGIN
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
