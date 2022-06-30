import React from "react";
import SignupForm from "../../../Auth/components/SignupForm";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from '~/apis/authApi';
const SignUp = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const handleSubmit = async (values) => {
  registerUser(values, dispatch, navigate)
  };
  return (
    <>
      <SignupForm onSubmit={handleSubmit} />
    </>
  );
};

export default SignUp;
