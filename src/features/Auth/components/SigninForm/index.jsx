import React, {useState} from "react";
import PropTypes from "prop-types";
import logo from "~/assets/logo/adminlogo.png";
import { Link } from "react-router-dom";
import authApi from "~/apis/authApi";
import { AiFillFacebook, AiFillGoogleSquare } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ErrorMessage } from "@hookform/error-message";
import Loading from "~/components/Loading";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";

const initialState = {
  email: "",
  password: "",
  err: "",
  success: "",
};

const SigninForm = (props) => {
      const [user, setUser] = useState(initialState);
    const { email, password, err, success } = user;
  let navigate = useNavigate();

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
   const responseGoogle = async (response) => {
     try {
       const res = await authApi.loginWithGoogle({
         tokenId: response.tokenId,
       });

       setUser({ ...user, error: "", success: res.data.msg });

       navigate(`/`);
     } catch (err) {
       err.response.data.msg &&
         setUser({ ...user, err: err.response.data.msg, success: "" });
     }
  };
  
  const responseFacebook = (response) => {
    console.log(response);
  };
 

  return (
    <main className="background">
      <div className="auth">
        <div className="auth-box">
          <div className="auth-info">
            <div>
              {isSubmitting ? <Loading /> : ""}

              <Link to="/">
                <img className="auth-logo" src={logo} alt="" />
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
            <div className="auth-or">
              <div className="auth-line"></div>
              <p>OR</p>
              <div className="auth-line"></div>
            </div>
            <div className="auth-dif">
              <div className="auth-gg">
                {/* <span>
                <AiFillGoogleSquare />
              </span>
              <p>Log in with Google</p> */}
                <GoogleLogin
                  clientId="86586470178-ng16g3jm7ncpo2tvq6m3bdojmnetns84.apps.googleusercontent.com"
                  buttonText="Login with google"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={"single_host_origin"}
                />
              </div>
              <div className="auth-fb">
                {/* <span>
                  <AiFillFacebook />
                </span>
                <p>Log in with Facebook</p> */}
                <FacebookLogin
                  appId="1088597931155576"
                  autoLoad={true}
                  fields="name,email,picture"
                  onClick={componentClicked}
                  callback={responseFacebook}
                />
              </div>
              <div className="auth-forgot">
                <Link to="forgot-password">Forgot password?</Link>
              </div>
            </div>
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
