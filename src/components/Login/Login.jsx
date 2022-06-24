import React from 'react'
import { BsFillPersonFill, BsFillFileLockFill } from "react-icons/bs";
import { AiFillEyeInvisible } from "react-icons/ai";
export const Login = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="login">
          <div className="login-form">
            <div className="login-title">Sign In</div>
            <form action="#">
              <div className="login-input">
                <input type="text" placeholder="Email or Phone" required />
                <div className="login-icon">
                  <i>
                    <BsFillPersonFill />
                  </i>
                </div>
              </div>
              <div className="login-input">
                <input type="password" placeholder="Password" required />
                <div className="login-icon">
                  <i>
                    <BsFillFileLockFill />
                  </i>
                </div>
                <i className="login-hide">
                  <AiFillEyeInvisible />
                </i>
              </div>
              <div className="login-option">
                <div className="login-remember">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </div>
                <div className="login-forget">
                  <a href="#">Forgot password?</a>
                </div>
              </div>
              <div className="login-button">
                <input type="submit" value="Login" />
              </div>
              <div class="login-signup">
                Not a member? <a href="#">Signup now</a>
              </div>
            </form>
            <div class="login-social">
              <a href="#">
                {" "}
                <span>Facebook</span>
              </a>
              <a href="#">
                <span>Google</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
