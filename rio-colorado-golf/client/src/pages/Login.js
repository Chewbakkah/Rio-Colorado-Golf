import React from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  return (
    <section className="sign-up-container">
      <div className="login-card">
        <div className="float-end d-inline p-2">
          <a className="exit-icon" onClick={() => history.goBack()}>
            <i className="fa-solid fa-xmark"></i>
          </a>
        </div>

        <h2 class="d-inline">Rio Colorado</h2>

        <form>
          <div className="form-row">
            <div>
              <span className="login-text">EMAIL:</span>
              <input
                className="form-input"
                type="text"
                placeholder="ENTER YOUR EMAIL ADDRESS"
                name="login-email"
                id="login-email"
                size="40"
              />
              <span className="login-text">PASSWORD:</span>
              <input
                className="form-input"
                type="text"
                placeholder="ENTER YOUR EMAIL PASSWORD"
                name="login-password"
                id="login-password"
                size="40"
              />

              <div class="sign-up-button">
                <div>
                  <button className="btn btn-shadow login-button" type="submit">
                    <a href="">LOGIN</a>
                  </button>
                </div>
              </div>
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
