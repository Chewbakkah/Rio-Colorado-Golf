import React from "react";

const Login = () => {
  return (
    <section className="login-container">
      <div className="login-card container">
        <div className="row justify-content-end">
          <div className="col-md-2">
            <a className="exit-icon" href="#">
              <i className="fa-solid fa-xmark"></i>
            </a>
          </div>
        </div>
        <h2>Rio Colorado</h2>
        <form>
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
          <div className="row justify-content-center">
            <div className="col-md-6 offset-md-3">
              <button className="btn-shadow login-button" type="submit">
                <a href="">LOGIN</a>
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="sign-up-card">
        <h2>NOT CURRENTLY A MEMBER?</h2>
        <button className="btn-shadow">
          <a href="/signup">SIGN UP</a>
        </button>
      </div>
    </section>
  );
};

export default Login;
