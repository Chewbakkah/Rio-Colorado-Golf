import React from "react";

const Signup = () => {
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
        <form>
          <div class="form-row">
            <div class="col-7">
              <span class="login-text">FIRST NAME:</span>
              <input
                class="form-input"
                type="text"
                placeholder="ENTER YOUR FIRST NAME"
                name="signup-first-name"
                id="signup-first-name"
                size="100%"
              />
              <span class="login-text">LAST NAME:</span>
              <input
                class="form-input"
                type="text"
                placeholder="ENTER YOUR LAST NAME"
                name="signup-last-name"
                id="signup-last-name"
                size="40"
              />
              <span class="login-text">EMAIL:</span>
              <input
                class="form-input"
                type="text"
                placeholder="ENTER YOUR EMAIL ADDRESS"
                name="signup-email"
                id="signup-email"
                size="40"
              />
              <span class="login-text">PASSWORD:</span>
              <input
                class="form-input"
                type="text"
                placeholder="ENTER YOUR EMAIL PASSWORD"
                name="signup-password"
                id="signup-password"
                size="40"
              />
              <span class="login-text">CONFIRM PASSWORD:</span>
              <input
                class="form-input"
                type="text"
                placeholder="ENTER YOUR EMAIL PASSWORD"
                name="confirm-signup-password"
                id="confirm-signup-password"
                size="40"
              />
              <div class="row justify-content-center">
                <div class="col-md-6 offset-md-3">
                  <button class="btn btn-shadow login-button" type="submit">
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
