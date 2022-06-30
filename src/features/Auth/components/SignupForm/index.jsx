import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import logo from "~/assets/logo/auth.png";
import { useNavigate } from "react-router-dom";
import { AiFillFacebook, AiFillGoogleSquare } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ErrorMessage } from "@hookform/error-message";
import Loading from "~/components/Loading";

const SignupForm = (props) => {
  const navigate = useNavigate();

  const schema = yup.object({
    username: yup
      .string()
      .required("Username is required")
      .max(8, "Username must be less than 8 characters"),
    email: yup
      .string()
      .required("Email is required")
      .email("Please enter a valid email address."),

    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(20, "Password must be less than 8 characters"),

    retypePassword: yup
      .string()
      .required("Please retype your Password.")
      .oneOf([yup.ref("password")], "Password does not match"),
  });
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSubmitValues = async (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(values);
    }
    reset()
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
          <div className="auth-dif">
            <div className="auth-gg">
              <span>
                <AiFillGoogleSquare />
              </span>
              <p>Log in with Google</p>
            </div>
            <div className="auth-fb">
              <span>
                <AiFillFacebook />
              </span>
              <p>Log in with Facebook</p>
            </div>
          </div>
          <div className="auth-or">
            <div className="auth-line"></div>
            <p>OR</p>
            <div className="auth-line"></div>
          </div>
          <form onSubmit={handleSubmit(handleSubmitValues)}>
            <div className="auth-form">
              <div className="auth-field">
                <input {...register("username")} type="text" placeholder="Username" />
                <label>Username</label>
                <p className="error">
                  <ErrorMessage errors={errors} name="username" />
                </p>
              </div>
              <div className="auth-field">
                <input {...register("email")} type="text" placeholder="Email" />
                <label>Email</label>
                <p className="error">
                  <ErrorMessage errors={errors} name="email" />
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
              <div className="auth-field">
                <input
                  {...register("retypePassword")}
                  type="password"
                  placeholder="Re-enter password"
                />
                <label>Re-enter password</label>
                <p className="error">
                  <ErrorMessage errors={errors} name="retypePassword" />
                </p>
              </div>
              <button
                className="auth-button"
                disabled={isSubmitting}
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
        <div className="auth-signup">
          <p>
            Have an account?<a className="link" onClick={() => navigate(-1)}> Sign in</a>
          </p>
        </div>
      </div>
      </div>
      </main>
  );
};
SignupForm.propTypes = {
  onSubmit: PropTypes.func,
};
export default SignupForm;
