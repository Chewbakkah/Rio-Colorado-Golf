import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const Login = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
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

      const token = loginResponse.data.login.token;
      Auth.login(token);
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

  const history = useHistory();
  return (
    <section className="sign-up-container">
      <div className="login-card">
        <div className="float-end d-inline p-2">
          <button className="exit-icon" onClick={() => history.goBack()}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <h2>Rio Colorado</h2>
        <form onSubmit={formSubmission}>
          <span className="login-text">EMAIL:</span>
          <input
            className="form-input"
            type="text"
            placeholder="ENTER YOUR EMAIL ADDRESS"
            name="email"
            id="login-email"
            onChange={stateChange}
            size="40"
          />
          <span className="login-text">PASSWORD:</span>
          <input
            className="form-input"
            type="password"
            placeholder="ENTER YOUR EMAIL PASSWORD"
            name="password"
            id="login-password"
            onChange={stateChange}
            size="40"
          />
          <div className="row justify-content-center">
            {error ? (
              <div>
                <p>The login information you have entered is incorrect.</p>
              </div>
            ) : null}
            <div className="sign-up-button">
              <button className="btn btn-shadow" type="submit">
                <span className="btn-text">LOGIN</span>
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="sign-up-card">
        <h2>NOT CURRENTLY A MEMBER?</h2>

        <button className="btn btn-shadow">
          <a href="/signup">SIGN UP</a>
        </button>
      </div>
    </section>
  );
};

export default Login;
