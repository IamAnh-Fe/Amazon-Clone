import React, { useState } from "react";
import authApi from "~/apis/authApi";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ErrorMessage } from "@hookform/error-message";

const ResetPassword = () => {
    const { token } = useParams();

   const schema = yup.object({
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
  
    const handleResetPassword = async (password) => {
      try {
        const res = await authApi.postResetPassword(password, {
          headers: { Authorization: token }
        });

        return setData({ ...data, err: "", success: res.data.msg });
        toast.success("success");
        
      } catch (err) {
        err.response.data.msg &&
          setData({ ...data, err: err.response.data.msg, success: "" });
        toast.error("error");
      }
    };
  return (
    <div className="auth">
      <div className="auth-box">
        <div className="auth-info">
          <h3>RESET YOUR PASSWORD?</h3>
          <form onSubmit={handleSubmit(handleResetPassword)}>
            <div className="auth-form">
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
      </div>
    </div>
  );
};

export default ResetPassword;
