import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const Login = () => {
  const [inputState, setInputState] = useState({ email: "", password: "" });

  const [login, { error }] = useMutation(LOGIN_USER);

  const formSubmission = async (event) => {
    event.preventDefault();
    try {
      const loginResponse = await login({
        variables: {
          email: inputState.email,
          password: inputState.password,
        },
      });
      console.log(loginResponse);
      // const token = loginResponse.data.login.token;
      // Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const stateChange = (event) => {
    const { name, value } = event.target;
    setInputState({
      ...inputState,
      [name]: value,
    });
  };

  return (
    <section class="login-container">
      <div class="login-card container">
        <div class="row justify-content-end">
          <div class="col-md-2">
            <a class="exit-icon" href="#">
              <i class="fa-solid fa-xmark"></i>
            </a>
          </div>
        </div>
        <h2>Rio Colorado</h2>
        <form onSubmit={formSubmission}>
          <span class="login-text">EMAIL:</span>
          <input
            class="form-input"
            type="text"
            placeholder="ENTER YOUR EMAIL ADDRESS"
            name="login-email"
            id="login-email"
            onChange={stateChange}
            size="40"
          />
          <span class="login-text">PASSWORD:</span>
          <input
            class="form-input"
            type="text"
            placeholder="ENTER YOUR EMAIL PASSWORD"
            name="login-password"
            id="login-password"
            onChange={stateChange}
            size="40"
          />
          <div class="row justify-content-center">
            {error ? (
              <div>
                <p>The login information you have entered is incorrect.</p>
              </div>
            ) : null}
            <div class="col-md-6 offset-md-3">
              <button class="btn-shadow login-button" type="submit">
                <a href="">LOGIN</a>
              </button>
            </div>
          </div>
        </form>
      </div>
      <div class="sign-up-card">
        <h2>NOT CURRENTLY A MEMBER?</h2>
        <button class="btn-shadow">
          <a href="/signup">SIGN UP</a>
        </button>
      </div>
    </section>
  );
};

export default Login;
