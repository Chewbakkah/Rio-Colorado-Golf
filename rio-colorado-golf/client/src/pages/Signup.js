import React from "react";

const Signup = () => {
  return (
    <section className="sign-up-container">
      <div className="login-card container row">
        <div className="row justify-content-end">
          <div className="col-md-2">
            <a className="exit-icon" href="#">
              <i className="fa-solid fa-xmark"></i>
            </a>
          </div>
        </div>
        <h2>Rio Colorado</h2>
        <form>
          <div className="form-row">
            <div className="col-7">
              <span className="login-text">FIRST NAME:</span>
              <input
                className="form-input"
                type="text"
                placeholder="ENTER YOUR FIRST NAME"
                name="signup-first-name"
                id="signup-first-name"
                size="100%"
              />
              <span className="login-text">LAST NAME:</span>
              <input
                className="form-input"
                type="text"
                placeholder="ENTER YOUR LAST NAME"
                name="signup-last-name"
                id="signup-last-name"
                size="40"
              />
              <span className="login-text">EMAIL:</span>
              <input
                className="form-input"
                type="text"
                placeholder="ENTER YOUR EMAIL ADDRESS"
                name="signup-email"
                id="signup-email"
                size="40"
              />
              <span className="login-text">PASSWORD:</span>
              <input
                className="form-input"
                type="text"
                placeholder="ENTER YOUR EMAIL PASSWORD"
                name="signup-password"
                id="signup-password"
                size="40"
              />
              <span className="login-text">CONFIRM PASSWORD:</span>
              <input
                className="form-input"
                type="text"
                placeholder="ENTER YOUR EMAIL PASSWORD"
                name="confirm-signup-password"
                id="confirm-signup-password"
                size="40"
              />
              <div className="row justify-content-center">
                <div className="col-md-6 offset-md-3">
                  <button className="btn btn-shadow login-button" type="submit">
                    <a href="">LOGIN</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Signup;