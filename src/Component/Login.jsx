import React from "react";
import "../css/login.css";

export default function Login() {
  return (
    <>
      <div className="login__container " id="login__container ">
        <div className="form-container sign-up-container">
          <form action="#">
            <h1 className="login__H1">Create Account</h1>
            <div className="social-container">
              <a href="www.googlo.com" className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="www.googlo.com" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="www.googlo.com" className="social">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your email for registration</span>
            <input id="signup_username" type="text" placeholder="Name" />
            <input id="signup_email" type="email" placeholder="Email" />
            <input
              id="signup_password"
              type="password"
              placeholder="Password"
            />

            <button
              id="signUpBtn"
              className="sign-upBTN login__Button"
              onClick={null}
            >
              Sign Up
            </button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#" method="post">
            <h1 className="login__H1">Sign in</h1>
            <div className="social-container">
              <a href="www.googlo.com" className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="www.googlo.com" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="www.googlo.com" className="social">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your account</span>
            <input id="signin_username" type="text" placeholder="Name" />
            <input id="signin_email" type="email" placeholder="Email" />
            <a href="www.googlo.com">Forgot your password?</a>
            <button
              id="signInBtn"
              className="sign-inBTN login__Button"
              onClick={null}
            >
              Sign In
            </button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className="login__H1">Welcome Back!</h1>
              <p className="login__pTag">
                To keep connected with us please login with your personal info
              </p>
              <button
                className="ghost login__Button"
                id="signIn"
                onClick={function removeOverlayPane() {
                  document
                    .getElementById("container")
                    .classList.remove("right-panel-active");
                }}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className="login__H1">Hello, Friend!</h1>
              <p className="login__pTag">
                Enter your personal details and start journey with us
              </p>
              <button
                className="ghost login__Button"
                id="signUp"
                onClick={function addOverlayPane() {
                  document
                    .getElementById("container")
                    .classList.add("right-panel-active");
                }}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
