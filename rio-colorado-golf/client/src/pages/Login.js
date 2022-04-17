import React from "react";

const Login = () => {
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
        <form>
          <span class="login-text">EMAIL:</span>
          <input
            class="form-input"
            type="text"
            placeholder="ENTER YOUR EMAIL ADDRESS"
            name="login-email"
            id="login-email"
            size="40"
          />
          <span class="login-text">PASSWORD:</span>
          <input
            class="form-input"
            type="text"
            placeholder="ENTER YOUR EMAIL PASSWORD"
            name="login-password"
            id="login-password"
            size="40"
          />
          <div class="row justify-content-center">
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
