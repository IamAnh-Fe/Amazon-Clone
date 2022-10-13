import React, { useState } from "react";
import authApi from "~/apis/authApi";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ErrorMessage } from "@hookform/error-message";

const initialState = {
  email: "",
  err: "",
  success: "",
};
const ForgotPassword = () => {
    const [data, setData] = useState(initialState);
    const { email, err, success } = data;
        const handleChangeInput = (e) => {
          const { name, value } = e.target;
          setData({ ...data, [name]: value, err: "", success: "" });
    };

    const schema = yup.object({
      email: yup
        .string()
        .required("Email is required")
        .email("Please enter a valid email address."),
    });

    const {
      register,
      reset,
      handleSubmit,
      formState: { errors, isSubmitting },
    } = useForm({
      resolver: yupResolver(schema),
    });
  
   
  
      const handleForgotPassword = async (email) => {
  try {
    const res = await authApi.postForgotPassword(email);

    return setData({ ...data, err: "", success: res.data.msg });

  } catch (err) {
    err.response.data.msg &&
    setData({ ...data, err: err.response.data.msg, success: "" });
  }
      };
return (
  <div className="auth">
    <div className="auth-box">
      <div className="auth-info">
        <h3>FORGOT YOUR PASSWORD?</h3>

        <form onSubmit={handleSubmit(handleForgotPassword)}>
          <div className="auth-form">
            <div className="auth-field">
              <input {...register("email")} type="text" placeholder="Email" />
              <label>Email</label>
              <p className="error">
                <ErrorMessage errors={errors} name="email" />
              </p>
            </div>

            <button
              className="auth-button"
              disabled={isSubmitting}
              type="submit"
            >
              Verify Your Password
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
);
};

export default ForgotPassword;
