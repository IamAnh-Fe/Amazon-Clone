import React from "react";
import SignupForm from "../../../Auth/components/SignupForm";
import {register} from '../../userSlice'
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

const SignUp = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const handleSubmit = async (values) => {
    try {
      const action = register(values)
      const resultAction = await dispatch(action)
      const user = unwrapResult(resultAction)
       navigate("/");
      console.log("new user:", user);
    } catch (error) {
      console.log('Failed to register:', error)
    }
    
  };
  return (
    <>
      <SignupForm onSubmit={handleSubmit} />
    </>
  );
};

export default SignUp;
