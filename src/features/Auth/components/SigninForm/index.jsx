import React, {useEffect} from "react";
import PropTypes from "prop-types";
import logo from "~/assets/logo/adminlogo.png";
import { Link } from "react-router-dom";
// import { AiFillFacebook, AiFillGoogleSquare } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ErrorMessage } from "@hookform/error-message";
import Loading from "~/components/Loading";
// import { GoogleLogin } from '@react-oauth/google';
// import jwt_decode from "jwt-decode"
const SigninForm = (props) => {

  const schema = yup.object({
    username: yup
      .string()
      .required("Username is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSignInSubmit = (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      onSubmit(values);
    }
    reset()
  };
  
 

  return (
    <main className="background">
      <div className="auth">
        <div className="auth-box">
          <div className="auth-info">
            <div className="auth-logo">
              {isSubmitting ? <Loading /> : ""}

              <Link to="/">
                <img  src={logo} alt="" />
              </Link>
            </div>
            <form onSubmit={handleSubmit(handleSignInSubmit)}>
              <div className="auth-form">
                <div className="auth-field">
                  <input
                    {...register("username")}
                    type="text"
                    placeholder="Username"
                  />
                  <label>Username</label>
                  <p className="error">
                    <ErrorMessage errors={errors} name="username" />
                  </p>
                </div>
                <div className="auth-field">
                  <input
                    {...register("password")}
                    type="password"
                    placeholder="Password"
                  />
                  <label>Password</label>
                  <p className="error">
                    <ErrorMessage errors={errors} name="password" />
                  </p>
                </div>
                <button className="auth-button" variant="success" type="submit">
                  Log In
                </button>
              </div>
            </form>
            {/* <div className="auth-or">
              <div className="auth-line"></div>
              <p>OR</p>
              <div className="auth-line"></div>
            </div>
            <div className="auth-dif">
              <div className="auth-gg"  >
             <GoogleLogin
  onSuccess={credentialResponse => {
    console.log('y',credentialResponse);
    const decoded = jwt_decode(credentialResponse.credential)
        console.log("decoded",decoded);

  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>;
              </div>
              <div className="auth-fb" >
                <span>
                  <AiFillFacebook />
                </span>
                <p>Log in with Facebook</p>
              </div>
              <div className="auth-forgot">
                <Link to="forgot-password">Forgot password?</Link>
              </div>
            </div> */}
          </div>
          <div className="auth-signup">
            <p>
              Don't have an account?{" "}
              <a className="link">
                <Link to="sign-up">Sign up</Link>
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};
SigninForm.propTypes = {
  onSubmit: PropTypes.func,
};
export default SigninForm;
